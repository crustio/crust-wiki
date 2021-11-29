---
id: buildFileStoringDemo
title: Store file with Crust Storage API
sidebar_label: Store file with Crust Storage API
---

This doc contains a code sample to demonstrate how to upload a file to IPFS, and place a storage order to get the file stored in Crust Network.
After that, the file can be retrieved via standard IPFS interface and gateway from anywhere, and it'll be guaranteed stored by Crust's 7000+ IPFS nodes around the world.
This scenario is simple but generic. It can be widely applied in Website/DApp hosting, NFT metadata storing, socialFi, gamingFi and decentralized cloud storage, etc.

## Overview

### 1. Storage process

1. Put file to IPFS (`local IPFS or IPFS gateway`), get `CID` and `FileSize` back
2. Send `place storage order` transaction to Crust with `CID` and `FileSize`
3. Query order status by `CID`

### 2. Dependencies

The code sample mainly depends on the following libraries:

- [@crustio/type-definitions](https://github.com/crustio/crust.js) Custom data type, used to adapt to Crust network
- [@polkadot/api](https://github.com/polkadot-js/api) The polkadot api library provides a Promise-style interface for performing related operations on the Crust chain
- [ipfs-http-client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client) ipfs http client library

## Let's Rock 🤟🏻

### 1. Upload file to IPFS

First, you need to put your file into IPFS, there's 2 ways to upload file to IPFS: local IPFS node or remote IPFS gateway:

- With local IPFS node

```typescript
import { create } from 'ipfs-http-client'

async function addFile(ipfs: IPFS.IPFS, fileContent: any) {
    // 1. Create IPFS instant
    const ipfs = create({
        url: 'http://localhost:5001'
    });

    // 2. Add file to ipfs
    const { cid } = await ipfs.add(fileContent);

    // 3. Get file status from ipfs
    const fileStat = await ipfs.files.stat("/ipfs/" + cid.path);

    return {
        cid: cid.path,
        size: fileStat.cumulativeSiz
    };
}
```

- With [IPFS W3Authed Gateway](https://docs.ipfs.io/concepts/ipfs-gateway/#authenticated-gateways)

> You can find more `ipfsW3GW` endpoints on [LINK](https://github.com/crustio/ipfsscan/blob/main/lib/constans.ts#L29).
> You can also find more `authHeader` web3 supports on [LINK](https://github.com/RoyTimes/crust-workshop/tree/master/src), the following exmaple just takes ethereum as example.

```typescript
import { create } from 'ipfs-http-client'
import { ethers } from 'ethers';

async function addFile(ipfs: IPFS.IPFS, fileContent: any) {
    // 0. Construct web3 authed header
    // Now support: ethereum-series, polkadot-series, solana, elrond, flow, near, ...
    // Let's take ethereum as example
    const pair = ethers.Wallet.createRandom();
    const sig = await pair.signMessage(pair.address);
    const authHeaderRaw = `eth-${pair.address}:${sig}`;
    const authHeader = Buffer.from(authHeaderRaw).toString('base64');
    const ipfsW3GW = 'https://crustipfs.xyz';

    // 1. Create IPFS instant
    const ipfs = create({
        url: `${ipfsW3GW}/api/v0`,
        headers: {
            authorization: `Basic ${authHeader}`
        }
    });

    // 2. Add file to ipfs
    const { cid } = await ipfs.add(fileContent);

    // 3. Get file status from ipfs
    const fileStat = await ipfs.files.stat("/ipfs/" + cid.path);

    return {
        cid: cid.path,
        size: fileStat.cumulativeSize
    };
}
```

### 2. Place storage order

Next, we need to send a transaction named `Place Storage Order` on Crust chain, this transaction will dispatch your storage requirement to each Crust IPFS nodes through blockchain. Then the IPFS nodes will start pulling your file with IPFS protocol.

> You can find more `crustChainEndpoint` on [LINK](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/endpoints/production.ts#L9).
> You can create your own account(`seeds`) on [LINK](https://wiki.crust.network/docs/en/crustAccount).

```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundleForPolkadot, crustTypes } from '@crustio/type-definitions';
import { Keyring } from '@polkadot/keyring';
import { KeyringPair } from '@polkadot/keyring/types';

// Create global chain instance
const crustChainEndpoint = 'wss://rpc.crust.network';
const api = new ApiPromise({
    provider: new WsProvider(crustChainEndpoint),
    typesBundle: typesBundleForPolkadot,
});

async function placeStorageOrder() {
    // 1. Construct place-storage-order tx
    const fileCid = 'Qm123'; // IPFS CID, take `Qm123` as example
    const fileSize = 2 * 1024 * 1024 * 1024; // Let's say 2 gb(in byte)
    const tips = 0;
    const memo = '';
    const tx = api.tx.market.placeStorageOrder(fileCid, fileSize, tips, memo);

    // 2. Load seeds(account)
    const seeds = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx';
    const kr = new Keyring({ type: 'sr25519' });
    const krp = kr.addFromUri(seeds);

    // 3. Send transaction
    await api.isReadyOrError;
    const unsub = await tx.signAndSend(krp, ({events = [], status}) => {
        console.log(`💸 Tx status: ${status.type}, nonce: ${tx.nonce}.`);

        if (status.isInBlock) {
            events.forEach(({event: {method, section}}) => {
                if (method === 'ExtrinsicSuccess') {
                    console.log(`✅  Place storage order success!`);
                    unsub();
                }
            });
        } else {
            // Pass it
        }
    });
}
```

### 3. Query order status

Then, you can query the order `status{replica_count, storage_duration, ...}` by calling on-chain status.

```typescript
async function getOrderState(cid: string) {
    await api.isReadyOrError;
    return await api.query.market.files(cid);
}
```

And it'll return:

```json
{
    "file_size": 23710,
    "spower": 24895,
    "expired_at": 2594488, // Storage duration
    "calculated_at": 2488,
    "amount": "545.3730 nCRU",
    "prepaid": 0,
    "reported_replica_count": 1, // Replica count
    "replicas": [{
        "who": "cTHATJrSgZM2haKfn5e47NSP5Y5sqSCCToxrShtVifD2Nfxv5",
        "valid_at": 2140,
        "anchor": "0xd9aa29dda8ade9718b38681adaf6f84126531246b40a56c02eff8950bb9a78b7c459721ce976c5c0c9cd4c743cae107e25adc3a85ed7f401c8dde509d96dcba0",
        "is_reported": true,
        "created_at": 2140
    }] // Who stores the file
}
```

## Resources

- [Code Sample](https://github.com/crustio/crust-demo/tree/main/store-file)
- [IPFS HTTP Client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client)
- [Crust Account](https://wiki.crust.network/docs/en/crustAccount)

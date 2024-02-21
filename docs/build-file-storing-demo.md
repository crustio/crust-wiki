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

> If you want to learn how to upload **FOLDERS/FILES** into IPFS, please refer this [STEP](https://wiki.crust.network/docs/en/buildFileStoringWithGWDemo#1-upload-files-to-ipfs-gateway)

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

> You can find more `ipfsW3GW` endpoints on [LINK](https://github.com/crustio/ipfsscan/blob/main/lib/constans.ts#L29). Greatly improve the speed of `ipfsW3GW` by configuring [Meson CDN](https://docs.meson.network/mcdn-101.html).

> You can also find more `authHeader` web3 supports on [LINK](https://github.com/RoyTimes/crust-workshop/tree/master/src), the following example just takes ethereum as example.

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

### 2. Upload folder

> For folder upload, refer to this [link](https://www.npmjs.com/package/ipfs-http-client) to build. It is recommended to use this gateway: `https://gw.crustfiles.app`, or build a local IPFS node with a good network for uploading. At the same time, during the upload process, you can record the cids value of the file in the folder or call the IPFS command to obtain the cids value contained in the folder after the upload is completed. The code is as follows:

```typescript
import { create } from 'ipfs-http-client'

async function addFile(ipfs: IPFS.IPFS, rootCid: any) {
    ...

    // Get links from ipfs
    for await (const link of this.ipfs.ls(rootCid)) {
		console.log(link);
    }
	...
}
```

In addition, after `Place storage order`, you can use the folder-analyzer service to obtain directly, see the 4 section for details.

### 3. Place storage order

Next, we need to send a transaction named `Place Storage Order` on Crust chain, this transaction will dispatch your storage requirement to each Crust IPFS nodes through blockchain. Then the IPFS nodes will start pulling your file with IPFS protocol.

> You can find more `crustChainEndpoint` on [LINK](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/endpoints/production.ts#L9).

> You can create your own account(`seeds`) on [LINK](https://wiki.crust.network/docs/en/crustAccount).

> `If it's a folder, please set memo = 'folder'`

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
    // If it's a folder, please set memo = 'folder'
    const memo = '';
    const tx = api.tx.market.placeStorageOrder(fileCid, fileSize, tips, memo);

    // 2. Load seeds(account)
    const seeds = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx';
    const kr = new Keyring({ type: 'sr25519' });
    const krp = kr.addFromUri(seeds);

    // 3. Send transaction
    await api.isReadyOrError;
    return new Promise((resolve, reject) => {
        tx.signAndSend(krp, ({events = [], status}) => {
            console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

            if (status.isInBlock) {
                events.forEach(({event: {method, section}}) => {
                    if (method === 'ExtrinsicSuccess') {
                        console.log(`✅  Place storage order success!`);
                        resolve(true);
                    }
                });
            } else {
                // Pass it
            }
        }).catch(e => {
            reject(e);
        })
    });
}
```

### 4. Folder information

If you store a folder in Crust. Through the [folder analyzer service](https://github.com/crustio/folder-analyzer), you can obtain relevant information about the folder you placed the order in. There is a certain delay in updating this information, which is determined by the network environment.

#### 4.1 Get the cids value contained in the folder

- request
```shell
curl --request GET 'https://folderanalyzer.crustapps.net/api/v1/cids?root=QmQZYQaq48KkY7nWbpfWh8kyEh21yehwPk5xoofnLFVGtV'
```
- result:

```json
[
    "QmcWkLckbnxFh3rAHqPFgAkCdTuHQjkDJwdNnMZEMmKWNP",
    "QmbFEPbHcCVT5XHio78GfQBxT1WJhYB4dY9Bujbcjw9HEG",
    "QmZPVr2ZWX96uA7cP6m7bAkJbKKSpu5Rd4wgb6EWtjcdFp"
]
```

#### 4.2 Get the root of the folder to which the cid belongs

- request
```shell
curl --request GET 'https://folderanalyzer.crustapps.net/api/v1/root?cid=QmZPVr2ZWX96uA7cP6m7bAkJbKKSpu5Rd4wgb6EWtjcdFp'
```

- result:
```json
QmQZYQaq48KkY7nWbpfWh8kyEh21yehwPk5xoofnLFVGtV
```

Additional information such as the number of copies can be obtained on the crust chain by using the root cid of the folder

### 5. Query order status

Then, you can query the order `status{replica_count, storage_duration, ...}` by calling on-chain status.

```typescript
async function getOrderState(cid: string) {
    await api.isReadyOrError;
    return await api.query.market.filesV2(cid);
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
    "remaining_paid_count": 3,
    "replicas": {
        "cTHATJrSgZM2haKfn5e47NSP5Y5sqSCCToxrShtVifD2Nfxv5": {
            "who": "cTHATJrSgZM2haKfn5e47NSP5Y5sqSCCToxrShtVifD2Nfxv5",
            "valid_at": 2140,
            "anchor": "0xd9aa29dda8ade9718b38681adaf6f84126531246b40a56c02eff8950bb9a78b7c459721ce976c5c0c9cd4c743cae107e25adc3a85ed7f401c8dde509d96dcba0",
            "is_reported": true,
            "created_at": 2140
        }
    } // Who stores the file
}
```

### 6. Add file assurance

The default storage time for a single transaction(order) is 6 months. If you want to extend the storage duration, Crust provides an assurance pool for you to customize the file's storage time, it allows you to put some tokens and will automatically extend the file's storage time.

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

async function addPrepaid(fileCid: string, amount: number) {
    // 1. Construct add-prepaid tx
    const tx = api.tx.market.addPrepaid(fileCid, amount);

    // 2. Load seeds(account)
    const crustSeeds = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx';
    const kr = new Keyring({ type: 'sr25519' });
    const krp = kr.addFromUri(crustSeeds);

    // 3. Send transaction
    await api.isReadyOrError;
    return new Promise((resolve, reject) => {
        tx.signAndSend(krp, ({events = [], status}) => {
            console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

            if (status.isInBlock) {
                events.forEach(({event: {method, section}}) => {
                    if (method === 'ExtrinsicSuccess') {
                        console.log(`✅  Add prepaid success!`);
                        resolve(true);
                    }
                });
            } else {
                // Pass it
            }
        }).catch(e => {
            reject(e);
        })
    });
}
```

## Resources

- [Code Sample](https://github.com/crustio/crust-demo/tree/main/store-file)
- [IPFS HTTP Client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client)
- [Crust Account](https://wiki.crust.network/docs/en/crustAccount)

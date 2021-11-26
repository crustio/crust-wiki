---
id: buildFileStoringDemo
title: File Storing Code with IPFS Sample
sidebar_label: File Storing Code with IPFS Sample
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

- With IPFS W3Authed gateway

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

    // 1. Create IPFS instant
    const ipfs = create({
        url: 'http://localhost:5001',
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

```typescript
async function placeStorageOrder() {

}
```

### 4. Get order status

In general, the order stauts is updated every half an hour. You can query the status of the order through `api.query.market.files()`

```typescript
/**
 * Get on-chain order information about files
 * @param api chain instance
 * @param cid the cid of file
 * @return order state
 */
async function getOrderState(api: ApiPromise, cid: string) {
    await api.isReadyOrError;
    return await api.query.market.files(cid);
}
```

If the order does not exist, it will return `none`. If the order exists, it will return the following data structure, where `expired_on` is compared with the current block height to determine whether it has expired. If `reported_replica_count` is 0, the order is still in progress, if it is greater than 0 , and if it has not expired, the order is successful.

```json
{
    file_size: 23,710,
    spower: 24,895,
    expired_at: 2,594,488,
    calculated_at: 2,488,
    amount: 545.3730 nCRU,
    prepaid: 0,
    reported_replica_count: 1,
    replicas: [
    {
        who: cTHATJrSgZM2haKfn5e47NSP5Y5sqSCCToxrShtVifD2Nfxv5,
        valid_at: 2,140,
        anchor: 0xd9aa29dda8ade9718b38681adaf6f84126531246b40a56c02eff8950bb9a78b7c459721ce976c5c0c9cd4c743cae107e25adc3a85ed7f401c8dde509d96dcba0,
        is_reported: true,
        created_at: 2,140
    }
    ]
}
```

## Resources

- [Code Demo](https://github.com/crustio/crust-demo)

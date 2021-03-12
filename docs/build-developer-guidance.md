---
id: buildDevGuidance
title: Building Applications
sidebar_label: Building Applications
---

This doc contains a code sample to demonstrate how to upload a file to IPFS, and place a storage order to get the file stored in Crust Network. After that, the file can be retrieved via standard IPFS interface and gateway from anywhere. This scenario is simple but generic. It can be widely applied in WebSite/DApp frontend hosting, content/media delivery, cloud storage, etc.

The code sample is on GitHub repo: https://github.com/crustio/crust-demo

More details coming soon…

## 1 Overview

### 1.1 Storage process

Using IPFS and Crust Network, developers can follow below process to upload, store and distribute files：

- Upload the file to IPFS, and get the file `CID` (a unique identifier generated based on the content of each file) and file `Size` (the actual size of the file stored in IPFS, which is different from the original file size)
- Use the `CID` and `Size` of the file to place a storage order on the Crust chain. The given size should be no smaller than the actual file size.
- Obtain and monitor order status

The process should be executed sequentially to ensure that the files are stored smoothly by the Crust network。

### 1.2 Dependencies

The code sample mainly depends on the following libraries:

- [@crustio/type-definitions](https://github.com/crustio/crust.js) Custom data type, used to adapt to Crust network
- [@polkadot/api](https://github.com/polkadot-js/api/blob/master/packages/api) The polkadot api library provides a Promise-style interface for performing related operations on the Crust chain
- [ipfs-core](https://github.com/ipfs/js-ipfs) ipfs library, contains all the functions of ipfs

## 2 Description
### 2.1 Upload files to IPFS

Before interacting with the IPFS network, an instance of `ipfs` needs to be instantiated. The code is as follows:

```typescript
import IPFS from 'ipfs-core';

// Start local ipfs, ipfs base folder will be $USER/.jsipfs
const ipfs = await IPFS.create()
```

Then you can use `ipfs.add(fileContent, options)` to upload a file into IPFS, `fileContent` can be any of the following types:` Uint8Array | Blob | String | Iterable<Uint8Array> | Iterable<number> | AsyncIterable<Uint8Array> | ReadableStream<Uint8Array>`. The following code will return two values, namely `CID` and `Size`

```typescript
async function addFile(ipfs: IPFS.IPFS, fileContent: any) {
    // Add file to ipfs
    const cid = await ipfs.add(
        fileContent,
        {
            progress: (prog) => console.log(`Add received: ${prog}`)
        }
    );

    // Get file status from ipfs
    const fileStat = await ipfs.files.stat("/ipfs/" + cid.path);

    return {
        cid: cid.path,
        // Needs to be cumulativeSize
        size: fileStat.cumulativeSize
    };
}
```

### 2.2 Initialize API instance and on-chain identity

Here you need to initialize an instance of `api` to interact with the Crust network. The code is as follows:

```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundleForPolkadot, crustTypes } from '@crustio/type-definitions';

// WS address of Crust chain
const chain_ws_url = "ws://127.0.0.1:9933";

// Connect to chain
const api = new ApiPromise({
    provider: new WsProvider(chain_ws_url),
    typesBundle: typesBundleForPolkadot,
});
```

Also, you need to get the identity `krp` on the chain to send the order transaction. It can be generated from the seeds of the account (please ensure that the account has enough CRUs for sending storage orders):

```typescript
/* eslint-disable node/no-extraneous-import */
import {Keyring} from '@polkadot/keyring';
import {KeyringPair} from '@polkadot/keyring/types';

// Seeds of account
const seeds = "echo xxxx soccer xxxx catch xxxx stone xxxx pumpkin nest merge xxxx";

const kr = new Keyring({
    type: 'sr25519',
});

// krp will be used in sending transaction
const krp = kr.addFromUri(seeds);
```

### 2.3 Place storage order

You can use the following code to determine whether the chain is synchronized to the latest block:

```typescript
/**
  * Used to determine whether the chain is synchronizing
  * @param api chain instance
  * @returns true/false
  */
async function isSyncing(api: ApiPromise) {
    const health = await api.rpc.system.health();
    let res = health.isSyncing.isTrue;

    if (!res) {
        const h_before = await api.rpc.chain.getHeader();
        await delay(3000);
        const h_after = await api.rpc.chain.getHeader();
        if (h_before.number.toNumber() + 1 < h_after.number.toNumber()) {
            res = true;
        }
    }

    return res;
}
```

After waiting for the chain to synchronize to the latest block, you can interact with the chain to place a storage order. Note that the `fileSize` must be the `cumulativeSize` obtained in the previous step. If it is smaller than the `cumulativeSize`, the order will fail:

```typescript
/**
 * Place stroage order
 * @param api chain instance
 * @param fileCID the cid of file
 * @param fileSize the size of file in ipfs
 * @param tip tip for this order
 * @return true/false
 */
async function placeOrder(api: ApiPromise, krp: KeyringPair, fileCID: string, fileSize: number, tip: number) {
    // Determine whether to connect to the chain
    await api.isReadyOrError;
    // Generate transaction
    const pso = api.tx.market.placeStorageOrder(fileCID, fileSize, tip, false);
    // Send transaction, for 'sendTx()' please refer https://github.com/crustio/crust-demo/blob/main/sample-store-demo/src/utils.ts
    const txRes = JSON.parse(JSON.stringify((await sendTx(krp, pso))));
    return JSON.parse(JSON.stringify(txRes));
}
```

### 2.4 Get order status

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
	"file_size": 186,
	"expired_on": 12314,
	"claimed_at": 12164,
	"amount": 92812500,
	"expected_replica_count": 2,
	"reported_replica_count": 1,
	"replicas": [
		{
			"who": "5Ck95aKKQHiFd2W8gfrbqiF8u7L4DSEYqBazA3iqbCgncj4H",
			"valid_at": 12094,
			"anchor": "0x9a59000c5a3e5f8f6261e09cc8b77c98d2c45bac0a2af7a151d97a392b927b074c6d580053e50f11325ca0dc3f2135eb4372b6f4e73329f99705208a31c4d728",
			"is_reported": true
		}
	]
}
```

## 3 Code example

Please refer this [link](https://github.com/crustio/crust-demo)
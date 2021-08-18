---
id: buildIntegrationContentStorageDelivery
title: File Storage
sidebar_label: File Storage
---

Comming soon

<!-- Crust provides standard file upload and download services based on the combination of IPFS. Developers can build cloud storage functions, file distribution and even standard S3-like services on Crust. This article will explain from the perspectives of file upload, file storage, and file download

## 1 IPFS

### 1.1 Start IPFS node

Compared with traditional centralized storage, the access mode of IPFS is different. Each IPFS in the network is peer-to-peer, so if you want to save a file, you first need to start an IPFS node to join the entire storage network. For more information about IPFS, please refer to the following [link](https://github.com/ipfs/go-ipfs)

### 1.2 Upload file to local IPFS

You can use command line, HTTP request or [ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client) to operate IPFS. For details, please refer to [link](https:// github.com/ipfs/go-ipfs), the following takes HTTP request as an example.

Upload files, where 5001 is the default api port of ipfs：
```shell
curl --request POST 'http://127.0.0.1:5001/api/v0/add' --form '=@"/home/crust/Capture.PNG"
```
result:
```json
{
    "Name": "Capture.PNG",
    "Hash": "QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV",
    "Size": "285920"
}
```
Get `Hash (CID)`: QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV and `Size (cumulativeSize)`: 285920

## 2 Crust storage file

When the file is stored on the local IPFS node, you need to let other nodes in the IPFS network help store the file, otherwise when you close the local IPFS or delete the file, the file will not be found in the IPFS network. As an incentive layer, Crust can spread files to the entire network in a decentralized manner and ensure the existence of the file in real time. The specific code and process are as follows.

### 2.1 Dependencies
- [@crustio/type-definitions](https://github.com/crustio/crust.js) Custom data type, used to adapt to Crust network
- [@polkadot/api](https://github.com/polkadot-js/api) The polkadot api library provides a Promise-style interface for performing related operations on the Crust chain

### 2.2 Initialize API instance

You need to initialize an instance of `api` to interact with the Crust network. The code is as follows:

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

### 2.3 On-chain identity

You need to get the identity `krp` on the chain to send the order transaction. It can be generated from the seeds of the account (please ensure that the account has enough CRUs for sending storage orders):

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

### 2.4 Place storage order

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
    const pso = api.tx.market.placeStorageOrder(fileCID, fileSize, tip);
    // Send transaction, for 'sendTx()' please refer https://github.com/crustio/crust-demo/blob/main/sample-store-demo/src/utils.ts
    const txRes = JSON.parse(JSON.stringify((await sendTx(krp, pso))));
    return JSON.parse(JSON.stringify(txRes));
}
```

### 2.5 Get order status

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

```
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

### 2.6 Code example

Please refer this [link](https://github.com/crustio/crust-demo)

## 3 File download and use

When the Crust network stores the files, the access and download process of the files follows the design of the IPFS network. Several access methods are introduced below.

### 3.1 Local IPFS Gateway

If you have started the IPFS node locally, you can use the following methods to access or download resources:

```
http://localhost:8080/ipfs/QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV
```

### 3.2 Officially IPFS Gateway

IPFS officially provides Gateway:
```
https://ipfs.io/ipfs/QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV
```

### 3.3 The third-party Gateways

The third-party Gateways [list](https://ipfs.github.io/public-gateway-checker)

### 3.4 Local IPFS interface access

You can use command line, HTTP request or [ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client) to operate IPFS. For details, please refer to [link](https:// github.com/ipfs/go-ipfs), the following takes HTTP request as an example.

Download files, where 5001 is the default api port of ipfs：

```shell
curl --request POST 'http://127.0.0.1:5001/api/v0/get?arg=QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV'
``` -->

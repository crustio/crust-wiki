---
id: buildIntegrationNFTDataStorage
title: NFTs
sidebar_label: NFTs
---

## Overview

Non-fungible tokens (NFTs) are a way to prove ownership of digital art and collectibles.
NFT assets, like artworks and collectibles which come to public eyes through multimedia files such as images and videos, are relatively expensive if stored on the blockchain and therefore need to be stored off-chain.

**Note**

1. This article uses the NFT exchange as an example to illustrate the process of integrating Crust/IPFS network.
2. The term "NFT files" is used to mean the multimedia files of NFT assets in this article.

## Overview process

The NFT trading platform serves the storage needs of NFT files by integrating Crust and IPFS. The entire solution can be divided into four steps:

1. Import NFT files into IPFS;
2. Store and distribute NFT files through Crust Network;
3. Monitor the storage status of NFT files in Crust Network.
4. Users access NFT files in the NFT trading platform.

## Detailed process

### 1. Import NFT files into IPFS

With the NFT platform running an IPFS node first, the platform can import NFT files into IPFS when NFT is generated.
```shell
curl --request POST 'http://127.0.0.1:5001/api/v0/add' --form '=@"/home/crust/FireCloud.png"
```

Any file imported into IPFS will be given a unique CID (anyone can retrieve the file on IPFS Network by this CID).

```json
{
    "Name": "FireCloud.png",
    "Hash": "QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P",
    "Size": "2247325"
}
```

From the returned value, we can find the CID is: QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P

### 2. Store and distribute NFT files via Crust Network

Once NFT files are uploaded into IPFS Network, we need the Crust Network nodes to pin the files and provide retrieval services so that the files are always accessible, .

#### 2.1 Install dependencies

The NFT trading platform installs dependencies pertaining to Crust.
- [@crustio/type-definitions](https://github.com/crustio/crust.js) customized types of data pertaining to Crust Network
- [@polkadot/api](https://github.com/polkadot-js/api)  promise-style interface provided by the polkadot api library for performing related actions on Crust chain

#### 2.2 Initialize API instance

The NFT trading platform initializes the `api`  instance on the server side so that it can interact with Crust Network. 

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

#### 2.3 Set on-chain identity

The NFT trading platform needs to obtain  `KeyringPair` on the chain to be able to send order transactions. It can be generated from the seed files of an account:

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

#### 2.4 Initiate a storage order on Crust Network

The NFT trading platform initiates a storage order by integrating the following code, where `fileSize` is the "Size" obtained from step 3.1.

```typescript
/**
 * Place storage order
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

#### 2.5 Crust storage file

A large number of nodes in the Crust network will obtain the corresponding NFT file through the IPFS network after monitoring the storage order, ensuring high availability and high download speed of the file.

### 3. Monitor the storage status of NFT files in Crust Network

NFT trading platform queries the storage status information of corresponding NFT files by integrating the following code.
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

The results of an instance query are shown below:

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

where the value of `reported_replica_count` is the number of nodes that store the NFT file: `FireCloud.png` in Crust Network, and the value of `expired_on` is the expired block height of this file order.

*In addition to accessing Crust Network through code, you can also monitor the file storage status through [Crust Apps](https://apps.crust.network/#/storage/market)：*
![fire_cloud](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/build/fire_cloud.png)

### 4. NFT file retrieval and access

The NFT trading platform provides [IPFS Getway](https://docs.ipfs.io/concepts/ipfs-gateway/#gateway-types) services, and it also integrates [Public IPFS Gateway](https://ipfs.github .io/public-gateway-checker/) services so that each NFT file can be accessed through a link that contains CID information. The front-end of the NFT trading platform builds on these links to present to users the multimedia information of the NFT.

For example, the NFT file: `Firecloud.png` can be accessed through the following ipfs public Gateway url:

```url
https://ipfs.io/ipfs/QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P
```

![pic](assets/build/ipfsio-nft.png)

If the user has IPFS installed and started locally, access to the same NFT file url will be directly through the local IPFS for the file retrieval.

```url
http://localhost:8080/ipfs/QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P
```

![pic](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/build/local.png)

Since a large number of nodes in Crust Network have stored the file, the user running IPFS locally can achieve multi-point accelerating effect when accessing the NFT file.

### Resources

- [Code Sample](https://github.com/crustio/crust-demo)

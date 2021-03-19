---
id: buildIntegrationNFTDataStorage
title: NFT Data Storage
sidebar_label: NFT Data Storage
---

## 1. 概要
NFT（Non-fungible tokens）是在链上证明数字资产(比如艺术品)所有权的一种方式。NFT资产，比如艺术品和收藏品，往往需要图像、视频等多媒体文件来呈现，这些文件存储在区块链上相对昂贵，因此需要被存储在链下。

**申明**
1. 本文以NFT交易平台为例阐述流程，描述如何集成Crust/IPFS网络。
2. 本文用“NFT文件”代指 NFT资产对应的多媒体文件。

## 2. 流程综述
NFT交易平台可以通过集成Crust和IPFS满足NFT文件的存储需求。解决方案分为以下四个步骤：
1. 将NFT文件导入IPFS；
2. 通过Crust网络存储和分发NFT文件；
3. 监控NFT文件在Crust网络中的存储状态；
4. 用户在NFT交易平台访问NFT文件；

## 3. 详细流程
### 3.1 将NFT文件导入IPFS
NFT平台需要运行一个IPFS节点，在NFT生成时，交易平台将NFT文件导入IPFS。
```shell
curl --request POST 'http://127.0.0.1:5001/api/v0/add' --form '=@"/home/crust/FireCloud.png"
```

所有导入IPFS的文件将会获得一个唯一的CID（任何人都可以通过这个CID在IPFS网络内检索到对应文件）。

```json
{
    "Name": "FireCloud.png",
    "Hash": "QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P",
    "Size": "2247325"
}
```

获得的返回值中，CID为: QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P

### 3.2 通过Crust网络存储和分发NFT文件
当NFT文件被传入IPFS网络后，为了保证文件始终能被访问，我们需要Crust网络节点Pin住该文件并提供检索。

#### 3.2.1 安装依赖
NFT交易平台安装Crust对应依赖。
- [@crustio/type-definitions](https://github.com/crustio/crust.js) 适配Crust网络的自定义数据类型
- [@polkadot/api](https://github.com/polkadot-js/api) polkadot api库提供的Promise风格的界面，用于在Crust链上执行相关操作

#### 3.2.2 初始化API实例
NFT交易平台在服务器端初始话`api` 实例，从而可以与Crust Network交互。
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

#### 3.2.3 设置链上身份
NFT交易平台需要在链上获得 `KeyringPair` 才能发送订单交易。它可以从帐户的种子文件中生成：

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

#### 3.2.4 在Crust网络发起一笔存储订单
NFT交易平台通过集成以下代码来发起存储订单。其中`fileSize`就是步骤3.1中获得的size。

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

#### 3.2.5 Crust存储文件

Crust网络中大量节点在监听到存储订单后将会通过IPFS网络获取对应NFT文件，保证了文件的高可用性和高下载速度。

### 3.3 监控NFT文件在Crust网络中的存储状态

NFT交易平台通过集成以下代码查询对应NFT文件的存储状态。
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

一次实例查询结果如下：

```json
{
	"file_size": 2247325,
	"expired_on": 896600,
	"claimed_at": 12164,
	"amount": 92812500,
	"reported_replica_count": 43,
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

其中`reported_replica_count`的值为Crust网络中存储了NFT文件`FireCloud.png`的节点数，`expired_on`的值为这个文件订单在Crust网络中过期的块高。

*除了可以通过代码访问Crust网络，也可以通过[Crust Apps](https://apps.crust.network/#/storage/market)监控文件存储状态：*
![pic](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/build/fire_cloud.png)

### 3.4 NFT文件的检索和访问
NFT交易平台可以提供[IPFS Getway](https://docs.ipfs.io/concepts/ipfs-gateway/#gateway-types)服务，或使用三方提供的[公共IPFS Gateway](https://ipfs.github.io/public-gateway-checker/)服务。使得每个NFT文件都可以通过一个包含了CID的连接来访问。NFT交易平台的前端通过这些连接来向用户展示NFT对应的多媒体信息。

比如，`Firecloud.png`这个NFT文件，通过IPFS的公共Gateway访问的url为：
```url
https://ipfs.io/ipfs/QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P
```
![pic](assets/build/ipfsio-nft.png)


如果用户本地安装并启动了IPFS，则访问同样的NFT文件url时会直接通过本地IPFS检索该NFT文件。
```url
http://localhost:8080/ipfs/QmbLmgLUR1VZNpttojd752fyng8Bz3ZbPqabQ76MVLXT7P
```
![pic](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/build/local.png)

由于Crust网络中大量节点存储了该文件，因此本地运行了IPFS的用户访问NFT文件时可以获得多点加速的效果。


## 4 代码示例

请参考这个[链接](https://github.com/crustio/crust-demo)
---
id: buildIntegrationContentStorageDelivery
title: Content storage & delivery
sidebar_label: Content storage & delivery
---

Crust在结合IPFS的基础上提供了标准的文件上传与下载服务。开发者可以在此基础上构建云存储服务，文件分发以及标准的S3服务. 本文将从文件上传，文件存储，文件下载的角度来进行阐述。

## 1 IPFS

### 1.1 启动IPFS节点
相较于传统的中心化存储，IPFS的存取模式有所不同，网络中的每个IPFS都是对等的，所以如果你想存一个文件首先你需要启动一个IPFS的节点，来加入整个存储网络。IPFS的相关信息请参考以下[链接](https://github.com/ipfs/go-ipfs)

### 1.2 上传文件到本地IPFS
可以使用命令行，HTTP请求或者[ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client)方式来操作IPFS，具体可以参考[链接](https://github.com/ipfs/go-ipfs)，下面以HTTP请求为例。

上传文件，其中5001为ipfs的默认api端口：
```shell
curl --request POST 'http://127.0.0.1:5001/api/v0/add' --form '=@"/home/crust/Capture.PNG"
```
返回：
```json
{
    "Name": "Capture.PNG",
    "Hash": "QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV",
    "Size": "285920"
}
```
返回值中获得`Hash (CID)`：QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV 与 `Size (cumulativeSize)`：285920

## 2 Crust存储文件

当文件存储在本地的IPFS节点之后，需要让IPFS网络中的其他节点来帮助存储该文件，否则当你关闭本地IPFS或者删除该文件后，IPFS网络中将找不到该文件。Crust作为激励层，可以去中心化地扩散文件到整个网络，并实时的确保该文件的存在性，具体代码和流程如下。

### 2.1 依赖库
- [@crustio/type-definitions](https://github.com/crustio/crust.js) 自定义数据类型，用于适配Crust网络
- [@polkadot/api](https://github.com/polkadot-js/api) polkadot api库，提供Promise风格的接口，用于对Crust链进行相关操作

### 2.2 初始化API实例

这里需要初始化一个`api`实例, 用于和Crust网络交互，代码如下:

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

### 2.3 链上身份
需要链上的身份`krp`才能发送订单交易。可以通过账户（确保该账户有足够的CRU用于发送存储订单）的seeds来生成:

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

### 2.4 下达存储订单

等待链同步到最新块后，就可以和链交互进行下单了, 注意这里的`fileSize`必须是上一步获取的`cumulativeSize`, 如果比`cumulativeSize`小的话, 下单就会失败;

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

### 2.5 获取订单状态

一般来说,订单的状态在半小时左右更新一次，可以通过 `api.query.market.files()`查询订单的状态

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

如果订单不存在会返回`none`, 如果订单存在会返回以下数据结构, 其中`expired_on`和当前块高比较可以判断出是否过期, `reported_replica_count`如果为0的, 则订单还在进行中, 如果大于0, 且未过期的话, 则订单成功
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

### 2.6 代码示例

请参考这个[链接](https://github.com/crustio/crust-demo)

## 3 文件下载与使用

当Crust网络将文件存储后，文件的访问和下载流程遵循IPFS网络的设计，下面分别介绍几种访问方式

### 3.1 本地IPFS Gateway

如果你本地启动了IPFS节点，可以使用以下的方式访问或下载资源：

```
http://localhost:8080/ipfs/QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV
```

### 3.2 官方IPFS Gateway

IPFS官方提供Gateway：
```
https://ipfs.io/ipfs/QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV
```

### 3.3 第三方IPFS Gateway

具体的第三方Gateway[列表](https://ipfs.github.io/public-gateway-checker)

### 3.4 本地IPFS接口访问

可以使用命令行，HTTP请求或者[ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client)方式来操作IPFS，具体可以参考[链接](https://github.com/ipfs/go-ipfs)，下面以HTTP请求为例。

下载文件，其中5001为ipfs的默认api端口：
```shell
curl --request POST 'http://127.0.0.1:5001/api/v0/get?arg=QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV'
```

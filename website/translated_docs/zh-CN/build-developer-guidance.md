---
id: buildDevGuidance
title: Developer Guidance: Start Building Applications
sidebar_label: Developer Guidance: Start Building Applications
---

此页面包含一个代码示例，以演示如何将文件上传到IPFS，并下达存储订单以将文件存储在Crust Network中。之后，可以通过标准IPFS接口和网关从任何地方检索文件。这个场景简单通用。它可以广泛应用于WebSite / DApp前端托管，内容/媒体分发，云存储等。

该代码示例在GitHub上：https://github.com/crustio/crust-demo

更多详情即将推出…

## 1 概述
### 1.1 流程
使用IPFS和Crust Network，开发人员可以按照以下过程上传、存储和分发文件：

- 将文件上传到IPFS, 并获取文件的`CID`（每个文件基于内容生成的唯一标识）和文件`Size`（存储在IPFS内部的文件实际大小，区别于原文件大小）
- 在Crust链上利用文件的`CID`, `Size`下存储订单。给出的文件大小应不小于实际文件大小
- 获取与监控订单状态

上面的流程必须被顺序执行，以保证文件被Crust网络顺利存储。

### 1.2 依赖

本代码示例主要依赖以下几个库:

- [@crustio/type-definitions](https://github.com/crustio/crust.js) 自定义数据类型，用于适配Crust网络
- [@polkadot/api](https://github.com/polkadot-js/api/blob/master/packages/api) polkadot api库，提供Promise风格的接口，用于对Crust链进行相关操作
- [ipfs-core](https://github.com/ipfs/js-ipfs) ipfs库, 包含ipfs的所有功能

## 2 说明
### 2.1 上传文件到IPFS

和IPFS网络交互之前需要实现一个`ipfs`实例, 代码如下:

```typescript
import IPFS from 'ipfs-core';

// Start local ipfs, ipfs base folder will be $USER/.jsipfs
const ipfs = await IPFS.create()
```

然后可以使用`ipfs.add(fileContent, options)`方法进行上传文件, `fileContent`可以是以下任意类型:` Uint8Array | Blob | String | Iterable<Uint8Array> | Iterable<number> | AsyncIterable<Uint8Array> | ReadableStream<Uint8Array>` 以下代码会返回两个值，分别是`CID`与`Size`

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

### 2.2 初始化API实例和链上身份

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

同时，需要链上的身份`krp`才能发送订单交易。可以通过账户（确保该账户有足够的CRU用于发送存储订单）的seeds来生成:

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

### 2.3 下达存储订单

可以利用以下代码判断链是否同步到最新块：

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

### 2.4 获取订单状态

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

## 3 代码示例

请参考这个[链接](https://github.com/crustio/crust-demo)
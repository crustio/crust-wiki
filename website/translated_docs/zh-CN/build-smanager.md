---
id: buildSmanager
title: Crust Storage Manager
sidebar_label: Crust Storage Manager
---

sManager (Storage Manager) 是一个自动从 Crust 网络拉取和存储文件的程序，节点管理员可以根据自己的文件处理策略对它进行定制。

## 基本流程

sManager 的主体由一组定时运行的任务组成，这些任务之间通过本地数据库和应用程序上下文 (Context) 交换数据和协同工作。sManger 的基本业务流程如下图所示：

![smanager-flow](assets/build/smanager-mainnet-flow.png)

- `Chain Event Indexer` 监听链上事件，将最新的文件存储订单存储到本地数据库

- `Chain Database Indexer` 解析链上历史数据，将历史订单存储到本地数据库

- `Pull Scheduler` 定时启动，根据预定义策略，从本地数据库选择文件存储订单进行处理。对选取的订单，从 IPFS 网络拉取到本地 IPFS 节点，并调用 sWorker API 进行封装


## 使用

1. 复制代码库

```shell
git clone https://github.com/crustio/crust-smanager.git
```

2. 安装

建议使用 `volta` 管理本地 Node 版本，具体使用方法可以参考 [volta 文档](https://docs.volta.sh/guide/getting-started)。

```shell
cd crust-smanager && npm i
```

3. 调试

```shell
npm run dev
```

4. 运行
```shell
npm run build
npm start
```
建议使用 Docker 运行 sManager，运行时请使用 `restart=always` 的重启策略。

如果不使用 Docker，那么运行 sManager 时建议搭配 Daemon 进程守护工具，比如 `pm2` 或者 `nodemon`。

## 配置

sManager 的配置文件为 json 文件，使用环境变量 `SMANAGER_CONFIG` 指定，默认值为 `smanager-config.json`。

代码库中包含了一个示例文件 [smanager-config.example.json](https://github.com/crustio/crust-smanager/blob/mainnet/data/smanager-config.example.json) 供参考：

```json
{
  "chain": {
    "account": "crustaccount",
    "endPoint": "ws://localhost:19944"
  },
  "sworker": {
    "endPoint": "http://localhost:12222"
  },
  "ipfs": {
    "endPoint": "http://localhost:5001"
  },
  "node": {
    "role": "member"
  },
  "telemetry": {
    "endPoint": "https://sm-submit.crust.network"
  },
  "dataDir": "data",
  "scheduler": {
    "minSrdRatio": 30,
    "strategy": {
      "dbFilesWeight": 10,
      "newFilesWeight": 90
    }
  }
}
```

sManager 启动时会加载这些配置项，它们的定义如下：

- `chain.account`: Member 节点帐号

- `chain.endPoint`: 链节点的 RPC API 地址

- `sworker.endPoint`: Worker API 地址

- `ipfs.endPoint`: IPFS API 地址

- `dataDir`: 本地数据库存储k路径

- `scheduler.minSrdRatio`: 节点开始接单的最小 SRD 比率

    > 例如，如果该比率为 30，那么节点在 SRD 容量比率达到 30% 之后开始接收存储订单 

- `scheduler.strategy.dbFilesWeight`: 该节点用于接收和处理历史订单 (链上过去4个月的订单) 的算力权重

- `scheduler.strategy.newFilesWeight`: 该节点用于接收和处理最新订单的算力权重


## 组件

sManager 包含几个独立运行的任务，有的按照一定间隔定时触发，有的由特定的链上事件触发。这些任务相互之间通过本地数据库交换数据和协同工作。

当遇到错误时，sManager 会终止运行。所以，这些任务从机制设计上需要支持重启后继续执行后续步骤。


### 本地数据库

本地数据库存储以下信息：

1. **File Records**: Crust 网络上的文件元数据 (订单Tips、文件大小、副本数、到期时间、等等)

2. **File and Owner Relationship**: 文件和 Crust 帐号的关联信息，该信息可以辅助决策如何选择文件进行拉取

3. **Chain Metadata**: Crust 网络元数据，例如，某个 Block 对应的时间戳

4. **Pin Records**: 文件 Pin 的历史记录

5. **Cleanup Records**: 需要从本地文件系统清除的文件，通常在存储订单到期时触发

具体可以参考 [数据库表结构定义](https://github.com/crustio/crust-smanager/blob/mainnet/db-schema.md)


### Indexers

`Indexers` 从不同的数据源索引信息并存储到数据库。目前 sManager 包括以下几个 `Indexer`：

1. **Chain Database Indexer**: 从 Crust 链上索引历史订单

2. **Chain Event Indexer**:  监听 Crust 链上事件以索引最新存储订单

3. **Chain Time Indexer**: 索引链上最新区块及时间戳

### Simple Tasks

`Simple tasks` 是一组定时运行的任务。目前 sManager 包括以下 `Simple task`:

1. **Group Info Updater**: 调用 sWorker API 更新 sWorker 身份信息

2. **Ipfs GC**: 定时触发 IPFS 节点的 GC 以释放空间

3. **Telemetry Reporting**: 向 Telemetry 上报 sManager 统计数据

4. **Pull Scheduler**: 定时拉取并封装文件

5. **Seal Status Updater**: 定时更新文件的封装状态

6. **File Retry Task**: 重试文件拉取

7. **File Cleanup Task**: 从本地文件系统清理到期的文件

## `Private DSM` 定制

### 背景

从本质上讲，Crust [DSM](DSM.md) 是一个公开的去中心化存储市场。所有的存储订单会进行全网广播，理论上任意节点都可以接收任意订单进行存储。

在某些情况下，[存储商户](storage-merchant.md)可能会希望基于 Crust 网络构建一个虚拟的 `私有 DSM`，只为自己的客户提供存储服务。该需求可以通过对 sManager 和 sManager 连接的 IPFS 节点进行定制来满足。

### 如何定制

#### 基本流程

简单地讲，定制方案基于 [IPFS Private Network](https://docs.ipfs.io/concepts/privacy-and-encryption/#creating-a-private-network)，同时针对 sManager 进行一些代码级的定制，并约定客户下单时附加特定格式的 `_memo`。

- `IPFS`: 存储商户搭建一个 `IPFS Private Network`，并将 sManager 连接到该私有网络中的 IPFS 节点
- `sManager`: 存储商户针对 sManager 进行定制，只接收符合特定要求的订单
  - 生成一个唯一的 `network Id`, 配置在 sManager 中，并分享给自己的专属客户
  - 客户下单时，在 `_memo` 字段附加上指定的 `network Id`

> 请务必注意，在下单之前，客户需要将文件上传到对应的 `IPFS Private Network` 的某个节点，以保证只有特定商户的 sManager 才能成功拉取和存储文件


#### IPFS Private Network

`IPFS Private Network` 可以通过生成一个 `swarm key` 并保存到 `$IPFS_PATH` 来搭建。

1. 使用 [ipfs-swarm-key-gen](https://github.com/Kubuxu/go-ipfs-swarm-key-gen) 生成 `swarm key`

```shell
go get github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen
ipfs-swarm-key-gen > ~/.ipfs/swarm.key
```

2. 加入已有的 `private network`

要加入已有的 `private network`，只需要获取对应的 `swarm key` 并保存到 `$IPFS_PATH` (默认为 `~/.ipfs/swarm.key`) 中即可。

更多信息，可以参考 [IPFS 文档](https://github.com/ipfs/go-ipfs/blob/release-v0.9.0/docs/experimental-features.md#private-networks)。


#### 定制 sManager

1. 在配置文件中添加 `networkId` 字段
2. 禁止 `Chain Database Indexer` (订单的 `_memo` 字段不会保存在 Chain Database 中，故无须索引)
3. 更新 `Chain Event Indexer` 只接收 `_memo` 字段中包含指定 `networkId` 的订单

#### 订单 Memo

当针对某个 `private DSM` 下单时，用户需要将 `network Id` 填充在 `_memo` 字段，如下图所示：

![place-order-with-memo](assets/build/place-order-with-memo-zh.png)

### sManager 定制参考

关于 sManager 的定制，可以参考 [decooio/crust-smanager](https://github.com/decooio/crust-smanager) 

## 参考

- `crust-smanager`: https://github.com/crustio/crust-smanager
- `crust.js`: https://github.com/crustio/crust.js
- `crust`: https://github.com/crustio/crust
- `crust-sworker`: https://github.com/crustio/crust-sworker
- `js-ipfs`: https://github.com/ipfs/js-ipfs

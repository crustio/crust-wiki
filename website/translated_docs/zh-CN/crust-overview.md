---
id: crustOverview
title: Crust Mainnet
sidebar_label: Crust Mainnet
---

Crust的核心功能包含了代币质押、去中心化存储市场DSM、以及文件检索机制等，是一个应用系统，也是一个经济系统。Crust生态系统一共有五个角色：**验证人，担保人，存储用户，存储商户，开发者**
## 1 验证人（节点）

验证人是Crust网络的维护人，要成为验证人，你需要：

1. 节点搭建，请参考[节点概要](node-overview.md)
2. 成为验证人，请参考[验证人指南](validatorGuidance.md)
3. 了解验证人的奖励与罚没细则，请参考[验证人](validator.md)介绍

## 2 担保人（持币用户）

持币用户可以通过对验证人（节点）进行**担保**获得收益，成为担保人，你需要：

1. 成为担保人，请参考[担保指南](guarantor-guidance.md)
2. 了解担保人的奖励与罚没细则，请参考[担保人](guarantor.md)介绍

## 3 存储用户

存储用户通过标准IPFS协议存储文件，并通过Crust存储市场下单，让Crust网络帮您保存文件。参考[存储用户指南](storageUserGuide.md)

## 4 存储商户

验证人提供了节点资源，成为[存储商户](merchantGuidance.md)即可提供存储服务并获得额外收益。

## 5 开发者

开发者可以基于Crust SDK开发存储应用。参考[开发者指南](build-getting-started.md)

<!--
Crust主网正在稳步推进，目前主网上线进度为：

1. CRU认领 - 已开放

    CRU是Crust网络的主要通证，CRU-ERC20指的是流通在以太坊智能合约上的CRU通证。CRU-ERC20的拥有者把CRU-ERC20映射到Crust主网上这一过程我们称为**认领**。认领包括[CRU的认领](claims.md)和[锁定CRU的认领](claims-locked-cru.md)。

2. 节点加入 - 已开放

    节点和存储资源提供者可以在Crust主网中部署节点。部署节点流程参考[节点手册](node-overview.md)

3. DSM（去中心化存储市场）- 已开放

    Crust的[DSM](DSM.md)（Decentralized Storage Market 去中⼼化存储市场）⽀持⽤户在链上下达存储订单，以将其数据存储和分发到Crust⽹络中。在整个Crust⽹络的⽀持下，⽤户可以随时随地检索数据。存储相关功能参考[存储总览](storageOverview.md)。

4. GPoS - 已开放

    Crust的 GPoS（Guaranteed Proof of Stake 担保权益证明）派⽣⾃PoS权益证明。GPoS要求节点提供存储资源作为担保，以获得质押额度，并⿎励⽤户通过担保操作将其Token质押给⾼质量节点以获得收益。关于GPoS详情参考[GPoS介绍](GPoS.md)。

更多更详细的Crust主网上线进度可以[在这里查看](https://medium.com/crustnetwork/big-announcement-crust-mainnet-launch-timeline-c2bd2dc0d490)。
-->

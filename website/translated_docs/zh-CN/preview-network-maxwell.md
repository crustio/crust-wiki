---
id: previewNetworkMaxwell
title: Preview Network Maxwell
sidebar_label: Preview Network Maxwell
---

# 预览网

Maxwell作为Crust主网的预览网，集成了Crust的所有核心功能，包括代币质押、去中心化存储市场DSM、以及文件检索机制等。预览网Maxwell是一个真实的经济系统，参与者们可以一比一的[映射 CRU-ERC20]() 进入Mexwell进行质押挖矿或体验存储服务，而其中产生的收益也可以一比一的映射到CRU-ERC20作为参与者的奖励。

## 如何参与Maxwell预览网

您可以作为矿工加入，提供存储服务来进行挖矿，也可以作为持币用户参与质押挖矿，挖矿奖励规则见[GPoS]()共识算法。
您也可以单纯的作为用户使用Crust网络的存储。

### 矿工

矿工需要根据自己的需求来部署节点。Maxwell网络中的节点分为：[独立节点](isolationNode.md)、[Group Owner](ownerNode.md)以及[Group Member](memberNode.md)。


独立节点是一个物理节点，这个节点需要在提供存储和检索服务的同时，承担Crust网络验证人的工作。这也意味着，这个验证人的质押上限受到这个节点存储量的制约。

与独立节点对应的是Group。Group可以容纳多个物理节点，也就是Group Member的加入。Group由一个Owner和多个Member组成。Member负责提供存储和检索服务，而 Member的工作量以及对应的Stake Limit将被 Owner享有。Group Owner仅负责网络的验证和出块，不提供存储相关服务。

### 持币用户

持币用户通过对节点进行[担保](guarantor-guidance.md)可以获得收益。

### 存储用户

即将开放
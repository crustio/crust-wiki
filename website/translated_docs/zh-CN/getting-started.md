---
id: gettingStarted
title: Getting Started
sidebar_label: Getting Started
---
## 了解Crust
### Crust 是什么
Crust实现了去中心化存储的激励层协议，适配包括IPFS在内的多种存储层协议，并对应用层提供支持。同时Crust的架构也有能力对去中心化计算层提供支持，构建分布式云生态。

### Crust 可以被使用在哪些场景下
Crust网络激励节点提供存储服务，并在其上构建了去中心化存储市场。任何涉及到数据存储的应用场景如云服务、边缘计算、以及去中心化应用等，都是Crust适配的场景。尤其在边缘计算场景下，相比于中心化的云存储，Crust的去中心化存储更加贴近边缘侧，可以达到相对低成本高性能的效果。

### Crust如何实现

Crust主要解决了三个问题：证明，激励和服务。


![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/arch.png)


Crust通过MPoW机制实现了节点高效的存储证明。

Crust通过GPoS实现了对存储节点的激励。

Crust通过去中心化存储市场DSM调度Crust网络的存储资源，满足用户的存储应用需求。

#### MPoW
基于可信执行环境（TEE）技术，Crust网络中节点可以对存储进行无交互的证明。如下图，TEE会周期性的对节点存储状态进行检查，并生成一个所有节点都可验证的工作量报告。
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/mpow.png)

#### GPoS
传统的PoS共识算法中，节点通过质押币来维护网络安全并出块。[Polkadot](https://wiki.polkadot.network/docs/en/getting-started)网络的[NPoS](https://wiki.polkadot.network/docs/en/learn-consensus)，则是在PoS的基础上，加入了提名人机制。验证人节点可以接受持币者的提名，从而获得更高的质押量。
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/gpos.png)

Crust网络的GPoS共识，节点也需要质押通证。但与NPoS不同之处在于，Crust节点的存储工作量，将会在链上被换算成一个质押上限（Staking Limit）。节点的最终有效质押将不会大于自己的质押上限。

在GPoS机制下，节点单独垄断任一种资源，比如垄断币或垄断存储算力将不会带来巨额收益，同时也不会影响网络安全。

#### DSM
Crust的DSM（Decentralized Storage Market，存储市场）旨在为基于Crust网络的应用和平台提供优质的存储服务。其中，Crust的存储服务，主要包括基于IPFS网络的存储订单机制和检索机制。
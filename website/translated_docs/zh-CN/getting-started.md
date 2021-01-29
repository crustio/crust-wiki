---
id: gettingStarted
title: Getting Started
sidebar_label: Getting Started
---

## Crust 是什么
CRUST提供了Web3⽣态系统的去中⼼化存储⽹络，⽀持包括IPFS在内的多种存储层协议，并对应⽤层提供接⼝。Crust的技术栈还能够⽀持去中⼼化计算层。Crust旨在构建⼀个重视数据隐私和所有权的分散式云⽣态系统。

## 为什么选择 Crust
Crust网络激励节点提供存储服务，并在其上构建了去中心化存储市场。任何涉及到数据存储的应用场景如云服务、边缘计算、以及去中心化应用等，都是Crust适配的场景。尤其在边缘计算场景下，相比于中心化的云存储，Crust的去中心化存储更加贴近边缘侧，可以达到相对低成本高性能的效果。

## Crust如何实现

Crust主要解决了三个问题：证明，激励和服务。


![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/arch.png)


Crust通过MPoW机制实现了节点高效的存储证明。

Crust通过GPoS实现了对存储节点的激励。

Crust通过去中心化存储市场DSM调度Crust网络的存储资源，满足用户的存储应用需求。

### MPoW
基于可信执行环境（TEE）技术，Crust网络中节点可以对存储进行无交互的证明。如下图，TEE会周期性的对节点存储状态进行检查，并生成一个所有节点都可验证的工作量报告。
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/mpow.png)

### GPoS

Crust 网络中的区块链共识是 GPoS（Guaranteed Proof of Stake）共识，称为有担保的
权益证明。GPoS 是一种混合了 PoW 的 PoS 共识，机制上结合了 PoW 的资源公平性和
PoS 链的高性能。和现有的 PoS 项目类似，节点需要将 CRU 通证 Stake 来竞争生成区块的
权利，不一样的是节点还需要有存储资源和工作量作为担保，在其担保额度内其 Stake 的
CRU 通证才有效。在这个机制下需要有存储资源和 CRU 通证两类资产才可以成为节点，将
资源型（如比特币）和通证型（如 Cosmos）共识机制的优点结合起来，更有效的保证网
络安全性。
[Polkadot](https://wiki.polkadot.network/docs/en/getting-started)网络的[NPoS](https://wiki.polkadot.network/docs/en/learn-consensus)，则是在PoS的基础上，加入了提名人机制。验证人节点可以接受持币者的提名，从而获得更高的质押量。

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/gpos.png)



### DSM
Crust的DSM（Decentralized Storage Market，存储市场）旨在为基于Crust网络的应用和平台提供优质的存储服务。其中，Crust的存储服务，主要包括基于IPFS网络的存储订单机制和检索机制。

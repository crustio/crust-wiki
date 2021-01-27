---
id: GPoS
title: GPoS
sidebar_label: GPoS
---

## GPoS
### GPoS是什么
在整个Crust系统里有多个参与方，它们各自有不同的需求，按照每个角色参与的方式，它们分别为：验证人、候选人、担保人、用户，在此文中提到的用户，主要指存储和计算资源用户。

Crust网络使用的是GPoS（Guaranteed Proof of Stake）共识机制，是一个以存储资源做担保额度的PoS共识。和现有的PoS项目类似，节点需要将CRU通证质押来竞争成为验证人，不一样的是节点还需要提供存储资源以获取相应的担保额度，有了担保额度才能Stake相应数量的CRU。通过MPoW机制，节点的存储量的节点存储量监测机制，节点贡献的存储资源越多，能获得的抵押额便越高。

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/gpos.png)

GPoS基于Substrate框架的[BABE/GRANDPA](https://wiki.polkadot.network/docs/en/learn-consensus#what-is-grandpababe)算法进行最终出块。如果想从共识上攻击Crust网络，除了需要拥有大比例的CRU通证，还需要控制足够多的存储资源，这样的设计会让攻击难度变得相对更高。

### 如何参与GPoS
用户可以作为节点参与，或者作为担保人参与。

### 作为节点参与GPoS
Crust中提供Group的概念。存储节点可以加入某个Group中，将自己的存储工作量带来的质押额度贡献给这个Group，使得Group Owner可以拥有更大的质押额度来竞争成为验证人。

因此Crust网络中的节点有两种角色：
* [存储节点](isolationNode.md)
* [Group Owner](ownerNode.md)


### 作为担保人参与GPoS
持币用户可以通过[担保](guarantor-guidance.md)节点来分享Crust网络的质押收益。用户可以浏览网络中的验证人并进行担保，从而增加该验证人的有效质押（最终验证人的总有效质押量不会超过其质押额度）
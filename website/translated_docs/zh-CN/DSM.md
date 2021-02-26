---
id: DSM
title: DSM
sidebar_label: DSM
---


去中心化存储市场(Decentralized Storage Market, DSM)提供了一个去中心化的IPFS Pin服务。存储用户可以在链上发起订单，而订单对应文件则会相应的被Crust节点存储。DSM同时也针对文件的检索进行了激励，使得节点有意愿提供检索服务。

DSM 包含 3个主要机制。详细机制请参考[经济白皮书](https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/ecowhitepaper.pdf):
### 1. 价格机制
存储订单费用包含了三个部分：基础费用、动态存储费用（由链上根据文件大小、存储时长以及存储供需关系计算得出）以及小费；

### 2. 存储订单机制。当用户生成一笔存储订单时：
    * 部分金额（约存储总金额的20%）将会进入文件奖励池，剩下的部分将会加入全网Staking奖励池；
    * 任何节点一旦存储了该文件，并提交了存储证明，即可进入该文件的奖励节点列表。前四个进入奖励列表的节点将会平分这个文件奖励池中的金额；
    * 在奖励列表中的文件都可以获得质押额度奖励。也就是说，其有效质押上线会相应增加；

![dsm](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/learn/dsm.png)

### 3. 检索机制。在为数据存储提供激励时，DSM同时为数据的检索提供激励。为了使节点提供检索，DSM的检索激励机制如下：
   * Crust网络中的数据检索机制遵循 [IPFS Bitswap协议](https://docs.ipfs.io/concepts/bitswap/)。数据可以在整个IPFS网络节点之间进行共享和交换。
   * Crust网络提供更高效的检索评分机制。在Bitswap协议中，节点通过“信用”机制来抵制只拉取数据而不提供检索的“吸血”节点。Crust网络在原有的Bitswap信用机制上，加入了可信的链上信息供节点参考，使得Crust网络的信用机制更加高效。
   * Crust网络节点提供可靠的供检索服务。Crust网络节点的早起收益来自于[网络质押——GPoS共识](gpos.md)，而存储更多用户文件可以有效增加节点的有效质押额度。结合Crust网络的信用机制，节点在利益驱动下，为了获取用户文件，就需要相应的提供检索服务。

用户可以在[Crust Apps](https://apps.crust.network/#/storage)上体验DSM功能。

---
id: DSM
title: DSM
sidebar_label: DSM
---


DSM (Decentralized Storage Market) provides a decentralized version of IPFS pinning service. It allows storage users to place storage orders on the chain, and the files (IPFS CID list) specified in a particular storage order will be stored by nodes. DSM also takes care of incentivizing storage nodes to provide retrieving service.

DSM contains 3 major mechanisms. For more details refer to [Crust economy whitepaper](https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/ecowhitepaper_en.pdf):
## 1. Pricing Mechanism
Storage order fee contains 3 parts – basic fee, dynamic fee calculated by the network according to file size, storage period and overall storage requirement and supply and tips.

### 2. Storage Order Mechanism
Storage Order works in a pooled way. Once a user places a storage order:

    * Certain amount of order fee (~20%) will be added to the specific file payment pool, and the rest will be put to the overall network staking pool.
    * Any node that submits corresponding storage proof will be added to the payout queue of the file payment pool, the top four nodes in the queue will get the reward of this file's payment pool.
    * Any node that submits corresponding storage proof will get a staking quota increasement (by ~2x). Those nodes will be able to get additional staking income from the overall staking pool.
![dsm](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/learn/dsm.png)

### 3. Retrieval Mechanism
As a data storage system, besides the storage market, DSM also takes the responsibility of incentivizing the nodes to provide retrieval service. Therefore, DSM includes another layer of incentives to encourage nodes to support data retrieval:

   * The data retrieval mechanism in Crust Network follows the [IPFS Bitswap Protocol] (https://docs.ipfs.io/concepts/bitswap/). By such, data can be shared and exchanged among the nodes of the entire IPFS Network.

   * Crust Network provides a highly efficient retrieval pointing mechanism. Enabled by the Bitswap protocol and using a “credit” mechanism, nodes can resist those “free-riding” nodes that only seek to pull data without providing retrieval services. Building on the Bitswap credit mechanism, Crust Network makes the access to trusted on-chain information available for nodes, further boosting the Crust Network credit mechanism.

   * Crust Network nodes provide reliable retrieval services. The initial earning of Crust Network nodes comes from [Network Staking——GPoS](gpos.md), and storing more user files can translate into increased effective stake limits for nodes. Driven by such a bonus and coupled with Crust Network credit mechanism, nodes offer to provide corresponding retrieval services so as to receive more user files.

Users can expirence DSM in [Crust Apps](https://apps.crust.network/#/storage).

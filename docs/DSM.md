---
id: DSM
title: DSM
sidebar_label: DSM
---


DSM (Decentralized Storage Market) provides a decentralized version of IPFS pinning service. It allows storage users to place storage orders on the chain, and the files (IPFS CID list) specified in a particular storage order will be stored by nodes. DSM also takes care of incentivizing storage nodes to provide retrieving service.

DSM contains 4 major mechanisms. For more details refer to [Crust economy whitepaper](https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/ecowhitepaper_en.pdf):
### 1. Pricing Mechanism
Storage order fee contains 4 parts – dynamic basic fee, dynamic byte fee calculated by the network according to file size, storage period and overall storage requirement and supply, dynamic file keys count fee and tips.

* The base fee will be automatically adjusted according to the current network file throughput.
* Dynamic file byte fees will be automatically adjusted according to the relationship between storage supply and demand.
* The dynamic file keys count fee will be automatically adjusted based on the total number of files that already exist on the chain.
### 2. Storage Order Mechanism
Storage Order works in a pooled way. Once a user places a storage order:

   * The dynamic basic fee will currently enter the market revenue pot, and then the democratic module will vote on the use of the revenue from the market revenue pot.
   * Part of the dynamic file byte fee and dynamic key count fee will enter the file reward pot, and the remaining part will join the entire network staking reward pot.
   * Tips are voluntarily provided by users to storage merchants, and all fees will enter the file reward pot.
   * Any node that submits corresponding storage proof will be added to the payout queue of the file payment queue, the top four nodes in the queue will get the reward of this file's reward pool.
   * Any node that submits corresponding storage proof will get a staking quota increasement (by ~2x). Those nodes will be able to get additional staking income from the overall staking reward pot.
![dsm](assets/merchant/dsm.png)

### 3. File Order Renew, Settlement and Discount
* File Order Renew:
In the Crust network, each file has a file renewal pool. Users can pre-charge CRU to this renewal pool. At any time, other agents in the network (including users themselves) can use the funds in the renewal pool to renew files. When the file is still valid, there is no benefit from the agent's operation to renew the order. When the filet expires, the agent will receive the agent income when operating the renewal order.


* File Order Settlement:
After the user places an order and stores the file, the first 4 merchants who submit the storage proof can continue to obtain order revenue, and this revenue needs to be claimedbefore it can be collected by the merchant. The order settlement mechanism is a mechanism designed by Crust Network to better manage the file order system. Any Crust user can act as a clearer to settle unsettled orders in the network. When the settled order isan order that has expired, the clearer will receive the agent settlement income. The clearer can lock CRU to obtain the fee reduction for settlement transaction. More details can be found in [orderSettlement](orderSettlement.md)

* File Order Discount: Users can get the discount rate for file orders by locking the CRU, and the locked CRU can also get a the fee reduction for settlement transaction. Discounts can reduce file base fees, dynamic file size fees, and dynamic key-value fees. The maximum discount rate is 10%.

### 4. Retrieval Mechanism
As a data storage system, besides the storage market, DSM also takes the responsibility of incentivizing the nodes to provide retrieval service. Therefore, DSM includes another layer of incentives to encourage nodes to support data retrieval:

   * The data retrieval mechanism in Crust Network follows the [IPFS Bitswap Protocol](https://docs.ipfs.io/concepts/bitswap/). By such, data can be shared and exchanged among the nodes of the entire IPFS Network.

   * Crust Network provides a highly efficient retrieval pointing mechanism. Enabled by the Bitswap protocol and using a “credit” mechanism, nodes can resist those “free-riding” nodes that only seek to pull data without providing retrieval services. Building on the Bitswap credit mechanism, Crust Network makes the access to trusted on-chain information available for nodes, further boosting the Crust Network credit mechanism.

   * Crust Network nodes provide reliable retrieval services. The initial earning of Crust Network nodes comes from [Network Staking——GPoS](GPoS.md), and storing more user files can translate into increased effective stake limits for nodes. Driven by such a bonus and coupled with Crust Network credit mechanism, nodes offer to provide corresponding retrieval services so as to receive more user files.

Users can experience DSM in [Crust Apps](https://apps.crust.network/#/storage).

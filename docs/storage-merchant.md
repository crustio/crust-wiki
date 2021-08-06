---
id: storageMerchant
title: Storage Merchant
sidebar_label: Storage Merchant
---

Storage merchants are nodes in the Crust network that provide storage space. Storage merchants need to run sWorker modules for consensus on workload,  hard disks and network services, to support storage certification, storage services and retrieval services.

### Storage incentives for merchants
Storage merchants could receive the rewards after providing storage services. The rewards include two aspects:
1. Staking rewards: Storage merchants can obtain higher storage power and higher stake limit by providing file storage. By participating in [GPoS](GPoS.md), you can obtain stake rewards from the Crust network.
2. File storage rewards: Users need to pay the corresponding CRU for the storage amount of the storage order for the files stored in the Crust network. The portion of the stored amount can be directly obtained by the first four merchants who stored the file.

The staking reward will be proportionally distributed to the nodes participating in the staking in the network at each ERA. File storage rewards require merchants to actively settle files and receive rewards.

### How Storage Merchants Work

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/learn/dsm.png)

The process for storage merchants to obtain files and storage rewards is shown in the figure above:

1. The user places a storage order.
2. The storage fee (from users) is divided into two parts: 20% of the storage funds will be obtained by the first four merchants who store files, and 80% of the storage funds will be expanded to the entire network node staking reward.
3. After Crust storage merchants monitor new orders on the chain, they can catch the user files through the IPFS network.
4. After the Crust storage merchant completes the storage proof, the new user files will be collected by the workload report, which will increase the effective staking limit of the node. At the same time, the first four storage merchants who have completed the document storage proof will be able to participate in the distribution of 20% of the deposit.


### File settlement
Taking into account the TPS and performance reasons of the Crust Network, the Crust Network will not actively liquidate files. Merchants can actively liquidate files to obtain storage rewards. The release of the stored amount is linearly released with the validity period of the file, and the merchant can obtain the exemption of the transaction fee through the benefits funds amount.

### File reward collection and merchant collateral
Settle each file can accumulate corresponding file rewards, and the accumulated file reward pool can be collected regularly. Receipt of file rewards requires equivalent merchant collateral funds. The collateral amount can get the upper limit of reward collection for the same amount. After receiving the reward, the upper limit of reward collection will be reset.

<!--
For detailed information, refer to [merchant guidance](merchantGuidance.md).
-->
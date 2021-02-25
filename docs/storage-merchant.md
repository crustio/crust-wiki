---
id: storageMerchant
title: Storage Merchant
sidebar_label: Storage Merchant
---

Storage merchants are nodes in the Crust network that provide storage space. Storage merchants need to run sWorker modules for consensus on workload,  hard disks and network services, to support storage certification, storage services and retrieval services.

### Storage incentives for merchants
Storage merchants could receive the rewards after providing storage services. The rewards include two aspects:
1. Staking rewards (GPoS)
2. File storage rewards （storage market)

The staking reward will be proportionally distributed to the nodes participating in the staking in the network at each ERA.


### How Storage Merchants Work

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/learn/dsm.png)

The process for storage merchants to obtain files and storage rewards is shown in the figure above:

1. The user places a storage order;
2. The storage fee (from users) is divided into two parts: 20% of the storage funds will be obtained by the first four merchants who store files, and 80% of the storage funds will be expanded to the entire network node staking reward;
3. After Crust storage merchants monitor new orders on the chain, they can catch the user files through the IPFS network;
4. After the Crust storage merchant completes the storage proof, the new user files will be collected by the workload report, which will increase the effective staking limit of the node. At the same time, the first four storage merchants who have completed the document storage proof will be able to participate in the distribution of 20% of the deposit;

For detailed information, refer to [merchant guidance](merchantGuidance.md).

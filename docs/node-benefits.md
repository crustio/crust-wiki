---
id: nodeBenefits
title: Node Benefits
sidebar_label: Node Benefits
---

**The Work Report mechanism of Crust Network requires long-range transaction fees.** Each Storage Node will perform 24 Work Report transactions per day, which brings a lot of transaction fees. For this reason, Crust network provides an equity module, which can exempt the transaction fees for work reports.

Group owners or Isolation node owners can exempt the Work Report transaction fees of storage nodes by locking CRUs. Each storage node can lock any number of CRUs for the exemption. Locking 18 CRUs can exempt all the work report transaction fees for one storage node. If the number of locked CRUs is less than 18, the exemption amount will be proportional.

>For example, if 9 CRUs are locked for one storage node, 50% of the daily workload report fee will be exempted.

Because there will be multiple storage nodes (that is, Member nodes) in a Group, **each member** needs to lock 18 CRUs for a fee exemption. Considering the work report stability of the Group, It is recommended to lock 24CRUs~30CRUs for each member node to ensure that the work report transaction fee is completely exempted.

### CRU Locking Process

Go to [Crust APPS](https://apps.crust.network), select 'Account', select the 'Benefit' module, find the group created before, and click 'Increase lockup', as follows:

![pic](assets/mining/benefit_lockup1.png)

Enter the number of CRUs that **need to be added**, and sign the transaction, as follows:

![pic](assets/mining/benefit_lockup2.png)

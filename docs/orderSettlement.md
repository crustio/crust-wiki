---
id: orderSettlement
title: Order Settlement
sidebar_label: Order Settlement
---

Through two mechanisms: "File renewal" and "Order settlement", Crust Network guarantees:

1. **renewal** of file orders seeking to continue the storage;
2. **settlement** of expired file orders that have no intention of renewal.


## 1. File renewal

### 1.1 Role of the file renewal mechanism
For the file with a long-term storage need, users are suggested to deposit an additional amount into the file renewal pool after placing a storage order. This is to reward other users in the network for renewing the order for them so that the order is kept valid for a long time.

### 1.2 Pools of money for files
There are two pools of money in a file order:
1. **Storage order fee**: the fee paid by the user when placing a storage order, refer to [DSM](https://wiki.crust.network/docs/en/DSM) for details.
2. **File Renewal Pool**: an additional amount that the user deposits for the file. When a file storage order expires (currently the validity period is set for 15 days per order) and the balance of the renewal pool is sufficient, the first user to initiate a settlement request for the file will trigger the renewal of the file (equivalent to the effect of re-initiating a storage order). At the same time, the request initiator will receive a renewal reward. Both the fee of order renewal and the renewal reward to the initiator are paid from the file renewal pool.

### 1.3 File renewal reward
As mentioned in 1.2, when a file storage order expires and the balance of the file renewal pool is sufficient, any user who initiates the settlement request of the file will trigger the renewal of the file and receive a renewal reward.


## 2. Order settlement

### 2.1 Role of order settlement mechanism
When a file storage order expires, storage nodes can bring the order into settlement and obtain the corresponding reward. If the settlement is not activated by nodes, the order will always be there. As such, the order settlement mechanism is designed to serve as an incentive for users apart from the storage nodes to settle files and close orders with insufficient renewal pool balance.

### 2.2 Order settlement reward

15 days after the expiration of a file storage order, any user who initiates the file settlement will receive a settlement reward, which is calculated based on the following principles:

1. the order settlement reward is initially 0 (15 days after the order expiration);
2. the order settlement reward increases linearly with time;
3. the order settlement reward reaches its maximum 30 days after the expiration, which specifically equals the total amount of storage reward that storage nodes can obtain from the file's deposit.
4. in a file order settlement, the reward that storage nodes can obtain = 20% * the deposit of the file order - the order settlement reward.

## 3. How to renew files and settle orders

Users can go to [Crust Apps](https://apps.crust.network/#/market/settlements) -> Network -> Market -> Order Settlement to view the files that can be settled and do the settlement, as shown below.

![settlement](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/settlement.png)

The "Total Commission" column shows the final earning in a settlement (**the renewal reward + the settlement reward**). Users simply need to click on the "Settle" button on the right to do the settlement and receive the earning. (**Notice: Doing settlement requires the initiation of a transaction and the payment of a sum of transaction fee. For some files, the transaction fee may surpass the total settlement reward, hence the settlement of these files may result in negative earnings for the settlement initiator.**)

## 4. Settlement conditions and effects
The settlement mechanism will trigger the following effects:
 Settlement effects | Renewal pool balance sufficient | Renewal balance insufficient 
 :------: | :-----------:  | :-----------: 
**File expiration over 15 days**     | Triggering file renewal;<br>Triggering order settlement;<br> Receiving order settlement rewards;<br>Receiving file renewal rewards; | Receiving order settlement rewards;<br> Triggering order settlement;<br>Closing the order; 
**File expiration less than 15 days**     | Triggering file renewal;<br>Receiving file renewal rewards; | Triggering order settlement;<br>Closing the order; 

---
id: orderSettlement
title: Order Settlement
sidebar_label: Order Settlement
---

Any user can initiate a request for the settlement of a storage order. As a pre-step for [storage merchants](storage-merchant.md) to receive their order rewards, storage order settlement can also serve to renew storage orders that seek to **prolong** storage services and to **close** expired storage orders not looking for a renewal.

## Order settlement conditions and effects

The effects vary depending on different conditions:

|    |When the balance of Renew Pool is sufficient|When the balance of Renew Pool is not sufficient|
|:----|:----|:----|
|Within the expiration date|<ul><li>The current total order reward is assigned to merchants</li>|<ul><li>The current total order reward is assigned to merchants</li>|
|Within 15 days after expiration|<ul><li>Order renewal is triggered</li><li>The one doing the settlement receives an order renewal reward</li><li>The current total order reward is assigned to merchants</li>|<ul><li>Order is closed</li><li>The current total order reward is assigned to merchants</li>|
|15 days after expiration|<ul><li>Order renewal is triggered</li><li>The one doing the settlement receives an order renewal reward</li><li>The one doing the settlement receives an order settlement reward</li><li>The current total order reward is assigned to merchants after the settlement commission part is deducted from it</li>|<ul><li>Order is closed</li><li>The one doing the settlement receives an order settlement reward</li></ul><ul><li>The current total order reward is assigned to merchants after the settlement commission part is deducted from it</li>|

### Order renewal rewards

When a storage order expires (currently 180 days for each file order before expiration) and the balance of the renewal pool is sufficient, the first user who initiates a settlement request for the order will trigger the order’s renewal process (equivalent to re-initiating a storage order). At the same time, the one doing the settlement will receive a renewal reward. Both the renewal order and the renewal reward are paid by the order's renewal pool. Check out the [Storage User Guide](storageUserGuide.md) for more details about the “renewal pool”.

### Order settlement rewards

When a storage order has been expired for over 15 days, any user who initiates the settlement for the order will receive a certain portion of settlement rewards. The calculation rules appear as follows.

  1. the order settlement reward is initially 0 when the order has been expired just for 15 days.

  2. the order settlement reward linearly increases with time.

  3. the order settlement reward reaches its maximum when the order has been expired for 30 days, and the value is the current total order reward.

  4. the current total order reward is assigned to the storage merchant after the order settlement reward is deducted from it.

Check out the [Storage Merchant Guide](merchantGuidance.md) for more details about the “Current Total Order Reward”.

## Order settlement instructions

Users can go to Crust Apps -> Market -> My Merchant -> Order Settlement and get the list of orders they want to settle by clicking on the “Fetch” button as shown below.

![dsm](assets/merchant/settlement.png)

The “Total Commission” column shows the final income that can be obtained from this settlement action, **which equals order renewal commission plus order settlement commission**. Users simply need to click on the “Settle” button on the right to settle the orders and receive corresponding commissions. **As the order settlement requires the initiation of a transaction and the payment of a transaction fee, the total settlement reward for some orders may be lower than the fee to be paid, and the settlement of these orders may lead to negative incomes. Given this, users can try to get a reduction of transaction fees by utilizing the [DSM Benefits function](marketBenefits.md).**

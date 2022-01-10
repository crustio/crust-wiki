---
id: Q&AForRewardsandPunishments
title: Rewards and Punishments
sidebar_label: Rewards and Punishments
---

## 1 怎么领取质押和担保奖励？

领取奖励操作流程如下：
进入Crust APPS中，选择Staking，选择Payouts
![图片](assets/qa/payouts1.jpg)
![图片](assets/qa/payouts2.jpg)

## 2 每次质押和担保领取奖励，怎么查看收益？

打开[Subscan](https://crust.subscan.io/)
用你的收益账户查询，"收益和罚金"中可以看到领取到的数量
![图片](assets/qa/subscanreward2.jpg)

## 3 收益如何解锁？

验证人和候选人的奖励会入账Stash并自动抵押，可以观察到"total stakes"和"own effective stake"的自动增加，如果不想抵押可以执行"unbond"操作进行解锁，注意unbond的数额>为收益的值

担保人的收益会入账担保人的Stash账户，状态为绑定，若想把收益继续担保，需要手动操作，若想解绑，执行"unbond"操作即可，注意unbond的数额为收益的值

收益解锁的时间为28天

## 4 Owner节点掉线惩罚相关问题

a. 罚没触发条件

- 每个Session（1小时）结束时会判断验证人是否掉线，当检测到验证人掉线时，会触发惩罚机制，开始惩罚数额的计算
- 每次产生区块的时候，会对区块的打包人（作者）进行双花检测，如果检测到在同样的块高，试图产生两个不同区块的时候，会对其产生罚没

b. 罚没结果

抵押的CRU会被按照惩罚比率扣除，自身会被移除验证人身份，并且在处于罚没的验证人，在被罚没之前被担保的部分会丢失。

c. 罚没比率

惩罚金额为在一个SlashingSpan中发生的最大的惩罚比例乘以验证人自身有效质押量。

```shell
罚没比率 = min((3 * (k - (n / 10 + 1))) / n, 1) * 0.07
```

其中k是全网era掉线人数，n是整体验证人（出块人）的数目。10%以内的掉线人数不会触发实际的惩罚，最终会线性爬升到最大值7%。当三分之一的验证人掉线时惩罚比例约等于5%。

d. 罚没的实际扣钱时间

罚没不会立即发，发生时间会延迟108个Era(27天)后扣钱。

## 5 Member节点掉线惩罚

Member节点掉线会触发工作量上报无效的惩罚，会导致有效质押量下降。这段时间内是没有收益的，持续大约9小时，惩罚时间会自动续延

## 6 Group如何分发收益的？

链不做收益分发，需owner私下结算

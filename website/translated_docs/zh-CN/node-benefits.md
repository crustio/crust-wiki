---
id: nodeBenefits
title: Node Benefits
sidebar_label: Node Benefits
---

**主网的工作量上报需要手续费。**一般情况下，每个存储节点每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了权益模块，可以免除工作量上报的手续费。

Group owner或者Isolation节点管理者，可以通过锁定CRU的方式，减免存储节点的工作量报告手续费。每个存储节点可以锁定任意数量CRU来进行减免，锁定18个CRU可以减免一个存储节点全部的工作量报告手续费。如果锁定CRU数量小于18个，则按比例减免。

>举个例子，如果锁定9个CRU，则每天产生的工作量报告手续费中的50%会被减免掉。

在Group中，由于存储节点（也就是Member节点）会有多个，**对每个Member**需要锁定18个CRU来进行手续费减免，但考虑到存在Group中工作量上报的稳定性问题，建议每个Member节点锁定24CRU~30CRU来确保手续费被完全减免。

### CRU锁定流程

1. 进入[Crust APPS](https://apps.crust.network)中，选择Account，选择Benefit模块，找到之前创建的组，点击Increase lookup。
![图片](assets/mining/benefit_lockup1.png)

2. 输入需要**增加**的CRU数量，并进行签名交易。
![图片](assets/mining/benefit_lockup2.png)

---
id: nodeBenefits
title: Node Benefits
sidebar_label: Node Benefits
---

在构建节点的过程中，权益模块的作用至关重要。其负责对组的管理，也可以通过锁定CRU的方式来获得手续费减免等好处。本文将从多个方面进行阐述。

## 1 组管理

### 1.1 创建组

[新增绑定](new-bond.md)是创建组的前提条件，进入[Crust APPS](https://apps.crust.network)中，选择Account，选择Benefit模块，点击"Create group"

![图片](assets/benefits/creategroup1.png)

选择Stash账户，点击"Create"

![图片](assets/benefits/creategroup2.png)

### 1.2 白名单管理

#### 1.2.1 增加白名单

Member账户需要添加到Group的白名单后才能加入Group中，进入[Benefit模块](https://apps.crust.network/#/benefit)，在对应的组中，点击"Add allowed accounts"

![图片](assets/benefits/addallowaccount1.png)

点击"Add allowed"，选择目标Member账户，点击"Submit"

![图片](assets/benefits/addallowaccount2.png)

#### 1.2.1 移除白名单

进入[Benefit模块](https://apps.crust.network/#/benefit)，在对应的组中，点击"Remove allowed accounts"

![图片](assets/benefits/removeallowaccount1.png)

点击"Remove allowed"，选择目标Member账户，点击"Submit"

![图片](assets/benefits/removeallowaccount2.png)


## 2 手续费减免

**主网的工作量上报需要手续费。**一般情况下，每个存储节点（也就是Member节点，或Isolation节点中的Member身份）每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了权益模块，可以免除工作量上报的手续费。

Group owner或者Isolation节点管理者，可以通过锁定CRU的方式，减免存储节点的工作量报告手续费。每个存储节点可以锁定任意数量CRU来进行减免，锁定18个CRU可以减免**一个存储节点**全部的工作量报告手续费。如果锁定CRU数量小于18个，则按比例减免。

> 举个例子，如果Group中有1个Member，这时锁定9个CRU，则每天产生的工作量报告手续费中的50%会被减免掉。再比如如果Group中有2个Member，这时锁定9个CRU，则每天产生的工作量报告手续费中的25%会被减免掉

在Group中，由于存储节点会有多个，对每个Member需要锁定18个CRU来进行手续费减免，但考虑到存在Group中工作量上报的稳定性问题，**建议针对每个Member节点锁定24CRU~30CRU来确保手续费被完全减免**。


### 2.1 增加锁仓

可以通过锁定CRU的方式，减免存储节点的工作量报告手续费。每个存储节点可以锁定任意数量CRU来进行减免，锁定18个CRU可以减免一个Member节点全部的工作量报告手续费。例如该组有3个Member，则需要增加锁仓54个CRU，确保Stash账户有54个可转账CRU用来锁仓。

进入[Benefit模块](https://apps.crust.network/#/benefit)，在对应的组中，点击"Increase lockup"

![图片](assets/benefits/increaselockup1.png)

选择该组的Stash账户，输入锁仓绑定数额，点击"Bond"

![图片](assets/benefits/increaselockup2.png)
、
### 2.2 减少锁仓

#### 2.2.1 解锁

进入[Benefit模块](https://apps.crust.network/#/benefit)，在对应的组中，点击"Unlock"

![图片](assets/benefits/unbond1.png)

选择该组的Stash账户，输入需要解锁的数额，点击"Unbond"

![图片](assets/benefits/unbond2.png)

#### 2.2.2 提取解绑资金

解锁中的资金需要等待112个era才可以提取，可以点击"**!**"查看解绑进度

![图片](assets/benefits/unlocking.png)

解锁时间如果超过112个era，进入[Benefit模块](https://apps.crust.network/#/benefit)，在对应的组中，点击"Withdraw unbonded funds"，提取解锁资金

![图片](assets/benefits/withdraw.png)

如果想把解锁中的资金重新绑定，重新使用Member手续费减免功能，进入[Benefit模块](https://apps.crust.network/#/benefit)，在对应的组中，点击"Rebond"，即可进入锁定状态

![图片](assets/benefits/rebond1.png)

![图片](assets/benefits/rebond2.png)


## 3 Member操作

### 3.1 加组

将已经被添加到白名单的Member账户进行加组操作，确保Member节点发送过Workreport，进入[Benefit模块](https://apps.crust.network/#/benefit)，点击"Join group"

![图片](assets/benefits/joingroup1.png)

将目标Member账户加入到对应组中，点击"Join group"

![图片](assets/benefits/joingroup2.png)


### 3.2 退组

进入[Benefit模块](https://apps.crust.network/#/benefit)，点击"Quit group"，选择需要退组的Member账户
![图片](assets/benefits/quitgroup1.png)
![图片](assets/benefits/quitgroup2.png)




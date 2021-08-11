---
id: newBond
title: New Bond
sidebar_label: New Bond
---

Crust 账户是你链上的身份的体现，也是各类交易的主体。作为节点，你需要对应的账户来和节点进行绑定，从而获取区块奖励。Crust 账户作为标准的双账户模型 Controller/Stash，需要进行特定的账户绑定操作。在双账户模型中，通过绑定指定金额到Controller账户，隔离了风险，使得管理所有资产的Stash账户相对安全。

通过操作 [Crust APPs](http://apps.crust.network/)，本节将说明如何创建账号和绑定账号关系。

## 1 创建 Controller 与 Stash 账户

### 1.1 Controller

首先我们将新建一个账户用于资产操作，创建账户的说明点击此[链接](crust-account.md)：

我们将第一个账户命名为 CONTROLLER 用来提醒自己，这个账号将用做 Controller，用于操作资产。账户里面需要有一定数量的 CRU 用于支付各类交易的交易费。

### 1.2 Stash

重复[新建账户](crust-account.md)步骤，再次创建另一个账户：

我们将第二个新建的账号用做 Stash 账号。Stash 账号是用户的资产账号，用来管理用户的资产。账户里面需要有一定数量的 CRU 进行后续的各类交易和资产抵押等操作。

## 2 建立 controller 和 stash 的绑定关系

点击导航栏的“网络”下的“质押”。选中“账户操作”
![](assets/newBond/stakingAccount.png)
 
点击右上角的 “存储账户”，并在弹出页面中选择 Stash 和 Controller 账户，填入需要抵押的金额（这里的金额代表许可 Controller 账户操作的金额），最后点击 “绑定”。

![](assets/newBond/bond.png)
 
抵押操作涉及链上操作，因此需要解锁 Stash 账户并消耗一定手续费。

![](assets/newBond/sendTx.png)
 
最后，抵押成功了，可以看到在“账户操作”页面里新增了一个抵押关系。
![](assets/newBond/stakingSuccess.png)
 
到目前为止，您的账户配置已经完成。
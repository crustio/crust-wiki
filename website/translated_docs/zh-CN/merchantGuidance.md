---
id: merchantGuidance
title: Merchant Guidance
sidebar_label: Merchant Guidance
---

[Group Owner](ownerNode.md)可以注册成为商户。成为商户之后，将会获得额外两部分收益：

1. 存储用户数据带来质押上限的提升；
2. 存储市场的订单奖励；

> 本文中提到的存储市场奖励仅限订单奖励，不涉及存储用户文件后带来的质押上限的提升。想要了解质押上限提升规则请阅读[经济白皮书](https://ipfs-hk.decoo.io/ipfs/Qmdy2Hqdxoq2PuAkvoDZ5SqYjAKym58Gh39Lm5gPChyHwL)

本文将提供以下指引：如何成为商户、如何配置接单策略、如何锁定保障金并获得存储市场收益，这些指引将帮助新的存储商户在Crust网络中平稳运营。

## 1. 成为新商户

设置一个保障金是Group Owner成为商户的基本条件，同时也是商户领取存储市场收益的前置条件。

Group Owner进入 [Crust Apps](https://apps.crust.network) -> “账户” -> “权益” -> “存储市场”页面，找到您Group Owner的Stash账户。点击Stash账户右边的“增加保障金”，输入对应数额保障金。如下图：

![initialCollateral](assets/merchant/initialCollateral.png)

在账户锁定了保障金后，进入 [Crust Apps](https://apps.crust.network) -> “存储市场” -> “存储商户” -> “我的商户” 页面，可以看到自己的商户初始信息。其中，“收益”一项代表了目前尚未领取的订单奖励（对订单发起[清算](orderSettlement.md)后，对应的订单奖励将会计入这一项），“最大可领取收益”代表最高可以累计的未领取收益。

![merchantPage](assets/merchant/merchantPage.png)

保障金的金额决定了商户可以积累多少待领取存储市场收益，商户待领取收益和保障金的关系将在[获得存储市场奖励](#3-获得存储市场奖励)中介绍。

## 2. 配置存储订单获取策略

sManager 负责处理Crust网络中的订单文件。节点运维人员可以通过定制sManager来定制商户的接单策略。了解更多请查看[sManager 代码仓库](https://github.com/crustio/crust-smanager#readme)

## 3. 获得存储市场奖励

存储市场奖励，来自于存储订单。用户为存储订单支付费用的20%将会被最先完成存储封装（“封装”一词可查阅[术语表](glossary.md)）的四个节点获得。但存储市场奖励不会直接进入到存储商户的账户余额中。为了获得存储市场奖励，存储商户需要：

1. 锁定保障金；
2. 清算存储订单；
3. 领取存储市场奖励；

### 3.1 保障金锁定

在[订单清算](orderSettlement.md)后，属于存储商户的订单奖励不会直接进入商户余额，而是处于一种待领取的状态。**待领取的奖励总额有一个上限，这个上限跟锁定的保障金总额相等。**

> 举个例子：如果商户锁定了10个CRU的担保金，那么这个商户在不断提供存储市场服务的过程中将会不断累积存储订单奖励。直到总待领取奖励达到10CRU后，新的订单奖励将被丢弃。为了避免存储订单奖励被丢弃，商户有两个选择：

    1. 领取奖励带商户的余额，将待领取奖励清零；
    2. 锁定更多保障金，这样可以增大待领取奖励金的累计值。

以下是几个保障金相关的操作：

#### 3.1.1 增加保障金

进入 [Crust Apps](https://apps.crust.network) -> "账户" -> “权益” -> “存储市场”。找到GroupOwner的Stash账号，点击“增加保障金”按钮，在弹出框中输入要增加的保障金金额。

![addCollateral](assets/merchant/addCollateral.png)

![inputAddAmount](assets/merchant/inputAddAmount.png)

成功增加保障金后，我们可以看到用户的“最大可领取收益”也相应增加了。

![addedCollateral](assets/merchant/addedCollateral.png)

#### 3.1.1 减少保障金

同样的，存储商户可以减少锁定的保障金，只需要点击“减少保障金”按钮，在弹出框中输入要减少的保障金金额即可。

![cutCollateral](assets/merchant/cutCollateral.png)

### 3.2 订单奖励清算

清算是商户获得存储订单奖励的前置步骤，清算后对应的订单奖励会被累计到对应商户的待领取奖励中。清算条件和清算步骤可以参考[清算指南](orderSettlement.md)。

Crust网络设置了存储市场权益机制，商户的清算交易手续费也可以通过锁定保障金来减免，参考[存储市场权益指南](marketBenefits.md)了解更多。

### 3.3 存储市场奖励领取

如果存储商户通过前面的指引，锁定了足够的保障金并且完成了订单清算，获得了待领取奖励，那么商户可以按以下步骤领取这些奖励。

进入 [Crust Apps](https://apps.crust.network) -> "存储市场" -> “存储商户” 页.您的Merchant账号对应的“收益”一栏的值，代表您存储市场的收益，清算的订单奖励也会被加入到您的“收益”中。点击“领取收益”即可提取存储市场收益。

![getReward](assets/merchant/getReward.png)

>注意：领取的奖励将会进入账户余额，但会被锁定28天，28天后才能进行转账。

---
id: merchantGuidance
title: Merchant Guidance
sidebar_label: Merchant Guidance
---

Group Owner可以注册成为商户。成为商户之后，将会获得额外两部分收益：

1. 存储用户数据带来质押上限的提升；
2. 存储市场的订单奖励；

> 本文中提到的存储市场奖励仅限订单奖励，不涉及存储用户文件后带来的质押上限的提升。想要了解质押上限提升规则请阅读[经济白皮书](https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/ecowhitepaper_en.pdf)

本文将提供以下指引：如何注册成为商户、如何配置接单策略、如何获得存储市场的奖励，这些指引将帮助新的存储商户在Crust网络中平稳运营。

## 1. 新商户注册指引

Group Owner进入 [Crust Apps](apps.crust.network) -> DSM -> Storage Merchant. 点击右上角的“注册”。如下图：

![register](assets/merchant/register.png)

> 注意：注册之前，需要确保Group Owner账户锁定超过0.01CRU的基础[保障金](#31-保障金锁定)。

## 2. 配置存储订单获取策略

即将到来。

## 3. 获得存储市场奖励

存储市场奖励，来自于存储订单。用户为存储订单支付费用的20%将会被最先完成存储封装（“封装”一词可查阅[术语表](glossary.md)）的四个节点获得。但存储市场奖励不会直接进入到存储商户的账户余额中。为了获得存储市场奖励，存储商户需要完成保障金锁定、订单奖励清算以及存储市场奖励领取三个操作。

### 3.1 保障金锁定

在[订单清算](orderSettlement.md)后，订单奖励实际上处于一种待领取的状态。而待领取的奖励总额有一个上限，这个上限跟锁定的担保金总额相等。

> 举个例子：如果商户锁定了10个CRU的担保金，那么这个商户在不断提供存储市场服务的过程中将会不断累积存储订单奖励。直到总待领取奖励达到10CRU后，新的订单奖励将被丢弃。这个时候商户有两个选择：

    1. 领取奖励带商户的余额，此时待领取奖励变为0，可以重新积累；
    2. 锁定更多保障金，这样可以增大待领取奖励金的累计值。

以下是几个保障金相关的操作：

#### 3.1.1 增加保障金

进入 [Crust Apps](apps.crust.network) -> DSM -> Storage Merchant。在GroupOwner账号栏中，点击带有'+'号的 “增加保障金”按钮，在弹出框中输入要增加的保障金金额。

![addCollateral](assets/merchant/addCollateral.png)

![addAmount](assets/merchant/addAmount.png)

成功增加保障金后，我们可以看到用户的“最大可领取收益”也相应增加了。

#### 3.1.1 减少保障金

同样的，存储商户可以减少锁定的保障金，只需要点击带有'-'号的 “减少保障金”按钮，在弹出框中输入要减少的保障金金额即可。

![cutCollateral](assets/merchant/cutCollateral.png)

![inputCutAmount](assets/merchant/inputCutAmount.png)

### 3.2 订单奖励清算

清算是商户获得存储订单奖励的前置步骤，清算后对应的订单奖励会被累计到对应商户的待领取奖励中。清算条件和清算步骤可以参考[清算指南](orderSettlement.md)。

### 3.3 存储市场奖励领取

如果存储商户通过前面的指引，锁定了足够的保障金并且完成了订单清算，获得了待领取奖励，那么商户可以按以下步骤领取这些奖励。

进入 [Crust Apps](apps.crust.network) -> Network -> My merchant 页.您的Merchant账号对应的“收益”一栏的值，代表您存储市场的收益，清算的订单奖励也会被加入到您的“收益”中。点击“领取收益”即可提取存储市场收益。

![getReward](assets/merchant/getReward.png)

---
id: claimsBack
title: Crust Claims Back
sidebar_label: Crust Claims Back
---

如果您想将**Crust 预览网 Maxwell的代币重新映射回ERC20 CRU**，您可以通过本教程学习到如何进行ERC20 CRU的领回。

## 注意

1. 领回的操作**不会实时到账**，每一个领回周期为：**7天**
2. 领回需要**扣除一定的CRU作为以太坊转账的手续费**，手续费为：**2 CRUs**

> 同一领回周期的**多笔转账总和需要大于一笔手续费**，小于手续费的领回会被判定为无效，不予领回

3. 每一个领回周期结束和清算后，会在Crust Maxwell预览网上**将总领回的代币进行销毁**，保证认领池和领回池的数据一致性

## 步骤

### 一、发送领回交易

首先，你需要在Crust Maxwell预览网上向 ***Crust官方认证领回地址*** 发起一笔CRU转账交易，这个操作需要在[Crust Apps的账户页面](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/accounts)进行，发起转账之前请务必阅读：

1. ***Crust官方领回地址*** 为：[5HbMS3P5e6rMP9KTDkVTZCaytKQkbqsV7HGnxgAgvv5d64tx](https://crust.subscan.io/account/5HbMS3P5e6rMP9KTDkVTZCaytKQkbqsV7HGnxgAgvv5d64tx) (已认证地址：**CRU BRIDGE\<ERC-20\>🚗💰**)
2. ⚠️ 请注意在一个领回周期内（7天），需要**保证领回总金额大于2 CRUs**

![claim_back_transfer](assets/claimsBack/claim-back-transfer.png)

### 二、绑定以太坊地址

在[Crust Apps的发送交易模块](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/extrinsics)，选择`claims`和`bondEth`，并填入你想领回的以太坊地址，注意：

1. ⚠️ **提交交易的账户**需要和你发送交易的账户是**同一个**

![claim-back-bond-eth](assets/claimsBack/claim-back-bond-eth.png)

2. 交易显示成功后，最好如下图所示，到[Chain State](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/chainstate)页面查询确认，如果查询不到，请重复执行第1步骤

![claim-back-query-eth](assets/claimsBack/claim-back-query-eth.png)

### 三、后续

在执行完一和二步骤之后，官方会在一个领回周期内，对所有的领回交易进行清算，届时会向社区公布所有的领回地址和金额。

## 参考

领回涉及到的代码**已开源**：

1. [Crust Bridge](https://github.com/decloudf/crust-bridge)

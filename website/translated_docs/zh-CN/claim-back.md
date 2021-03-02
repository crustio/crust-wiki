---
id: claimBack
title: Crust Claim Back
sidebar_label: Crust Claim Back
---

如果您想将**Crust 预览网 Maxwell的代币重新映射回ERC20 CRU**，您可以通过本教程学习到如何进行ERC20 CRU的转回。

## 注意

1. 转回的操作**不会实时到账**，每一个转回周期为：**7天**
2. 转回需要**扣除一定的CRU作为以太坊转账的手续费**，手续费为：**3 CRUs**

> 同一转回周期的**多笔转账总和需要大于一笔手续费**，小于手续费的转回会被判定为无效，不予转回

3. 每一个转回周期结束和清算后，会在Crust Maxwell预览网上**将总转回的代币进行销毁**，保证认领池和转回池的数据一致性

## 步骤

### 一、绑定以太坊地址

首先，**⚠️你需要绑定你的以太坊地址，请注意，对于没有绑定以太坊地址的转回交易，你可能会丢失掉转回的CRU⚠️**，所以务必绑定你需要领回的以太坊地址

1. 在[Crust Apps的发送交易页面](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/extrinsics)，选择`claims`和`bondEth`，并填入你想转回的以太坊地址

![claim-back-bond-eth](assets/claimBack/claim-back-bond-eth.png)

2. 交易显示成功后，最好如下图所示，到[Crust Apps的链状态页面](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/chainstate)页面查询确认，如果查询不到，请重复执行1步骤

![claim-back-query-eth](assets/claimBack/claim-back-query-eth.png)

### 二、发送转回交易

其次，你需要在Crust Maxwell预览网上向 ***Crust Maxwell认证转回地址*** 发起一笔CRU转账交易，这个操作需要在[Crust Apps的账户页面](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/accounts)进行，发起转账之前**请务必阅读**：

1. ***Crust Maxwell转回地址*** 为：[5HbMS3P5e6rMP9KTDkVTZCaytKQkbqsV7HGnxgAgvv5d64tx](https://crust.subscan.io/account/5HbMS3P5e6rMP9KTDkVTZCaytKQkbqsV7HGnxgAgvv5d64tx) (已认证地址：**CRU BRIDGE\<ERC-20\>🚗💰**)
2. ⚠️ 请注意在一个转回周期内（7天），需要**保证转回总金额大于3 CRUs**
3. 发起转回交易的账户已经执行过[步骤一](#一绑定以太坊地址)进行以太坊地址的绑定

![claim_back_transfer](assets/claimBack/claim-back-transfer.png)

### 三、后续

在执行完一和二步骤之后:

1. 会在一个转回周期内，对所有的转回交易进行清算
2. 发起转回的地址和认领地址为同一个，均为合约: [0x17a9037cdfb24ffcc13697d03c3bcd4dff34732b](https://etherscan.io/address/0x17a9037cdfb24ffcc13697d03c3bcd4dff34732b), 大家可自行查询合约所有操作和转账记录

## 参考

转回涉及到的代码**已开源**：

1. [Crust Bridge](https://github.com/decloudf/crust-bridge)

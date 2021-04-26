---
id: claimCRU18
title: Crust Claim CRU18
sidebar_label: Crust Claim CRU18
---

该文档只针对持有CRU18代币用户。CRU18在预览网络是无法转账和抵押的，用户可提前将ERC20的CRU18映射到 Crust 预览网 Maxwell，等待CRUST主网上线之后，可以直接抵押使用，通过本教程一步一步学习到如何进行Maxwell CRU18的认领。

[CRU18持币用户列表](https://cn.etherscan.com/token/0x655ad6cc3cf6bdccab3fa286cb328f3bce9a3e38#balances)

## 准备工作

为了防止认领的流程出现异常错误，导致您的认领失败，我们推荐了以下几个工具程序来辅助您完成整个认领过程：

> 不用过分担心不熟悉这些工具的使用，我们会在下面的认领步骤中详细阐述每一个工具的。

1. [MyEtherWallet](https://www.myetherwallet.com/interface/dashboard)
2. [Crust Apps](https://apps.crust.network/)


## 步骤

### 一．确认你的钱包拥有CRU18代币，并且拥有私钥签名权限

![Connect Wallet1](assets/claimcru18/1checkcru18.jpg)

### 二．签名验证和桥接代币

登陆[Crust Apps](https://apps.crust.network/#/claims)的Claims模块

![Connect Wallet1](assets/claimcru18/2claimtokens.jpg)

1. 选择 Claim CRU18 模块
2. 选择您需要认领的Maxwell预览网账户（切记备份助记词和backup file）
3. 点击“继续”

![Connect Wallet1](assets/claimcru18/3claimtokens.jpg)

### 三. 登录MyEtherWallet连接钱包

1. 打开[MyEtherWallet](https://www.myetherwallet.com/access-my-wallet):
    - 点击MEW wallet
    - 连接你**发送交易的钱包**（下列流程以ImToken举例）

**⚠️ 这一步必须特别注意，确保连接的钱包地址拥有CRU18（我们需要用这个地址的私钥进行消息签名）

![Connect Wallet1](assets/claimcru18/4myetherwallet.jpg)

![Connect Wallet1](assets/claimcru18/5myetherwallet.jpg)

![Connect Wallet1](assets/claimcru18/6myetherwallet.jpg)

2. 在ImToken的手机端，点击右上角扫码图标，扫描MyEtherWallet显示的二维码并授权MyEtherWallet

![Connect Wallet1](assets/claimcru18/7mytokenscan.jpg)

![Connect Wallet1](assets/claimcru18/8confirmwallet.jpg)

3.授权成功后，您将会在MyEtherWallet页面看到以下画面，这意味着您的钱包连接成功了

![Connect Wallet1](assets/claimcru18/8-1.jpg)

### 四. 获取以太坊签名

1. 在Crust Apps Claim界面，点击灰色框复制其中文字

![Connect Wallet1](assets/claimcru18/9copy.jpg)

2. 在MyEtherWallet界面，如下图所示点击左侧的Message选项，选择Sign Message，并将灰色框中文字粘贴到对话框中, 点击Sign

![Connect Wallet1](assets/claimcru18/10copysignmessage.jpg)

3. 此时会在ImToken钱包端弹出**授权签名**的提示，请点击“确认”, **⚠️ 请注意，这一步有可能出现MyEtherWallet和ImToken通讯中断导致没有弹出授权信息，此时请重新执行**[步骤三](#三-登陆myetherwallet连接钱包)

![Connect Wallet1](assets/claimcru18/11confirmsign.jpg)

4. 在回到MyEtherWallet界面，点击Confirm Signing

![Connect Wallet1](assets/claimcru18/12confirmmessage.jpg)

5. 此时在MyEtherWallet上会出现Signed Message, 点击Copy

![Connect Wallet1](assets/claimcru18/13copysignedmessage.jpg)

### 五. 完成认领

在获取到[步骤四](#四-获取以太坊签名)的以太坊签名之后，拿着复制好的**Signed Message**, 回到**Crust Apps Claims**页面：

1. 粘贴以太坊签名到下图所示区域, 点击“确认”，如果成功查询到链上有Claim记录则会出现下图所示绿色的提示

![Connect Wallet1](assets/claimcru18/14claim.jpg)

2. 点击认领

![Connect Wallet1](assets/claimcru18/15submit.jpg)

3. 查询CRU18是否认领成功

![Connect Wallet1](assets/claimcru18/16checkdone.jpg)


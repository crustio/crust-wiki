---
id: claimCRU18
title: Crust CRU18 Claim
sidebar_label: Crust CRU18 Claim
---

该文档针对主网CRU18的认领，用户使用ETH账户进行签名，并在Maxwell预览网上**提前映射CRU18信息**，并在主网上线后映射到主网。

## 注意事项

1. **在Maxwell上，CRU18无法进行质押获取收益**，CRU18的质押功能仅在主网上线后生效
2. 主网上线后，会将您认领CRU18的**Maxwell地址转换为主网地址**，<font color='red'>⚠️务必保留好您的Maxwell地址私钥/助记词⚠️</font>
3. CRU18 **认领只能进行一次**，请**务必选择好您的Maxwell地址(主网地址)并保管好您的私钥信息**，所有信息都被Maxwell链记录，无法进行更新和更改

## 认领准备工作

为了防止CRU18认领的流程出现异常错误，导致您的认领失败，我们推荐了以下几个工具程序来辅助您完成整个认领过程：

> 不用过分担心不熟悉这些工具的使用，我们会在下面的认领步骤中详细阐述每一个工具的。

1. [MyEtherWallet](https://www.myetherwallet.com/interface/dashboard)
2. [Crust Apps](https://apps.crust.network/)

## 步骤

### 一．确认你的钱包拥有CRU18代币，并且拥有私钥签名权限

确保你在CRU18持币列表中:[Etherscan CRU18持币用户列表](https://cn.etherscan.com/token/0x655ad6cc3cf6bdccab3fa286cb328f3bce9a3e38#balances)

![Connect Wallet1](assets/claimcru18/1checkcru18.jpg)

### 二．签名验证和桥接代币

登陆[Crust Apps](https://apps.crust.network/#/claims)的Claims模块

![Connect Wallet1](assets/claimcru18/2claimtokens.jpg)

1. 选择Claim CRU18模块
2. 选择您需要认领的Maxwell预览网账户（**⚠️切记备份助记词/backup file&密码⚠️**）
3. 点击“继续”

![Connect Wallet1](assets/claimcru18/3claimtokens.jpg)

### 三. 登录MyEtherWallet连接钱包

1. 打开[MyEtherWallet](https://www.myetherwallet.com/access-my-wallet):
    - 点击MEW wallet
    - 连接你拥有ERC20 CRU18的钱包（下列流程以ImToken举例）

**⚠️ 这一步必须特别注意，确保连接的钱包地址拥有CRU18（我们需要用这个地址的私钥进行消息签名）**

![Connect Wallet1](assets/claimcru18/4myetherwallet.jpg)

![Connect Wallet1](assets/claimcru18/5myetherwallet.jpg)

![Connect Wallet1](assets/claimcru18/6myetherwallet.jpg)

2. 在ImToken的手机端，点击右上角扫码图标，扫描MyEtherWallet显示的二维码并授权MyEtherWallet

![Connect Wallet1](assets/claimcru18/7mytokenscan.jpg)

![Connect Wallet1](assets/claimcru18/8confirmwallet.jpg)

3.授权成功后，您将会在MyEtherWallet页面看到以下画面，这意味着您的钱包连接成功了

![Connect Wallet1](assets/claimcru18/8-1.jpg)

### 四. 获取以太坊签名

1. 在Crust Apps Claim-Claim CRU18界面，点击灰色框复制其中文字

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

## 参考

CRU18 Claims涉及到的代码均**已开源**：

1. [Crust CRU18 Bridge](https://github.com/decloudf/crust-bridge/tree/main/mainnet-bridge)

2. [Crust Claims](https://github.com/crustio/crust/tree/maxwell/cstrml/claims)

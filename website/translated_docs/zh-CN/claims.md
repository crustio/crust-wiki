---
id: claims
title: CRU Claims
sidebar_label: CRU Claims
---

如果您想将**ERC20 CRU映射到Crust主网**，您可以通过本教程一步一步学习到如何进行Crust主网CRU的认领，下图显示了整个认领的过程

![Overview](assets/claims/overview_zh.jpeg)

## 准备工作

为了防止认领的流程出现异常错误，导致您的认领失败，我们推荐了以下几个工具程序来辅助您完成整个认领过程：

> 不用过分担心不熟悉这些工具的使用，我们会在下面的认领步骤中详细阐述每一个工具的使用流程。

1. [MyEtherWallet](https://www.myetherwallet.com/wallet/access)
2. [ImToken](https://token.im/) 或者 [Metamask(小狐狸钱包)](https://metamask.io/download.html)
3. [Crust Apps](https://apps.crust.network/)

## 步骤

###  ❗️ 所有交易所的账户均不适用

**不要**使用交易所账户完成以下步骤，
<font color='red'>否则会造成认领失效造成资产损失，后果自负</font>

### 一. 销毁ERC20 CRU

首先，**请务必在您销毁ERC20 CRU之前确保已阅读以下注意事项**，一旦发起销毁交易，将**无人**能帮助您找回资产

> 1. ⚠️ 请注意此步骤销毁的是ERC20 CRU，不是ETH或其他ERC20代币
> 2. ⚠️ 请确保您拥有发起交易账户的私钥签名权限（所有交易所创建的账户均不适用, 请转到拥有私钥的钱包进行下列操作）
> 3. ⚠️ 请确保您单笔销毁交易**小于5万CRU**
> 4. ⚠️ 确认ERC20 CRU代币：[CRUST](https://etherscan.io/token/0x32a7C02e79c4ea1008dD6564b35F131428673c41)
> 5. ⚠️ 销毁地址：[0x0000000000000000000000000000000000000001](https://etherscan.io/address/0x0000000000000000000000000000000000000001)

下面，您可以销毁您的ERC20 CRU了 😄

1. 访问[Crust Apps](https://apps.crust.network/#/claims)的Claim CRU模块，向 ***销毁地址([0x0000000000000000000000000000000000000001](https://etherscan.io/address/0x0000000000000000000000000000000000000001))*** 发起一笔**CRU的转账交易**，这里你可以用任意以太坊钱包发起交易（**再次注意，你需要拥有此钱包账户的私钥**）

![Apps Claim0-0](assets/claims/apps_claims0-0.jpg)

2. 请确认您的交易：
    - 成功
    - 已有**6块以上的confirmations**
    - **复制这笔成功交易的Tx Hash值**
![Apps Claim0-1](assets/claims/apps_claims0-1.jpg)

### 二. 验证交易

访问[Crust Apps](https://apps.crust.network/#/claims)的Claim CRU模块

1. 选择您需要认领的账户，如果还未创建账户，可以参考此[创建账户教程](https://wiki.crust.network/docs/zh-CN/crustAccount)
2. 填入您[步骤一](#一-销毁erc20-cru)复制的Tx Hash值
3. 请确认您销毁的**总额小于等于Claim Limit**
4. 点击“继续”，这步**会等待一段时间**，会验证您交易的合法性

![Apps Claims2](assets/claims/apps_claims2.png)

如果页面右上角有红色报错，表示您在此步骤失败，那么有可能是下列原因导致：

1. 您销毁交易的confirmations不足6个
2. 您销毁交易的总额大于了Claim Limit，如果是这样，请等待Claim Limit恢复
3. 网络拥堵的情况下也有可能出现认领失败，您只需要再试一次即可

### 三. 登陆MyEtherWallet连接钱包

> 由于MyEtherWallet支持众多钱包，下列步骤将会以'ImToken'为例

**⚠️ 这一步必须特别注意，确保连接的钱包地址和[步骤一](#一-销毁erc20-cru)中成功发送交易的地址相同**（我们需要用这个地址的私钥进行消息签名）

1. 打开[MyEtherWallet](https://www.myetherwallet.com/wallet/access):
    - 点击 'Mobile Apps'
    - 连接你**发送交易的钱包**

![Connect Wallet1](assets/claims/connect_wallet1.jpg)

![Connect Wallet2](assets/claims/connect_wallet2.jpg)

![Connect Wallet3](assets/claims/connect_wallet3.png)

2. 在ImToken的手机端，点击右上角扫码图标，扫描MyEtherWallet显示的二维码并授权MyEtherWallet

![Connect Wallet4](assets/claims/connect_wallet4.jpg)

![Connect Wallet5](assets/claims/connect_wallet5.jpg)

**如果使用MetaMask(小狐狸钱包), 选择`Browser Extension`**

![Connect Wallet7](assets/claims/connect_wallet7.jpg)

![Connect Wallet8](assets/claims/connect_wallet8.jpg)

![Connect Wallet9](assets/claims/connect_wallet9.jpg)

3. 授权成功后，您将会在MyEtherWallet页面看到以下画面，这意味着您的钱包连接成功了

![Connect Wallet6](assets/claims/connect_wallet6.jpg)

### 四. 获取以太坊签名

请确保[步骤二](#二-验证交易)**成功之后**，再继续下列步骤：

1. 在Crust Apps Claim界面，**点击灰色框复制其中文字**

![Sign Msg1](assets/claims/sign_msg1.jpg)

2. 在MyEtherWallet界面，如下图所示点击左侧的**Message选项**，选择**Sign Message**，并将灰色框中文字粘贴到对话框中, 点击**Sign**

![Sign Msg2](assets/claims/sign_msg2.png)

3. 钱包授权确认

    -  此时会在ImToken钱包端弹出**授权签名**的提示，请点击“确认”, **⚠️ 请注意，这一步有可能出现MyEtherWallet和ImToken通讯中断导致没有弹出授权信息，此时请重新执行**[步骤三](#三-登陆myetherwallet连接钱包)

    ![Sign Msg3](assets/claims/sign_msg3.jpg)

    - 如果使用MetaMask(小狐狸钱包)，此时会在MetaMaskn钱包端弹出”Signature Request“的提示，点击”sign“签名

    ![Sign mm](assets/claims/sign_msgmm.jpg)

4. **复制签名**

![Sign Msg4](assets/claims/sign_msg4.jpg)

### 五. 完成认领

在获取到[步骤四](#四-获取以太坊签名
)的以太坊签名之后，拿着复制好的**Signed Message**, 回到**Crust Apps Claims**页面：

1. 粘贴以太坊签名到下图所示区域, 点击“确认认领”，如果成功查询到链上有Claim记录则会出现下图所示绿色的提示

![Claim Done1](assets/claims/claim_done1.jpg)

2. 点击认领

![Claim Done2](assets/claims/claim_done2.jpg)

3. 认领成功

![Claim Done3](assets/claims/claim_done3.jpg)

## 参考

Claims涉及到的代码均**已开源**：

1. [MainNet Claim](https://github.com/decloudf/crust-bridge/tree/main/mainnet-claim)
2. [Crust Claims](https://github.com/crustio/crust/tree/mainnet-staging/cstrml/claims)

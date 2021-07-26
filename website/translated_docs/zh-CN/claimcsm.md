---
id: claimCSM
title: Crust CSM Claim
sidebar_label: Crust CSM Claim
---

[CSM](https://ipfs.decoo.io/ipfs/QmdPsqY6W1v5KUYH8Q1m8SCJwFLXSwRJeeeft9WS6ct3JA)是Crust Shadow的原始通证，初始发行量为2亿个，并将免费投发社区。用户可提前将ERC20的CSM映射到Crust预览网Maxwell参与存储市场相关活动，通过本教程一步一步学习到如何进行Maxwell CSM的认领。

## 准备工作

为了防止认领的流程出现异常错误，导致您的认领失败，我们推荐了以下几个工具程序来辅助您完成整个认领过程：

> 不用过分担心不熟悉这些工具的使用，我们会在下面的认领步骤中详细阐述每一个工具的。

1. [MyEtherWallet](https://v5.myetherwallet.com/)
2. [imtoken](https://token.im/)
3. [Crust Apps](https://apps.crust.network/)


## 步骤

### 〇. ⚠️⚠️⚠️ 所有交易所的账户均不适用

使用交易所账户发起转账（提币）交易，均会失效，造成资产损失，<font color='red'>后果自负</font>！

### 一. 发送CSM认领交易

首先，您需要在以太坊上向 ***Crust Maxwell认领地址*** 发起一笔**CSM的转账交易**，这个操作可以在任意的钱包端完成，但发起转账之前一定要注意:

> 1. ⚠️ 请注意此步骤发送到认领地址的是CSM，不是ETH和CRU
> 2. ⚠️ 您拥有发起交易账户的私钥签名权限（所有交易所创建的账户均不适用, 请转到拥有私钥的钱包进行下列操作）
> 3. ⚠️ 确认CSM ERC20的合约地址：[CSM](https://etherscan.io/token/0x2620638eda99f9e7e902ea24a285456ee9438861)
> 4. ⚠️ Crust Maxwell认领地址为：[0x17a9037cdfb24ffcc13697d03c3bcd4dff34732b](https://etherscan.io/address/0x17a9037cdfb24ffcc13697d03c3bcd4dff34732b)

登陆[Crust Apps](https://apps.crust.network/#/claims/maxwellCsmClaims)的Claim CSM模块

向***Crust Maxwell认领地址***发起一笔**CSM的转账交易**

![Apps Claim0](assets/claimcsm/apps_claims01.jpg)

待确认交易成功并且已有**6块以上的confirmations**之后，**复制这笔成功交易的Hash值**，点击”继续“。

### 二. 验证交易和桥接代币

1. 选择您需要认领的Maxwell预览网账户
2. 填入您[步骤一](#一-发送csm认领交易)复制的Tx Hash值
3. 点击“继续”，这步*会等待一段时间*，会验证您交易的合法性，在**网络拥堵的情况下也有可能出现认领失败，您只需要再试一次即可**

![Apps Claims2](assets/claimcsm/apps_claims2.png)

### 三. 登陆MyEtherWallet连接钱包

1. 打开[MyEtherWallet](https://v5.myetherwallet.com/access-my-wallet):
    - 点击MEW wallet
    - 连接你**发送交易的钱包**（下列流程以ImToken举例）

**⚠️ 这一步必须特别注意，确保连接的钱包地址和[步骤一](#一-发送csm认领交易)中成功发送交易的地址相同**（我们需要用这个地址的私钥进行消息签名）

![Connect Wallet1](assets/claimcsm/connect_wallet1.jpg)

![Connect Wallet2](assets/claimcsm/connect_wallet2.jpg)

![Connect Wallet3](assets/claimcsm/connect_wallet3.png)

1. 在ImToken的手机端，点击右上角扫码图标，扫描MyEtherWallet显示的二维码并授权MyEtherWallet

![Connect Wallet4](assets/claimcsm/connect_wallet4.jpg)

![Connect Wallet5](assets/claimcsm/connect_wallet5.jpg)

3. 授权成功后，您将会在MyEtherWallet页面看到以下画面，这意味着您的钱包连接成功了

![Connect Wallet6](assets/claimcsm/connect_wallet6.jpg)


### 四. 获取以太坊签名

请确保[步骤二](#二-验证交易和桥接代币)**成功之后**，再继续下列步骤：

1. 在Crust Apps Claim界面，**点击灰色框复制其中文字**

![Sign Msg1](assets/claimcsm/sign_msg1.jpg)

2. 在MyEtherWallet界面，如下图所示点击左侧的**Message选项**，选择**Sign Message**，并将灰色框中文字粘贴到对话框中, 点击**Sign**

![Sign Msg2](assets/claimcsm/sign_msg2.png)

3. 此时会在ImToken钱包端弹出**授权签名**的提示，请点击“确认”, **⚠️ 请注意，这一步有可能出现MyEtherWallet和ImToken通讯中断导致没有弹出授权信息，此时请重新执行**[步骤三](#三-登陆myetherwallet连接钱包)

![Sign Msg3](assets/claimcsm/sign_msg3.jpg)

4. 在回到MyEtherWallet界面，点击**Confirm Signing**

![Sign Msg4](assets/claimcsm/sign_msg4.jpg)

5. 此时在MyEtherWallet上会出现**Signed Message**, 点击Copy

![Sign Msg5](assets/claimcsm/sign_msg5.jpg)

### 五. 完成认领

在获取到[步骤四](#四-获取以太坊签名
)的以太坊签名之后，拿着复制好的**Signed Message**, 回到**Crust Apps Claims**页面：

1. 粘贴以太坊签名到下图所示区域, 点击“确认认领”，如果成功查询到链上有Claim记录则会出现下图所示绿色的提示

![Claim Done1](assets/claimcsm/claim_done1.jpg)

2. 点击认领

![Claim Done2](assets/claimcsm/claim_done2.jpg)

3. 认领成功

![Claim Done3](assets/claimcsm/claim_done3.jpg)

## 参考

Claim CSM涉及到的代码均**已开源**：

1. [Crust Maxwell Bridge](https://github.com/decloudf/crust-bridge/tree/main/maxwell-csm-claim)
2. [Crust Claims](https://github.com/crustio/crust/tree/master/cstrml/claims)


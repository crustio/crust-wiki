---
id: storageUserGuide
title: User Guidance
sidebar_label: User Guidance
---

用户使用Crust存取数据分为以下三个步骤：

1. 上传。用户将文件上传到IPFS；
2. 下单。用户在Crust网络上生成存储订单；
3. 检索。用户可以通过IPFS网络检索到对应文件；

本文阐述的是普通用户使用Crust进行存取的操作指引。开发者请查阅[Crust开发者指南](build-getting-started.md)

## 1. 上传

这一步的目的，是让用户把文件上传到IPFS。您可以[通过Crust Apps来上传文件](#11-通过crust-apps上传文件)，也可以[通过IPFS桌面版上传文件](#12-通过ipfs上传文件)。

如果您要存储的文件已经存在于IPFS网络，并且您已经获得该文件的[CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats)，您可以跳过此节，直接参考[远程下单](#22-对远程文件下单)进行操作。

### 1.1 通过Crust Apps上传文件

#### 1.1.1 在Apps中安装、配置并运行IPFS

进入[Crust Apps](https://apps.crust.network) -> Storage User ->。*如果出现以下提示，则代表您需要安装IPFS并进行正确的配置*

![uninstall](assets/storage/uninstall.png)

您有两个选项：

**选项1：安装Crust定制版IPFS**

您可以点击提示链接安装并启动Crust定制版IPFS。

![install](assets/storage/installIPFS.png)

**选项2：使用原生IPFS**

如果您安装的是原生[IPFS](https://ipfs.io/#install)，则需要进行一系列配置才能适配Crust Apps。 您可以点击页面中的下拉框，跟着提示步骤进行配置并重启IPFS。

无论您是通过什么渠道安装的IPFS，只要进入到 Crust Apps -> Files 不再出现提示信息，则代表您的IPFS已经配置完毕。

#### 1.1.2 上传文件

在 [Crust Apps](https://apps.crust.network) -> DSM -> Storage User中，选中“文件”栏，点击右上角的“导入”，点击“文件”或“文件夹”，在弹出窗口中选中您要上传的文件/文件夹，并确认。

![appsUpload](assets/storage/appsUpload.png)

上传完毕后，上传的文件会被显示在 “文件”栏的列表中。

>注意：文件此时仅仅被上传到您本地的IPFS，并没有任何节点帮您保存文件。

### 1.2 通过IPFS上传文件

#### 1.2.1 安装IPFS

您需要首先[安装IPFS客户端](https://docs.ipfs.io/install/ipfs-desktop/#windows)并启动。

启动后右上角会显示IPFS的图标，点击IPFS图标，点击“文件”，即进入IPFS文件系统界面。

![openIPFS](assets/storage/openIPFS.png)

#### 1.2.2 上传文件到IPFS

进入IPFS界面后，点击右上角的“Import”，点击“File”或“Folder”，在弹出窗口中选您要上传的文件/文件夹，并确认。

![importIPFS](assets/storage/importIPFS.png)

上传完毕后，上传的文件会被显示在“Files”栏的列表中。

>注意：文件此时仅仅被上传到您本地的IPFS，并没有任何节点帮您保存文件

## 2. 下单

要让Crust网络节点来保存您的文件，您需要在Crust网络生成一个存储订单。Crust网络支持用户使用Crust Apps对本地文件下单，也支持本地没有文件的情况下仅使用文件CID进行远程下单。

### 2.1 在Crust Apps中对本地文件下单

进入[Crust Apps](https://apps.crust.network/#/storage) -> IPFS -> Files，这里会列出用户已经上传的文件或文件夹。
点击任意文件右边的 “...” 按钮，点击弹出菜单中的“Order”按钮进入订单页。

![placeOrder](assets/storage/placeOrder.png)

在订单页中，您可以选择付款账户。订单页会计算对应文件的大小，并自动填入。您需要确保账户余额大于订单价格，也就是最下方的（File price），点击确认。在弹出的交易授权页面输入账户密码并确认，即可生成存储订单。

![orderPage](assets/storage/orderPage.png)

> “File Price” 是用户将为文件订单支付的价格，它包括了文件基本费、文件动态调节费以及小费。文件基本费、文件动态调节费是必须支付的费用，小费金额可由用户自己决定。小费金额大小决定了订单被处理的优先度。订单费用的具体计算方式参考[经济白皮书](https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/ecowhitepaper_en.pdf)

### 2.2 对远程文件下单

如果您本地没有文件，已知文件的CID和大小，也同样可以在Crust网络下单。
进入[Crust Apps](https://apps.crust.network/#/storage) -> DSM  -> Storage User -> Storage Orders，点击 “Place an order”。

![storageOrder](assets/storage/storageOrder.png)

在弹出的订单页面内，您需要选择下单账户，并填写文件CID、文件大小以及小费，点击确认。在弹出的交易授权页面输入账户密码并确认，即可生成存储订单。

![storageOrder](assets/storage/manuOrder.png)

### 2.3 查看订单

在[Crust Apps](https://apps.crust.network/#/storage) -> DSM -> Storage User 中，用户可以通过“拉取”/"Fetch"功能查看指定账号的所有订单。
![fetch](assets/storage/fetch.png)

点击“Fetch”，选择查询的目标账户以及数据源（开发者可以开发自己的数据源[并提交申请](https://github.com/crustio/crust-apps/issues/new)，通过审核的数据源将会显示在数据源列表中供用户访问），点击确认后所选账户的所有订单会被列出。

![fetchSource](assets/storage/fetchSource.png)

以下是Crust Apps中显示的订单状态及背后含义：

* 订单状态状态 -- “Pending”，代表这个订单文件正在被Crust节点拉取中，一般30分钟内状态会更新。您可以通过增加存储费用来吸引更多节点优先拉取文件。
![renew_pending](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_pending.png)

    > **_注意 1:_** 在订单“Pending”期间内请不要关闭IPFS或在IPFS中删除该文件。否则可能导致存储节点拉取不到用户文件。

    > **_注意 2:_** 如果超过30分钟状态依然为“Pending”，请参考这个[解决方案](appsStorageIssue.md)

* 订单状态状态 -- “Success”，代表这个订单文件已经被Crust节点保存。用户可以点击“Renew”对此类订单进行续费。
![renew_success](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_success.png)

* 订单状态状态 -- “Failed”，代表这个订单发生错误。最常见的错误发生在：用户发起订单时，填写了错误的订单大小，导致支付的金额不足。这个时候可以点击“Retry”按钮重新发起订单，并正确填写文件大小和金额。
![renew_failed](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_failed.png)

* 订单状态状态 -- “Expired”，代表订单过期。这时用户需要确保文件在IPFS网络内有副本的情况下，点击“Renew”重新发起订单。
![renew_expired](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_expired.png)

### 2.5 为文件续费池充值

文件续费池机制是Crust的去中心化存储市场帮助文件续费的机制。用户在为文件下单后，可以额外为文件的续费池存入任意金额。当文件存储订单到期后（目前每个文件订单到期时间为180天），并且文件续费池剩余金额充足，此时当任意用户对该文件发起[清算](orderSettlement.md)，将使得文件订单重新生效（重新拥有180天的有效期），清算发起者也会获得一笔来自文件续费池的奖励。因此只要文件续费池金额充足，那么就会有人在利益的驱动下进行清算，从而让文件被按期续费。

充值步骤如下：

1. 进入Crust Apps -> DSM -> Storage User -> “存储订单页”/"Storage Orders"，查看文件列表，找到对应文件；

2. 点击“充值”/“Add Balance”
![renewList](assets/storage/renewList.png)

3. 弹出框中选择充值账号、填写充值金额并确认
![addBalance](assets/storage/addBalance.png)

## 3. 检索

当您的文件被存储到Crust网络上后，您可以通过文件CID访问到该文件。

### 3.1 使用Crust Apps检索文件

您可以在Crust Apps里检索到任何存储在IPFS或Crust网络的文件。流程如下：

进入 [Crust Apps](https://apps.crust.network/#/storage) -> DSM -> Storage User，进入“文件”列表，点击“导入”，弹出列表中选择“From IPFS”。

![retrievelApps](assets/storage/retrievalApps.png)

在检索传输完毕后，检索到的文件将会显示在您的文件列表中。

### 3.2 使用IPFS客户端检索文件

打开IPFS 进入“Files”页面，点击 “Import”按钮，选择“From IPFS”。在弹出页面中输入您的文件CID，点击“Import”。IPFS会从Crust网络中拉取对应文件。

![importFromIPFS](assets/storage/importFromIPFS.png)

### 3.3 使用IPFS Gateway检索文件

如果您当下使用的环境没有安装IPFS。您也可以通过任何一个IPFS Gateway来访问Crust网络中存储的文件。一些常用的IPFS Gateway可以在[这里](https://ipfs.github.io/public-gateway-checker/)找到。

> 举个例子：如果我们通过Decoo Gateway来访问CID为`QmZcHFJy8wMpCH3gr6mEojszEv3k2MrSCF31PCVRQq3NQv`的文件，可以直接访问URL:`https://ipfs.decoo.io/ipfs/QmZcHFJy8wMpCH3gr6mEojszEv3k2MrSCF31PCVRQq3NQv`

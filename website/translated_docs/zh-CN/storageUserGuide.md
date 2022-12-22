---
id: storageUserGuide
title: User Guidance
sidebar_label: User Guidance
---

## 使用前请阅读

这是一个关于[Crust Apps](https://apps.crust.network/)中**存储用户**模块的使用手册。

>注意： **存储用户** 是[Crust Apps](https://apps.crust.network/)内置的存储应用，用于为Crust用户提供原生的使用CRU支付创建存储订单并存储文件的功能。用户也可以在此处访问或取回所存储的文件。对于非Crust用户，我们推荐使用面向更广大Web3用户群的[Files](https://apps.crust.network/#/files)。

第一次使用存储用户时，您需要在两种工作模式中进行选择，如下图所示：

![welcomepage](assets/storage/storageuser_welcomepage.png)

根据提示选择适合您的模式。如果您没有本地IPFS客户端，请必须选择“使用Gateway上传文件”模式。

>注意：无需担心选择了错误的模式。您可以在此后任何时候切换工作模式。

## 1. IPFS的用户 / “使用IPFS上传文件”模式

### 1.1 上传文件

这一步的目的，是让用户把文件上传到IPFS。您可以[通过Crust Apps来上传文件](#111-通过crust-apps上传文件)，也可以[通过IPFS桌面版上传文件](#112-通过ipfs上传文件)。

如果您要存储的文件已经存在于IPFS网络，并且您已经获得该文件的[CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats)，您可以跳过此节，直接参考[远程下单](#22-对远程文件下单)进行操作。

#### 1.1.1 通过Crust Apps上传文件

1. 在Apps中安装、配置并运行IPFS

进入[Crust Apps](https://apps.crust.network) -> 存储市场 -> 存储用户 -> 文件。*如果出现以下提示，则代表您需要安装IPFS并进行正确的配置*

![uninstall](assets/storage/uninstall.png)

您有两个选项：

**选项1：安装Crust定制版IPFS**

您可以点击提示链接安装并启动Crust定制版IPFS。

![install](assets/storage/installIPFS.png)

**选项2：使用原生IPFS**

如果您安装的是原生[IPFS](https://ipfs.io/#install)，则需要进行一系列配置才能适配Crust Apps。 您可以点击页面中的下拉框，跟着提示步骤进行配置并重启IPFS。

无论您是通过什么渠道安装的IPFS，只要进入到“文件”页不再出现提示信息，则代表您的IPFS已经配置完毕。

2. 上传文件

在 [Crust Apps](https://apps.crust.network) -> 存储市场 -> 存储用户，选中“文件”栏，点击右上角的“导入”，点击“文件”或“文件夹”，在弹出窗口中选中您要上传的文件/文件夹，并确认。

![appsUpload](assets/storage/appsUpload.png)

上传完毕后，上传的文件会被显示在 “文件”栏的列表中。

>注意：文件此时仅仅被上传到您本地的IPFS，并没有任何节点帮您保存文件。

#### 1.1.2 通过IPFS上传文件

1. 安装IPFS

您需要首先[安装IPFS客户端](https://docs.ipfs.io/install/ipfs-desktop/#windows)并启动。

启动后右上角会显示IPFS的图标，点击IPFS图标，点击“文件”，即进入IPFS文件系统界面。

![openIPFS](assets/storage/openIPFS.png)

2. 上传文件到IPFS

进入IPFS界面后，点击右上角的“Import”，点击“File”或“Folder”，在弹出窗口中选您要上传的文件/文件夹，并确认。

![importIPFS](assets/storage/importIPFS.png)

上传完毕后，上传的文件会被显示在“Files”栏的列表中。

>注意：文件此时仅仅被上传到您本地的IPFS，并没有任何Crust网络节点帮您保存文件。

### 1.2 下单

要让Crust网络节点来保存您的文件，您需要在Crust网络生成一个存储订单。Crust网络支持用户使用Crust Apps对本地文件下单，也支持本地没有文件的情况下仅使用文件CID进行远程下单。

#### 1.2.1 在Crust Apps中对本地文件下单

进入[Crust Apps](https://apps.crust.network/#/storage) -> -> 存储市场 -> 存储用户 -> 文件，这里会列出用户已经上传的文件或文件夹。
点击任意文件右边的 “...” 按钮，点击弹出菜单中的“Order”按钮进入订单页。

![placeOrder](assets/storage/placeOrder.png)

在订单页中，您可以选择付款账户。订单页会计算对应文件的大小，并自动填入。您需要确保账户余额大于订单价格，也就是最下方的（File price），点击确认。在弹出的交易授权页面输入账户密码并确认，即可生成存储订单。

![orderPage](assets/storage/orderPage.png)

> “File Price” 是用户将为文件订单支付的价格，它包括了**文件基本费**、**文件动态调节费**以及**小费**。文件基本费、文件动态调节费是必须支付的费用，小费金额可由用户自己决定。小费金额大小决定了订单被处理的优先度。订单费用的具体计算方式参考[经济白皮书](https://ipfs-hk.decoo.io/ipfs/Qmdy2Hqdxoq2PuAkvoDZ5SqYjAKym58Gh39Lm5gPChyHwL)

#### 1.2.2 对远程文件下单

如果您本地没有文件，已知文件的CID和大小，也同样可以在Crust网络下单。
进入[Crust Apps](https://apps.crust.network/#/storage) -> 存储市场 -> 存储用户 -> 存储订单，点击 “Place an order”。

![storageOrder](assets/storage/storageOrder.png)

在弹出的订单页面内，您需要选择下单账户，并填写文件CID、文件大小以及小费，点击确认。在弹出的交易授权页面输入账户密码并确认，即可生成存储订单。

![storageOrder](assets/storage/manuOrder.png)

#### 1.2.3 查看订单

在[Crust Apps](https://apps.crust.network/#/storage) -> 存储市场 -> 存储用户，用户可以通过“拉取”/"Fetch"功能查看指定账号的所有订单。
![fetch](assets/storage/fetch.png)

点击“Fetch”，选择查询的目标账户以及数据源（开发者可以开发自己的数据源[并提交申请](https://github.com/crustio/crust-apps/issues/new)，通过审核的数据源将会显示在数据源列表中供用户访问），点击确认后所选账户的所有订单会被列出。

![fetchSource](assets/storage/fetchSource.png)

以下是Crust Apps中显示的订单状态及背后含义：

* 订单状态状态 -- “Waiting”，代表这个订单文件正在被Crust节点拉取中，一般30分钟内状态会更新。您可以通过增加存储费用来吸引更多节点优先拉取文件。
![renew_pending](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_pending.png)

    > **_注意 1:_** 在订单“Pending”期间内请不要关闭IPFS或在IPFS中删除该文件。否则可能导致存储节点拉取不到用户文件。

    > **_注意 2:_** 如果超过30分钟状态依然为“Pending”，请参考这个[解决方案](appsStorageIssue.md)

* 订单状态状态 -- “Success”，代表这个订单文件已经被Crust节点保存。用户可以点击“Renew”对此类订单进行续费。
![renew_success](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_success.png)

* 订单状态状态 -- “Failed”，代表这个订单发生错误。最常见的错误发生在：用户发起订单时，填写了错误的订单大小，导致支付的金额不足。这个时候可以点击“Retry”按钮重新发起订单，并正确填写文件大小和金额。
![renew_failed](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_failed.png)

* 订单状态状态 -- “Expired”，代表订单过期。这时用户需要确保文件在IPFS网络内有副本的情况下，点击“Renew”重新发起订单。
![renew_expired](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_expired.png)

#### 1.2.4 为文件续费池充值

文件续费池机制是Crust的去中心化存储市场帮助文件续费的机制。用户在为文件下单后，可以额外为文件的续费池存入任意金额。当文件存储订单到期后（目前每个文件订单到期时间为180天），并且文件续费池剩余金额充足，此时当任意用户对该文件发起[清算](orderSettlement.md)，将使得文件订单重新生效（重新拥有180天的有效期），清算发起者也会获得一笔来自文件续费池的奖励。因此只要文件续费池金额充足，那么就会有人在利益的驱动下进行清算，从而让文件被按期续费。

充值步骤如下：

1. 进入[Crust Apps](https://apps.crust.network) -> 存储市场 -> 存储用户 -> “存储订单”页/"Storage Orders"，查看文件列表，找到对应文件；

2. 点击“充值”/“Add Balance”
![renewList](assets/storage/renewList.png)

3. 弹出框中选择充值账号、填写充值金额并确认
![addBalance](assets/storage/addBalance.png)

### 1.3 检索

当您的文件被存储到Crust网络上后，您可以通过文件CID访问到该文件。

#### 1.3.1 使用Crust Apps检索文件

您可以在Crust Apps里检索到任何存储在IPFS或Crust网络的文件。流程如下：

进入 [Crust Apps](https://apps.crust.network/) -> 存储市场 -> 存储用户，进入“文件”列表，点击“导入”，弹出列表中选择“From IPFS”。

![retrievelApps](assets/storage/retrievalApps.png)

在检索传输完毕后，检索到的文件将会显示在您的文件列表中。

#### 1.3.2 使用IPFS客户端检索文件

打开IPFS 进入“Files”页面，点击 “Import”按钮，选择“From IPFS”。在弹出页面中输入您的文件CID，点击“Import”。IPFS会从Crust网络中拉取对应文件。

![importFromIPFS](assets/storage/importFromIPFS.png)

#### 1.3.3 使用IPFS Gateway检索文件

如果您当下使用的环境没有安装IPFS。您也可以通过任何一个IPFS Gateway来访问Crust网络中存储的文件。一些常用的IPFS Gateway可以在[这里](https://ipfs.github.io/public-gateway-checker/)找到。

> 举个例子：如果我们通过Crust Gateway来访问CID为`QmZcHFJy8wMpCH3gr6mEojszEv3k2MrSCF31PCVRQq3NQv`的文件，可以直接访问URL:`https://gw.crustfiles.app/ipfs/QmZcHFJy8wMpCH3gr6mEojszEv3k2MrSCF31PCVRQq3NQv`

## 2. 非IPFS用户 / “使用Gateway上传文件”模式

对于未安装IPFS的用户，需要通过IPFS Gateway将文件上传到IPFS并被Crust Network处理。对于此类用户，请选择“使用Gateway上传文件”模式，页面如图所示：

![storageuser_nonipfsuser](assets/storage/storageuser_nonipfsuser_page.png)

**切换模式**：您可以在任意时候切换使用IPFS上传文件、使用Gateway上传文件两种模式。

**选择Gateway**：选择一个Gateway来处理文件的上传下载以及钱包验证工作。出于性能考虑，我们推荐优先选择地理距离更近的Gateway。

**文件列表区域**：文件列表是一个本地缓存的下单记录。在搜索框输入CID，也可以查询该文件在Crust网络中的状态。您可以使用导入、导出按钮来更新或移动文件列表（对应一个JSON格式本地缓存文件）。此外，您可以使用取回按钮来获取指定账户在Crust网络内的所有下单记录。

### 2.1 上传

1. 选择Gateway

    首先需要先将文件上传至Gateway。用户可以选择一个就近的Gateway。

    ![pickGateway](assets/storage/storageuser_nonipfsuser_selectgateway.png)

2. 选择文件

    在存储用户页面中，点击“上传文件”。 弹出窗口中选择一个文件并打开。
    ![openFile](assets/storage/openFile.png)

3. 文件上传授权

    在文件上传之前，Gateway会验证用户的Crust账户，用户需要在弹出窗口使用Crust账号进行一次签名。

    >这个签名不会消耗手续费。

    ![signUpload](assets/storage/signUpload.png)

### 2.2 下单

选中文件并上传后将弹出文件订单界面，输入对应的小费，点击确认即可生成订单。

![userOrder](assets/storage/userOrder.png)

> “File Price” 是用户将为文件订单支付的价格，它包括了**文件基本费**、**文件动态调节费**以及**小费**。文件基本费、文件动态调节费是必须支付的费用，小费金额可由用户自己决定。小费金额大小决定了订单被处理的优先度。订单费用的具体计算方式参考[经济白皮书](https://ipfs-hk.decoo.io/ipfs/Qmdy2Hqdxoq2PuAkvoDZ5SqYjAKym58Gh39Lm5gPChyHwL)

订单生成后，可以在下方查看到。

![userViewOrders](assets/storage/userViewOrders.png)

要查看订单，请参考[查看存储订单](#123-查看订单)

### 2.3 检索

在**存储用户**页面的文件列表中，您可以直接点击“动作/Action”栏目下的“打开文件”以及“复制下载链接”图标来直接访问文件（通过您指定的Gateway）或者分享下载链接。


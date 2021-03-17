---
id: storageUserGuide
title: User Guidance
sidebar_label: User Guidance
---

用户可以通过三种方式使用Crust网络存储文件：
* 用户可以直接使用[Crust Apps](https://apps.crust.network/#/storage)存储文件；
* 用户可以通过原生IPFS配合[Crust Apps](https://apps.crust.network/#/storage)存储文件；
* 开发者可以使用Crust SDK开发存储功能；

## 1. 使用 Crust Apps 存储文件

### 1.1 安装、配置并运行IPFS
进入[Crust Apps/IPFS](https://apps.crust.network/#/storage)。如果出现以下提示，则代表您需要安装并启动IPFS。
![Install IPFS](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/installIPFS)
这时您有两个选项：
#### 选项一、安装Crust定制版IPFS
您可以点击提示链接安装并启动Crust定制版IPFS。定制版IPFS与原生IPFS的差异，主要是适配了Crust Apps，因此安装后即可在Crust Apps上使用，无需进行额外配置。

#### 选项二、使用原生IPFS
如果您安装的是[原生IPFS](https://ipfs.io/#install)，则需要进行一系列配置才能适配Crust Apps。
您可以点击页面中的下拉框，跟着提示步骤进行配置
![config IPFS](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/configIPFS.png)

### 1.2 上传文件到 IPFS 网络

在启动IPFS后，进入“Files”栏，点击右上角的“Import”，点击“File”或“Folder”，您可以选择一个文件或目录上传到IPFS。
![upload](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/upload.png)

刚上传的文件或文件夹会出现在您的文件列表中。

**注意：此时上传的文件依然在你本地的IPFS上，并没有节点帮助你存储该文件**

### 1.3 生成存储订单
在文件列表中找到您希望Crust网络节点存储的文件或文件夹，点击文件右边的“...” ，点击“Order”会弹出订单页。
![order1](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/order_1.png)

![order2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/order_2.png)

在订单页中，选择付款账户，并确保账户余额大于订单价格，也就是最下方的（File price），点击确认。
在弹出的交易授权页面输入账户密码，确认即可生成存储订单。
![submit_order](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/submit_order.png)

### 1.4 查看订单状态

进入存储订单页，可以在下方列表中看到刚刚发起的订单。初始为“Pending”状态。代表这个订单文件正在被Crust节点拉取中。
![orders](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/orders.png)

以下是Crust Apps中显示的订单状态：

* 订单状态状态 -- “Pending”，代表这个订单文件正在被Crust节点拉取中，一般30分钟内状态会更新。您可以通过增加存储费用来吸引更多节点优先拉取文件。
![renew_pending](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_pending.png)

    > **_注意 1:_** 在订单“Pending”期间内请不要关闭IPFS或在IPFS中删除该文件。否则可能导致存储节点拉取不到用户文件。

    > **_注意 2:_** 如果超过30分钟状态依然为“Pending”，请参考这个[解决方案]()

* 订单状态状态 -- “Success”，代表这个订单文件已经被Crust节点保存。用户可以点击“Renew”对此类订单进行续费。
![renew_success](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_success.png)

* 订单状态状态 -- “Failed”，代表这个订单发生错误。最常见的错误发生在：用户发起订单时，填写了错误的订单大小，导致支付的金额不足。这个时候可以点击“Retry”按钮重新发起订单，并正确填写文件大小和金额。
![renew_failed](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_failed.png)

* 订单状态状态 -- “Expired”，代表订单过期。这时用户需要确保文件在IPFS网络内有副本的情况下，点击“Renew”重新发起订单。
![renew_expired](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_expired.png)


### 1.5 获取用户的所有订单
在[Crust Apps](https://apps.crust.network/#/storage) -> “IPFS” -> “存储订单页”/"Storage Orders" 中的订单信息均为本地缓存。用户可以通过“拉取”/"Fetch"功能查看指定账号的所有订单。
1. 点击“Fetch My Orders”
![order2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/fetch.png)

1. 选择查询的目标账户以及数据源（开发者可以开发自己的数据源并[提交申请](https://github.com/crustio/crust-apps/issues/new)，通过审核的数据源将会显示在数据源列表中供用户访问）
![order2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/pick_source.png)

3. 点击确认后，所选账户的订单将会被展示在订单列表。
   
### 1.6 为文件续费池充值
文件续费池机制是[Crust DSM](DSM.md)帮助文件被定期续费的机制。用户在为文件下单后，可以额外为文件的续费池存入任意金额。当文件存储订单到期（目前每个文件订单到期时间为15天），并且文件续费池剩余金额充足，则任何用户都可以对该文件发起一个[清算交易](orderSettlement.md)，使得文件订单重新生效（重新拥有15天的有效期），清算发起者也会获得一笔来自文件续费池的奖励。充值步骤如下：
1. 进入[Crust Apps](https://apps.crust.network/#/storage) -> “IPFS” -> “存储订单页”/"Storage Orders"，查看文件列表，找到对应文件；
2. 点击“充值”/“Add Balance”
![Renew Pool](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/renew_pool.png)

3. 弹出框中选择充值账号、填写充值金额并确认
![Renew Pool](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/add_balance.png)

### 1.7 检索文件
用户只要有某个文件的CID，即可在[Crust Apps](https://apps.crust.network/#/storage/files)或原生的IPFS网络中检索到这个文件（前提是有节点存了这个文件）。

回到“Files”页，点击“Import”选择导入方式，点击“From IPFS”，在弹出窗口中输入想要检索的文件CID，点击确认。

![retrieval1](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/retrieval1.png)

![retrieval2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/retrieval2.png)

在检索传输完毕后，文件将会显示在您的文件列表中。

![retrieval2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/retrieved.png)

## 2. 使用原生IPFS配合Crust Apps存储文件
### 2.1 使用原生IPFS上传文件
用户可以使用IPFS桌面版、IPFS伴侣（网页版插件）以及IPFS命令行将文件添加到IPFS网络，获得一个文件的CID。用户需要复制这个CID，在下一步骤中将使用这个CID来生成Crust存储订单。

* 通过IPFS桌面版和IPFS伴侣添加文件的步骤基本一致。
    ![add_file_desktop](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/add_file1.png)

    
* 通过IPFS命令行也可以添加文件到IPFS网络,比如
    ```shell
    ipfs add readme.md
    ```
    ![add_file_cli](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/add_file2.png)

接下来，用户需要获取刚刚上传文件的CID和文件大小。CID可以在命令行的返回值拷贝，也可以在IPFS Desktop中直接拷贝：
    ![copy_cid](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/copy_cid.png)
文件大小需要通过命令行来获取，执行：
```shell
ipfs object stat QmXXXXX
```
命令中的QmXXXXX是用户上传文件的Cid。下图中红线标注的值"CumulativeSize"即是文件大小，下一步也会跟Cid一起被用到。
    ![size](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/size.png)



### 2.2 使用Crust Apps发起存储订单
进入[Crust](https://apps.crust.network/#/storage/market),点击"Place an order"。
    ![place_order](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/place_order.png)
在弹出的订单生成页中，填入上一步获得的Cid和Size并确认，即可在Crust网络中下单。
    ![order_independent](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/order_independent.png)

订单状态可以参考[1.4 查看订单状态](#14-查看订单状态)

### 2.3 检索文件
用户只要有文件的CID，就可以使用[Crust Apps](https://apps.crust.network/#/storage/files)检索文件,参考[1.5 检索文件](#15-检索文件)。也可以使用原生[IPFS检索文件](https://dweb-primer.ipfs.io/avenues-for-access/retrieve-from-peer)。

## 3. 使用Crust SDK开发存储功能
即将开放

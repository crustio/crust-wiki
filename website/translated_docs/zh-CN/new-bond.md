---
id: newBond
title: New Bond
sidebar_label: New Bond
---

Crust 账户是你链上的身份的体现，也是各类交易的主体。作为节点，你需要对应的账户来和节点进行绑定，从而获取区块奖励。Crust 账户作为标准的双账户模型 Controller/Stash，需要进行特定的账户绑定操作，通过操作 [Crust APPs](http://apps.crust.network/)，本节将说明如何创建账号和绑定账号关系。

## 创建 Stash 账户
在导航栏中点击 “账户” 下的 “账户”。然后点击“添加账户“

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.1/1.png) 

备份好助记词，勾选“我已经安全保存好助记词种子”，点击“下一步”

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.1/2.png)

输入账号名称以及密码，点击“下一步”

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.1/3.png) 

点击“保存”备份账户信息，请切记保管好备份文件，格式如下“5G1K1QvCcR4xxxxxxVcS8AVxxxxLuSxNBiEt.json”

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.1/3.1.3.png) 

我们将第一个新建的账号  用做 Stash 账号。Stash 账号是用户的资产账号，用来管理用户的资产。账户里面需要有一定数量的 CRU 进行后续的各类交易和资产抵押等操作。

## 创建 Controller 账户
重复新建账号步骤，再次创建另一个账号。

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.2/1.png) 

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.2/2.png)

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.2/3.png) 

我们将新账号命名为 CONTROLLER 用来提醒自己，这个账号将用做 Controller，用于操作资产。账户里面需要有一定数量的 CRU 用于支付各类交易的交易费。

## 建立 controller 和 stash 的绑定关系
点击导航栏的“网络”下的“质押”。选中“账户操作”
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.3/1.png) 
 
点击右上角的 “存储账户”，并在弹出页面中选择 Stash 和 Controller 账户，填入需要抵押的金额（这里的金额代表许可 Controller 账户操作的金额），最后点击 “绑定”。

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.3/2.png) 
 
抵押操作涉及链上操作，因此需要解锁 Stash 账户并消耗一定手续费。

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.3/3.png) 
 
最后，抵押成功了，可以看到在“账户操作”页面里新增了一个抵押关系。
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/cloud_docImage/maxwell/cn/3.3/4.png) 
 
到目前为止，您的账户配置已经完成。
---
id: Q&AForMining
title: Q&A
sidebar_label: Q&A
---

## Crust 主网

### 收益的种类和形式？

收益种类主要有三种：出块奖励，质押奖励以及存储收益。收益会全部以是CRU结算。

## 验证人和候选人

### 候选人如何成为验证人？

通过竞争成为，"effective stake"（effective stake = other effective stake + own effective stake）大节点会被选择成为验证人。"effective stake"是由两个参数决定的，其一，你需要通过增加存储来增加"staking limit"；其二，需要通过质押CRU或者让其他人给你担保CRU来增加"effective stake"。验证人的选择每个era重新计算一遍。详情请看这个[链接](validatorGuidance.md)
![图片](assets/qa/be_validator.png)

### 验证人和候选人的区别？

验证人拥有出块奖励，候选人没有出块奖励，但是他们都有质押奖励

### 验证人总数变化规则？

验证人总数会动态调整，这样设置是为了保证节点之间有充分的竞争，社区成员可以通过议案表决来决定增加或者减少验证人总数。

### 验证人界面图标意义？
![图片](assets/qa/app_validator_page.png)
- 1 下个era会参与验证人竞争
- 2 一个session出块的数量，一个era有6个session
- 3 其他人给你质押的有效CRU量
- 4 自己质押的有效CRU量，参数3与参数4加起来用于竞争成为验证人
- 5 由节点提供硬盘容量以及有意义文件计算出的值，决定了该节点可以质押的上限
- 6 由节点设置的担保费率，假设你设置90%，节点将从担保人的收益中抽取10%的钱
- 7 出块得分，决定era的收益，该数据从概率上每个验证人是相同的
- 8 该节点目前出的最新块

### 节点启动之后好久"stake limit"和"effective stake"还是0？
"stake limit"每一小时更新一次，"effective stake"每6小时更新一次，如果节点正在SRD, "stake limit"每隔一小时线性增长，如果SRD完成，"stake limit"会保持不变，如果有下降，请及时排查原因

## 奖励

### Group如何分发收益的？
存储收益是各自结算的， 而其他收益链不做收益分发，需owner私下结算

### 怎么领取？
领取奖励操作流程如下：
进入Crust APPS中，选择Staking，选择Payouts
![图片](assets/qa/payouts1.jpg)
![图片](assets/qa/payouts2.jpg)

### 每次领取奖励，怎么查看收益？
打开[Subscan](https://crust.subscan.io/)
用你的收益账户查询，"收益和罚金"中可以看到领取到的数量
![图片](assets/qa/subscanreward2.jpg)

## sWorker

### 安装错误

#### 设置BIOS
出现如下错误，需要查看是否设置好BIOS里面的相关项. 需要将secure boot和SGX都设置为**Enabled**。SGX无法设置为**Enabled**，可以设置为**software enabled**，在启动进入系统后，使用软件的方式激活SGX。
![图片](assets/qa/sworker/install/setBios.png)

![图片](assets/qa/sworker/install/secureBoot.png)

![图片](assets/qa/sworker/install/SGXEnable.png)

#### 网络错误
如下图所示，是网络错误，需要检查网络连接是否有问题
![图片](assets/qa/sworker/install/networkErr.png)

#### 安装依赖库
如下图所示错误，需要根据安装时候系统给出的错误提示，输入指定指令来修复错误
![图片](assets/qa/sworker/install/aptErr.png)

### 启动错误

#### 升级BIOS
如下图所示错误，需要BIOS固件进行升级或者降级，需要调整BIOS的版本号到合适版本(视具体情况进行升级或降级)
![图片](assets/qa/sworker/start/4006upgradeBios.png)

#### 网络不稳定
出现4012和AES服务问题，说明网络不稳定，请调整网络
![图片](assets/qa/sworker/start/4012networkUnstable.png)

![图片](assets/qa/sworker/start/AESErr.png)
出现IAS请求失败，是因为IAS服务器不稳定造成，请重试多次直到成功
![图片](assets/qa/sworker/start/IASUnstable.png)

#### 配置出错
如下图所示错误，是因为用户更改了backup配置，导致无法重启，请使用第一次启动时配置的账户的backup
![图片](assets/qa/sworker/start/AccountErr.png)
如下图所示错误，是因为没有按照步骤进行设置，请严格按照节点手册进行相关操作
![图片](assets/qa/sworker/start/configErr.png)

#### 其他启动错误
没有出现以上错误，却依然无法启动的，请尝试重启多次

### 设备错误
以下是几种常见的由于磁盘不稳定，或者权限没有配置好，导致的问题，出现如下错误请检查磁盘以及相关的读写权限
![图片](assets/qa/sworker/device/4011openfileErr.png)

![图片](assets/qa/sworker/device/4013deleteErr.png)

![图片](assets/qa/sworker/device/4015mkdirErr.png)
查看workload的时候卡住，说明某些磁盘的磁道存在问题，需要对磁盘进行检测
![图片](assets/qa/sworker/device/diskErr.png)

![图片](assets/qa/sworker/device/diskErrOrSlow.png)

![图片](assets/qa/sworker/device/diskLost.png)

![图片](assets/qa/sworker/device/inputoutputErr.png)

![图片](assets/qa/sworker/device/readonlyfilesys.png)

## 其它

### guarantee fee如何改动？
------era1------era2------
在era1期间设置的guarantee fee会era2期间生效
如果验证人在era1期间设置过多次guarantee fee,以最后一次设置为准

### 作为担保人，如何撤销担保？
>注：暂时不支持配量操作，多个被担保的话需要依次撤销担保

1)通过担保人的STASH账户查询出该账户担保的所有节点账户和担保额度

![图片](assets/qa/checkguarantor.jpg)

2)撤销对每个节点的担保

![图片](assets/qa/cutguarantor.jpg)

3)通过在步骤一中查询到的被担保人的账户查询并点击该账户，使其进入“guaranteed account”在“amount”中输入撤销担保的额度，点击CutGuarantee.

![图片](assets/qa/cutguarantor1.jpg)

### 解除绑定

>注：解除绑定的金额不能超过可解绑的金额，**如果想全部解绑，担保人需要先撤销所有担保**，其他角色可直接解绑

![图片](assets/qa/unbond1.jpg)

在“unbond amount”中输入需要解绑的金额，解绑过程持续28个era，在此期间不能作为抵押，该资金将可在解除绑定期后提取

![图片](assets/qa/unbond2.jpg)

### Member加入group,报"swork.IdentityNotExist"错误
这是因为加入group需要有链上唯一身份，所以需要等待第一次上报work report后（大概一小时），再执行加入的操作。

### 系统盘1T的SSD支不支持
链数据大概一年会产生250G的数据，如果IPFS存储400T的数据，其数据索引会占用1T的容量，所以从机器稳定运行和磁盘利用率来看，推荐使用2T的SSD作为系统盘

### 如何迁移Maxwell预览网的账户到主网？

方法一：

将Maxwell上账户的backup文件导入到主网上，再把该账户重新备份，生成新的backup文件，即可配置到节点进行使用
![图片](assets/qa/restore.png)
![图片](assets/qa/restore1.png)

方法二：

将Maxwell上账户的backup文件导入到[Crust Wallet](crustWallet.md),将钱包网络切换为Crust，再通过钱包导出backup文件，即可配置到节点进行使用

---
id: merchantGuidance
title: Merchant Guidance
sidebar_label: Merchant Guidance
---

Crust网络的节点，在成为商户之前，可以通过提供存储资源，获得质押额度来加入[GPoS](GPoS.md)，共同维护Crust区块链网络。成为存储商户之后，则可以让节点的存储资源服务于用户，发挥更大的价值，同时也会获得更多的奖励。

本文将提供以下指引：如何注册成为商户、如何配置接单策略、如何获得存储市场的奖励，这些指引将帮助新的存储商户在Crust网络中平稳运营。
> 本文中提到的存储市场奖励仅限订单奖励，不涉及存储用户文件后带来的质押额度的提升。

## 1. 新商户注册指引

## 2. 存储订单获取策略

## 3. 获得存储市场奖励

存储市场奖励，来自于存储订单。用户为存储订单支付费用的18%将会被最先完成存储封装（“封装”一词可查阅[术语表](glossary.md)）的四个节点获得。但存储市场奖励不会直接进入到存储商户的账户余额中。为了获得存储市场奖励，存储商户需要完成保证金锁定、订单奖励清算以及存储市场奖励领取三个操作。

* 文件清算：将

### 3.1 存储市场奖金池和保证金



### 3.2 订单奖励清算

存储订单的奖励不会直接进入到存储商户的账户余额中，而会进入商户的存储市场奖金池。对于奖金池中的存储市场


### 3.3 存储市场奖励领取




存储节点（Member/Isolation）可以通过运行[sManager(Storage Manager)](https://github.com/crustio/crust-smanager) 接单和上报有意义文件来证明自己存储了用户文件从而获得报酬和增加质押上限。节点也可以制定自己的sManager接单策略，具体开发文档**敬请期待**

### 1. 运行默认sManager接单策略

```shell
sudo crust tools upgrade-image smanager
sudo crust reload smanager 
```

### 2. 默认的sManager接单策略

1. Group去重策略
2. 自动删除过期文件
3. 满副本数判定（大于70份副本数的文件不接）
4. 满磁盘空间检测
5. 动态IPFS拉取超时
6. 概率接单

## 保障金和订单奖励

### 1. 操作

保障金决定了商户能领取订单奖励的上限，**兑换比例为10:1**。这意味着商户质押10 CRU的保障金可以领取1 CRU的订单奖励

可以通过[Apps的商户页面](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/market)进行保障金和奖励操作，具体功能和操作为：

1. 注册

点击“注册接口进行注册”, 注册需要有个基础保障金，不得小于0.01CRU

![register](assets/merchant/register.png)

2. 增加保障金

![add_c](assets/merchant/add_c.png)

3. 减少保障金

![cut_c](assets/merchant/cut_c.png)

4. 领取奖励

![reward](assets/merchant/reward.png)

> ⚠️ 请注意，请时刻保证有充足的保障金，由于任何人都可以领取订单奖励，在计算订单的时候，如果保障金不足，奖励则不会归属

### 2. 计算订单奖励

#### 自动计算奖励工具

请参考[cst](https://www.npmjs.com/package/crust-storage-tool)运行来自动清算奖励

#### 手动计算奖励

订单奖励**在领取之前需要进行计算**。目前，商户可以执行3个操作以计算订单奖励：

1. 通过[sPlorer](https://splorer.crust.network/home/mr)查看节点接单信息

![splorer](assets/merchant/splorer.png)

2. **对已到期的文件（未到期的文件无法进行奖励的计算）**, 到[Apps](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/extrinsics)发送`claimReward`交易进行订单奖励计算

![claimReward](assets/merchant/calculate.png)

3. 对于计算好的订单奖励，可以参考[操作的第4步](#1-操作)进行领取

### 3. 订单奖励说明

商户可以获得订单的18%收益，收益被多个接单商户平分(按照拉取顺序排列)，并根据存储文件的有效时长获得奖励，具体订单奖励的分配策略和经济系统设计请参考[经济白皮书](https://crust.network/download/ecowhitepaper_en.pdf)中关于Trading Market的描述，这边做一些简单的说明

> 举例来讲，用户下一个订单`Qm123`，一共支付网络10CRU，会有:
>
> - **1.8CRU**进行订单奖励池，用于发放订单奖励；
> - **7.2CRU**进行质押奖励池，用于GPoS中出块和质押奖励；
> - **1CRU**进入税池，供给整个网络使用；

其中，对于新下的订单来讲：

- 初始订单奖励份数（`expected_replica_count`）为：4
- 文件存储时间为：180天

所以前4个拉取到用户文件的商户会获得订单奖励，订单奖励会被多个因素影响：

1. ***工作量报告*** 是证明你存储了用户文件的唯一途径，如果工作量未上报/删除了用户文件，会导致你丢失订单奖励，你的奖励资格会延续给下一个存储节点
2. 请及时进行[订单奖励的计算](#2-计算订单奖励)，如果超过*15天*未被领取，则任何人都可以通过发送`market.claimReward`交易获取这笔订单的收益
3. 续单（指对同一个文件下单）也会引发订单奖励的计算

## 质押额度和有意义文件说明

存储有意义文件（用户文件）会有效提升质押上限，**提升质押上限不受奖励份数（`expected_replica_count`）的限制，但同一Group内的相同文件会被去重**，具体来看，存储有意义文件和SRD文件所对应的质押上限倍数关系为：

```shell
有意义文件质押上限 = 文件副本函数 * SRD文件质押上限
```

在Crust mainnet中，SRD为1TB对应1CRU的质押上限，**文件副本函数**为：

| Group文件副本数 | 倍数 |
|-----------------|------|
| 1-10            | 2    |
| 11-20           | 4    |
| 21-30           | 6    |
| 31-40           | 8    |
| 41-70           | 10    |
| 71-80           | 8    |
| 81-90           | 6    |
| 91-100          | 4    |
| 101-200         | 2    |
| > 200           | 0    |

其中，**Group文件副本数指的是不同Group存储同一文件的数量**，可以通过[Apps链状态](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi.crust.network%2F#/chainstate)中`market.Files`接口中的UsedInfo.groups查询

![usedInfo](assets/merchant/usedinfo.png)

举例来看，商户成功存储文件`Qm123`（文件大小100G），假设全网`Qm123`的Group副本数为50，则对应质押上限为：

```shell
有意义文件质押上限 = 10 * 0.1 CRU（SRD文件质押上限）= 1 CRU
```

## 参考

1. [Crust sManager](https://github.com/crustio/crust-smanager)
2. [去中心化存储市场](DSM.md)
3. [Crust存储浏览器](crust-storage-explorer.md)
4. [经济白皮书](https://crust.network/download/ecowhitepaper_en.pdf)

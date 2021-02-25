---
id: sPlorerGuide
title: sPlorer Guide
sidebar_label: sPlorer Guide
---

sPlorer，取名自Storage Explorer，是一个查看存储信息的平台。由此进入[sPlorer](https://splorer.crust.network/)。

sPlorer大体分为两个子页面：通用信息页（General Infomation）和矿工信息页（Miner Infomation）

# 通用信息页
这一页中主要分为两部分：全局统计数据和节点信息。

## 统计数据
![general_info1](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/general_info1.png)
如图所示，在页面上方陈列的是全局统计数据：

* 总结点数：全网节点数；
* 总有效文件数：当前有多少个用户文件存在Crust网络；
* 平均文件副本数：每个用户文件在Crust网络中平均有多少份副本；
* 实时存储价格：由全网供需关系计算出，代表每MB存储15天的价格；
* 可以点击右侧“查看区块链信息”进入区块链浏览器来查看区块链信息；
* 存储量：图标形式显示了当前网络中的空闲容量以及被占用的容量；
* 近七天统计数据：可以在“节点数”、“存储总量”、“总有效文件数”间切换；

## 节点信息

节点信息以表格形式分页展示了全网节点的基本信息:
![general_info2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/general_info2.png)

表中每一行都对应了一个Group Owner的信息。其中，“质押额度”展现了该Group Owner的总质押额度，节点ID一栏用于展示该Group Owner下所有的Member节点，可以点击 "..."按钮展开查看:
![general_info2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/nodes.png)

其中每个节点ID（也是MemberID）均可点击，跳转到矿工信息页。

# 矿工信息页
矿工信息页同样由两部分构成：矿工统计信息和文件列表。

## 矿工统计信息
![miner_info](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/miner_info.png)

矿工统计信息中主要展示了矿工的余额、矿工可用存储量和已使用存储量、矿工的[存储保障金]()、以及矿工的质押额度。

## 文件列表

文件列表展示了改矿工节点存储的用户文件。
* 文件CID（File CID）：即是这个文件在IPFS网络中第一无二的ID；
* 文件大小（File Size）：这个文件的大小；
* 到期时间（Expired On）：这个文件订单将会在什么时候到期；
* 预期收益（Expected Earning）：这个文件预期为节点带来的存储奖励金。存储奖励金机制参考[存储商户](storage-merchant.md)
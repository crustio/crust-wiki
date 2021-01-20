---
id: sWorkerGuide
title: Guide for sWorker
sidebar_label: sWorker
---

## sWorker

### 存储证明

存储节点需要周期性的向Crust网络中提交一个证明，证明包含了文件的增删情况以及有效文件存储量等信息，这一机制叫MPoW（Meaningful Proof of Work），而在节点本地执行MPoW的功能模块叫sWorker。

节点通过存储有效文件将会获得一个[质押额度]()。质押额度也就是节点能获得的有效质押上限，节点的有效质押会影响节点的收益。

### sWorker实现存储证明

Crust网络中存储节点需要支持[TEE模块]()，基于TEE技术，sWorker（Storage Worker）可以在本地高效的执行存储证明。

为了证明自己正确存储了用户文件，节点的sWorker需要在每个区块周期对已存储的文件对象进行Merkle Hash片段自抽查，并在TEE内生成工作量报告。由于抽查机制被写入TEE内，抽查自检的流程无法被操作系统层面中断且不可被篡改，因此链上可以周期性的获得每个节点的存储状态。如下图所示：

1. 用户将文件上传到IPFS网络
2. 节点通过IPFS网络拉取用户文件
3. sWorker对文件进行封装
4. sWorker周期性的对封装过的文件进行监控，并将存储状态签署为一个工作量报告
5. 节点将工作量报告发往链上
6. 链上验证节点的工作量报告，对节点工作量达成共识

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/learn/proof.png)
---
id: glossary
title: Glossary
sidebar_label: Glossary
---

## 网络和通证相关

**Crust Mainnet/Crust主网** - Crust主网，节点可以按照技术白皮书和经济白皮书描述的机制和参数执行并获得对应的通证奖励。用户可以在Crust主网使用Crust的全部存储功能。[参考阅读](crust-overview.md)

**Crust Maxwell** - Crust预览网，在主网启动前进行全功能的测试和模拟。拥有跟主网一样的功能，参数可能略有不同。[参考阅读](https://wiki-maxwell.crust.network/docs/zh-CN/previewNetworkMaxwell)。

**Crust Shadow** - Crust Shadow是一个Kusama版本的Crust网络，一个早起未经审核发布的可用代码，并拥有真正的经济价值。

**Crust Rocky** - Crust内部测试用的开发者测试网。

**CRU** - Crust主网的原生通证。[参考阅读](crust-account.md)。

**CSM** - Crust Shadow的原生通证。

## 区块链协议相关

**GPoS** - Crust网络的区块链共识协议，全名是Guaranteed Proof of Stake。[参考阅读](GPoS.md)。

**验证人/Validator** - 验证人是 Crust 网络中打包并生成区块的节点，维护着整个区块链网络。[参考阅读](validator.md)。

**候选人/Candidate** - 候选人是 Crust 网络中参与竞争成为验证人，但没有获得验证资格的节点。[参考阅读](validator.md)。

**节点/Node** - 当节点一词被用在Crust链或者GPoS的范畴内时，代表的是共同组成区块链的节点，Crust链由众多Validator和Candidate节点组成。

**质押/Stake** - Crust网络中节点通过质押来竞选Validator，Validator通过质押来竞争出块。节点可以通过自我质押或获得来自担保人的担保来增加节点的总质押量。

**担保人/Guarantor** - 担保人是 Crust 网络中为任意一个或者多个节点提供担保的账户。拥有CRU 通证的账户都可以成为担保人，可将其 CRU 作为担保资产。担保人为节点提供担保可以获得担保收入，同时也按比例承担节点被处罚的风险。[参考阅读](guarantor.md)。

**Era** - 一个时长单位。在Crust网络中，一个Era时长为6个小时。每个Era都会重新进行一次验证人的竞选并且对上一Era的奖励进行结算。

**Session** -  一个时长单位，时长为1小时。每session会进行验证人的在线检测并触发踢出检查机制。

**Slot** - 一个出块周期，时长为6秒。

**质押上限/Stake limit** - Validator或Candidate节点可以获得的有效质押上限，跟这个节点的存储空间和有意义存储量有关。[参考阅读](GPoS.md)。

## 链下机制相关

**MPoW** - Meaningful Proof of Work, 是Crust网络中节点用来进行存储证明的机制。MPoW是基于TEE技术实现的。

**可信执行环境/TEE** - Trusted Execution Environment，一种运行在电脑上的沙盒环境。当可执行代码被放入TEE内运行后，任何人都无法修改代码的执行或窥探受TEE保护的数据。[参考阅读](https://www.trustonic.com/technical-articles/what-is-a-trusted-execution-environment-tee/)。

**sWorker** - sWorker是运行MPoW协议以及相关功能的模块，可以理解成节点上运行了可信的存储监控器。节点上执运行sWorker后，sWorker会定期向链汇报节点存储数据的状态。

**SRD** - Sealed Ramdon Data，被封装的随机数。sWorker 使用SRD来填充节点的可用空间，这样链上能可信的获得每个节点的容量。

**封装/Seal** - 节点上的数据都会被TEE进行封装，被封装的数据只有TEE能解密。可以抵御女巫攻击和生成攻击。

**工作量报告/Work Report** - 节点的sWorker进行存储证明的报告。节点sWorker中会周期性的生成可以被验证的Work Report并发往链上。

**存储节点/Storage Node** - 当节点一词被用在MPoW或存储网络的范畴内时，代表的是组成Crust存储网络的基本单元。

**组/Group** - Group由一个Group Owner和多个Group Member节点构成，同一个Group内的Member的存储量，会被汇总为Group Owner的总存储量，Group Owner对应了Crust链上的一个Validator或Candidate。

**Group Owner** - Group Owner节点是Group的负责人和发起者，在Crust链负责出块，而Group Member的有效存储量会被汇总到Owner上增加有效质押上限。

**Group Member** - Member节点是一个存储节点，也就是一个Group中存储的提供者。一个Group中可以有多个Member节点，他们的有效存储会被汇总到Owner之上，增加Owner的有效质押上限。

**工作量报告权益/ Work Report Benefits** - Crust节点可以通过Benefits模块，锁定CRU从而免除工作量报告的手续费。

## 去中心化存储市场相关

即将发布

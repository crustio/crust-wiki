---
id: crustGrants
title: Crust Grants
sidebar_label: Crust Grants
---

Crust Grants Program由Decentralized Cloud Foundation（DCF，去中心化云基金会）发起，旨在奖励为Web 3.0 去中心化云存储生态提供价值的项目。Grants将去中心化云存储划分为6个层面的技术栈，包括了：L0协议层、文件系统协议层、节点策略层、开发者工具及基础设施层、区块链应用层和面向用户的应用层，全方位激励去中心化云存储生态下的项目。

## 1. 加入Crust Grants可以获得

对于成功通过申请Crust Grants的项目：

1. 最高30,000 USDT的资金资助
2. 深度参与Crust技术社区，有机会获邀参加Crust生态活动，提升项目认知度
3. 深度参与Web3生态，获得波卡，IPFS生态的支持
4. 团队成员容易获得Crust大使的认证
5. 协助项目团队对接生态资金

## 2. 申请方向

![crust_stack](assets/general/crust_stack.png)

### 2.1 L0协议层

Crust协议层激励并维护了一个去中心化存储网络。以IPFS为作为底层存储，通过MPoW，GPoS协议给予区块链激励，并利用DSM协议提供去中心化供需关系撮合系统，源源不断为存储节点提供代币激励。

Grants对于L0协议栈优化都会给予激励，这里可以提供两条思路:

1. MPoW协议中，链下存储工作机sWorker目前版本是基于Intel SGX的。提供其他TEE架构（包括Arm和TrustedZone）的sWorker版本，或是提供不同语言的实现版本。目前Crust团队也正在打造基于Apache Teaclave SDK版本的sWorker，参考仓库地址：[https://github.com/crustio/crust-sworker-teaclave](https://github.com/crustio/crust-sworker-teaclave?fileGuid=zyPNxf65rognWNlE)
2. 对于Crust链上协议栈其实不受任何共识算法的约束，移植Crust协议栈到以太坊生态作为智能合约链，或是移植到任何合约公链（Near，波场等）也是可选方向

### 2.2 文件系统协议层

Crust协议目前利用IPFS作为底层存储，任何对于IPFS协议的改进或是对IPFS生态做出贡献的项目都在Grants的激励范围内。当然文件系统协议层也并不局限在IPFS生态内，兼容或主动适配不同去中心化存储协议也在这一层的激励范围内，这里提供3条思路：

1. 更改Bitswap机制，优化数据交换的信用机制，从而提升IPFS Retrival的效率，具体可参考Bitswap代码库实现：[https://github.com/ipfs/go-bitswap](https://github.com/ipfs/go-bitswap?fileGuid=zyPNxf65rognWNlE)
2. 提供加密版本IPFS，这里提供Crust团队目前正在实现的go-ipfs-encryptor代码库：[https://github.com/crustio/go-ipfs-encryptor](https://github.com/crustio/go-ipfs-encryptor?fileGuid=zyPNxf65rognWNlE)
3. 兼容不同去中心化存储协议，比如适配DAT Project，具体参考代码库：[https://github.com/datproject/dat](https://github.com/datproject/dat?fileGuid=zyPNxf65rognWNlE)

### 2.3 节点策略层

节点对于硬件或软件的改进都能提升整个Crust网络的存储质量，Grants充分考虑到了这一点，任何提升节点运行效率或提升节点稳定性的项目都在Grants的激励范围内，这里提供4条思路：

1. 关于硬盘组织的最优策略，包括Raid机制优化，硬盘管理方案等
2. 对于Crust Node的优化和调整，具体参考代码库：[https://github.com/crustio/crust-node](https://github.com/crustio/crust-node?fileGuid=zyPNxf65rognWNlE)
3. 对于DSM中自动接单管理器sManager的优化和调整，具体参考代码库：[https://github.com/crustio/crust-smanager](https://github.com/crustio/crust-smanager?fileGuid=zyPNxf65rognWNlE)
4. 提供局域网Owner&Member的管理和监控程序，比如基于Prometheus定制策略，收集Owner和Member节点各项数据进行报警和监控，具体参考代码库：[https://github.com/prometheus/prometheus](https://github.com/prometheus/prometheus?fileGuid=zyPNxf65rognWNlE)

### 2.4开发者工具及基础设施层

云存储的应用非常依赖于各项开发者工具或脚手架的完善，任何提供开发者生态工具的项目都在Grants的激励范围内，这里罗列几条开发者生态中的工具或者服务：

1. 链节点服务：提供类似Infura以太坊-like的链节点服务，开发者可以不用本地启动链并同步数据，就能连接上Crust网络进行开发，Infura参考链接：[https://infura.io/](https://infura.io/?fileGuid=zyPNxf65rognWNlE)
2. IPFS公共Gateway：提供IPFS缓存服务（写服务），能够让开发者不用启动IPFS就能将数据通过IPFS缓存节点，存储到Crust网络中，IPFS Public Gateway参考链接：[https://ipfs.github.io/public-gateway-checker/](https://ipfs.github.io/public-gateway-checker/?fileGuid=zyPNxf65rognWNlE)
3. 多语言API SDKs：目前Crust网络支持JS版本的SDK，支持多语言的SDK能够便于不同语言喜好的开发者参与Crust生态做开发，Crust SDK参考连接：[https://wiki.crust.network/docs/en/buildCrustKits](https://wiki.crust.network/docs/en/buildCrustKits?fileGuid=zyPNxf65rognWNlE)
4. API文档：文档也是制约开发者参与生态建设的重要影响因素，全面而合理的文档能够大大吸引开发者的参与
5. 命令行工具：提供命令行能够访问Crust网络资源服务，比如crust-cli：[https://github.com/crustio/crust-cli](https://github.com/crustio/crust-cli?fileGuid=zyPNxf65rognWNlE)

### 2.5 区块链应用层

对于可视化链上信息，或是针对链上功能做出优秀应用的项目也在Grants的激励范围内，这里罗列一些样例作为参考：

1. Crust区块链浏览器：展示Crust网络的区块信息，区块链浏览器地址：[https://crust.subscan.io](https://crust.subscan.io?fileGuid=zyPNxf65rognWNlE)
2. Crust存储浏览器：展示Crust网络的存储信息，存储浏览器地址：[https://splorer.crust.network](https://splorer.crust.network?fileGuid=zyPNxf65rognWNlE)
3. Crust插件钱包：继承Crust各项资产和IPFS Companion功能，具体参考代码库：[https://github.com/crustio/crust-extension](https://github.com/crustio/crust-extension?fileGuid=zyPNxf65rognWNlE)

### 2.6 面向用户的应用层

针对利用Crust存储网络来开发应用的项目，也在Grants的激励范围内，其中包括但不限于以下场景：

1. DApp和网页部署
2. NFT数据存储
3. 内容存储和分发

目前，成功利用Crust网络存储的应用包括：

1. Uniswap Interface，具体参考实现代码：[https://github.com/Uniswap/uniswap-interface/pull/1342](https://github.com/Uniswap/uniswap-interface/pull/1342?fileGuid=zyPNxf65rognWNlE)
2. Polkadot Apps，具体参考实现代码：[https://github.com/polkadot-js/apps/pull/4933](https://github.com/polkadot-js/apps/pull/4933?fileGuid=zyPNxf65rognWNlE)
3. Crust Apps，具体参考实现代码：[https://github.com/crustio/crust-apps/blob/master/.github/workflows/release.yml#L72-L77](https://github.com/crustio/crust-apps/blob/master/.github/workflows/release.yml#L72-L77?fileGuid=zyPNxf65rognWNlE)

## 3. 开发环境
开发者可以参考[Crust Rocky测试网手册](https://wiki.crust.network/docs/en/buildRockyGuidance)进行开发和测试。

## 4. 申请流程

[申请入口](https://github.com/crustio/Crust-Grants-Program?fileGuid=zyPNxf65rognWNlE)中对每个阶段均有详细描述。Crust Grants申请的整体流程如下：

1. 申请：申请者填写[Application Template](https://github.com/crustio/Crust-Grants-Program/blob/main/applications/application_template.md?fileGuid=zyPNxf65rognWNlE)并提交Pull Request；
2. 评估：此期间DCF成员会以PR Comments的形式提出对申请书的任何疑问，并会酌情安排和团队的线上会议进行充分讨论，整个过程会重复1-3轮；
3. 开发：通过评估的Pull Request会被合并到main分支，申请者进入开发阶段；
4. 交付流程

提交的申请中应包含开发阶段的里程碑(Milestone)，在每个里程碑完成后，都可以[在Github进行交付](https://github.com/crustio/Crust-Grant-Milestone-Delivery?fileGuid=zyPNxf65rognWNlE)，每个里程碑的交付流程如下：

1. 提交：每当申请者完成一个里程碑可以提交一个[里程碑表格](https://github.com/crustio/Crust-Grant-Milestone-Delivery/blob/main/deliveries/milestone-delivery-template.md?fileGuid=zyPNxf65rognWNlE)和对应的[收据(Invoice)](https://forms.gle/A7NQDDcCJYfcbSCe8?fileGuid=zyPNxf65rognWNlE)；
2. 评估：DCF委员会对照里程碑的描述进行每个指标的审核，此阶段会以邮件或是线上会议的形式进行里程碑的审核；
3. 交付：对于通过评估的里程碑，DCF委员会将支付对于金额。如果开发团队选择的支付方式是CRU，会以邮件形式确定CRU/USDT汇率；（当项目的第一个里程碑通过评估后，将会被记录进[Crust Stack](https://github.com/crustio/Crust-Grants-Program/blob/main/crust_stack.md?fileGuid=zyPNxf65rognWNlE)）
4. 付款

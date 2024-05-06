---
id: sWorkerEntryNetwork
title: Entry Network
sidebar_label: Entry Network
---
入网是节点进入Crust存储网络的前置步骤，本节将详细介绍入网的具体流程和相关概念。

## SGX相关概念

SGX技术是Intel六代及之后芯片所拥有的信息安全技术。通过这种技术，应用程序能够保证自己的数据不被泄露。在介绍入网之前，先简单介绍一下SGX技术的一些相关概念，以便于理解sWorker中出现的一些术语。这些相关的概念是：

### 安全边界
基于SGX进行构建的项目一般分为两个部分：App和Enclave，App是普通的C/C++(或者Rust)程序，Enclave部分则是基于Intel SGX SDK(或者Apache Teaclave SDK)进行开发的安全飞地。具体来说Enclave是在程序运行时分配出来的内存空间，这部分内存空间受到SGX硬件的安全加密保护，任何外部的程序都不能获取Enclave中的数据。App和Enclave之间的交互是通过一系列开发者自定义的接口来进行，这些接口被称为“安全边界”。通过安全边界，App和Enclave能够进行数据的交互。安全边界是唯一一个可能造成Enclave内部数据泄露的地方，所以必须严谨、慎重地对安全边界的接口进行设计。

![sworker secure_boundary](assets/sworker/secureBoundary.png)

### 远程校验
如何判断一个程序是否运行在SGX中？为了解决这个问题，Intel提供了Remote Attestation机制。首先可以通过安全边界接口调用，获取一个在Enclave中生成的凭证Quote，其中包含了经过SGX硬件私钥签名的信息，这个硬件签名只有Intel能够验证。然后将这个Quote发送到IAS(Intel Attestation Service)，IAS会对Quote进行校验，并生成一个签名的Report。任何人都可以通过IAS的公开证书来验证Report的签名，以确保Report的有效性。Report中包含了对生成Quote的SGX平台的验证结果，任何伪造的Quote都无法通过IAS的校验。所以想要验证一个程序是否运行在SGX平台上，只要拿到该程序生成的Quote即可。

![sworker remote_attestation](assets/sworker/remoteAttestation.png)

### ECDSA Attestation
英特尔计划在2025年4月2日结束使用基于英特尔EPID的英特尔SGX认证服务（简称IAS）。请参考[此处](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/resources/sgx-ias-using-epid-eol-timeline.html)了解更多信息。

基于ECDSA的英特尔SGX DCAP认证允许提供商构建和交付自己的认证服务，而不是使用英特尔提供的远程认证服务。这是对IAS的替代方案。请参考[此处](https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/attestation-services.html)了解更多信息。

Crust已经开发了基于ECDSA的英特尔SGX DCAP认证服务。GitHub存储库位于[crust-dcap](https://github.com/crustio/crust-dcap)。sWorker版本>= 2.0.0支持基于ECDSA的DCAP认证。有关更多信息，请参阅[此处](Q&AForEPID-ECDSA.md)。

### MREnclave
另外一个重要的概念是MREnclave，它可以理解为运行时Enclave部分的代码和堆栈数据的哈希值。通过MREnclave可以确保Enclave中运行的是指定的程序代码，防止攻击者运行恶意的Enclave程序。Quote中包含了MREnclave值。


## 入网

在Crust网络中，每个sWorker都拥有唯一的身份，该身份信息会包含在它上报的工作量报告中，同时Crust区块链的每个节点也有自己的身份。因为Crust节点算力是通过工作量来体现（请参考MPoW、GPoS机制），所以必须将Crust节点的身份和sWorker的身份进行绑定，只有这样，sWorker上报的算力才能被有效地归入Crust节点。入网就是Crust区块链认证sWorker身份，并将其绑定到某个Crust节点的过程。sWorker会在Enclave中生成一对公私钥，入网成功后，公钥作为sWorker的ID被保存在Crust链上，私钥则用来对工作量报告进行签名。Crust链使用该公钥来验证sWorker工作量报告的签名，确认工作量报告是否有效。入网关系到Crust网络的安全运行，为了安全有效地入网，Crust链必须完成三件事：1.环境认证---保证sWorker运行在SGX中；2.代码认证---保证sWorker运行的是正确的代码；3.身份绑定---将节点的Crust区块链身份和sWorker的身份进行绑定。具体流程如下：

![sworker entry_network](assets/sworker/entryNetwork.png)

1. App将Crust账户C存储在Enclave中
1. Enclave中生成一对公私钥Aa（公钥A，私钥a）
1. Enclave以公钥A作为参数生成Quote
1. App将Quote发送给IAS
1. IAS校验Quote，并返回一个Report和签名信息
1. Enclave将Report、签名信息、Crust链上账户C以及三者用私钥a的签名Sa，作为sWorker的Identity
1. App通过Crust API以交易的方式将Identity发送到Crust链上
1. 链上验证Identity通过，则入网成功，否则失败
注：App和Enclave是sWorker的两个组件

步骤3生成的Quote中包含sWorker内部生成的公钥A和代码的MREnclave。如果代码发生了变动，生成的MREnclave也会变化。在Crust网络启动以后，Crust链上已经通过链上治理决议将IAS的公开证书和经过验证的MREnclave设置到链上。步骤8首先从Report中提取出公钥A，通过A可以验证签名Sa是否有效。其次通过链上的IAS证书，验证Report的签名来判断其是否有效。签名验证是为了防止攻击者伪造IAS签名。在Report中包含了对sWorker运行平台的校验结果：是否是有效的SGX硬件，因而能够判断发送Identity的sWorker是否运行在SGX环境中(环境验证)。然后验证Report中的MREnclave是否和链上设置的一致(代码认证)。最后将公钥A和账户C进行绑定(身份绑定)，之后A上报的工作量计入C的名下。

PS: 版本>= 2.0.0的sWorker将使用基于ECDSA的DCAP认证，而不是IAS认证。

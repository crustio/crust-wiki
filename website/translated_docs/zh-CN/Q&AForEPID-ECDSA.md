---
id: Q&AForEPID-ECDSA
title: EPID & ECDSA
sidebar_label: EPID & ECDSA
---

## 1. 概览

### EPID IAS认证
英特尔计划在2025年4月2日结束使用基于英特尔EPID的英特尔SGX认证服务（简称IAS）。请参考[此处](https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/resources/sgx-ias-using-epid-eol-timeline.html)了解更多信息。

### ECDSA DCAP认证

基于ECDSA的英特尔SGX DCAP认证允许提供商构建和交付自己的认证服务，而不是使用英特尔提供的远程认证服务。这是对IAS的替代方案。请参考[此处](https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/attestation-services.html)了解更多信息。

Crust已经开发了基于ECDSA的英特尔SGX DCAP认证服务。GitHub存储库位于[crust-dcap](https://github.com/crustio/crust-dcap)。sWorker版本>= 2.0.0支持基于ECDSA的DCAP认证。

## 2. 迁移Q&A

### 2.1 我需要在2025年4月2日之前迁移所有服务器到基于ECDSA的DCAP认证吗？

不需要。在入网成功后正常运行情况下，sWorker不需要再次连接Intel IAS服务进行认证。所以在不触发重新入网的情况下(比如磁盘损坏、系统重装、新服务器入网等)，当前版本的sWorker可以一直使用，无需迁移。

### 2.2 是否所有服务器都可以升级到基于ECDSA的DCAP认证？ <a id="server_support_ecdsa"></a>

不是。运行以下命令以检查你的服务器是否支持ECDSA DCAP认证：
```shell
cpuid | grep -i "SGX launch config"
```

查看该命令的输出是否为：
```shell
    SGX_LC: SGX launch config supported      = true
```

如果输出结果为true，则说明你的服务器支持ECDSA DCAP认证。

请参考以下链接确认你的服务器CPU型号是否支持ECDSA DCAP认证：

[哪些平台支持英特尔® SGX 数据中心标记基元 （DCAP）](https://www.intel.com/content/www/us/en/support/articles/000057420/software/intel-security-products.html)

[Intel® Processors Supporting Intel® SGX](https://www.intel.cn/content/www/cn/zh/architecture-and-technology/software-guard-extensions-processors.html)

简单总结来说，以下常见型号的CPU系列支持ECDSA DCAP认证：
- 第三代以后的Intel 至强 Scalable 系列处理器 
    
    注: Scalable系列处理器不支持EPID IAS，只支持ECDSA DCAP

- 支持SGX with **Intel SPS**特性的至强 E/D 系列处理器 

    查看CPU官方Spec确认提供以下特性:

    ![Pic](assets/qa/sgx-with-intel-sps.png)

    注1: 该系列处理器可同时支持EPID IAS和ECDSA DCAP
    
    注2: SGX with **Intel ME**特性的只支持EPID IAS, 不支持ECDSA DCAP

- 支持SGX + AES-NI特性的第8、9、10代酷睿处理器

    查看CPU官方Spec确认提供以下特性:

    ![Pic](assets/qa/sgx-with-aes-ni.png)

    注1: 该系列处理器可同时支持EPID IAS和ECDSA DCAP
    
    注2: 11代(含)以后的酷睿处理器不再支持SGX特性,所以EPID IAS和ECDSA DCAP都不可用

### 2.3 我的服务器CPU型号确认支持SGX和DCAP，为什么‘SGX launch config’输出仍然为false？

SGX和DCAP特性除了需满足CPU型号要求外，还需要BIOS配套支持，请检查BIOS设置，或者升级相应BIOS版本，详情请联系服务器供应商技术支持。

### 2.4 我的服务器支持ECDSA DCAP，已经运行旧版本的基于EPID认证的sWorker, 现在需要重新入网，如何迁移到基于ECDSA的DCAP认证？

请查看[3. 迁移指南](#migration_guide)

### 2.5 我的服务器支持ECDSA DCAP, 并且是新服务器，需要从0开始部署入网，如何操作？

请直接参考[Member节点](memberNode.md)或者[Isolation节点](isolationNode.md)进行部署安装，Crust Node 2.0.0版本支持自动识别并使用ECDSA DCAP认证模式。

### 2.6 我的服务器不支持ECDSA DCAP, 已经运行旧版本的基于EPID认证的sWorker, 现在需要重新入网，如何操作？

如果时间在2025年4月2日之前，仍然可以使用EPID IAS进行认证入网，所有当前生效的sWorker版本都可使用。

如果时间在2025年4月2日之后，因为各种原因导致需要重新入网，由于Intel IAS服务已经停止，服务器本身又不支持ECDSA DCAP，这台服务器已经无法继续入网，需要重新购买支持ECDSA DCAP的服务器，将硬盘迁移到新服务器上，然后重新部署入网。

注：对于2024年需要购买新服务器入场的矿工，请务必按照[#2.2节](#server_support_ecdsa)的内容和参考链接购买支持DCAP的服务器，以确保在Intel IAS服务停止后仍然能够继续入网。

## 3. 迁移指南 <a id="migration_guide"></a>

### 3.1 升级Crust Node最新安装包

a. 下载

确保安装包的版本号>=2.0.0
```plain
wget https://github.com/crustio/crust-node/archive/v2.0.0.tar.gz
```
b. 解压
```plain
tar -xvf v2.0.0.tar.gz
```
c. 进入安装目录
```plain
cd crust-node-2.0.0
```

### 3.2 迁移升级

执行以下命令进行升级
```shell
sudo ./install.sh --update-ecdsa
```

脚本首先会检查当前服务器是否支持ECDSA DCAP认证，如果不支持，会提示以下信息并且退出：

![Pic](assets/qa/update-ecdsa-not-applicable.png)

如果当前服务器支持ECDSA DCAP认证，则会提示需要停止sworker运行并且删除现有sworker数据，需要确认是否执行：

[注意] 该操作会导致该member节点算力清0，并且需要重新入网和SRD；数据删除后无法恢复，请确认后再操作。

![Pic](assets/qa/update-ecdsa-yes.png)

看到以下显示代表升级成功：

![Pic](assets/qa/update-ecdsa-success.png)

### 3.3 重新启动sworker

重新启动sworker, 观察日志是否基于ECDSA DCAP入网成功:
```shell
sudo crust start sworker
sudo crust logs sworker
```

确认入网成功后，重新执行SRD:
```shell
sudo crust tools change-srd {number}
```

SRD任务执行完毕后，sWorker将重新正常工作。
---
id: Q&AForBasicnodeproblems
title: Basic Node Problems
sidebar_label: Basic Node Problems
---

## 1 安装Node时出现apt update错误

这个是ubuntu系统更新包的错误，和crust无关，一般可以通过优化网络和更换镜像的方式进行解决。

## 2 Owner对的硬件要求

- 网络必须稳定，有公网IP，否则出块不稳定可能会导致惩罚
- 硬盘使用SSD，建议500GB ~ 1TB
- 不要求SGX，推荐使用云服务机器

## 3 SGX 设置

机器的 SGX（Software Guard Extensions）  模块的默认关闭的，需要在机器的 BIOS 设置。首先将SGX 开关设置为 enable，同时把Secure Boot 关闭（部分主板没有）。如果 SGX 只支持 software enabled 方式，参考这个链接[https://github.com/intel/sgx-software-enable](https://github.com/intel/sgx-software-enable)，或使用以下命令:

```plain
wget https://github.com/crustio/crust-node/releases/download/sgxenable-1.0.0/sgx_enable && sudo chmod +x sgx_enable && sudo ./sgx_enable
```

## 4 链的peers上不去原因和解决办法

peers上不去主要是因为网络问题, 如没有固定IP，带宽不够，网段被隔离，一般需要升级网络来解决这个问题。当然也可能是因为没有固定IP或者是因为同一个局域网内启动了大量Member节点，对于同一局域网内启动大量Member节点可以做端口转发来缓解，具体操作如下：

- 执行sudo crust config chain-port 30889的命令将Member A节点的端口改成30889

- 执行sudo crust config generate命令生成配置文件

- 执行sudo crust reload chain命令重启链服务

- 在路由端配置这个Member A节点内网的30889端口转发

- 依此类推MemberB节点做30887的端口转发,MemberC节点做30886的端口转发

## 5 如何迁移owner

分为以下三步

- 在新的机器上，启用新的owner，等待链同步至最新块一切正常后，获得新的session key。**请注意旧的owner一定不要停止链服务或停机**
- 设置新的session key。**请注意旧的owner一定不要停止链服务或停机**
- 等待一个era后观察到链工作以及出块一切正常后，停止旧的owner。

## 6 链日志报错

如下图所示，表示链数据损坏，执行sudo rm -rf /opt/crust/data/chain/chains/crust/db/命令将链数据删除，然后执行sudo crust reload chain重新同步链数据，如果再次出现如下报错，说明系统盘有坏道，请立即更换系统盘

![图片](assets/qa/chaindb.png)

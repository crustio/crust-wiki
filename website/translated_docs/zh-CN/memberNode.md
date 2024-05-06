---
id: memberNode
title: Member Node
sidebar_label: Member Node
---

## 1 概述

### 1.1 功能职责

Member节点是Group中存储的提供方，一个Group中可以有多个Member节点，他们有效存储会叠加到Owner的身上参与竞争出块。由于Member节点负责存储文件，并进行可信量化, 所以对SGX的支持是必不可少的。Member节点与账户的关系是通过配置backup的形式进行关联的。

### 1.2 硬件要求

Member节点，负责运行链模块（不参与出块）,存储模块, IPFS等, 这类节点需要拥有SGX的环境，同时该类节点负责存储用户文件，涉及到大量的网络传输，网络带宽要足够。具体硬件推荐参考[这里](nodeHardwareSpec#member节点)。

## 2 基础工作

### 2.1 构建账户

> 注意：Crust主网账号一定是以'c'开头

参考这个[链接](crust-account.md)去构建一个Member的账户（单账户即可），Member节点账户需要满足以下三个要求:

* 确保Member账户拥有2~5个CRU作为交易费（不能被锁住），用于work report的发送，同时建议隔一段时间检查下剩余情况
* 不能是Owner的账户
* 保证账户的唯一性，不能和其他Member账户相同， 即每台机器一个链账户
* 如果要使用Maxwell网络上的账户，需要将备份文件导入到主网[APPs](https://apps.crust.network/)并重新导出新版备份文件

### 2.2 BIOS 设置

机器的 SGX（Software Guard Extensions）  模块的默认关闭的，需要在机器的 BIOS 设置。首先将SGX 开关设置为 enable，同时把Secure Boot 关闭（部分主板没有）。如果 SGX 只支持 software enabled 方式，参考这个链接[https://github.com/intel/sgx-software-enable](https://github.com/intel/sgx-software-enable)，或使用以下命令:

```plain
wget https://github.com/crustio/crust-node/releases/download/sgxenable-1.0.0/sgx_enable && sudo chmod +x sgx_enable && sudo ./sgx_enable
```

### 2.3 下载Crust node安装包

a. 下载

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

### 2.4 安装Crust服务

安装前的注意点：

* 程序将会被安装在/opt/crust路径下，请确保**系统盘有大于2TB**的固态硬盘空间。<font color='red'> **如果不希望使用系统盘，而使用其他的固态硬盘，请事先创建/opt/crust目录，并将该固态挂在到这个目录，注意目录读写权限** </font>
* 如果之前运行过 Crust 的非激励测试网，请把程序关闭并将数据清除后再执行安装，具体请参考6.2小节
* 安装过程中涉及到下载相关依赖和 docker images 的操作，比较耗时，并有可能因为网络的问题失败，如发生，请重复执行该操作直到安装完成

安装命令：

```plain
sudo ./install.sh --registry cn
```
## 3 节点设置

### 3.1 开始编辑

执行以下命令编辑节点配置文件

```plain
sudo crust config set
```

### 3.2 修改节点名

按照提示输入节点的名字，按回车结束：

![图片](assets/mining/member_name.png)

### 3.3 选择节点模式

按照提示输入节点模式member，按回车结束：

![图片](assets/mining/member_mode.png)

### 3.4 配置账户

将Member账户的backup文件内容输入到终端，具体操作为：拷贝Member账户创建时备份的文件内容，复制到终端，输入回车键。backup文件内容输入效果如下图所示：

![图片](assets/mining/member_backup_config.png)

> 注意 1：Crust主网账号一定是以'c'开头，比如上图中"address"值就是一个Crust主网账号。

> 注意 2：这个备份文件以及其内容是您账户的凭证，非常重要，请勿泄露或遗失。

按提示输入password内容，具体为账户的密码，回车键结束：

![图片](assets/mining/member_password_config.png)

### 3.5 配置sWorker认证模式

按照提示输入sworker认证模式，一般来说使用默认值即可（参考[EPID & ECDSA](Q&AForEPID-ECDSA.md)了解更多信息），直接按回车键结束：

![pic](assets/node/config-set-attestation-mode.png)

### 3.6 配置硬盘

> 硬盘组织方式不唯一，如果有更好的方案可以自行优化

Crust作为去中心话存储网络，硬盘的配置尤为重要。节点存储容量将作为预留空间上报到 Crust 网络，这个将决定你链上可以被别人担保的上限，也决定你可以接单的量

**硬盘挂载要求**：
* 接单的文件和SRD占位文件将会被写入/opt/crust/disks/1 ~ /opt/crust/disks/128目录下，这取决于你挂载硬盘的方式。每台物理机最多可以配置500TB的预留空间
* 挂载完毕后请注意目录的读写权限

**机械硬盘组织方式不唯一，如果有更好的方案可以自行优化**
* 单一机械硬盘：直接挂载到/opt/crust/disks/1即可
* 多个机械硬盘（多目录）：分别将硬盘挂载到/opt/crust/disks/1 ~ /opt/crust/disks/128目录。举个例子，假设有三块硬盘/dev/sdb，/dev/sdc和/dev/sdd，则可以将他们分别挂载到/opt/crust/disks/1，/opt/crust/disks/2， /opt/crust/disks/3目录。这种方式的效率相对比较高，方式也比较简单，但硬盘的容错性会降低
* 多个机械硬盘（单目录）：对于稳定性不佳的硬盘，利用RAID/LVM/mergerfs等手段将硬盘组合，并挂载到/opt/crust/disks/1目录不失为一种选择。这种方式可以增加硬盘的容错性，但也会带来效率上的下降
* 多个机械硬盘（混合）：结合单目录和多目录的方式进行挂载

可以使用如下命令查看文件目录挂载的具体情况：

```plain
sudo crust tools space-info
```

### 3.7 外源链设置（可选&推荐）

使得本地存储服务使用外部的链节点进行信息收集，工作量上报等工作

优点：
- Member节点更加轻量化
- 一个链节点服务多个Member
- 上报工作量更加稳定
- 避免链节点的重复同步问题

缺点：
- 存在单点故障
- Member连接数有限制(推荐10个以下)
- 额外的机器(推荐云服务器)

当外源链被配置之后，本地将不会启动链。请参考这个[链接](build-node.md#8-配置外源链)进行配置

## 4 节点启动

### 4.1 准备

首先需要，确保以下接口是未被占用：30888 19944 19933 (crust chain所需)，56666 (crust API所需)，12222 (crust sWorker所需)，5001 4001 37773 (IPFS所需)。然后开放链的P2P端口，命令如下：

```plain
sudo ufw allow 30888
```

### 4.2 启动

启动命令如下：

```plain
sudo crust start 
```

### 4.3 检查运行状态

执行下面语句查看crust运行状态：

```plain
sudo crust status
```
如下上面五个服务运行表示启动成功（配置外源链情况下链不会启动）：
![图片](assets/mining/all_run.png)

### 4.4 设置节点存储容量并运行SRD
请等待2分钟后执行.

1 假设机械硬盘有空间1000G, 就如下设置，sWorker会预留一些空间并自动判断SRD的大小：

```plain
sudo crust tools change-srd 1000
```

2 这些命令有可能会执行失败，这是由于sworker还没有完全启动，请等待几分钟之后再尝试，如果依旧不行，请执行下属监控命令排查错误情况：

```plain
sudo crust logs sworker
```

### 4.5 监控

通过以下监控命令进行监控，ctrl-c结束监控：

```plain
sudo crust logs sworker
```
监控日志如下：
* 表示区块正在同步中，该过程耗时较长（1）
* 成功在链上注册身份（2）
* 正在进行存储余量统计操作，该过程会逐步进行（3）
* 表示工作量上报成功， 该过程耗时较长，大约一小时左右（4）
![图片](assets/mining/sworker_log1.png)

![图片](assets/mining/sworker_log2.png)

## 5. 加入Group

### 5.1 添加白名单

Member账户需要添加到Group的白名单后才能加入Group中。进入[Crust APPS](https://apps.crust.network)中，选择Account，选择Benefit模块，找到之前创建的组（或者联系Group管理者，进行操作），点击Add allowed accounts，如下：

![图片](assets/mining/addMemberIntoAllowlist1.png)

选择需要加入组的Member账户，点击Submit并发送交易，将该账户加入Group的白名单
![图片](assets/mining/addMemberIntoAllowlist2.png)

### 5.2 加组

等待第一次上报work report后（一般是同步块到最高后再等一小时，可以通过swoker的log进行查询，或查询链上状态），选择Benefit，点击Join group,选择需要加组的Member账户和创建Group的Stash账户，点击Join group，输入Member账户密码，最后点击Sign and Submit发送交易

![图片](assets/mining/join_group.png)
![图片](assets/mining/join_group1.png)

### 5.3 锁定CRU减免工作量手续费

**主网的工作量上报需要手续费。**一般情况下，每个Member每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了免除工作量上报费用的Benefit模块，Group owner可以通过锁定CRU的方式，减免Member的手续费。**每个Member**需要锁定18CRU来进行手续费减免，但考虑到存在工作量上报不稳定的情况，建议锁定24CRU~30CRU来确保手续费的完全免费。

进入[Crust APPS](https://apps.crust.network)中，选择Account，选择Benefit模块，找到之前创建的组（或者联系Group管理者，进行操作），点击Increase lockup，如下：

![图片](assets/mining/benefit_lockup1.png)

输入需要**增加**的CRU数量，并进行签名交易，如下：

![图片](assets/mining/benefit_lockup2.png)


## 6. 重启与卸载

### 6.1 重启

如果机器需要重新启动，或者因为任何情况需要重启 Crust 节点相关程序，请参考下列步骤进行。请注意：本小节仅包括 Crust 节点相关程序的启动步骤，不包括机器基本软硬件环境设置和检查的相关内容，比如硬盘挂载、frp 内网穿透、IPFS等。请在保证软硬件系统正常的情况下进行下列步骤

```plain
sudo crust reload
```

### 6.2 数据清除与卸载

如果你运行过老版本的测试链或者想重新部署，默认情况下需要清除三处数据，

* Crust的基础数据会被默认放在/opt/crust/data和/opt/crust/disks中，请清除其中的文件
* Node数据存储在/opt/crust/crust-node中，请执行以下命令进行卸载
```plain
sudo /opt/crust/crust-node/scripts/uninstall.sh
```


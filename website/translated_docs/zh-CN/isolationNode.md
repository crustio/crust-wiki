---
id: isolationNode
title: Isolation Node
sidebar_label: Isolation Node
---

## 1. 概述

### 1.1 功能职责

Isolation节点是Crust的全功能节点，其承担了出块，存储，文件传输等核心功能，相当于Owner和Member节点处于同一台机器。所以，对SGX的支持是必不可少的。而账户是通过session key与运行的链程序进行互联，参与出块的。存储信息的上报是是通过配置backup的形式进行关联的。

### 1.2 硬件环境

Isolation节点形态下，你唯一的节点上需要运行链模块以及存储量模块,所以对SGX的支持是必不可少的。同时，由于出块进程以及存储工作量上报进程对网络稳定性要求比较高，我们强烈推荐出块节点使用固定的公网 IP，否则会因为出块不稳定等情况带来损失。详细配置要求和推荐，请参考官方[硬件spec](node-Hard-wareSpec.md#isolation节点形态硬件spec)。

## 2 基础工作

### 2.1 构建账户

> 注意：Crust主网账号一定是以'c'开头

节点负责参与出块竞争，**要生成并绑定Controller&Stash账户组和创建一个Member账户，共3个账户**，具体参考[这里](new-bond.md)进行账户组的创建和[这里](crust-account.md)创建Member账户。这3个账户需要满足以下要求:

* 需要保证Controller&Stash留有少量的未被Lock的CRU用于发送各类交易（约1CRU）
* 确保Member账户拥有2~5个CRU作为交易费（不能被锁住），用于work report的发送，同时建议隔一段时间检查下剩余情况
* 确保账户的唯一性
* 如果要使用Maxwell网络上的账户，需要将备份文件导入到主网[APPs](https://apps.crust.network/)并重新导出新版备份文件

### 2.2 创建Group

> 创建Group的账号必须是绑定好的Stash账号

进入Crust APPS中，选择Benefit，点击Create group,选择Owner的Stash账号，点击Create，输入**Stash账户密码**，最后点击Sign and Submit发送交易创建Group。

![图片](assets/mining/create_group.png)
![图片](assets/mining/create_group1.jpg)

### 2.3 BIOS 设置

一般来说，机器的 SGX（Software Guard Extensions） 模块是默认关闭的，需要在机器的 BIOS 设置，首先将SGX 开关设置为 enable，同时把Secure Boot 关闭（部分主板没有）。如果 SGX 只支持 software enabled 方式，参考这个链接[https://github.com/intel/sgx-software-enable](https://github.com/intel/sgx-software-enable)，或使用以下命令:

```plain
wget https://github.com/crustio/crust-node/releases/download/sgxenable-1.0.0/sgx_enable && sudo chmod +x sgx_enable && sudo ./sgx_enable
```

### 2.4 下载Crust node安装包

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
### 2.5 安装Crust服务

安装前的注意点：

* 程序将会被安装在/opt/crust路径下，请确保**系统盘有大于2TB**的固态硬盘空间。**如果不希望使用系统盘，而使用其他的固态硬盘，请事先创建/opt/crust目录，并将该固态挂在到这个目录，注意目录读写权限**
* 如果之前运行过 Crust 的其他测试链，请把程序关闭并将数据清除后再执行安装，具体请参考6.2小节
* 安装过程中涉及到下载相关依赖和 docker images 的操作，会比较耗时，并有可能因为网络的问题失败，如发生，请重复执行该操作直到安装完成

安装命令：

```plain
sudo ./install.sh --registry cn
```
## 3. 节点设置

### 3.1 开始编辑

执行以下命令编辑节点配置文件

```plain
sudo crust config set
```
### 3.2 修改节点名

按照提示输入节点的名字，按回车结束：

![图片](assets/mining/isolation_name.png)

### 3.3 选择节点模式

按照提示输入节点模式isolation，按回车结束：

![图片](assets/mining/isolation_mode.png)

### 3.4 配置Member账户

将Member账户的backup文件内容输入到终端，具体操作为：拷贝Member账户创建时备份的文件内容，复制到终端，输入回车键。backup文件内容输入效果如下图所示：

![图片](assets/mining/member_backup_config.png)

> 注意 1：Crust主网账号一定是以'c'开头，比如上图中"address"值就是一个Crust主网账号。

> 注意 2：这个备份文件以及其内容是您账户的凭证，非常重要，请勿泄露或遗失。

按提示输入password内容，回车键结束：

![图片](assets/mining/member_password_config.png)

### 3.5 Config sWorker Attestation Mode

按照提示输入sworker认证模式，一般来说使用默认值即可（参考[EPID & ECDSA](Q&AForEPID-ECDSA.md)了解更多信息），直接按回车键结束：

![pic](assets/node/config-set-attestation-mode.png)

### 3.6 配置硬盘

> 硬盘组织方式不唯一，如果有更好的方案可以自行优化

Crust作为去中心话存储网络，硬盘的配置尤为重要。节点存储容量将作为预留空间上报到 Crust 网络，这个将决定你链上可以被别人担保的上限，也决定你可以接单的量

**硬盘挂载要求：**
* 接单的文件和SRD占位文件将会被写入/opt/crust/disks/1 ~ /opt/crust/disks/128目录下，这取决于你挂载硬盘的方式。每台物理机最多可以配置500TB的预留空间
* 挂载完毕后请注意目录的读写权限

**机械硬盘组织方式不唯一，如果有更好的方案可以自行优化**
* 单一机械硬盘：直接挂载到/opt/crust/disks/1即可
* 多个机械硬盘（多目录）：分别将硬盘挂载到/opt/crust/disks/1 ~ /opt/crust/disks/128目录。举个例子，假设有三块硬盘/dev/sdb，/dev/sdc和/dev/sdd，则可以将他们分别挂载到/opt/crust/disks/1，/opt/crust/disks/2， /opt/crust/disks/3目录。这种方式的效率相对比较高，方式也比较简单，但硬盘的容错性会降低
* 多个机械硬盘（单目录）：对于稳定性不佳的硬盘，利用RAID/LVM/mergerfs等手段将硬盘组合，并挂载到/opt/crust/disks/1目录不失为一种选择。这种方式可以增加硬盘的容错性，但也会带来效率上的下降
* 多个机械硬盘（混合）：结合单目录和多目录的方式进行挂载

```plain
sudo crust tools space-info
```

## 4. 节点启动

### 4.1 准备

首先需要，确保以下接口是未被占用：30888 19944 19933 (crust chain所需)，56666 (crust API所需)，12222 (crust sWorker所需), 5001 4001 37773 (IPFS所需)

然后开放链的P2P端口，命令如下：

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
如下上面五个服务运行表示启动成功：

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

![pic](assets/mining/sworker_log1.png)

![pic](assets/mining/sworker_log2.png)

## 5. 加入Group

### 5.1 添加白名单

Member账户需要添加到Group的白名单后才能加入Group中。进入[Crust APPS](https://apps.crust.network)中，选择Account，选择Benefit模块，找到之前创建的组，点击Add allowed accounts，如下：

![图片](assets/mining/addMemberIntoAllowlist1.png)

选择需要加入组的Member账户，点击Submit并发送交易，将该账户加入Group的白名单
![图片](assets/mining/addMemberIntoAllowlist2.png)

### 5.2 加组

等待第一次上报work report后（一般是同步块到最高后再等一小时，可以通过swoker的log进行查询，或查询链上状态），选择Benefit，点击Join group,选择需要加组的Member账户和创建Group的Stash账户，点击Join group，输入Member账户密码，最后点击Sign and Submit发送交易

![图片](assets/mining/join_group.png)
![图片](assets/mining/join_group1.png)

### 5.3 锁定CRU减免工作量手续费

**主网的工作量上报需要手续费。**一般情况下，每个Member每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了免除工作量上报费用的Benefit模块，Group owner可以通过锁定CRU的方式，减免Member的手续费。**每个Member**需要锁定18CRU来进行手续费减免，但考虑到存在工作量上报不稳定的情况，建议锁定24CRU~30CRU来确保手续费的完全免费。

进入[Crust APPS](https://apps.crust.network)中，选择Account，选择Benefit模块，找到之前创建的组，点击Increase lockup，如下：

![图片](assets/mining/benefit_lockup1.png)

输入需要**增加**的CRU数量，并进行签名交易，如下：

![图片](assets/mining/benefit_lockup2.png)


## 6 参与出块

### 6.1 获取session key

等待链同步到最新块高，执行以下命令：

```plain
sudo crust tools rotate-keys
```
结果返回的就是该节点的session key, 请复制，下小结将会使用，如下所示:
![图片](assets/mining/gen_sessionkey.png)

### 6.2  设置session key

进入[CRUST APPs](https://apps.crust.network/)，点击导航栏的“**Network**”下的“**Staking**”。选中右侧的配置的三个点，选择“**Change session key**”

![图片](assets/mining/set_sessionkey1.png)

填入上小节得到的sessionkey，右侧点击“**Set session key**”

![图片](assets/mining/set_sessionkey2.png)


### 6.3 成为验证人/候选人

> 成为验证人需要肩负维护网络的责任，大规模的掉线会导致一定程度的处罚（最高约质有效质押量的7%）

进入[Crust APPs](https://apps.crust.network)，执行 “Be Validator” 操作。

![图片](assets/mining/be_validator1.png)

等到下个 era，能够查询到在 “**Staking**” 或在 “**Waiting**” 列表中，代表操作成功。

![图片](assets/mining/be_validator2.png)

## 

## 7. 重启与卸载

### 7.1 重启

如果机器需要重新启动，或者因为任何情况需要重启 Crust 节点相关程序，请参考下列步骤进行。请注意：本小节仅包括 Crust 节点相关程序的启动步骤，不包括机器基本软硬件环境设置和检查的相关内容，比如硬盘挂载、frp 内网穿透、IPFS等。请在保证软硬件系统正常的情况下进行下列步骤

```plain
sudo crust reload
```

### 7.2 数据清除与卸载

如果你运行过老版本的测试链或者想重新部署，默认情况下需要清除三处数据，

* Crust的基础数据会被默认放在/opt/crust/data和/opt/crust/disks中，请清除其中的文件
* Node数据存储在/opt/crust/crust-node中，请执行以下命令进行卸载

```plain
sudo /opt/crust/crust-node/scripts/uninstall.sh
```



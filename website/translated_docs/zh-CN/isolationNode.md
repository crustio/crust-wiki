---
id: isolationNode
title: Isolation Node
sidebar_label: Isolation Node
---

# 1. 概述

## 1.1 功能职责

Isolation节点是Crust的全功能节点，其承担了出块，存储，文件传输等核心功能。所以，对SGX的支持是必不可少的。而账户是通过session key与运行的链程序进行互联，参与出块的。存储信息的上报是是通过配置backup的形式进行关联的。

## 1.2 硬件环境

Isolation节点形态下，你唯一的节点上需要运行链模块以及存储量模块,所以对SGX的支持是必不可少的。同时，由于出块进程以及存储工作量上报进程对网络稳定性要求比较高，类似波卡生态的 Kusama 网络或者其他项目，我们强烈推荐出块节点使用固定的公网 IP，否则会因为出块不稳定等情况带来损失。详细配置要求和推荐，请参考官方[硬件spec](https://github.com/crustio/crust/wiki/Crust%E8%8A%82%E7%82%B9%E7%A1%AC%E4%BB%B6Spec)。

# 2 基础工作

## 2.1 构建账户

节点负责参与出块竞争，需要生成并绑定Controller&Stash账户组，具体参考这里。账户需要满足以下两个个要求:

* Controller账户保留5个CRU作为交易费（不能被锁住），用于work report的发送，同时建议隔一段时间检查下剩余情况
* 保证账户的唯一性，及每台机器一组Controller&Stash账户
## 2.2 BIOS 设置



一般来说，机器的 SGX（Software Guard Extensions） 模块是默认关闭的，需要在机器的 BIOS 设置，首先将SGX 开关设置为 enable，同时把Secure Boot 关闭（部分主板没有）。如果 SGX 只支持 software enabled 方式，参考这个链接[https://github.com/intel/sgx-software-enable](https://github.com/intel/sgx-software-enable)

## 2.3 下载Crust node安装包

a. 下载

```plain
wget https://github.com/crustio/crust-node/archive/v0.8.0.tar.gz
```
b. 解压
```plain
tar -xvf v0.8.0.tar.gz
```
c. 进入安装目录
```plain
cd crust-node-0.8.0
```
## 2.4 安装Crust服务

安装前的注意点：

* 程序将会被安装在/opt/crust路径下，请确保该路径有大于250G的固态硬盘空间
* 如果之前运行过 Crust 的其他测试链，请把程序关闭并将数据清除后再执行安装，具体请参考6.2小节
* 安装过程中涉及到下载相关依赖和 docker images 的操作，会比较耗时，并有可能因为网络的问题失败，如发生，请重复执行该操作直到安装完成

安装命令：

```plain
sudo ./install.sh --registry cn
```
# 3. 节点设置

## 3.1 开始编辑

执行以下命令编辑节点配置文件

```plain
sudo crust config set
```
## 3.2 修改节点名

按照提示输入节点的名字，按回车结束：

![图片](https://uploader.shimo.im/f/g5Ic9oTje9lN5hqp.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

## 3.3 选择节点模式

按照提示输入节点模式123，按回车结束：

![图片](https://uploader.shimo.im/f/8WPlNNZto5afJnLY.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

## 3.4 配置controller账户

按提示输入backup内容，具体为controller 账户创建时备份的文件内容，回车键结束：

![图片](https://uploader.shimo.im/f/vk81y6dqNiGMxBL8.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)按提示输入password内容，具体为controller 账户的密码，回车键结束：

![图片](https://uploader.shimo.im/f/qoqLKVrVYRKtPlTt.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

## 3.5 配置硬盘

Crust作为去中心话存储网络，硬盘的配置尤为重要。节点存储容量将作为预留空间上报到 Crust 网络，这个将决定你链上可以被别人担保的上限，也决定你可以接单的量。

硬盘挂载要求：

* 链数据和相关DB数据将会被存在/opt/crust/data下，请将固态硬盘先挂载到该目录。
* 接单的文件和SRD占位文件将会被写入/opt/crust/data/files目录下，所以请将机械硬盘组织好挂载到该目录。每台物理机最多可以配置200TB的预留空间。

机械硬盘挂载建议：

* 如果你只有一块硬盘直接挂载到/opt/crust/data/files即可
* 对于多个机械硬盘，建议利用LVM技术将这些硬盘组织成一个设备并挂载到/opt/crust/data/files目录，注意请使用条带化（stripe）配置以加快存储的速度。
* 对于稳定性不佳的硬盘，建议先组数个RAID5/RAID10的组，每个组不超6块盘，再用LVM进行合并
* 硬盘组织方式不唯一，如果有更好的方案可以自行优化

可以使用如下命令查看文件目录的具体情况：

```plain
sudo crust tools space-info
```
## 3.6 查看配置情况（可选）

执行以下命令查看配置文件

```plain
sudo crust config show
```
# 4. 节点启动

## 4.1 准备

首先需要，确保以下接口是未被占用：30888 19944 19933 (crust chain所需)，56666 (crust API所需)，12222 (crust sWorker所需), 5001 4001 37773 (IPFS所需)

然后开放链的P2P端口，命令如下：

```plain
sudo ufw allow 30888
```
## 4.2 启动

启动命令如下：

```plain
sudo crust start
```
## 4.3 检查运行状态

执行下面语句查看crust运行状态：

```plain
sudo crust status
```
如下上面五个服务运行表示启动成功：
![图片](https://uploader.shimo.im/f/zUCNWXKbNndrnZgF.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

## 4.4 设置节点存储容量

请等待1分钟之后执行以下命令设置节点容量，假设你/opt/crust/data/files下面有剩余空间1000G，再给予%5的预留空间，那就设置950G：

```
sudo crust tools change-srd 950
```
这条命令有可能会执行失败，这是由于sworker还没有完全启动，请等待几分钟之后再尝试，如果依旧不行，请执行下属监控命令排查错误情况：
```plain
sudo crust logs sworker
```
## 4.5 监控

通过以下监控命令进行监控，ctrl-c结束监控：

```plain
sudo crust logs sworker
```
监控日志如下：
* 表示区块正在同步中，该过程耗时较长（1）
* 成功在链上注册身份（2）
* 正在进行存储余量统计操作，该过程会逐步进行（3）
* 表示工作量上报成功， 该过程耗时较长，大约半小时左右（4）
# ![图片](https://uploader.shimo.im/f/SUj6me4n1jSgAWdc.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

![图片](https://uploader.shimo.im/f/IAa8s5RGE3Gn7UOi.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)


# 5 参与出块

## 5.1 获取session key

等待链同步到最新块高，执行以下命令：

```plain
sudo crust tools rotate-keys
```
结果返回的就是该节点的session key, 请复制，下小结将会使用，如下所示:
![图片](https://uploader.shimo.im/f/b2B7qUfIZe1TyyB3.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

## 5.2  设置session key

进入[CRUST APPs](https://apps.crust.network/)，点击导航栏的“**Network**”下的“**Staking**”。选中右侧的配置的三个点，选择“**Change session key**”

![图片](https://uploader.shimo.im/f/YJmVUUKpqAapjfR5.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

填入上小节得到的sessionkey，右侧点击“**Set session key**”

![图片](https://uploader.shimo.im/f/dyEV8chTTCF7OPcQ.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)


## 5.3 成为验证人/候选人

进入[Crust APPs](https://apps.crust.network)，执行 “Be Validator” 操作。

![图片](https://uploader.shimo.im/f/jrDMO8UFk8wyXJez.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

等到下个 era，能够查询到在 “**Staking**” 或在 “**Waiting**” 列表中，代表操作成功。

![图片](https://uploader.shimo.im/f/nOCHRov9lNTEdTzF.png!thumbnail?fileGuid=jTgvQQXKKcrq9hjG)

# 

# 6. 重启与卸载

## 6.1 重启

如果机器需要重新启动，或者因为任何情况需要重启 Crust 节点相关程序，请参考下列步骤进行。请注意：本小节仅包括 Crust 节点相关程序的启动步骤，不包括机器基本软硬件环境设置和检查的相关内容，比如硬盘挂载、frp 内网穿透、IPFS等。请在保证软硬件系统正常的情况下进行下列步骤

```plain
sudo crust reload
```
## 6.2 数据清除与卸载

如果你运行过老版本的测试链或者想重新部署，默认情况下需要清除三处数据，

* Crust的基础数据会被默认放在/opt/crust/data中，请清除其中的文件
* 占位数据存储在你之前配置的“srd_paths”中（0.8.0之前版本），请清除其中的数据
* Node数据存储在/opt/crust/crust-node中，请执行以下命令进行卸载
```plain
sudo /opt/crust/crust-node/scripts/uninstall.sh
```



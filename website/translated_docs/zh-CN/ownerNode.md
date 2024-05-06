---
id: ownerNode
title: Owner Node
sidebar_label: Owner Node
---

## 1 概述

### 1.1 功能职责

Owner节点是Group组的负责人和发起者，负责参与出块，而Member的有效存储会叠加到Owner的身上参与竞争出块。同时Owner节点的组织者需要对Group接受有意文件的策略负责，提高组的整体竞争力。由于Owner节点本身不负责存储文件, 所以对SGX的支持不是必要的。而账户是通过session key与出块节点进行互联。

### 1.2 硬件要求

Owner节点上负责运行链模块并用于生成区块，我们强烈推荐出块节点使用固定的公网 IP，否则会因为出块不稳定等情况带来损失。如有需要，该类节点也可以配置在云计算机中。具体硬件推荐参考[这里](node-Hard-wareSpec.md)。

## 2 基础工作

### 2.1 构建账号

> 注意：Crust主网账号一定是以'c'开头

Owner节点负责参与出块竞争，需要生成并绑定Controller&Stash账户组，具体参考[这里](new-bond.md)。要求：

* 保证账户唯一性，不是是其他的Owner，Member和Isolation账户
* 需要保证Controller&Stash留有少量的未被Lock的CRU用于发送各类交易（约1CRU）。

### 2.2 创建并管理Group

#### 2.2.1 创建Group

> 创建Group的账号必须是绑定好的Stash账号

进入Crust APPS中，选择Benefit，点击Create group,选择Owner的Stash账号，点击Create，输入**Stash账户密码**，最后点击Sign and Submit发送交易创建Group。

![图片](assets/mining/create_group.png)
![图片](assets/mining/create_group1.jpg)

#### 2.2.2 锁定CRU减免工作量手续费

**主网的工作量上报需要手续费。**一般情况下，每个Member每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了免除工作量上报费用的Benefit模块，Group owner可以通过锁定CRU的方式，减免Member的手续费。**每个Member**需要锁定18CRU来进行手续费减免，但考虑到存在工作量上报不稳定的情况，建议锁定24CRU~30CRU来确保手续费的完全免费。举个例子，假设你的Group准备有6个Member准备加入，那就锁定30*6=180CRU。

进入[Crust APPS](https://apps.crust.network)中，选择Account，选择Benefit模块，点击Increase lockup，如下：

![图片](assets/mining/benefit_lockup1.png)

输入需要**增加**的CRU数量，并进行签名交易，如下：

![图片](assets/mining/benefit_lockup2.png)

### 2.3 下载

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
### 2.4 安装Crust服务

安装前的注意点：

* 程序将会被安装在/opt/crust路径下，请确保该路径有大于250G的固态硬盘空间
* 如果之前运行过 Crust 的其他测试链，请把程序关闭并将数据清除后再执行安装，具体请参考6.2小节
* 安装过程中涉及到下载相关依赖和 docker images 的操作，会比较耗时，并有可能因为网络的问题失败，如发生，请重复执行该操作直到安装完成

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
### 3.2 配置节点名

按照提示输入节点的名字，按回车结束：

![图片](assets/mining/owner_name.png)

### 3.3 选择节点模式

按照提示输入节点模式owner，按回车结束：

![图片](assets/mining/owner_mode.png)

### 3.4 查看配置情况（可选）

执行以下命令查看配置文件

```plain
sudo crust config show
```
## 4 节点启动

### 4.1 准备

首先需要，确保以下接口是未被占用：30888 19944 19933 然后开放链的P2P端口，命令如下：

```plain
sudo ufw allow 30888
```
### 4.2 启动

启动命令如下：

```plain
sudo crust start 
```
### 4.3 检查链运行日志

执行下面语句查看crust运行日志，ctrl-c结束：

```plain
sudo crust logs chain
```
详情如下，正常同步块即可：
![图片](assets/mining/owner_all_run.png)

## 5 参与出块

### 5.1 获取session key

等待链同步到最新块高，执行以下命令：

```plain
sudo crust tools rotate-keys
```
结果返回的就是该节点的session key, 请复制，下小结将会使用，如下所示:
![图片](assets/mining/gen_sessionkey.png)

### 5.2  设置session key

进入[CRUST APPs](https://apps.crust.network/)，点击导航栏的“**Network**”下的“**Staking**”。选择“**Session Key**”

![图片](assets/mining/set_sessionkey1.png)

填入上小节得到的sessionkey，右侧点击“**Set session key**”

![图片](assets/mining/set_sessionkey2.png)


### 5.3 成为验证人/候选人

> 成为验证人需要肩负维护网络的责任，大规模的掉线会导致一定程度的处罚（最高约为有效质押量的7%）

进入[Crust APPs](https://apps.crust.network)，执行 “Be Validator” 操作。

![图片](assets/mining/be_validator1.png)

等到下个 era，能够查询到在 “**Staking**” 或在 “**Waiting**” 列表中，代表操作成功。

![图片](assets/mining/be_validator2.png)


## 6. 重启与卸载

### 6.1 重启

如果机器需要重新启动，或者因为任何情况需要重启 Crust 节点相关程序，请参考下列步骤进行。请注意：本小节仅包括 Crust 节点相关程序的启动步骤，不包括机器基本软硬件环境设置和检查的相关内容，比如硬盘挂载、frp 内网穿透、FastDFS 等。请在保证软硬件系统正常的情况下进行下列步骤

```plain
sudo crust reload
```
### 6.2 数据清除与卸载

如果你运行过老版本的测试链或者想重新部署，默认情况下需要清除三处数据，

* Crust的基础数据会被默认放在/opt/crust/data中，请清除其中的文件
* Node数据存储在/opt/crust/crust-node中，请执行以下命令进行卸载
```plain
sudo /opt/crust/crust-node/scripts/uninstall.sh
```

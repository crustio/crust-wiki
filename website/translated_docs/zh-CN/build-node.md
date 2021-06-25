---
id: buildNode
title: Crust Node
sidebar_label: Crust Node
---

Crust Node是辅助搭建Crust节点的命令行工具，点击[连接](https://github.com/crustio/crust-node)查看源码。也可以基于此搭建自定义的工具。本文将介绍Crust Node的基本功能，以及基于node的一些常规操作

## 基础命令

### 系统

#### 1. 获取链的session key

- 命令
```shell
sudo crust tools rotate-keys
```

- 实例

![start](assets/node/rotate-keys.png)

#### 2. 设置sworker的srd容量
- 命令
```shell
sudo crust tools change-srd {number}
```
- 实例

增加1000Gb的srd容量
![start](assets/node/changeaddsrd.png)

减少 500Gb的srd容量
![start](assets/node/changedeletesrd.png)



### 配置

#### 1. 设置并生成配置文件

配置节点名称，节点类型，账户的备份文件和密码

- 命令
```shell
sudo crust config set
```
- 实例

![start](assets/node/set.png)

#### 2. 修改并生成配置文件

- 命令
```shell
sudo crust config generate
```

手动修改了/opt/crust/crust-node/config.yaml配置文件

```shell
sudo vi /opt/crust/crust-node/config.yaml
```

生成配置文件

![start](assets/node/generate.png)


#### 3. 设置链的rpc端口

- 命令
```shell
sudo crust config chain-port {port}
```

- 实例

将链的默认端口30888更改为30889
```shell
sudo crust config chain-port 30889
```
![start](assets/node/chainport.png)

#### 4. 设置连接其他链

设置连接其他链，默认连接本地链（ws://127.0.0.1:19944）

- 命令
```shell
sudo crust config conn-chain {ws}
```
- 实例

设置连接到ws://7.7.7.7:19944的链

```shell
sudo crust config conn-chain ws://7.7.7.7:19944
```
![start](assets/node/connchain.png)

#### 5. 查询配置文件

- 命令
```shell
sudo crust config show
```

- 实例
![start](assets/node/show.png)


### 控制

#### 1. 启动Crust服务
- 命令

```shell
sudo crust start {chain|api|sworker|smanager|ipfs}
```
- 实例

启动Crust所有服务
 ```shell
sudo crust start
 ```
启动Crust单个服务
 ```shell
sudo crust start smanager
 ```
![start](assets/node/startsmanager.png)
 ```shell
sudo crust start api
 ```
![start](assets/node/startapi.png)

#### 2. 停止 Crust 服务

- 命令
```shell
sudo crust stop {chain|api|sworker|smanager|ipfs}
```
- 实例

停止Crust所有服务
![start](assets/node/stop.png)

停止Crust单个服务
```shell
sudo crust stop api
```
![start](assets/node/stopapi.png)
```shell
sudo crust stop smanager
```
![start](assets/node/stopsmanager.png)

#### 3. 重启节点服务

- 命令
```shell
sudo crust reload {chain|api|sworker|smanager|ipfs}
```
- 实例

重启crust所有服务

![start](assets/node/reload.png)

重启crust单个服务

![start](assets/node/reloadapi.png)
![start](assets/node/reloadipfs.png)

### 监控
#### 1. 查询当前节点版本的详细信息

版本信息包括节点网络，类型和版本，Sworker的详细信息，Docker ImageID等信息

- 命令
```shell
sudo crust version
```
- 实例
![start](assets/node/version.png)

#### 2. 查询节点服务状态

- 命令 
```shell
sudo crust status {chain|api|sworker|smanager|ipfs}
```
状态包括running,stop,exited三种状态
|**状态**|**说明**|
|-----|-----|
|running |服务正常运行|
|stop|服务停止状态|
|exited|服务异常退出，查询日志分析|

- 实例

查询节点所有服务状态
![start](assets/node/version.png)
查询节点单个服务状态
![start](assets/node/version.png)

#### 3. 查询节点日志

查询节点某个服务的日志，使用Ctrl+c 退出日志界面，使用“crust logs help”命令查询更多日志参数说明

- 命令
```shell
sudo crust logs {chain|api|sworker|sworker-a|sworker-b|smanager|ipfs}
```

- 实例

查询节点sworker服务的最新5行日志
```shell
sudo crust logs --tail 5 sworker
```
![start](assets/node/logs.png)

#### 4. 查询base data和storage data的存放路径和使用详情

注：
1. base data的文件夹是用来存放链数据和其他服务的matedata，默认为系统盘，推荐2T SSD
2. storage的文件目录默认创建（/opt/crust/data/disks/1~/opt/crust/data/disks/128），只需挂载到对应目录下
3. SRD 将不会使用全部的空间，每个storage的目录会预留50G的空间

- 命令
```shell
sudo crust tools space-info
```
- 实例

已经将磁盘成功挂载在/opt/crust/data/disks/2,/opt/crust/data/disks/4,/opt/crust/data/disks/33这三个目录下
![start](assets/node/space-info.png)

#### 5. 查询节点的files和srd的状态

- 命令
```shell
sudo crust tools workload
```
文件参数说明
|**参数**|**描述**|
|----|----|
|files-lost|丢失的文件|
|files-pending|加载中的文件|
|files-vaild|有效的文件|

srd参数说明
|**参数**|**描述**|
|----|----|
|srd_complete|已完成的srd容量，单位Gb|
|srd_remaining_task|剩余的srd任务|
|disk_available_for_srd|当前可用srd的磁盘容量|
|disk_available|当前可用的磁盘容量|
|disk_volume|磁盘总容量|
|sys_disk_available|系统盘可用容量|
|srd_detail|每个storage filder的使用详情|

- 实例
![start](assets/node/workload.png)

### 升级

#### 1. 升级节点服务的docker image

- 命令
```shell
sudo crust tools upgrade-image {chain|api|smanager|ipfs|c-gen|sworker}
```

- 实例

升级chain的docker image
```shell
sudo crust tools upgrade-image chain
```

升级ipfs的docker image
```shell
sudo crust tools upgrade-image ipfs
```

#### 2. sworker的AB升级

- 命令
```shell
sudo crust tools sworker-ab-upgrade {code}
```
参数code是需要升级目标版本唯一mrenclave code

- 实例
```shell
sudo crust tools sworker-ab-upgrade 032ceedd27918ddb4807c78ec5734a8a49878a2e7a7001381b90eae8d1d1c093
```
![start](assets/node/sworker-ab-upgrade.png)

### 文件

#### 1. 查询文件信息

- 命令
```shell
sudo crust tools file-info {all/valid/lost/pending} {output-file}
```

- 实例

查询所有订单的信息
![start](assets/node/fileall.png)
查询进行中的订单信息
![start](assets/node/filepending.png)

#### 2. 删除文件

- 命令
```shell
sudo crust tools delete-file {cid}
```
- 实例

删除cid为QmaK1Rbc4AYtDJoTLgZQNZx4JpDPYrN2DW269i54eA5Phk的文件
```shell
sudo crust tools delete-file QmaK1Rbc4AYtDJoTLgZQNZx4JpDPYrN2DW269i54eA5Phk
```
![start](assets/node/delete.png)



### 其他

#### 1. IPFS命令

- 命令
```shell
sudo crust tools ipfs {…}
```

- 实例

查看某个文件内容
```shell
sudo crust tools ipfs cat QmddN7QgY7RHtsGN8bnUqWJq4VpMam2HXrRDafe5pBt3eq
```
![start](assets/node/ipfs.png)

## 配置外源链

- 命令
```shell
sudo crust tools watch-chain
```
在当前目录下生成一个“watch-chain.yaml”配置文件，并可以使用docker-compose启动watcher节点

注：
1.	可以编辑“watch-chain.yaml”文件来定制watcher节点
2.	watcher节点可以提供ws和rpc服务，默认端口为30888，19933，19944，启动之前开放端口
3.	watcher节点最简单的启动方式为“sudo docker-compose -f watch-chain.yaml up -d”
4.	通过外部连接链配置，可以实现一个链节点服务最多10个member节点的拓扑结构

- 实例

3台member节点连接同一个watcher节点进行上报工作量

watcher节点

选择一个网络配置优良的服务器启动watcher节点(推荐使用有公网IP和固定端口的网络)

生成配置文件：
```shell
sudo crust tools watch-chain
```
编辑配置文件：
```shell
sudo vim watch-chain.yaml
```
启动：
```shell
sudo docker-compose -f watch-chain.yaml up -d
```
监控：
```shell
sudo docker logs crust-watch
```
等待链同步到最高块高之后再继续如下操作

member节点

1. Member节点搭建请参考[member节点](https://wiki.crust.network/docs/zh-CN/memberNode)
2. 在Member节点启动之前，将watcher节点设置为外援链，参考[conn-chain](#4-设置连接其他链)

## 关闭SGX驱动自动安装

- 关闭SGX驱动自动安装

节点启动之前执行如下命令：
```shell
sudo mv /opt/crust/crust-node/scripts/install_sgx_driver.sh /opt/crust/crust-node/scripts/install_sgx_driveroff.sh
```
- 开启SGX驱动自动安装

节点启动之前执行如下命令：

```shell
sudo mv /opt/crust/crust-node/scripts/install_sgx_driveroff.sh /opt/crust/crust-node/scripts/install_sgx_driver.sh
```



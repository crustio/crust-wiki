---
id: buildNode
title: Crust Node
sidebar_label: Crust Node
---

Crust Node是辅助搭建Crust节点的命令行工具，点击[连接](https://github.com/crustio/crust-node)查看源码。也可以基于此搭建自定义的工具。本文将介绍Crust Node的基本功能，以及基于node的一些常规操作

## 1 系统命令

### 1.1 获取帮助

- 命令
```shell
sudo crust help
```

- 实例

![start](assets/node/help.png)

### 1.2 版本信息

版本信息包括节点网络，类型和版本，Sworker的详细信息，Docker ImageID等信息

- 命令
```shell
sudo crust version
```

- 实例
![start](assets/node/version.png)

### 1.3 获取链的session key

- 命令
```shell
sudo crust tools rotate-keys
```

- 实例

![start](assets/node/rotate-keys.png)

## 2 配置命令

### 2.1 设置并生成配置文件

配置节点名称，节点类型，账户的备份文件和密码

- 命令
```shell
sudo crust config set
```
- 实例

![start](assets/node/set.png)

### 2.2 生成配置文件

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

### 2.3 设置外源链

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

### 2.4 设置链P2P端口

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

### 2.5 查询配置文件

- 命令
```shell
sudo crust config show
```

- 实例
![start](assets/node/show.png)

## 3 控制命令

### 3.1 启动服务

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

### 3.2 停止服务

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

### 3.3 重启服务

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

## 4 监控命令

### 4.1 节点运行状态

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

### 4.2 节点日志

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

### 4.3 硬盘情况

- 命令
```shell
sudo crust tools space-info
```
- 实例

已经将磁盘成功挂载在/opt/crust/data/disks/2,/opt/crust/data/disks/4,/opt/crust/data/disks/33这三个目录下
![start](assets/node/space-info.png)

## 5 升级命令

### 5.1 更新docker image

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

### 5.2 sworker的AB升级

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

## 6 sWorker命令

### 6.1 设置SRD容量

- 命令
```shell
sudo crust tools change-srd {number}
```
- 实例

增加1000Gb的srd容量
![start](assets/node/changeaddsrd.png)

减少 500Gb的srd容量
![start](assets/node/changedeletesrd.png)

### 6.2 查询存储状态

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

### 6.3 查询文件信息

- 命令
```shell
sudo crust tools file-info {all/valid/lost/pending/{cid}} {output-file}
```

- 实例

查询所有订单的信息
![start](assets/node/fileall.png)
查询进行中的订单信息
![start](assets/node/filepending.png)

### 6.4 删除文件

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


### 6.5 设置sworker日志级别

- 命令
```shell
sudo crust tools set-sworker-debug {true|false}
```
- 实例

开启DEBUG级别日志
![start](assets/node/debugtrue.png)
关闭DEBUG级别日志
![start](assets/node/debugfalse.png)


## 7 其他命令

### 7.1 IPFS命令

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

### 7.2 Watch compose

- 命令
```shell
sudo crust tools watch-chain
```
在当前目录下生成一个“watch-chain.yaml”配置文件，并可以使用docker-compose启动watcher节点

- 实例
启动：
```shell
sudo docker-compose -f watch-chain.yaml up -d
```

监控：
```shell
sudo docker logs crust-watch
```

## 8 配置外源链

使用外源链的方式可以使得Member节点更加轻量化，也可以使得多个Member连接同一个watch链节点，从而在一定程度上避免链的重复同步。但是由于这种方式存在单点故障的问题，也就是说外源链节点故障会导致多个Member无法上报工作量，所以请尽量使用网络比较好的设备或云服务器启动外源链。同时也不要将太多的Member连接同一个链，建议10个以下，否则可能会因为交易拥挤导致无法上报工作量。

### 8.1 配置Watch链服务

a 机器选择

Watch机器的要求如下：
- 运行watch的机器对SGX没有要求
- 500GB的固态硬盘
- 推荐使用有公网IP和固定端口的稳定网络，这会直接影响到member节点的工作量上报
- 安装Crust node
- 推荐云服务器

b 生成docker compose文件

```shell
sudo crust tools watch-chain
```
在当前目录下生成一个“watch-chain.yaml”配置文件

c 启动watch节点

启动：
```shell
sudo docker-compose -f watch-chain.yaml up -d
```

监控：
```shell
sudo docker logs crust-watch
```

d 注意事项

- 可以编辑“watch-chain.yaml”文件来定制watcher节点
- watcher节点可以提供ws和rpc服务，默认端口为30888，19933，19944，注意开放端口

### 8.2 Member节点配置外源链

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

**如果是已经在运行的节点，需要执行重启操作，配置才能生效**

## 9 控制SGX驱动自动安装

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

---
id: Q&AForMembernoderelated
title: Member Node Related
sidebar_label: Member Node Related
---

## 1 安装SGX驱动错误

- BIOS设置错误

出现如下错误，需要查看是否设置好BIOS里面的相关项。需要将secure boot设置为**Disabled**，SGX设置为**Enabled**。若SGX无法设置为**Enabled**，可以设置为**software enabled**，并在启动进入系统后，使用软件的方式激活SGX。
![图片](assets/qa/sworker/install/setBios.png)

![图片](assets/qa/sworker/install/secureBoot.png)

![图片](assets/qa/sworker/install/SGXEnable.png)

- 网络错误

如下图所示，是网络错误，需要检查网络连接是否有问题
![图片](assets/qa/sworker/install/networkErr.png)

- 安装依赖库

如下图所示错误，需要根据安装时候系统给出的错误提示，输入指定指令来修复错误
![图片](assets/qa/sworker/install/aptErr.png)

- 驱动有冲突

如果之前有安装过其他SGX的驱动，可能存在驱动冲突问题，建议直接重装系统

## 2 如何挂载硬盘

安装前的注意点：

系统盘的配置：

- 程序将会被安装在/opt/crust路径下，请确保系统盘有大于2TB的固态硬盘空间。 如果不希望使用系统盘，而使用其他的固态硬盘，请事先创建/opt/crust目录，并将该固态挂在到这个目录，注意目录读写权限

文件盘的配置：

接单的文件和SRD占位文件将会被写入/opt/crust/disks/1 ~ /opt/crust/disks/128目录下，这取决于你挂载硬盘的方式。每台物理机最多可以配置500TB的预留空间

- 单一机械硬盘：直接挂载到/opt/crust/disks/1即可

- 多个机械硬盘（多目录）：分别将硬盘挂载到/opt/crust/disks/1 ~ /opt/crust/disks/128目录。举个例子，假设有三块硬盘/dev/sdb，/dev/sdc和/dev/sdd，则可以将他们分别挂载到/opt/crust/disks/1，/opt/crust/disks/2， /opt/crust/disks/3目录。这种方式的效率相对比较高，方式也比较简单，但硬盘的容错性会降低

- 多个机械硬盘（单目录）：对于稳定性不佳的硬盘，利用RAID/LVM/mergerfs等手段将硬盘组合，并挂载到/opt/crust/disks/1目录不失为一种选择。这种方式可以增加硬盘的容错性，但也会带来效率上的下降

- 多个机械硬盘（混合）：结合单目录和多目录的方式进行挂载

可以使用如下命令查看文件目录挂载的具体情况：
```shell
sudo crust tools space-info
```

## 3 Member节点可以使用网络硬盘吗？

可以使用，但是只支持挂载/opt/crust/disks/1单个路径

## 4 如何在运行的Member节点上增加硬盘?

提示：增加硬盘需要重启crust服务，重启sworker会触发工作量无效的惩罚，持续大约9小时没收益。

- 执行sudo crust stop sworker命令停止sworker服务

- 将需要添加的硬盘挂载到/opt/crust/disks/1 ~ /opt/crust/disks/128

- 执行sudo crust start sworker命令启动sworker服务

- 执行sudo crust tools change-srd xxx添加srd封装任务

## 5 Sworker启动错误

- 升级BIOS

如下图所示错误，需要BIOS固件进行升级或者降级，需要调整BIOS的版本号到合适版本(视具体情况进行升级或降级)。如果都不行就更换主板。
![图片](assets/qa/sworker/start/4006upgradeBios.png)

- 网络不稳定

出现4012和AES服务问题，说明网络不稳定，请调整网络
![图片](assets/qa/sworker/start/4012networkUnstable.png)

![图片](assets/qa/sworker/start/AESErr.png)
出现IAS请求失败，是因为IAS服务器不稳定造成，请重试多次直到成功
![图片](assets/qa/sworker/start/IASUnstable.png)

- 配置出错

如下图所示错误，是因为用户更改了backup配置，导致无法重启，请使用第一次启动时配置的账户的backup。如果确定要换账户，请清除所有文件重新配置节点。
![图片](assets/qa/sworker/start/AccountErr.png)
如下图所示错误，是因为没有按照步骤进行设置，请严格按照节点手册进行相关操作
![图片](assets/qa/sworker/start/configErr.png)

- 其他启动错误

没有出现以上错误，却依然无法启动的，请尝试重启多次

## 6 sworker日志报"Inability to pay some fees , e.g. account balance too low"的报错是什么原因？

- 执行sudo crust logs chain查看链的日志，具体查看best块高是否和Apps的块高一致，如不一致执行以下命令重启sworker

```shell
sudo crust reload sworker
```

- 确认Member节点配置的账户是否有一定数量的CRU

## 7 sworker日志报"Unable to decode using the supplied passphrase"

Member节点配置的账户密码不正确

## 8 硬盘设备错误

- 以下是几种常见的由于磁盘不稳定，或者权限没有配置好，导致的问题，出现如下错误请检查磁盘以及相关的读写权限

![图片](assets/qa/sworker/device/4011openfileErr.png)

![图片](assets/qa/sworker/device/4013deleteErr.png)

![图片](assets/qa/sworker/device/4015mkdirErr.png)

- 查看workload的时候卡住，说明某些磁盘的磁道存在问题，需要对磁盘进行检测

![图片](assets/qa/sworker/device/diskErr.png)

![图片](assets/qa/sworker/device/diskErrOrSlow.png)

![图片](assets/qa/sworker/device/diskLost.png)

![图片](assets/qa/sworker/device/inputoutputErr.png)

![图片](assets/qa/sworker/device/readonlyfilesys.png)

## 9 Sworker工作量上报错误

使用以下命令查看工作量上报错误的原因：

```shell
sudo crust logs sworker | grep 'WRE'
```

大多数情况下，是链同步不稳定造成的，尽量改善网络环境

## 10 封装好的算力，能够切到另一台机器挖吗？

不能，封装的算力是与SGX模块相关的，每一台SGX模块的硬件密钥都是有区别的

## 11 illegal reporter

Member配置的账户与其他member重复

## 12 Sworker日志报“Input/output error”
磁盘故障，读写报错，请检查磁盘，Raid卡，电源供电等硬件配置

![图片](assets/qa/sworker/device/inputoutputerror.png)

## 13 Sworker日志报"Get srd (hash) metadata failed ,please check your disk. Error code:4016"
程序检索不到封装数据造成的报错，请排查磁盘，Raid卡，电源供电等硬件配置造成的磁盘读写故障，或者重启电脑之前未进行硬盘挂载

![图片](assets/qa/sworker/device/srdlost.png)

执行sudo crust tools workload 命令查询"srd_complete"和"disk_available_for_srd"之和如果远小于disk_volume，建议重新srd

解决办法如下

- 确保磁盘读写正常

- 执行sudo crust stop sworker命令停止sworker程序

- 执行sudo rm -rf /opt/crust/data/sworker删除sworker元数据

- 格式化机械硬盘，重新挂载到/opt/crust/disks/1~128

- 执行sudo crust reload sworker命令重启sworker程序

- 执行sudo crust tools change-srd xxx命令下发封装任务

## 14 Sworker日志报"...swork.IllegalFilesTransition..."

如果执行过退组操作，请查看退换组相关[文章](Q&AForrelated-groups.md)并跳过下列文章！

![图片](assets/qa/sworker/device/illegalfiles.png)

原因：网络不稳定造成预期发送的工作量与实际发送的工作量不一致

解决办法：
- 保持sowkrer服务在线
- 执行如下命令
```shell
account=$(curl http://localhost:12222/api/v0/enclave/id_info | jq .account)
params=$(curl -s -XPOST 'https://crust.webapi.subscan.io/api/scan/extrinsics' --header 'Content-Type: application/json' --data-raw '{"jsonrpc":"2.0", "call": "report_works", "module": "swork", "no_params": false, "page": 0, "row": 1, "signed": "signed", "success": true,"address": '$account'}' | jq -r .data.extrinsics | jq -r .[0].params | sed 's/\\//g' | jq .)
added_files=($(echo $params | jq .[6].value | jq -r .[].col1))
deleted_files=($(echo $params | jq .[7].value | jq -r .[].col1))
input_data='{"added_files": ['
for file in ${added_files[@]}; do input_data="${input_data}\"$(echo $file | xxd -r -p)\","; done
if [ ${#added_files[@]} -ne 0 ]; then input_data=${input_data:0:len-1}; fi
input_data="${input_data}], \"deleted_files\": ["
for file in ${deleted_files[@]}; do input_data="${input_data}\"$(echo $file | xxd -r -p)\","; done
if [ ${#deleted_files[@]} -ne 0 ]; then input_data=${input_data:0:len-1}; fi
input_data="${input_data}]}"
curl -XPOST "http://localhost:12222/api/v0/file/recover_illegal" --header 'Content-Type: application/json' --data-raw "$input_data"
```

## 15 Sworker日志报"...Priority is too low..."

![图片](assets/qa/sworker/device/priority.png)

由于网络问题造成链同步不稳定，本地块高低于全网实际最高块

解决办法：
- 方法一：提升网络带宽，配置固定IP或者减少同一局域网Member节点数量
- 方法二：[设置链P2P端口](buildNode#24-设置链p2p端口)，重启链服务并在路由器配置端口转发和[QoS](nodeQos)

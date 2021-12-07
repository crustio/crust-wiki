---
id: Q&AForFix
title: Fix unstable chain
sidebar_label: Fix unstable chain
---

## 1 Owner和Isolation节点

### 1.1 确认链同步正常

通过以下命令查看链的log：

```shell
sudo crust logs chain
```

同如果best达到最高块(最高可以[APPs](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/explorer)上进行查看)，且finalized和best差别不到5块，则说明链处于正常情况。如下图所示:

![pic](assets/qa/check_top.png)

如果有异常，**请铲掉链的数据**，建议用自己本地正常Owner节点的db进行同步加速，或者可以利用以下命令下载已经同步好的Owner db来进行替换:

```shell
wget https://gw.crustapps.net/ipfs/QmdyD9QqAF9FLWFk1dvKzFnoQ4LH1nU4BrGQUtWu5bC3Q5
sudo crust stop chain
sudo rm -rf /opt/crust/data/chain/chains/crust/db/
sudo tar -xvf QmdyD9QqAF9FLWFk1dvKzFnoQ4LH1nU4BrGQUtWu5bC3Q5 -C /opt/crust/data/chain/chains/crust/
sudo crust start chain
```

### 1.2 再次成为Validator

在执行这步之前，请再三确认节点是否同步到最高块，且finalized和best差别不到5块。如下图所示:

![pic](assets/qa/check_top.png)

如同步正常，则在[APPs](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/staking/actions)执行validate操作再次成为验证人

## 2 Member

通过以下命令查看链的log：

```shell
sudo crust logs chain
```

同如果best达到最高块(最高可以[APPs](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/explorer)上进行查看)，且finalized和best差别不到5块，则说明链处于正常情况。如下图所示:

![pic](assets/qa/check_top.png)

如果有异常，**请铲掉链的数据**，建议用自己本地正常Member节点的db进行同步加速，或者可以利用以下命令下载已经同步好的Member db来进行替换:

```shell
wget https://gw.crustapps.net/ipfs/QmQT8nszrtJ4MNApFpKMXoo4D18c2F447txzKuxHDMaXER
sudo crust stop chain
sudo rm -rf /opt/crust/data/chain/chains/crust/db/
sudo tar -xvf QmQT8nszrtJ4MNApFpKMXoo4D18c2F447txzKuxHDMaXER -C /opt/crust/data/chain/chains/crust/
sudo crust start chain
```

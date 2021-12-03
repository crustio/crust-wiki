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

如果有异常，请铲掉链的数据，重新同步区块(建议用正常Owner节点的db进行同步加速)，并设置新的session key.

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

如果有异常，请**铲掉链的数据**，重新同步区块(建议用Member节点的db进行同步加速).
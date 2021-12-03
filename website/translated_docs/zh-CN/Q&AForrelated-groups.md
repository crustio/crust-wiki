---
id: Q&AForrelatedgroups
title: Related Groups
sidebar_label: Related Groups
---

## 1 Member为啥加不了组?

- Member节点需要上报一次工作量才能加组，该过程耗时较长，大约一小时左右，如果未上报工作量操作加组会报swork.IdentityNotExist的错误。在member机器上通过以下命令可以看到是否上报工作量

```shell
sudo crust logs sworker | grep 'Send work report'
```

- Member账户需要添加到Group的白名单后才能加入Group中

- 仔细检查是否选对账户，有没有上下选反

- 存在有意义文件的Member是无法加组的，会报Illegal Spower，请参考Member节点如何换组

## 2 锁定CRU免上报手续费?

- 为什么要锁

主网的工作量上报需要手续费。一般情况下，每个Member每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了免除工作量上报费用的Benefit模块，Group owner可以通过锁定CRU的方式，减免Member的手续费。

- 为什么锁30个

每个Member需要锁定18CRU来进行手续费减免，但考虑到存在工作量上报不稳定的情况，建议锁定24CRU~30CRU来确保手续费的完全免费。举个例子，假设你的Group准备有6个Member准备加入，那就锁定30*6=180CRU 

- 能省多少

工作量上报的手续费是和每轮上报的有意义文件变化有关，硬盘损坏，网络不稳都会使得手续费增加。初步预估每台member一年的手续费在1CRU ~ 20CRU之间


## 3 Member节点如何换组？

- 退出旧组

![图片](assets/qa/quit1.png)
![图片](assets/qa/quit2.png)

- 执行如下命令查询该Member节点是否接过有意义文件订单
```shell
sudo crust tools file-info all
```
- 如果接过有意义文件订单，调用如下命令将其删掉，并等待下一次上报工作量，大约1小时上报一次工作量
```shell
sudo crust tools delete-file {cid}
```

- 增加白名单
![图片](assets/benefits/addallowaccount1.png)
![图片](assets/benefits/addallowaccount2.png)

- 加入新组
![图片](assets/benefits/joingroup1.png)
![图片](assets/benefits/joingroup2.png)

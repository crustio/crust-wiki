---
id: appsStorageIssue
title: Apps Strorage Issues
sidebar_label: Apps Strorage Issues
---

存储订单长时间“等待”有几个原因：
1. 文件过大；
2. 本地IPFS被关闭；
3. 没有关闭防火墙；
4. 网络状况不佳；

因此，我们需要进行以下尝试：

## 1，确保不传超大文件

## 2，确保IPFS开启

## 3, 关闭操作系统防火墙
以MacOS为例，进入“系统偏好设置”，进入“安全性和隐私”。
![firewall](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/firewall.png)

关闭防火墙。
![closed_firewall](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/firewall_closed.png)

关闭防火墙后，确保IPFS正常运行的情况下，进入[Apps存储订单页](https://apps.crust.network/#/storage/market)，对原文件重新下单。


## 4, 在Crust Github 中反馈

如果关闭防火墙重新下单后，文件依然没有被节点接受，则可能是2P2网络发现相关的问题。用户可以执行以下步骤。

### 4.1 获取相关信息
获取用户本地的IPFS节点ID和长时间等待的文件CID。

Peer id:
![peer_id](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/peerid.png)


CID:
![cid](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/cid.png)


### 4.2 在Github上提交相关信息
进入这里提交Issue：https://github.com/crustio/crust/issues/new

Issue的题目为：[DSM Order] + 您的PeerID


一个Issue格式举例：
![peer_id](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/new_issue.png)


### 4.3 跟踪Issue
Crust开发团队会跟踪这些Issue，并提供及时的反馈。用户可以时常关注Issue状态，以了解进度。
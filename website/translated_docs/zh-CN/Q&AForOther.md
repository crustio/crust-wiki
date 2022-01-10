---
id: Q&AForOther
title: Other
sidebar_label: Other
---

## 1 质押上限为0是什么原因？

> 注：质押上限（stake limit）每一小时更新一次，有效质押每6小时更新一次

- 排查是否已经点击验证，验证完需要等待1小时才能显示质押上限

- 排查Member节点是否正确加组

- Member节点加组时间需要超过1小时抵押上限才会展示

- 排查owner节点的链是不是正常同步，没有出现掉线情况


## 2 有了抵押上限，但是有效抵押为什么还是0？

自己抵押或者别人担保的金额会在1-2个era之后才会生效，大约需要等待6-12小时的时间

## 3 认领操作钱包Walletconnect连不上myetherwallet？

1)安装[小狐狸钱包(Metamask)](https://metamask.io/download.html)，推荐使用浏览器插件版本

2)将imtoken或者其他无法walletconnect钱包的私钥导入到小狐狸钱包

3)使用小狐狸钱包连接myetherwallet进行签名

## 4 系统盘1T的SSD支不支持
链数据大概一年会产生250G的数据，如果IPFS存储400T的数据，其数据索引会占用1T的容量，所以从机器稳定运行和磁盘利用率来看，推荐使用2T的SSD作为系统盘

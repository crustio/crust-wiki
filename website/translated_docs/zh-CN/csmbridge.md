---
id: bridgeShadow
title: Shadow Bridge
sidebar_label: Shadow Bridge
---

Shadow Bridge提供了一个可以实时到账的资产跨链桥，允许用户将Maxwell上的CSM跨链转账到Shadow上。CSM跨链转账请按照以下流程进行操作。

## 准备工作

准备Crust Shadow账户，用于接受CSM。务必备份好助记词和备份文件

- 方法一.进入[Crust Shadow APPs](https://shadow-apps.crust.network/?rpc=wss%3A%2F%2Frpc2-shadow.crust.network#/accounts),新建Crust Shadow账户

- 方法二.将现有账户同步导入[Crust Shadow APPs](https://shadow-apps.crust.network/?rpc=wss%3A%2F%2Frpc2-shadow.crust.network#/accounts)

## 从Maxwell跨链转账到Shadow

进入[Crust Maxwell Apps](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi-maxwell.crust.network#/explorer) -->Accounts-->Bridge

![toShadow](assets/csmbridge/csm1.png)

选择"Maxwell to Shadow"，在对话框2中输入接收CSM的Shadow地址，在对话框3中输入希望跨链转账的数量，确认无误后点击“Transfer”，签名并完成转账。

注意: 发送的账户需要预留一些CRU作为交易手续费

![toShadow](assets/csmbridge/csm2.png)

等待一段时间之后，可以在Shadow网络上检查CSM是否到账。

![toShadow](assets/csmbridge/csm3.png)


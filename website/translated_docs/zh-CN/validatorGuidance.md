---
id: validatorGuidance
title: Validator Guidance
sidebar_label: Validator Guidance
---

验证人是组成Crust区块链网络的基本单元，参考本文成为一个Crust网络的验证人。

## 0. 准备工作

您需要确保您有足够的CRU进行转账和担保。您可以将您在以太坊上的CRU[认领到Maxwell](claims.md)。

## 1. 配置绑定关系

确保你已经完成了[账户配置（新增绑定）](new-bond.md)，绑定了你的Stash和Controller账户。

## 2. 配置节点

参考[节点概要](node-overview.md)对您的节点进行配置，并成功启动节点。

## 3. 增加/减少质押

验证人也可以在[APPS](https://apps.crust.network/?rpc=wss%3A%2F%2Fapi-maxwell.crust.network#/explorer)中增加或减少自己质押的金额，配置步骤如下。
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/mining/bondmore.png)
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/mining/unbond.png)

## 4. 设置担保费

节点设置的担保费是指节点在**Staking收益+出块，分给担保人的百分比**，具体设置如下:

> 如果一个验证人在一个ERA中获取到900 CRU的Staking收益以及100CRU的出块收益，并且如果他自身投入的质押金额占总质押金额的90%（另外10%为担保人的投入)。如果该验证人设置的担保费为95%, 则最终担保人将一共获取到 (900 + 100) * 10% * 95% = 95 个CRU的收益，剩余 905 CRU归节点所有。

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/mining/guaranteefee_ch.png)
![change guarantee_fee1](assets/gpos/guarantee_fee1.jpg)
![change guarantee_fee2](assets/gpos/guarantee_fee2.jpg)

---
id: guarantorGuidance
title: Guarantor Guidance
sidebar_label: Guarantor Guidance
---

## 0. 配置绑定关系

确保你已经完成了[账户配置（新增绑定）](new-bond.md)，并且已经绑定了你的stash和controller账户。

## 1. 浏览可被担保的节点列表

在进行本步骤选择之前，请保证您已了解[担保人](guarantor.md)的概念，并已充分了解关于验证人（节点）的奖罚细则, 再开始以下操作：

1. 进入[APPs](https://apps.crust.network), 点击上方“Staking”—— “Staking overview”/“Waiting”，这意味着您可以选择担保验证人（出块节点），或是候选人（候选节点），并从他们的Staking收益中获取奖励
2. 选择你要担保的节点。单击节点的头像，即可复制节点地址

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/copyaddr.png)

3. 理解担保费

节点设置的担保费是指节点在**Staking收益中分给担保人的百分比**

> 如果一个验证人获取到1000 CRU的Staking收益，并且如果他自身投入的质押金额占总质押金额的90%（另外10%为担保人的投入)。如果该验证人设置的担保费为95%, 则最终担保人将一共获取到 1000 * 10% * 95% = 95 个CRU的收益，剩余5 CRU归节点所有。

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/mining/guaranteefee_ch.png)

## 2. 进行担保

### 2.1 进入担保页面

1. 点击上方“Staking”—— “Account actions”
2. 确认你的stash以及controller账户，点击下图所示位置，单击“Guarantee”

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/guarantee.png)

### 2.2 输入担保节点的地址及金额

1. 在空白处粘贴在节点列表复制的地址
2. 单击candidate accounts中的节点名称
3. 输入你要担保的金额
4. 点击Guarantee
  
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/guarantee2.png)

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/amount.png)

### 2.3 确认担保生效

1. 点击上方“Staking”—— “Account actions”
2. 找到“effective stake”，单击图中小箭头
3. Staking动作生效需要一个era的时间
  
![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/staked.png)

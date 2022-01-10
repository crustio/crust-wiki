---
id: guarantorGuidance
title: Guarantor Guidance
sidebar_label: Guarantor Guidance
---

关于担保人这个角色的介绍参考[担保人](guarantor.md). 本文章主要介绍担保人如何参与GPoS获得收益。

## 0. 配置绑定关系

确保你已经完成了[账户配置（新增绑定）](new-bond.md)，并且已经绑定了你的stash和controller账户。

## 1. 浏览可被担保的节点列表

1. 进入[APPs](https://apps.crust.network), 点击上方“Staking”—— “Overview”/“Waiting”，这意味着您可以选择担保验证人（出块节点），或是候选人（候选节点），并从他们的Staking收益中获取奖励
2. 选择你要担保的节点。单击节点的头像，即可复制节点地址

![gua](assets/gpos/copyaddress.png)

3. 理解担保费

节点设置的担保费是指节点在**Staking收益中分给担保人的百分比**

> 如果一个验证人在上个era内获取到1000 CRU的Staking收益，并且如果他自身投入的质押金额占总质押金额的90%（另外10%为担保人的投入)。如果该验证人设置的担保费为30%, 则最终担保人将一共获取到 1000 * 10% * 30% = 30 个CRU的收益，验证人将获得970个CRU。

![change guarantee_fee1](assets/gpos/guranteefee.png)

## 2. 进行担保

### 2.1 进入担保页面

1. 点击上方“Staking”—— “Account actions”
2. 确认你的stash以及controller账户，点击下图所示位置，单击“Guarantee”

![gua](assets/gpos/gurantee1.png)

### 2.2 输入担保节点的地址及金额

1. 在空白处粘贴在节点列表复制的地址
2. 单击candidate accounts中的节点名称
3. 输入你要担保的金额
4. 点击Guarantee
  
![gua](assets/gpos/gurantee2.png)

![gua](assets/gpos/gurantee3.png)

### 2.3 确认担保生效

1. 点击上方“Staking”—— “Account actions”
2. 找到“effective stake”，单击图中小箭头
3. 在刚刚担保的新账户下方有两个值，靠下面的这个值是生效的staking，需要等一个era时间生效
  
![gua](assets/gpos/effect.png)

## 减少担保金

如果您想减少担保给某节点的金额，可以进行一下步骤：

#### 步骤1
进入"网络" -> "质押" -> "账户操作" 找到并点击想要减少担保金的验证人的图标，如下图，点击图标即可复制该验证人的地址。
![gua](assets/gpos/copy.png)

#### 步骤2
点击右侧又三个点组成的功能键，点击“减投”。
![gua](assets/gpos/cut.png)

#### 步骤3
粘贴并选中对应的Validator地址，并输入想要减少的金额量，提交交易即可减少担保金。
![gua](assets/gpos/cut1.png)

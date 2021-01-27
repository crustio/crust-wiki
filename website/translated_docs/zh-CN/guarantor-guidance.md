---
id: guarantorGuidance
title: Guarantor Guidance
sidebar_label: Guarantor Guidance
---

### 配置绑定关系
确保你已经完成了[账户配置](new-bond.md)，并且已经绑定了你的stash和controller账户。

### 浏览可被担保的节点列表

* 点击上方“Staking”—— “Staking overview”
* 选择你要担保的节点。单击节点的头像，即可复制节点地址 
  

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/copyaddr.png)


### 进行担保
#### 找到担保页面

* 点击上方“Staking”—— “Account actions”
* 确认你的stash以及controller账户，点击下图所示位置，单击“Guarantee”

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/guarantee.png)


#### 输入担保节点的地址及金额

* 在空白处粘贴在节点列表复制的地址
* 单击candidate accounts中的节点名称
* 输入你要担保的金额
* 点击Guarantee
  

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/guarantee2.png)

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/amount.png)


#### 确认担保生效

* 点击上方“Staking”—— “Account actions”
* 找到“effective stake”，单击图中小箭头
* Staking动作生效需要一个era的时间
  

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/staked.png)

#### 有效质押

举个例子：

有一个验证人，通过提供存储获得了100CRU的Stake Limit。而这个Validator账号自身绑定了100CRU，则这100CRU将会全部质押给本节点。

这时，如果有一个Guarantor对这个Validator进行了担保，担保金额为400CRU。等待1个ERA后，这个Guarantor和Validator的有效担保量分别为80和20CRU。即，各方按担保的CRU的比例计算各自贡献的有效质押。





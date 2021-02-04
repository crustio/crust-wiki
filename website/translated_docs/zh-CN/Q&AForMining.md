---
id: Q&AForMining
title: Q&A
sidebar_label: Q&A
---

## 预览网

### 收益与奖励概述？
预览网提供质押和出块奖励（总额540000CRU），存储市场奖励（具体数额待定），其中质押和出块奖励分2年发放，初始每个era(6小时)奖励750CRU，包括600CRU的质押奖励和150CRU出块奖励，每隔90天era奖励减半，即每个era奖励由原本750CRU变为375CRU。所有奖励需要手动领取，如果一个节点（validator/candidate）有多个guarantor，其中一个人领取即帮所有人领取。领取周期至少一个era.

### 收益的种类和形式？

收益种类主要有三种：出块奖励，质押奖励以及存储收益。预览网的收益会全部以是CRU形式直接发送

## 验证人和候选人

### 候选人如何成为验证人？

通过竞争成为，"effective stake"（effective stake = other effective stake + own effective stake）大节点会被选择成为验证人。"effective stake"是由两个参数决定的，其一，你需要通过增加存储来增加"staking limit"；其二，需要通过质押CRU或者让其他人给你担保CRU来增加"effective stake"。验证人的选择每个era重新计算一遍。详情请看这个[链接](validatorGuidance.md)
![图片](assets/qa/be_validator.png)

### 验证人和候选人的区别？

验证人拥有出块奖励，候选人没有出块奖励，但是他们都有质押奖励

### 验证人总数变化规则？

在预览网期间，验证人总数会动态调整。这样设置是为了保证节点之间有充分的竞争

### 验证人界面图标意义？
![图片](assets/qa/app_validator_page.png)
- 1 下个era会参与验证人竞争
- 2 一个session出块的数量，一个era有36个session
- 3 其他人给你质押的有效CRU量
- 4 自己质押的有效CRU量，参数3与参数4加起来用于竞争成为验证人
- 5 由节点提供硬盘容量以及有意义文件计算出的值，决定了该节点可以质押的上限
- 6 由节点设置的担保费率，假设你设置90%，节点将从担保人的收益中抽取10%的钱
- 7 出块得分，决定era的收益，该数据从概率上每个验证人是相同的
- 8 改节点目前出的最新块

### 节点启动之后好久"stake limit"和"effective stake"还是0？
"stake limit"每半小时更新一次，"effective stake"每6小时更新一次，如果节点正在SRD, "stake limit"每隔半小时线性增长，如果SRD完成，"stake limit"会保持不变，如果有下降，请及时排查原因

## Group

### 如何创建Group？
进入Crust APPS中，选择Extrinsics，选择Owner的Controller账号，Submit 组选择swork，然后submit方法选择createGroup()，最后点击Submit Transaction发送交易创建Group。
![图片](assets/qa/create_group.png)

### Member如何加入Group？
等待Member第一次上报work report后（Member启动之后大概等待半小时时间），进入Crust APPS中，选择Extrinsics，选择填写Member的账号，选择submit组为swork，选择joinGroup()方法，然后再选择你要加入的Group的Owner的Controller地址，最后点击submit transaction发送交易
![图片](assets/qa/join_group.png)

### 如何查询Group下加入的Member？
进入Crust APPS中，选择Chain state，选择selected state query组下的
swork，选择groups(AccountId)方法，然后选择创建Group的账号，最后点击“+”进行查询，返回结果为该group下面的所有member账户
![图片](assets/qa/check_member.png)

### 如何退出Group？
进入Crust APPS中，选择Extrinsics，选择Member账号，Submit 组选择swork，然后选择quitGroup()，最后点击Submit Transaction发送交易退出Group
![图片](assets/qa/quit_group.png)

### Group如何分发收益的？
存储收益是各自结算的， 而其他收益链不做收益分发，需owner私下结算
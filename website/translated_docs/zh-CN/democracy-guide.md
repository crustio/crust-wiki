---
id: democracyGuide
title: Democracy Guide
sidebar_label: Democracy Guide
---

民主模块是Crust网络里重要的一部分，充分体现了Crust链上治理的优势以及去中心化的程度。由于民主模块的设计参考了英国议会制度，包含了许多方面，考虑到篇幅以及学习难度，本教程着重介绍民主模块的基本流程，具体操作方法和简略的规则参数解析。

## 民主模块的基础流程

### 整体流程
1. 创建图像(Preimage)来确定需要公投的执行代码
2. 创建并提交提案(Proposal)
3. 复议他人提案或者等待提案得到复议(Second)
4. 每个Lanuch周期结束时会选择所有提案中得到复议票数最高的提案进入表决阶段，在每个提案表决阶段通过表决的提案会进入执行阶段
5. 通过表决的提案的具体执行的时间会根据链上参数设置一个定时执行器

## 具体参与方法
1. 创建图像
![democracy_entry_page](assets/democracy/democracy_entry_page.jpeg)
如上图所示，首先进入民主页面，然后点击Submit preimage。
![submit_preimage](assets/democracy/submit_preimage.png)
在preimage的交易提交界面，如图所示，可以选择任意可以被Sudo权限执行的交易，例如staking.SetValidatorCount。创建图像需要锁定少量CRU，具体锁定CRU数额根据所选择的具体交易有关。
![check_preimage_hash](assets/democracy/check_preimage_hash.jpeg)
在交易发送成功之后，可以去事件页面查询所创建的preimage的hash值，如上图所示，复制该hash值。

2. 创建并提交提案
通过点击民主模块的提交提案的按钮，可以提交之前生成的preimage的hash值。
![submit_proposal](assets/democracy/submit_proposal.png)

3. 复议他人提案或者等待提案得到复议
当创建提案成功后，可以看在在提案列表中查询到当前所有正在进行中的提案。任意持币用户均可在当前页面选择他感兴趣的提案进行复议。复议他人提案需要锁定一笔CRU，此部分不能同时进行质押等其他用途。每一个提案周期结束时，获得复议最高票数的提案会进入公投表决阶段。
![second_proposal](assets/democracy/second_proposal.png)

4. 进入表决阶段
进入表决阶段的提案会如下图所示，同样的，任意持币用户均可选择支持这个提案或者否决这个提案。同时当前提案是否会被同意或否决的状态可以在当前页面查看。
![voting_button](assets/democracy/voting_button.jpeg)
每个用户可以自由表达支持提案的意愿，用户可以选择锁定更多的CRU或者选择更长的锁定时间来表达更加强烈的支持意愿或者否定意愿。通过选择更长的锁定倍数，可以使自身的锁定量产生更大的效果。此处锁定的CRU是可以同时参与质押的。具体表决通过公式和锁定时间会在后续参数解析处作详细的解释。
![voting_detail](assets/democracy/voting_detail.png)

5. 进入执行阶段
在每个提案表决时间结束时，通过表决的议案会进入执行阶段。根据提案类型的不同，执行分为立即执行和延后执行。本文前述的默认普通提案会延后特定时间执行。可以在如下页面查看具体执行时间。
![scheduled](assets/democracy/scheduled.png)

## 规则参数解析及注意事项

1. 图像创建必须是能够被Root权限执行的交易，例如staking.SetValidatorCount或者market.setPunishment。否则即使进入执行阶段，最终也会执行失败。
2. 提交议案和复议都会要求抵押一定数值的CRU。预览网上设置的金额大小为**10CRU**。提案一旦进入表决阶段，锁定的金额会自动解锁。但是需要注意的是，当有若干提案候选时，一旦复议某提案，除非该提案进入表决阶段，锁定的CRU是无法解锁的。预览网上，**每7天**会选择得到复议最高的提案进入表决阶段。
3. 进入表决阶段的提案**有7天**时间来获得同意票或者反对票。锁定的CRU数额会根据愿意锁定的时间长短换算成有效的票数。例如默认情况下只会锁定到表决时间结束，有效票数等于锁定金额的十分之一。再比如愿意额外锁定额外两倍的执行时间(8天*2)，有效票数等于锁定金额的两倍。普通提案的表决通过计算方式采用了大多数同意的机制，跟投票总金额，有效赞成票数额，有效反对票数额以及全网流通总量有关，具体公式为```有效反对票数 / sqrt(投票总金额) < 有效赞成票数 / sqrt(全网流通总量)```。
4. 预览网上，执行延迟时间为**8天**。

## 民主模块进阶流程
### 委托投票机制
Comming Soon
### 外部提案
Comming Soon

### 小费机制
Comming Soon

### 赏金机制
Comming Soon

### 议会制度与参与方式
Comming Soon

### 技术委员会制度
Comming Soon
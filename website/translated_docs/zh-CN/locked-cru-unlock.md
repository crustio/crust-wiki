---
id: lockedCRUUnlock
title: 锁定的CRU 解锁
sidebar_label: 锁定的CRU 解锁
---

锁定的CRU（包含CRU18/CRU24/CRU24D6）是**早期presale和方舟计划参与者**获取的代币，这些参与者可以参考这篇教程来解锁您的代币，本教程的解锁步骤以CRU18为例。

## 注意

这篇教程仅针对已经进行过锁定的CRU认领的用户，还没有在主网认领过的用户请参考[这篇教程](claims-locked-cru.md)先进行认领。

锁定的CRU18的解锁周期为`43200块`（约30天），每次解锁1/18，其默认状态为绑定，整个解锁过程需手动操作。

## 步骤

### 1. 查看锁定的CRU18

用户可以去到[质押页面](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/staking/actions)查看到自己全部CRU18资产（除 `1CRU`用于操作手续费外）处于绑定的状态，如下图所示：

// TODO：截图说明

**举例说明：**
假如Alice拥有 `1800 CRU18` 资产，会在此页面看到自己有 `1799 CRU18` 资产处于绑定状态

### 2. 解锁CRU18

解锁需要3步操作：

#### 1. 解绑(Unbond)

解绑CRU18需要**提前28天**进行，即如果您想在10月31日取出相应CRU18资产，则首先需要在9月31日就进行解绑操作，您可以如下图输入需要解绑的金额进行操作：

// TODO：unbond截图

解绑金额可以输入任意值，但大于每月解绑金额的到期资产会继续处于绑定状态不予取出

**举例说明：**
假如Alice拥有 `1800 CRU18` 资产，其每月会解锁100 CRU，如果Alice解绑了900 CRU，在30天后可以成功解锁100 CRU并有800 CRU继续处于绑定状态

#### 2. 解锁（Unlock）

每个解锁周期到期后，用户可以如下图所示操作解锁已释放流动性的CRU：

// TODO：unlock截图

#### 3. 提款(Withdraw)

在解绑的周期（**28天**）过后，用户可以如下图点击提款操作进行操作：

// TODO：withdraw截图

## Reference

1. [LockedCRU Claim](claims-locked-cru.md)
---
id: cru18Guarantee
title: Use CRU18 Guarantee
sidebar_label: Use CRU18 Guarantee
---

## 使用CRU18进行担保

CRU18是锁定的状态，在未释放之前无法进行转账，但是可以使用锁仓中的金额进行担保获得收益

### 将持有CRU18的账户导入到[主网Apps](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/accounts)

#### 方法一 助记词导入
点击"Add account",将"mnemonic seed"替换为CRU18账户的助记词，点击"Next"进行创建

![image](assets/account/seed.png)

#### 方法二 使用备份文件导入
点击"Restore JSON"，将备份文件导入并输入密码，点击"Restore"

![Others1](assets/claimsLockedCRU/others1.jpg)

### 创建Controller账户
创建一个Controller账户，用于操作资产。账户里面需要有一定数量的 CRU 用于支付各类交易的交易费

![](assets/account/3.1.1.png)

### 手续费充值

分别给 CRU18 账户和 controller 账户充值一定数量的 CRU 用于支付各类交易的交易费

### 新增绑定

将 CRU18 作为 stash 账号，建立 controller 和 stash 的绑定关系，绑定的数值即可以用来担保的数值。
具体操作参考[新增绑定指南](new-bond.md)

### 进行担保

选择合适的验证人或者候选人进行担保，具体操作可参考[担保人指南](guarantor-guidance.md)




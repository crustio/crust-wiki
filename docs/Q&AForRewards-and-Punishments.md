---
id: Q&AForRewardsandPunishments
title: Rewards and Punishments
sidebar_label: Rewards and Punishments
---

## 1 How to receive stake and guarantee rewards?

The process of receiving rewards is as follows:
Enter Crust APPS, choose Staking, choose Payouts
![Picture](assets/qa/payouts1.jpg)
![Picture](assets/qa/payouts2.jpg)

## 2 How do I check the income every time I stake and guarantee to receive a reward?

Open [Subscan](https://crust.subscan.io/)
Use your income account to check, you can see the amount received in "Profits and Penalties"
![Picture](assets/qa/subscanreward2.jpg)

## 3 How to unlock the earnings?

The rewards of validators and candidates will be recorded in Stash and automatically mortgaged. You can observe the automatic increase of "total stakes" and "own effective stake". If you don't want to mortgage, you can perform the "unbond" operation to unlock.

The guarantor’s income will be credited to the guarantor’s stash account, and the status is bound. If you want to continue to guarantee the income, you need to manually operate it. If you want to untie, perform the "unbond" operation. Note that the amount of unbond is the value of the income.

The time to unlock the proceeds is 28 days

## 4 Owner node offline penalty related issues

a. Trigger conditions for forfeiture

-At the end of each Session (1 hour), it will be judged whether the validator is offline. When the validator is detected to be offline, the penalty mechanism will be triggered and the penalty amount calculation will start
-Each time a block is generated, the packager (author) of the block will be tested for double spending. If it is detected that the same block height is detected, when trying to generate two different blocks, it will be penalized

b. Result of confiscation

The mortgaged CRU will be deducted according to the penalty rate, and the validator identity will be removed, and the validator who is under penalty will lose the part secured before the penalty.

c. Penalty rate

The penalty amount is the maximum penalty ratio that occurs in a SlashingSpan multiplied by the validator's own effective stake amount.

```shell
Penalty ratio = min((3 * (k-(n / 10 + 1))) / n, 1) * 0.07
```

Among them, k is the number of offline eras on the entire network, and n is the number of overall validators (block producers). The number of dropped calls within 10% will not trigger the actual penalty, and will eventually climb linearly to the maximum value of 7%. When one-third of the validators are offline, the penalty ratio is approximately 5%.

d. Actual deduction time for fines and forfeitures

The penalty will not be issued immediately, and the money will be deducted after a delay of 108 Era (27 days).

## 5 Member node disconnection penalty

The loss of a Member node will trigger a penalty for reporting invalid workloads, which will result in a decrease in the effective stake amount. There is no benefit during this period of time, lasting about 9 hours, and the penalty time will be automatically extended

## 6 How does the Group distribute earnings?

Crust chain doesn't distribute revenue and need to be settled privately by the owner

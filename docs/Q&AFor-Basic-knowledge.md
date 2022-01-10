---
id: Q&AForBasicknowledge
title: Basic Knowledge
sidebar_label: Basic Knowledge
---


## 1 How long is ERA?

A block is about 6 seconds, and an ERA is about 6 hours. Many event updates are related to ERA, such as effective stake amount, validator selection, etc.

## 2 Mainnet lock time?

The unlocking time is 112era (28 days)

## 3 Types and forms of income?

There are three main types of income: block rewards, staking rewards and storage income. All proceeds will be settled in CRU. In the first year, the reward for network maintenance is 5,000,000 CRU, which will be 88% of the previous year in the following year, and so on. That is, in the first year, the rewards for each ERA include 684CRU block rewards (2736CRU per day) and 2737CRU staking rewards (10948CRU per day). The block rewards are equally distributed to validators based on the block production score, and the stake rewards are divided equally according to the effective stake. To verifiers, candidates, guarantors.

## 4 What is the reward for the 1PB machine?

You can simply use the daily additional issuance of CRUs to divide the total storage of the entire network. The total storage of the entire network can be viewed in APPS

```
Candidate 1P income = daily additional CRU issuance * 80% / P number of the entire network
Validator 1P revenue = daily additional CRU issuance*20% / total number of validators / node's P number + daily additional CRU issuance*80% / full network's P number
```

![Pic](assets/qa/total_storage.png)

Since the validator will have an independent income of 20%, and the guarantee rates given by different nodes are different, the income of the nodes is not even.

## 5 How many CRUs does the mainnet 1T need to stake?

In the early stage of the main network, 1T can obtain a stake limit of 1CRU. Saving user data will increase the stake limit (up to 10 times), that is, 1 machine equals 10 machines.

## 6 How to transfer Maxwell preview network account to main network?

Method one:

Import the backup file of the account on Maxwell to the main network, and then back up the account again to generate a new backup file. Then forget this account and restore it with a new backup file, you can configure it to the node for use

![Picture](assets/qa/restore.png)
![Picture](assets/qa/restore1.png)

Method Two:

Import the backup file of the account on Maxwell to [Crust Wallet](crustWallet.md), switch the wallet network to Crust, and then export the backup file through the wallet to configure it to the node for use

## 7 How many CRUs are needed to run the main network node?

For example, if there is one owner, two members, and each member is 100TB, then you need at least 1+(2+100)×2=205cru. If you consider free handling fees, add 24×2 (just lock up, not consumption), this cost is cost-effective in the long run. Check the definition of owner and member through [here](node-overview.md).

## 8 Unbonding CRUs

> Note: The amount of unbonding cannot exceed the amount that can be unbound. If you want to untie all the bonds, the guarantor needs to cancel all guarantees first, and other characters can untie directly

![Picture](assets/qa/unbond1.jpg)

Enter the amount to be unbond in the "unbond amount". The unbond process lasts for 112 eras (28 days). During this period, it cannot be used as collateral. The funds will be withdrawn after the unbond period.

![Picture](assets/qa/unbond2.jpg)

---
id: guarantorGuidance
title: Guarantor Guidance
sidebar_label: Guarantor Guidance
---

## Bond Accounts
Makesure you have finished [account setup steps](new-bond.md), and bonded your stash and controller account.

## Explorer Validators
* Click “Staking” in the top and click “Staking overview”
* Choose a validator and click it's icon in the validator list to copy the validator's Accound ID.

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/copyaddr.png)

> Notice: The guarantee fee means the proportion of node staking rewards distributed to guarantors

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/mining/guaranteefee_ch.png)

## Guarantee
### Step 1 go to guarantee page

* Go to“Staking” —— “Account actions”
* Confirm your stash and controller account, follow the process shown below, click "Guarantee"

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/guarantee.png)


### Input guarantee information


* Paste the copied address in the node list in the blank
* Select the specific node in the candidate accounts
* Enter the amount you want to guarantee
* Click "Guarantee"
  

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/guarantee2.png)

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/amount.png)


### Wait for the guarantee to take effect

* Go to "Staking" —— "Account actions"
* Find the validator you guaranteed, follow the steps shown in below picture 
* There are two values under the account you just guaranteed, the value below is "effective stake", it will take effect after waiting for an era

  

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/staking/staked.png)

### Effective Stake

For example:

There is a validator who obtained a Stake Limit of 100 CRUs by providing storage, this Validator also have 100 CRUs bonded, then all the 100 CRUs will be all effective staked to the validator.

At this time, if a guarantor guarantees the same validator, the guarantee amount is 400 CRUs. After waiting for an ERA, the effective stake contributed by the guarantor and validator are 80 and 20 CRUs respectively. That is, each part's effective stake are calculated from their contributions according to the proportion of the guaranteed CRU.






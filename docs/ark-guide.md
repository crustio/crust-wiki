---
id: arkGuide
title: Profit Ark Guideline
sidebar_label: Profit Ark Guideline
---

### How To Join

1. [Setup nodes](node-spec.md)

2. [Get test coin](https://github.com/decloudf/faucet-bot/issues/new/choose)

3. [Guarantee](gPoS-guarantee-process.md) a node to help it be a validator

4. Set [on-chain identity](set-onchain-identity.md) to get your name shown

### Reward Distribution Rules

Every 5 days, we will count the points earned during that period of time and distribute rewards proportionately.

In order to receive rewards from the testnet, you need to go to [Crust APPS](http://apps.crust.network/) where you can **bond your ETH account to your Crust stash account** . The rewards will go to your ETH account in the form of ERC20. 

> NOTES: Please make sure that your bound Stash account has become a validator or candidate, otherwise you will not be able to get rewards. Please refer to the node setup manual for steps of how to becoming a validator or candidate.


The bonding procedures are shown as follows:

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/testrace/bondETH.png)

Every five days we will count the points of the past five days and distribute rewards in proportion.The total reward pool is more than 300,000 CRUs, of which **50% are CRUs that are transferrable, and the remaining 50% are CRU18**. CRU18 is initially locked and will be unlocked monthly within 18 months after the mainnet launch.

### Point-earning Rules

> Note: Please make sure that your bound Stash account has become a Validator or Candidate, otherwise you will not be able to get rewards. Please refer to the node setup manual for specific process.

During the test period, points will be counted and summed in each Era based on three indicators of nodes: 1) validator rate, 2) success rate of reporting work report, and 3) overall storage capacity.
Point-earning rules in each Era are as follows:

***```Points = storage_capacity * (1 + validator_rate * validator_multiplier) * work_report_multiplier```***
  
- `storage_capacity`: Storage capacity of the current era
- `validator_rate`: the number of Era when the node is a validator / the total number of Era since the node joining the network

- `validator_multiplier`:

 | Offline rate | Validator multiplier |
  |  ----  | ---- |
  | 0%  | 0.1 |
  | 0% - 1%  | 0.05 |
  | 1% - 2% | 0.0 |
  | 2% - 3% | -0.05 |
  | 3% < | -0.1 |


- `work_report_multiplier`:

  | Success rate of work report | Work report multiplier |
  | ---- | ---- |
  | > 99%  | 1 |
  | > 98%  | 0.9 |
  | > 97%  | 0.8 |
  | > 95%  | 0.7 |
  | < 95%  | 0.5 |


### Remove Failure Storage Node

The shutdown of storage nodes and the sWorker process will affect the success rate of work report, thus, you need to remove the failure storage node, you can use the Chill function:

1. Find out which public key your controller account have bonded

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/apps/idbonds_cn.png)


2. Run following command at the failure storage node to get the public key

```shell
curl http://127.0.0.1:12222/api/v0/enclave/id_info
```

3. Chill the public key at [Crust APPS](http://apps.crust.network/)

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/maxwell/apps/chill_en.png)

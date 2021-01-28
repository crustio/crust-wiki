---
id: GPoS
title: GPoS
sidebar_label: GPoS
---

## What is GPoS

There are multiple participants in Crust Network, they are: validator, candidate, guarantor, and user. The users mentioned here are mainly refers to cloud storage users.


Crust network uses the GPoS (Guaranteed Proof of Stake) consensus, which is a PoS based consensus with storage resources as a guarantee. Similar to existing PoS projects, nodes in Crust Network need to stake CRUs to compete to become validators. The difference is that nodes also need to provide storage resources to obtain the corresponding stake limit. When the node obtains the stake limit, it can obtain the corresponding number of CRU staking. 

Through the MPoW mechanism - the node storage status monitoring mechanism, the chain can obtain the node storage capacity through the work report signed by the node's TEE module. The more storage resources a node contributes, the higher the stake limit it can obtain.


![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/gpos.png)

GPoS is based on Substrate framework, the block generation algorithm is [BABE/GRANDPA](https://wiki.polkadot.network/docs/en/learn-consensus#what-is-grandpababe). If someone wants to control this network, in addition to having a large proportion of CRU tokens, they also need to control enough storage resources. Such a design will make the attack more difficult.


## How to Join GPoS
Users can join in as validator or as guarantors.

### Join GPoS as a validator
To join Crust Network as a validator, You can check [validator guidance](validatorGuidance.md).

### Join GPoS as Guarantor

Users can share the staking income of Crust network through [guarantee](guarantor-guidance.md). Users can browse the validators in the network and use CRUs to guarantee then, thereby increasing the validator’s effective stake (the final validator’s total effective stake amount will not exceed its stake limit).

---
id: Q&AForVerifiersandCandidates
title: Verifiers and Candidates
sidebar_label: Verifiers and Candidates
---

## 1 What are candidates and validators?

Both validators and candidates are the maintainers of the network, responsible for generating blocks and packaging transactions. The difference is that the validator is a node with a high effective stake and directly participates in network maintenance, while the candidate, as a candidate for the validator, needs to be ready to produce blocks at any time.

## 2 The income difference between validators and candidates?

The candidate is a node that has not competed with the validator. It cannot get the block reward, but it can still get the staking reward. In the first year, the reward for network maintenance is 5,000,000 CRU, which will be 88% of the previous year in the following year, and so on. That is, in the first year, the rewards for each era include 684CRU block rewards (2736CRU per day) and 2737CRU stake rewards (10948CRU per day). The block rewards are equally distributed to validators based on the block production score, and the stake rewards are divided equally according to the effective mortgage. To verifiers, candidates, guarantors.

## 3 How can a candidate become a validator?

Through competition, the node with the highest effective stake amount will be selected as the validator. The storage capacity determines the upper limit of the stake, and the stake or guarantee determines the amount of stake. The minimum value of the upper limit of stake and the amount of stake is the effective stake. The stake upper limit is updated every 1 hour, and the stake amount and effective stake are updated every era. The verifier's selection is recalculated for each era. For details, please see this [link](validatorGuidance.md)
![Picture](assets/qa/be_validator.png)

## 4 How does the total number of validators change?

The total number of validators will be dynamically adjusted. This setting is to ensure the sufficient competition and the network security. The technical committee will discuss and decide in the early stage. After the network is stable, the total number of validators will be increased or reduced through a motion vote.

## 5 What does the icon of the staking interface mean?

![Picture](assets/qa/app_validator_page.png)
- 1 The next era will participate in the validator competition
- 2 The number of blocks produced in a session, an era has 6 sessions
- 3 Effective CRU staked by others
- 4 The effective amount of CRU staked by yourself, parameter 3 and parameter 4 are used to compete to become a validator
- 5 The value calculated by the node's hard disk capacity and meaningful files determines the upper limit that the node can stake
- 6 The guarantee fee rate set by the node, assuming you set 90%, the node will withdraw 10% of the guarantor’s income
- 7 The block score determines the profit of era. The data is the same for each validator in terms of probability
- 8 The latest block currently issued by the node

## 6 What does the guarantee fee (reward commission percentage) mean, and how much is appropriate?

Guarantee fee (percentage of reward commission): the proportion of the guarantor's share, the greater the value, the higher the guarantor's revenue share

The following is an example of a scenario: Suppose node A stakes 1000 CRU and is guaranteed 200 CRU, and its stake upper limit is 1000 CRU, and the guarantee fee is set to 30%. Assuming that each round of stake income is 600 CRU, if The effective stake amount of the whole network is 2000, then the income of each Era can be calculated as:

-The validator’s effective stake = minimum value (1000, 1200) * (1000 / 1200) = 1000 * (1000 / 1200) = 833.3 CRU

-Guarantor’s effective stake = minimum value (1000, 1200) * (200 / 1200) = 1000 * (200 / 1200) = 166.66 CRU

-Validator's income = 600 * (833.3 / 2000) + 600 * (166.66 / 2000) * 70% = 285 CRU

## 7 Increase/decrease stake

-Increase the amount of stake deposit

![validator](assets/gpos/staking.png)
![validator](assets/gpos/bondmore.png)

-Reduce the amount of stake deposit

![validator](assets/gpos/staking.png)
![validator](assets/gpos/unbond.png)

## 8 Impact of changing the guarantee rate

The guarantee rate can be changed at any time. When increased, the next era will take effect. When it is reduced, there will be an era penalty, that is, all the proceeds of the next era will be given to the guarantor.

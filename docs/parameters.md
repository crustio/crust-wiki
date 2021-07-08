---
id: parameters
title: Parameters
sidebar_label: Parameters
---

# Technical Parameter
| **Parameters**                   | **Details**                                                  | **Preview Network** | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ | :---------- |
| **SessionDuration**                  | Duration of one session                                | 10 min                |  60 min    |
| **SessionsPerEra**                   | Sessions in one era                                          | 36                  |   6   |
| **AVERAGE_ON_INITIALIZE_RATIO**      | Reserved weight for on_initialize                            | 2.5%                |             |
| **HistorySlotDepth** | Depth of storing report in slot | 6 | |

# Economic Parameter
## GPoS

| **Parameters**                   | **Details**                                                  | **Preview Network** | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ | :---------- |
| **AuthoringRewardsInEra**            | Initial authoring rewards                           | 150                 |             |
| **StakingRewardsInRra**              | Initial staking reward                             | 600                 |             |
| **DecreasePeriod**                   | The period to decrease reward                                | 90                  | 365.25      |
| **BondingDuration**                  | Unbonding duration                                    | 28 era                 | 60 era (15 days)          |
| **EraDuration**                      | SessionDuration * SessionsPerEra                       | 6 hour                |             |
| **SlashDeferDuration**               | Real execution timing after being punished              | 28 era              | kusama's          |
| **SPowerRatio**                      | How much CRU can stake to 1TB SRD file                       | 1                   | 1          |
| **MaxGuarantorRewardedPerValidator** | For each Validator, how many guarantors can receive rewards  | 64                  | kusama's         |
| **MarketStakingPotDuration**         | The period of releasing part of the storage fee to the staking pool | 60 era    |   60     |
| **MAX_GUARANTEE**                    | The maximum number of guarantees for each guarantor          | 16                  | 16          |
| **MAX_UNLOCKING_CHUNKS**             | The maximum number of funds that can be unlocked at the same time | 32             | 32          |
| **HistoryDepth**                     | Reward collection deadline                             | 84 era              | 84          |
| **StartRewardEra** | The era to start node operation reward | None | ?|

## MPoW

| **Parameters**      | **Details**                                                  | **Preview Network** | **Mainnet** |
| :------------------ | :----------------------------------------------------------- | :------------------ | :---------- |
| **REPORT_SLOT**     | Work report cycle                                     | 300 blocks               | 600 blocks       |
| **PunishmentSlots** | Penalty for loss of stake limit caused by work report missing | 16 REPORT_SLOT            | 8 REPORT_SLOT        |
| **sWorkerReLoad**   | Penalty for loss of stake limit caused by reload sWorker | 1 REPORT_SLOT              | 1 REPORT_SLOT        |
| **MaxGroupSize** |  | 100 | removed? |
| **SRD_LIMIT** | The max srd limit in one work report | 2PB | |
| **FILES_LIMIT** | The max files limit in one work report | 8PB | |
| **FILES_COUNT_LIMIT** | The max files number in one work report | 5000 | |
| **USED_UPDATE_SLOT** | The frequency to update used info | 100 blocks | |
| **MAX_PENDING_FILES** | The max pending files to update used info | 20 | |


## SWORKER
| **Parameters**      | **Details**                                                  | **Preview Network** | **Mainnet** |
| :------------------ | :----------------------------------------------------------- | :------------------ | :---------- |
| **MAX_SRD** | The maximum srd size in one machine| 500T | |
| **MAX_FILES** | The maximum files count int one machine | 400000 | |
| **REPORT_FILES** | added + deleted total| 1000 | |
## Storage Market

| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :------------------------ | :----------------------------------------------------------- | :------------------ | :---------- |
| **FileDuration**          | File validity period                               | 6 months             | <br>        |
| **FileReplica**        | Replica nodes that can directly receive file storage rewards | 4                   | <br>        |
| **FileBaseFee**           | Basic storage fee (cru)                                      | 0.001              | <br>        |
| **FileInitPrice**         | Initial cost per MB (cru)                                    | 0.000001            | <br>        |
| **FilesCountInitPrice**         | Initial cost for files count                           | 0.0001   | <br>        |
| **StorageReferenceRatio** | Storage supply and demand baseline: If the percentage of storage exceeds this value, the price will rise, otherwise it will fall | 25%                 | <br>        |
| **StorageIncreaseRatio**  | Storage price rise speed                        | 0.000006 %             | <br>        |
| **StorageDecreaseRatio**  | Storage price fall speed                        | 0.000005 %             | <br>        |
| **StakingRatio**          | Percentage of storage cost allocated to the entire network for staking rewards | 80%  | <br>        |
| **TaxRatio**              | Percentage of storage cost allocated to the network tax      | 10%                 | <br>        |
| **RenewRewardRatio**      | The reward ratio for the liquaditor to renew one storage order | 5% | |
| **UsedTrashMaxSize**      | Expired files exceeding this number will all become invalid files | 1000              | <br>        |
| **MAX_REPLICAS** | The maximum replicas for one file | 500 | |
| **MAX_GROUPS** | The maximum group which has stake limit contribution for one file | 200 | |
| **COLLATERAL_RATIO** | The ratio that the collateral should have to earn market reward | 10 | 5 |
| **PRICE_UPDATE_SLOT** | The frequency to update file price | 10 blocks | |
| **FILES_COUNT_REFERENCE** | The keys reference number for keys price | 20_000_000 | |

## Benefit
| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :------------------------ | :----------------------------------------------------------- | :------------------ | :---------- |
| **BenefitReportWorkCost**          | The benefit amount that one work report need      | 1 CRU             | 3 CRU  |
| **BenefitsLimitRatio**        | The total amount ratio for benefit module | 1%      | <br>        |
| **BenefitMarketCostRatio**           | The benefit cost ratio to free calculate_reward's transaction fee  | 100%     | <br>        |
| **BondingDuration**                  | Unbonding duration                                    | 60 era                 | 60 era       |

## CRU18 Locks
| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :------------------------ | :----------------------------------------------------------- | :------------------ | :---------- |
| **UnlockPeriod**          | Unlocking frequency                              | 30 days              | <br>        |
| **CRU18D6_DELAY** | | 180 days| |

## General
| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ | :---------- |
| **ExistentialDeposit** | Dust account value | 0.01 | 0.001 |

## Identity
| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ | :---------- |
| **BasicDeposit** | | 5 CRU |  |

## Treasury
| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ | :---------- |
| **ProposalBond** | The bonding amount ratio to create one proposal | 5% | |
| **ProposalBondMinimum** | The minimum amount to create one proposal | 20 CRU| 10 CRU |
| **SpendPeriod** | | 6 days| 6 days |
| **Burn** | The burn ratio in one spending period | 0% | 0.2% |

## Transaction Fee
| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ | :---------- |


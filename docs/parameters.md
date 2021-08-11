---
id: parameters
title: Parameters
sidebar_label: Parameters
---

# Technical Parameter
| **Parameters**                       | **Details**                                                  | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :---------- |
| **SessionDuration**                  | Duration of one session                                      | 60 min      |
| **SessionsPerEra**                   | The number of Sessions in one era                            | 6           |
| **AVERAGE_ON_INITIALIZE_RATIO**      | Reserved weight for on_initialize                            | 2.5%        |
| **HistorySlotDepth**                 | Depth of storing report in slot                              | 6           |

# Economic Parameter
## GPoS

| **Parameters**                       | **Details**                                                             | **Mainnet**       |
| :----------------------------------- | :---------------------------------------------------------------------- | :---------------- |
| **AuthoringRewardsInEra**            | Initial authoring rewards in the first year                             | 684 CRU           |
| **StakingRewardsInEra**              | Initial staking rewards in the first year                               | 2737 CRU          |
| **DecreasePeriod**                   | The period to decrease reward                                           | 365.25 days       |
| **BondingDuration**                  | Unbonding duration                                                      | 112 era (28 days) |
| **EraDuration**                      | SessionDuration * SessionsPerEra                                        | 6 hour            |
| **SlashDeferDuration**               | Real execution timing after being punished                              | 108 eras          |
| **SPowerRatio**                      | How much CRU can stake to 1TB SRD file                                  | 1                 |
| **MaxGuarantorRewardedPerValidator** | For each Validator, how many guarantors can receive rewards             | 64                |
| **MarketStakingPotDuration**         | The period of releasing part of the storage fee to the staking pool     | 60 eras           |
| **MAX_GUARANTEE**                    | The maximum number of guarantees for each guarantor                     | 16                |
| **MAX_UNLOCKING_CHUNKS**             | The maximum number of funds that can be unlocked at the same time       | 32                |
| **HistoryDepth**                     | Reward collection deadline                                              | 84 eras           |
| **TwoStageLimitRatio**               | The proportion of the second-stage limit to the total network currency  | 35%               |
| **StartRewardEra**                   | The era to start node operation reward                                  | Comming Soon      |

## MPoW

| **Parameters**         | **Details**                                                   | **Mainnet**    |
| :--------------------- | :------------------------------------------------------------ | :------------- |
| **REPORT_SLOT**        | Work report cycle                                             | 600 blocks     |
| **PunishmentSlots**    | Penalty for loss of stake limit caused by work report missing | 8 REPORT_SLOT  |
| **sWorkerReLoad**      | Penalty for loss of stake limit caused by reload sWorker      | 1 REPORT_SLOT  |
| **MaxGroupSize**       | The max members in one group                                  | 100            |
| **SRD_LIMIT**          | The max srd limit in one work report                          | 2PB            |
| **FILES_LIMIT**        | The max files limit in one work report                        | 8PB            |
| **FILES_COUNT_LIMIT**  | The max files number in one work report                       | 5000           |
| **SPOWER_UPDATE_SLOT** | The frequency to update spower info                           | 100 blocks     |
| **MAX_PENDING_FILES**  | The max pending files to update spower info                   | 20             |


## SWORKER
| **Parameters**      | **Details**                                                  | **Mainnet** |
| :------------------ | :----------------------------------------------------------- | :---------- |
| **MAX_SRD**         | The maximum srd size in one machine                          | 500T        |
| **MAX_FILES**       | The maximum files count in one machine                       | 400000      |
| **REPORT_FILES**    | The total number of added + deleted files                    | 1000        |
## Storage Market

| **Parameters**            | **Details**                                                                                                                      | **Mainnet** |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| **FileDuration**          | File validity period                                                                                                             | 6 months    |
| **FileReplica**           | Replica nodes that can directly receive file storage rewards                                                                     | 4           |
| **InitFileBaseFee**       | Initial Basic storage fee (cru)                                                                                                  | 0.001 CRU   |
| **InitFileByteFee**       | Initial cost per MB (cru)                                                                                                        | 0.000001 CRU|
| **InitFileKeysCountFee**  | Initial cost for files keys count                                                                                                | 0.0001 CRU  |
| **StorageReferenceRatio** | Storage supply and demand baseline: If the percentage of storage exceeds this value, the price will rise, otherwise it will fall | 25%         |
| **StorageIncreaseRatio**  | Storage price rise speed                                                                                                         | 0.000006 %  |
| **StorageDecreaseRatio**  | Storage price fall speed                                                                                                         | 0.000005 %  |
| **FileFeeUpdateFrequency**| The frequency of updating FileByteFee and FileKeysCountFee                                                                       | 10 blocks   |
| **StakingRatio**          | Percentage of storage cost allocated to the entire network for staking rewards                                                   | 80%         |
| **TaxRatio**              | Percentage of storage cost allocated to the network tax                                                                          | 10%         |
| **RenewRewardRatio**      | The reward ratio for the liquaditor to renew one storage order                                                                   | 5%          |
| **MAX_REPLICAS**          | The maximum replicas for one file                                                                                                | 200         |
| **COLLATERAL_RATIO**      | The ratio that the collateral should have to earn market reward                                                                  | 1:1           |
| **FILES_COUNT_REFERENCE** | The keys reference number for keys price | 20_000_000 |

## Benefit
| **Parameters**              | **Details**                                                        | **Mainnet** |
| :-------------------------- | :----------------------------------------------------------------- | :---------- |
| **BenefitReportWorkCost**   | The benefit amount that one work report need                       | 3 CRU       |
| **BenefitsLimitRatio**      | The ratio of the upper limit of the order settlement transaction fee relief pool to the total additional issuance
                          | 0.2%        |
| **BondingDuration**         | Unbonding duration                                                 | 112 era     |

## CRU18 Locks
| **Parameters**            | **Details**                                                  | **Mainnet**             |
| :------------------------ | :----------------------------------------------------------- | :---------------------- |
| **UnlockPeriod**          | Unlocking frequency                                          | 30 days (432000 blocks) |

## General
| **Parameters**         | **Details**                                                  | **Mainnet** |
| :--------------------- | :----------------------------------------------------------- | :---------- |
| **ExistentialDeposit** | Dust account value                                           | 0.0001      |

## Identity
| **Parameters**   | **Details**                             | **Mainnet** |
| :--------------- | :-------------------------------------- | :---------- |
| **BasicDeposit** | The deposit amount for setting identity | 5 CRU       |

## Treasury
| **Parameters**            | **Details**                                                  | **Mainnet** |
| :------------------------ | :----------------------------------------------------------- | :---------- |
| **ProposalBond**          | The bonding amount ratio to create one proposal              | 5%          |
| **ProposalBondMinimum**   | The minimum amount to create one proposal                    | 10 CRU      |
| **SpendPeriod**           | The period of burning the currency in the treasury account   | 6 days      |
| **Burn**                  | The burn ratio in one spending period                        | 0.2%        |

## Transaction Fee
| **Parameters**            | **Details**                    | **Mainnet** |
| :-----------------------  | :----------------------------- | :---------- |
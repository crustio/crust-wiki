---
id: parameters
title: Parameters
sidebar_label: Parameters
---

## GPoS

| **Parameter Name**                   | **Details**                                                  | **Preview Network** | **Mainnet** |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ | :---------- |
| **AuthoringRewardsInEra**            | Initial block reward(cru/era)                                | 150                 |             |
| **StakingRewardsInRra**              | Initial staking reward(cru/era)                              | 600                 |             |
| **HalvePeriod**                      | The period to halve reward                                   | 90                  | 365.25      |
| **SessionDuration**                  | Duration of one session (min)                                | 10                  |             |
| **SessionsPerEra**                   | Sessions in one era                                          | 36                  | 36          |
| **BondingDuration**                  | Unbonding duration (era)                                     | 28                  | 28          |
| **SlashDeferDuration**               | Real execution timing after being punished（era）            | 28                  | 28          |
| **SPowerRatio**                      | How much CRU can stake to 1TB SRD file                       | 1                   |             |
| **MaxGuarantorRewardedPerValidator** | For each Validator, how many guarantors can receive rewards  | 64                  | 128         |
| **MarketStakingPotDuration**         | The period of releasing part of the storage fee to the staking pool (cru) | 60                  | 60          |
| **MAX_GUARANTEE**                    | The maximum number of guarantees for each guarantor          | 16                  | 16          |
| **MAX_UNLOCKING_CHUNKS**             | The maximum number of funds that can be unlocked at the same time | 32                  | 32          |
| **HistoryDepth**                     | Reward collection deadline (era)                             | 84                  | 84          |

## MPoW

| **Parameters**      | **Details**                                                  | **Preview Network** | **Mainnet** |
| :------------------ | :----------------------------------------------------------- | :------------------ | :---------- |
| **REPORT_SLOT**     | Work report cycle（block）                                   | 300                 | <br>        |
| **PunishmentSlots** | Penalty for loss of stake limit caused by work report missing (REPORT_SLOT) | 60                  | <br>        |
| **sWorkerReLoad**   | Penalty for loss of stake limit caused by reload sWorker (REPORT_SLOT) | 4                   | <br>        |

## Storage Market

| **Parameters**            | **Details**                                                  | **Preview Network** | **Mainnet** |
| :------------------------ | :----------------------------------------------------------- | :------------------ | :---------- |
| **FileDuration**          | File validity period  (blocks)                               | 216000              | <br>        |
| **InitialReplica**        | Replica nodes that can directly receive file storage rewards | 4                   | <br>        |
| **FileBaseFee**           | Basic storage fee (cru)                                      | 0.0005              | <br>        |
| **FileInitPrice**         | Initial cost per MB (cru)                                    | 0.0001              | <br>        |
| **StorageReferenceRatio** | Storage supply and demand baseline: If the percentage of storage exceeds this value, the price will rise, otherwise it will fall | 25%                 | <br>        |
| **StorageIncreaseRatio**  | Storage price rise speed (cru/order)                         | 0.00001             | <br>        |
| **StorageDecreaseRatio**  | Storage price fall speed (cru/order)                         | 0.00005             | <br>        |
| **StakingRatio**          | Percentage of storage cost allocated to the entire network for staking rewards | 80%                 | <br>        |
| **TaxRatio**              | Percentage of storage cost allocated to the network tax      | 10%                 | <br>        |
| **UsedTrashMaxSize**      | Expired files exceeding this number will all become invalid files | 500000              | <br>        |




---
id: parameters
title: Parameters
sidebar_label: Parameters
---


## GPoS

| **变量名**                           | **解释**                                                     | **预览网参数** | **主网参数** |
| :----------------------------------- | :----------------------------------------------------------- | :------------- | :----------- |
| **AuthoringRewardsInEra**            | 初始出块奖励（cru/era）                                      | 150            |              |
| **StakingRewardsInRra**              | 初始质押奖励（cru/era）                                      | 600            |              |
| **DecreasePeriod**                      | 奖励衰减周期                                                 | 90             | 365.25       |
| **SessiongDuration**                 | Session时长(min)                                             | 10             |              |
| **SessionsPerEra**                   | 每个Era由多少个Session组成                                   | 36             | 36           |
| **BondingDuration**                  | 资金解绑周期(era)                                            | 28             | 28           |
| **SlashDeferDuration**               | 被惩罚后真正执行时间间隔（Era数目）                          | 28             | 28           |
| **SPowerRatio**                      | 每TB 空盘文件（SRD）对应的质押额度（cru）                    | 1              |              |
| **MaxGuarantorRewardedPerValidator** | 每个Validator对应能领到奖励的担保人数目                      | 64             | 128          |
| **MarketStakingPotDuration**         | 一个存储订单预留给Staking奖励的部分，在之后多久分发完毕(era) | 60             | 60           |
| **MAX_GUARANTEE**                    | 每个持币人最多只能担保16个人                                 | 16             | 16           |
| **MAX_UNLOCKING_CHUNKS**             | 同一时间最多能处于unlocking状态的数目                        | 32             | 32           |
| **HistoryDepth**                     | 奖励领取截止日期(era)                                        | 84             | 84           |

## MPoW

| **变量名**          | **解释**                                 | **预览网参数** | **主网参数** |
| :------------------ | :--------------------------------------- | :------------- | :----------- |
| **REPORT_SLOT**     | Work report 上报周期（block）            | 300            | <br>         |
| **PunishmentSlots** | Work report漏报的惩罚长度(REPORT_SLOT)   | 24             | <br>         |
| **sWorkerReLoad**   | sWorker 重启的惩罚时间长度 (REPORT_SLOT) | 1              | <br>         |

## Storage Market

| **变量名**                | **解释**                                                 | **预览网参数** | **主网参数** |
| :------------------------ | :------------------------------------------------------- | :------------- | :----------- |
| **FileDuration**          | 文件有效期 (块)                                          | 216000         | <br>         |
| **InitialReplica**        | 能直接获得文件存储奖励的副本节点数                       | 4              | <br>         |
| **FileBaseFee**           | 15天存储的基础费 （cru）                                 | 0.01           | <br>         |
| **FileInitPrice**         | 初始每MB大小 （cru）                                     | 0.000001         | <br>         |
| **StorageReferenceRatio** | 供需基准线：有效存储量超过这个值，价格会上升，反之会下降 | 25%            | <br>         |
| **StorageIncreaseRatio**  | 存储价格上升速率（cru/order）                            | 0.00001        | <br>         |
| **StorageDecreaseRatio**  | 存储价格下降速率(cru/order)                              | 0.00005        | <br>         |
| **StakingRatio**          | 存储金中分给全网质押奖励的比例                           | 80%            | <br>         |
| **TaxRatio**              | 存储金的抽税比例                                         | 10%            | <br>         |
| **UsedTrashMaxSize**      | 过期文件数超过这个值后，将全部会变为无效文件             | 1000           | <br>         |




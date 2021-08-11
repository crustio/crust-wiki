---
id: parameters
title: Parameters
sidebar_label: Parameters
---

# 技术参数
| **变量名**                            | **解释**                                                      | **主网参数** |
| :----------------------------------- | :----------------------------------------------------------- | :---------- |
| **SessionDuration**                  | 一个session的长度                                              | 60 min      |
| **SessionsPerEra**                   | 每era的session个数                                            | 6           |
| **AVERAGE_ON_INITIALIZE_RATIO**      | 给on_initilize保留的出块时间比例                                | 2.5%        |
| **HistorySlotDepth**                 | 保留的report_in_slot长度                                       | 6           |

# 经济参数
## GPoS
| **变量名**                            | **解释**                                         | **主网参数** |
| :----------------------------------- | :---------------------------------------------- | :---------------- |
| **AuthoringRewardsInEra**            | 第一年的每era出块奖励                              | 684 CRU           |
| **StakingRewardsInEra**              | 第一年的每era质押奖励                              | 2737 CRU          |
| **DecreasePeriod**                   | 奖励衰减周期                                      | 365.25 days       |
| **BondingDuration**                  | 质押解锁时长                                      | 112 era (28 days) |
| **EraDuration**                      | 每era的时长                                      | 6 hour            |
| **SlashDeferDuration**               | 惩罚等待时长，即发生惩罚到惩罚真正发生的间隔时间        | 108 eras          |
| **SPowerRatio**                      | 质押比例β系数，即每T SRD对应的质押上限               | 1                 |
| **MaxGuarantorRewardedPerValidator** | 任意验证人最多可接受担保人数量，超过此数量的担保人无收益 | 64                |
| **MarketStakingPotDuration**         | 存储市场质押奖励分摊era长度                         | 60 eras           |
| **MAX_GUARANTEE**                    | 担保人最多可担保的验证人数量                         | 16                |
| **MAX_UNLOCKING_CHUNKS**             | 最多解锁金额次数                                   | 32                |
| **HistoryDepth**                     | GPoS历史保存长度                                  | 84 eras           |
| **TwoStageLimitRatio**               | 二阶段质押上限占全网流通量的比例                     | 35%               |
| **StartRewardEra**                   | 奖励开启era时间                                   | Comming Soon      |

## MPoW
| **变量名**              | **解释**                      | **主网参数** |
| :--------------------- | :--------------------------- | :------------- |
| **REPORT_SLOT**        | 工作量上报周期                 | 600 blocks     |
| **PunishmentSlots**    | 链上对于未上报工作量的质押上限惩罚 | 8 REPORT_SLOT  |
| **sWorkerReLoad**      | sWorker对于重启的工作量上报惩罚  | 1 REPORT_SLOT  |
| **MaxGroupSize**       | 一个组最大成员数目              | 100            |
| **SRD_LIMIT**          | 链上单一工作量报告最大SRD大小    | 2PB            |
| **FILES_LIMIT**        | 链上单一工作量报告最大文件大小    | 8PB            |
| **FILES_COUNT_LIMIT**  | 链上单一工作量报告最大文件数目    | 5000           |
| **SPOWER_UPDATE_SLOT** | 算力更新频率                   | 100 blocks     |
| **MAX_PENDING_FILES**  | 延迟更新文件队列最大长度         | 20             |


## SWORKER
| **变量名**           | **解释**            | **主网参数** |
| :------------------ | :----------------- | :---------- |
| **MAX_SRD**         | 单机最大SRD大小      | 500T        |
| **MAX_FILES**       | 单机最大文件数目      | 400000      |
| **REPORT_FILES**    | 单次上报最大文件数目   | 1000        |
## 存储市场

| **变量名**                 | **解释**                                                      | **主网参数** |
| :------------------------ | :----------------------------------------------------------- | :---------- |
| **FileDuration**          | 单次下单文件存储有效时长                                         | 6 months    |
| **FileReplica**           | 文件可获得存储收益人数                                           | 4           |
| **InitFileBaseFee**       | 初始文件基础价格                                                | 0.001 CRU   |
| **InitFileByteFee**       | 初始文件大小价格                                                | 0.000001 CRU|
| **InitFileKeysCountFee**  | 初始文件键值数目价格                                             | 0.0001 CRU  |
| **StorageReferenceRatio** | 供需基准线：超过这个比率文件大小价格上升，低于这个比率文件大小价格下降   | 25%         |
| **StorageIncreaseRatio**  | 文件大小以及键值数目价格上升速率                                   | 0.000006 %  |
| **StorageDecreaseRatio**  | 文件大小以及键值数目价格下降速率                                   | 0.000005 %  |
| **FileFeeUpdateFrequency**| 文件大小价格以及键值数目价格更新频率                                | 10 blocks   |
| **StakingRatio**          | 文件价格进入质押奖励分成的比率                                     | 80%         |
| **TaxRatio**              | 文件价格进入税收池的比率                                          | 10%         |
| **RenewRewardRatio**      | 续费奖励清算人收益比率                                           | 5%          |
| **MAX_REPLICAS**          | 单文件最大副本数                                                | 200         |
| **COLLATERAL_RATIO**      | 领取存储奖励需要的质押金比例                                      | 1:1           |
| **FILES_COUNT_REFERENCE** | 键值数目基准线：超过这个数目价格上升，低于这个数目价格下降             | 20_000_000 |

## 权益模块
| **变量名**                   | **解释**                               | **主网参数** |
| :-------------------------- | :------------------------------------ | :---------- |
| **BenefitReportWorkCost**   | 减免一次工作量上报需要的质押金额           | 3 CRU       |
| **BenefitsLimitRatio**      | 订单清算减免手续费上限占总增发量的比率   | 0.2%        |
| **BondingDuration**         | 权益质押解锁周期                        | 112 era     |

## CRU18解锁
| **变量名**                 | **解释**     | **主网参数**             |
| :------------------------ | :---------- | :---------------------- |
| **UnlockPeriod**          | 解锁周期      | 30 days (432000 blocks) |

## 通用
| **变量名**              | **解释**     | **主网参数** |
| :--------------------- | :---------- | :---------- |
| **ExistentialDeposit** | 最小账户金额  | 0.0001      |

## 链上身份
| **变量名**        | **解释**               | **主网参数** |
| :--------------- | :-------------------- | :---------- |
| **BasicDeposit** | 设置链上身份需要的锁定金额 | 5 CRU      |

## 国库与小费
| **变量名**                 | **解释**       | **主网参数** |
| :------------------------ | :-------------| :---------- |
| **ProposalBond**          | 小费保证金比例   | 5%         |
| **ProposalBondMinimum**   | 小费最小保证金   | 10 CRU     |
| **SpendPeriod**           | 国库销毁周期    | 6 days      |
| **Burn**                  | 销毁比例        | 0.2%       |

## 交易手续费
| **变量名**                 | **解释**                        | **主网参数** |
| :-----------------------  | :----------------------------- | :---------- |
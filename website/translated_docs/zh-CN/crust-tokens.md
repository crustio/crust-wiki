---
id: crustTokens
title: Crust Tokens
sidebar_label: Crust Tokens
---

Crust网络主要通证是CRU，在Crust账号中保存，可以在[Crust Apps](https://apps.crust.network/#/accounts)中查看账号相关信息。

## CRU

CRU是Crust网络中最主要的通证，CRU通证主要有以下几个功能：

1. Staking 维护 Crust 网络的 GPoS 共识
2. 用于担保所选的节点
3. 作为提供资源服务的保障金和佣金
4. 作为使用网络的交易费
5. 可用于购买资源服务
6. 可用于链上治理机制的竞选和投票，并对提案进行表决

## CRU(ERC20)代币合约的所有权解释
CRU的ERC-20合约地址为[0x32a7C02e79c4ea1008dD6564b35F131428673c41](https://etherscan.io/address/0x32a7C02e79c4ea1008dD6564b35F131428673c41)。代币合约的所有权是另一个授权智能合约[0x036dedfab9b806f1c1c17dfaaa12602c95fb8e28](https://etherscan.io/address/0x036dedfab9b806f1c1c17dfaaa12602c95fb8e28)。它用作授权工具。该智能合约除了有所有权之外，还有另一个角色称为审阅者。由于技术原因，ERC-20 合约的所有权不能转移到黑洞地址。 [授权智能合约]((https://etherscan.io/address/0x036dedfab9b806f1c1c17dfaaa12602c95fb8e28)) 的所有权和审阅者权限已转移到黑洞地址。事实上，ERC-20 合约的真正所有权是黑洞地址，因为授权智能合约已被放弃，没有人可以对 ERC-20 合约做任何事情。 两个合约均经过了Etherscan的代码验证开源。
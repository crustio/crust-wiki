---
id: crustTokens
title: Crust Tokens
sidebar_label: Crust Tokens
---

The CRU is the main token of Crust Network. CRUs are stored in Crust accounts. You can find the account information in [Crust Apps](https://apps.crust.network/#/accounts).

## CRU

The CRU is the most important type of token in Crust Network. It has the following major functions:

1. Staking to maintain the GPoS consensus of the Crust network
2. Used to guarantee the selected nodes
3. Serving as a guarantee deposit for providing resource service
4. Serving as a transaction fee for using the network
5. Used to purchase resource services
6. Used for election and voting of on-chain governance mechanism, and vote on proposals

## Ownership of the CRU(ERC20) token contract
The ERC-20 contract address of CRU is [0x32a7C02e79c4ea1008dD6564b35F131428673c41](https://etherscan.io/address/0x32a7C02e79c4ea1008dD6564b35F131428673c41). The ownership of token contract is another authorization smart contract [0x036dedfab9b806f1c1c17dfaaa12602c95fb8e28](https://etherscan.io/address/0x036dedfab9b806f1c1c17dfaaa12602c95fb8e28). It is used as an authorization tool. Besides ownership, there is another role called reviewer in this authorization SC. Due to the technical limitation, the ownership of ERC-20 contract cannot be transferred to the Null Address. The ownership and the reviewer of the [authorization SC]((https://etherscan.io/address/0x036dedfab9b806f1c1c17dfaaa12602c95fb8e28)) have been transferred to the Null Address. In fact, the real ownership of the ERC-20 contract is the Null Address since the authorization SC has been abandoned and nobody can do anything to the ERC-20 contract. Both contracts are open source and have been verified on the etherscan.

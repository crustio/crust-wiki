---
id: evmBuild101
title: Build With EVM 101
sidebar_label: Build With EVM 101
---

## I. Description

This article will introduce the chains we currently support and related information. You can use the following addresses and links to quickly find the information you need to know, so that you can better develop and use Crust in the EVM ecosystem.

## II. What is Crust?

Crust provides a decentralized storage network of Web3 ecosystem. It supports multiple storage layer protocols such as IPFS, and exposes storage interfaces to application layer. Crust's technical stack is also capable of supporting a decentralized computing layer. It is designed to build a decentralized cloud ecosystem that values data privacy and ownership. Moreover, you can find more detials in [this](crust-overview.md).

## III. The chains supported

### 1. Ethereum

Contracts:

- Storage order proxy address: 0xf063A29f03d0A02FD96f270EE4F59158EF3d4860
- Storage order implementation address: 0x2c3b24b22f5a4516b3cf8cc1cb6ad758b6c0132d
- Price oracle proxy address: 0xf878bea1de447d5330ab17f7a62f421695ba09a5
- Price oracle implementation address: 0x370fb88ead3a3fca3f3150a45cbfb916563ced8d

Details:

More informatiom click [this](evm-chain-ethereum.md)

### 2. Optimism

Contracts:

- Storage order proxy address: 0xf063A29f03d0A02FD96f270EE4F59158EF3d4860
- Storage order implementation address: 0x2c3b24b22f5a4516b3cf8cc1cb6ad758b6c0132d
- Price oracle proxy contract address: 0xF878bEa1De447d5330ab17f7a62f421695ba09A5
- Price oracle implementation contract address: 0x370fb88ead3a3fca3f3150a45cbfb916563ced8d

Details:

More informatiom click [this](evm-chain-optimism.md)

### 3. Arbitrum one

Contracts:

- Storage order proxy address: 0xf063A29f03d0A02FD96f270EE4F59158EF3d4860
- Storage order implementation address: 0x2C3b24b22f5a4516B3cf8cc1CB6Ad758b6c0132d
- Price oracle proxy address: 0xf878bea1de447d5330ab17f7a62f421695ba09a5
- Price oracle implementation address: 0x370fb88ead3a3fca3f3150a45cbfb916563ced8d

Details:

More informatiom click [this](evm-chain-arbitrum.md)

### 4. zkSync

Contracts:

- Storage order proxy address:0x61ecfA2C8dF06A4f941A8529E4B707488B74e3bE
- Storage order implementation address:0xe5b1bd0cf16a3b6d4c096eeb0b6388dae2fae22a
- Price oracle proxy address:0x25da536a3FfedF57ef746ebb79f1fa82e60eA7D0
- Price oracle implementation address:0x4a8e31f931fa2dec73f06ef8f6ed640b7766e409

Details:

More informatiom click [this](evm-chain-zksync.md)

## IV. Usage

Functions for contract owner:
```
addSupportedToken: Add supported token.
addOrderNode: Add order node which will order and pin files.
removeSupportedToken: Remove supported token.
removeOrderNode: Remove order node.
setOrderPrice: Set price.
setServicePriceRate: Set price rate which indicates service price rate.
setSizeLimit: Set size limit.
```

Functions for users:
```
getPrice: Get price in ETH for file size specified by parameter "size".
placeOrder: Place order with cid and size in ETH, msg.value indicates the price user should pay for pinning node.
placeOrderWithNode: Same like placeOrder, the difference is that the pinning node is fixed by nodeAddress.
```

## V. References

- [Crust Network github](https://github.com/crustio)
- [Storage explorer](crust-storage-explorer.md)
- https://etherscan.io/
- https://optimistic.etherscan.io/
- https://arbiscan.io/
- https://explorer.zksync.io/
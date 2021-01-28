---
id: previewNetworkMaxwell
title: Preview Network Maxwell
sidebar_label: Preview Network Maxwell
---

## Maxwell Preview Network

Maxwell, as the preview network of the Crust mainnet, implements all the core mechanisms of Crust, including token staking, decentralized storage market(DSM), and file retrieval. Maxwell runs in a real economic system, participants can lock and [claim](claims.md) thier CRU-ERC20 token to the Mexwell CRU token for staking, use the storage services and retrieval files from Maxwell. The mining revenue in Maxwell are real CRU tokens that can be claimed back to CRU-ERC20 as a rewards for participant.

## How to Join Maxwell Preview Network

You can join as miners and provide storage services for mining, or participate in staking as token holders. For mining rules, please refer to the [GPoS](GPoS.md) consensus algorithm.

You can also use Crust network as a storage user, the storage market is coming soon.

### Miners

Miners need to setup nodes according to their roles. The nodes in the Maxwell network are divided into: [Independent Node](isolationNode.md), [Group Owner](ownerNode.md) and [Group Member](memberNode.md).

An independent node is a physical node. This node serves as a network validator of Maxwell network while providing storage and retrieval services. This means that the stake limit of this validator is restricted by the limit of storage capacity of one single node.

The opposite concept to independent nodes is Group. Group can accommodate multiple physical nodes - Group Member, to join. Group consists of an Group Owner and multiple Group Members. Group Member is responsible for providing storage and retrieval services, and the corresponding Stake Limit will be contributed to the Group Owner. The Group Owner is only responsible for network verification and block generation.

### Token Holders

Token holders can obtain income by [guarantee](guarantor-guidance.md) the node.

### Storage Users

Opening soon.

---
id: buildXCMPBasedCrossChainSolution
title: Crust's XCMP-based cross-chain dStorage solution
sidebar_label: Crust's XCMP-based cross-chain dStorage solution
---

## Introduction

Decentralized storage(dStorage) is the fundamental of Web3 ecosystem. As a supplement to the costly on-chain storage, dStorage can scale horizontally as distributed network and store unlimited data theoretically.

[Ethereum's Web3 stack](https://ethereum.org/en/developers/docs/storage/) lists some important considerations about dStorage:

- Persistence mechanism and incentive structure
- Data retention enforcement
- Decentrality
- Consensus

Based on these thoughts, dStorage projects are usually a **standalone** **blockchain** with consensus supporting data retention ability, incentive mechanism, and data persistence. The chart below shows an analysis of several mainstream Storage projects and their strategies for data retention and data persistence.

[ ](https://www.notion.so/68b99ae146214e73b3ef3a8cfcb6727a)

As the fundamental of Web3 ecosystem, dStorage is designed to serve the entire web3 ecosystem, including DApp hosting, NFT metadata storage, GameFi and social media data storage, even hosting the Metaverse. So we want to use **a single web3 identity for** DApps and personal data storage rather than multiple accounts. ***It's very similar to SSO(Single Sign-On) in Web2 world.***

There are many smart contract platforms such as Ethereum, Polkadot, Near, Polygon, Solana... Every platform has its own DApp ecosystem. Web3 users use different identities to call smart contracts on each blockchain. And providing dStorage to users on different blockchains becomes a basic requirement for dStorage projects.

## Solution
As a dStorage project in the Polkadot ecosystem, Crust builds on top of [Substrate](https://github.com/paritytech/substrate) and provides a native cross-chain communication pallet based on [XCMP](https://wiki.polkadot.network/docs/learn-crosschain)(Cross-Chain Message Passing) called [***xStorage***](https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage). The basic idea of xStorage shows below:

![xcmp](assets/build/build-cross-chain-xcmp.png)

***Parachain-side***

This pallet allows all substrate-based parachains to:

- Send storage request messages(Extrinsics) to Crust
- Pay storage fees on Crust with native tokens by using the [xToken](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens) module

*The XCM Transact of xStorage pallet*

```rust
let place_storage_order = (storage_pallet_id, method_id, cid, size).encode();

let transact = Xcm::Transact {
	origin_type: OriginKind::Superuser,
	require_weight_at_most: 1_000,
	call: place_storage_order.into()
};

T::XcmpMessageSender::send_xcm(MultiLocation::X2(Junction::Parent, Junction::Parachain(CrustChainId)), transact).map_err(|_| Error::<T>::FailedToSend)?;
```

***Crust-side***

After Crust's collator received the XCMs, Crust's DSM(Decentralized Storage Market) protocol will respond with storage requests and charge the cross-chain storage fees. Then, all the IPFS nodes in Crust will start pulling the data and do the consensus.

## Cases now

XCMP-based pallet integrations are already been used by several platforms including:

- [XCMP] [Moonbeam Network](https://moonbeam.network/)
- [XCMP] [Acala Network](https://acala.network/)
- [XCMP] [Bifrost Network](https://bifrost.finance/)
- [XCMP] [Robonomics Network](https://robonomics.network/)
- [XCMP] [Phala Network](https://www.phala.network/)
- [XCMP] [OAK Network](https://oak.tech/turing/home/)
- [XCMP] [Darwinia Network](https://darwinia.network/)

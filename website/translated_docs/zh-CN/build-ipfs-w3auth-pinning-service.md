---
id: buildIPFSW3AuthPin
title: IPFS W3Auth Pinning Service
sidebar_label: IPFS W3Auth Pinning Service
---

[IPFS remote pinning services](https://docs.ipfs.io/how-to/work-with-pinning-services/#use-an-existing-pinning-service) allow users pin their IPFS files to remote stable IPFS nodes to ensure file's reliability and accesibility.

Furthermore, remote pinning service might be useful if:

- Your local node isn't always online, but you need items to be consistently available
- You'd like to keep a persistent backup of your local node's files somewhere else
- You don't have all the disk space you need on your local node
- You run more than one IPFS node, and would like to use one of them as a "personal pinning service" as your preferred location for permanent storage

## Background

Once these remote pinning services adapt to [pinning serice API](https://ipfs.github.io/pinning-services-api-spec/#section/Schemas/Objects), they can be used by users with **standard IPFS pinning APIs**.

![pin-lifecycle](assets/build/build-pin-lc.png)

Currently, remote pinning service mostly storing user's IPFS file in the **centralized IPFS nodes**(called centralized IPFS pinning service), like [Pinata](https://pinata.cloud/documentation#PinningServicesAPI), [Infura](https://infura.io/docs/ipfs) and [Cloudflare](https://developers.cloudflare.com/distributed-web/ipfs-gateway/browsing-ipfs).

Generally, the centralized remote pinning service's lifecycle are designed as below:

![pin-1](assets/build/build-pin-1.png)

This centralized pinning service divided into 3 parts:

- Pinner logic: handling the centralized authentication(**with email/phone**), upserting database, **handling some commercial logic(payment/billing)** and communicating with centralized IPFS nodes
- State database: handling IPFS pulling/pinning status and managing user's information
- IPFS node: managing IPFS nodes, maybe IPFS clusters

However, for the Web3 users, they are more innclined to use web3 identity and pay with blockchain tokens/smart contracts. In this article, we'll introduce a lightweight Web3-Auth pinning service based on [Crust Network](https://crust.network)

## Solution

The whole design shows below:

![pin-2](assets/build/build-pin-2.png)

The main differences between centralized and decentralized pinning are:

- Pinner logic: W3Auth pinner authenticating with **Web3 identities(Ethereum/Substrate-based chains/solana/polygon/near/...)**, and only **recording on-chain status**(CID's replica info)
- State databse: W3Auth pinner only recording and managing **on-chain** status
- IPFS nodes: W3Auth pinner **DO NOT needs local IPFS, it is based on Crust Network**, which is a totally decentralized IPFS Network guaranteed your file by blockchain protocol, you can check [here](https://crust.subscan.io/storage) to learn more detail storage information about Crust Network.

## Deploy

> Comming soon

## Usage

> Comming soon

## Resources

- [IPFS W3Auth Pinning Service](https://github.com/crustio/ipfs-w3auth-pinning-service)
- [IPFS Pinning Service](https://docs.ipfs.io/how-to/work-with-pinning-services/#use-an-existing-pinning-service)
- [IPFS Pinnning Service API](https://ipfs.github.io/pinning-services-api-spec/#section/Schemas/Objects)
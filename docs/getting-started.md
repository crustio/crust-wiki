---
id: gettingStarted
title: Getting Started
sidebar_label: Getting Started
---
## What is Crust

Crust provides a decentralized storage network of Web3 ecosystem. It supports multiple storage layer protocols such as IPFS, and exposes storag
interfaces to application layer. Crust's technical stack is also capable of supporting a decentralized computing layer. It is designed to build a
decentralized cloud ecosystem that values data privacy and ownership.

## Why Crust
Crust network incentivizes nodes to provide storage services and builds a decentralized storage market on it. Any application scenarios involving data storage, such as cloud services, edge computing and decentralized applications are all suitable for Crust. Especially in the edge computing scenario, compared to centralized cloud storage, Crust's decentralized storage is closer to the edge, which can achieve relatively low cost and high performance.

## How Crust is implemented

Crust mainly solves three main problems: proof problem solved by MPoW layer, incentive problem solved by GPoS layer, service problem solved by DSM layer.


![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/arch.png)


* Crust uses MPoW mechanism to achieve efficient storage of nodes.

* Crust has achieved incentives for storage nodes through GPoS.

* Crust uses the decentralized storage market DSM to schedule the storage resources to meet users' storage application requirements.

### MPoW

Based on the Trusted Execution Environment(TEE) technology, nodes in Crust network can perform non-interactive storage proof. As shown in the figure below, TEE will periodically check the storage status of nodes and generate a workload report that can be verified by all nodes.

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/what_is_crust/mpow.png)

### GPoS


The blockchain consensus in the Crust network is GPoS consensus, which is called
Guaranteed Proof of Stake. GPoS is a kind of PoS consensus mixed with PoW. The
mechanism combines PoW resource fairness and the high performance of the PoS chain.
Similar to the existing PoS project, the node needs to use the CRU token for staking to
compete for the right to generate blocks. The difference is that the node also needs to have storage resources or workload as a guarantee. Only with the guarantee amount can the
corresponding number of CRUs be effectively staked. Under this mechanism, two types of
assets, storage resources, and CRU tokens are required to become a node, combining the
advantages of a resource-based (such as Bitcoin) and a token-based (such as Cosmos)
consensus mechanism can more effectively ensure the security of the network. 

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/gpos.png)


### DSM
Crust's DSM (Decentralized Storage Market) aims to provide high-quality storage services for applications and platforms based on Crust network. Among them, Crust's storage services mainly include the storage service and retrieval service based on IPFS network.

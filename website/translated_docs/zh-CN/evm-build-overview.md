---
id: evmBuildOverview
title: Overview
sidebar_label: Overview
---

## I. Crust Network EVM Storage

Crust Network is one of the important decentralized storage solutions in the Web3 ecosystem. As an efficient and reliable storage protocol, Crust has gained widespread recognition and adoption. We are pleased to see that 65 Web3 projects, including Uniswap and AAVE, have started using Crust for storage, and have recently launched on the mainnet. Crust will also utilize the XCMP protocol as a parachain in the Polkadot ecosystem, serving 40 Web3 projects such as Moonbeam.

Over the past two years, we have also expanded the storage functionality of Crust through centralized bridging services to public chain ecosystems such as Ethereum, Arbitrum, and Aptos, accumulating 45 corresponding Web3 projects. During this process, we deeply realized the importance of EVM usability, interoperability with the mainnet, and scalability. It is out of support for the Web3 ecosystem that we have decided to extend the Crust storage protocol to the entire EVM ecosystem in a better form. By combining the Crust mainnet, Polkadot parallel chains, and EVM contracts, we will create a brand new Crust EVM Storage protocol that provides more powerful decentralized storage services for the entire Web3 ecosystem.

This article will introduce the design and architecture of the Crust EVM Storage Protocol, as well as its compatibility with the existing Crust network. We will delve into the key features of the protocol, including EVM usability, interoperability with the mainnet, and scalability, and provide detailed technical details and examples to help developers and community members better understand and apply the Crust EVM Storage Protocol.

## II. Crust Network EVM Storage Protocol Architecture

Crust EVM Storage protocol EVM Storage is divided into three parts: The Contract, Orderer, and Connector. They are responsible for EVM compatible interaction, decentralized storage bridge, and docking with the mainnet resources, respectively.

![Pic](https://lunar-caribou-493.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9281a150-9056-4f5f-941e-e0cf99847302%2FUntitled.png?id=be5706c5-e313-46a7-9772-485290695bee&table=block&spaceId=d247ac88-c15a-4aee-af14-934ddf95278f&width=2000&userId=&cache=v2)

1. The Contract
    
    "The Contract" is a storage smart contract implemented by Crust Network in the Solidity programming language in the EVM-based ecosystem. It provides developers with a storage interface that is natively compatible with the InterPlanetary File System (IPFS), as well as the guaranteed immutable permanent storage provided by the Crust protocol. Additionally, it features a payment settlement mechanism based on on-chain oracles, and an upgradable Proxy delegation mechanism, which seamlessly integrates Crust Network's decentralized storage resources into the entire EVM ecosystem.
    
2. Orderer
    
    As a storage resolution service of the Crust EVM Storage protocol, "Orderer" builds a critical bridge between the EVM storage contract and the Crust mainnet. It monitors storage events from various EVM chains' "The Contract," interprets the recorded order information and bridges it to the Crust mainnet. It is worth mentioning that the Orderer in the Crust EVM Storage protocol adopts a semi-authorized approach, which means that third-party Orderer services can also freely join and leave with the permission of Crust Tech Commit, providing unified cross-chain storage resolution services for EVM contracts.
    
3. Connector
    
    "Connector" is an important extension in the Crust EVM Storage protocol DSM (Decentralized Storage Marketplace). It adopts a design similar to the RGB protocol to record EVM cross-chain storage information on the Crust mainnet. The Connector is also closely integrated with the Crust Developer Toolkit, which makes it easier for developers to parse contract interaction fields from the EVM chain when building Crust layer 2 applications.
    

### III. How it works(Tech Implementation)

1.The Contract
![Pic](https://lunar-caribou-493.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7cdd0805-5ec4-4622-912a-10a89ef7ffbb%2FUntitled.png?id=3acc0387-1126-4ebd-8096-00efdf980aac&table=block&spaceId=d247ac88-c15a-4aee-af14-934ddf95278f&width=2000&userId=&cache=v2)
    

Overall, the Contract provides 3 major functions, which are:

1. [Permanent] Storage Interface: A storage interface for EVM ecosystem users, which is 100% compatible with the IPFS storage protocol and provides permanent storage capability;
2. Orderer Registration: Open to EVM storage providers, who can register their ETH addresses through the contract and provide the ability to connect to the Crust mainnet and EVM storage contract interface. It is mainly responsible for listening to the order information of the Storage Interface and persisting the information of the Storage Interface to the Crust mainnet;
3. Oracle-based Payment: A contract with adjustable prices and exchange rates that feeds the storage prices of Crust DSM into the EVM Storage Contract through off-chain oracles, ensuring the binding of storage contract and Crust on-chain storage prices;

2.Orderers
![Pic](https://lunar-caribou-493.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7cdd0805-5ec4-4622-912a-10a89ef7ffbb%2FUntitled.png?id=3acc0387-1126-4ebd-8096-00efdf980aac&table=block&spaceId=d247ac88-c15a-4aee-af14-934ddf95278f&width=2000&userId=&cache=v2)
    

Orderer is responsible for listening to storage contract events on different EVM chains and forwarding storage information from different chains to the Crust Network, bridging the information from EVM chains to the Crust main chain in an intermediary form. Orderer is an open off-chain protocol, and any third party that meets the following interface definition can freely access Crust EVM Storage:

1. Events Listener: To become an Orderer, one needs to adapt to the Storage Event format issued by The Contract on different chains and parse it;
2. Parser: Orderer needs to be responsible for parsing the listened Events and extracting basic information, including: `chain, cid, size, duration, tx_hash`, etc.;
3. Extrinsic Broker: After parsing all the information from EVM chains, it needs to place a storage order on the Crust mainnet with the Crust address registered in the storage contract, including all the parsed information;
4. Price Oracle: Orderer also needs to provide real-time Crust storage market prices (feed prices) to EVM storage contracts and obtain profits during this process.

3.Mainnet Protocol Adaptation

In order to persist all storage contract information on EVM chains on the Crust mainnet, we have extended the DSM (Decentralized Storage Marketplace) order interface and built an on-chain state with the `_memo` field as an anchor, which is presented in JSON format for future field expansion and upgrades:

```json
{
	“Chain”: “string”,
	“TxHash”: “string”,
	// more data phases
}
```

## III. Economics

In the Crust EVM Storage protocol, the role of the Orderer can earn profits by providing services to connect various EVM Chains and the Crust main network. Anyone can become an Orderer on the Crust EVM storage protocol. Orderers need to monitor the contract to receive orders, and then they have the opportunity to complete orders on the Crust network. They also need to provide real-time prices to the EVM smart contract (acting as an Oracle machine). The person who provides the best price to the EVM storage contract has the greatest chance of being selected, and then they can settle the order and receive settlement fees.

## IV. Tech Evolution

The Crust EVM Storage protocol will go through the following three stages of evolution:

1. Alpha Phase:
    1. Fixed price EVM storage contract: The contract's storage price will be charged in fixed ETH, and Sudo will feed the price artificially;
    2. Delegated Orderer: The Orderer runs under Sudo authorization and is mainly controlled by Crust Tech Commit;
2. Beta Phase:
    1. Real-time changing EVM storage contract: The contract will be upgraded through the Proxy Contract and will dock with the Orderer's price feeding contract to read real-time storage contract information from the Crust mainnet DSM module;
3. Stable Phase:
    1. Open Orderer network: Open the operation and registration of Orderer in the form of democratic voting on the Crust mainnet;

### V. References

1. https://medium.com/crustnetwork/crust-network-one-year-of-growth-and-partnerships-ddc720efb281
2. https://github.com/crustio/eth-storage-contract

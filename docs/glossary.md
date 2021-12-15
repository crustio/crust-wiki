---
id: glossary
title: Glossary
sidebar_label: Glossary
---

## Network and Token related

**Crust Mainnet** - With Crust Mainnet, nodes can execute and obtain corresponding token rewards by following the mechanism and parameters described in the Technical White Paper and Economic White Paper. Users can utilize all the storage features of Crust on the mainnet. [Reference reading](crust-overview.md)

**Crust Maxwell** - As a Crust preview network, Crust Maxwell is responsible for the full functional test and simulation before the main network launch. It is equipped with the same features as the main network, only with some parameters being slightly different. [Reference reading](https://wiki-maxwell.crust.network/docs/en/previewNetworkMaxwell).

**Crust Shadow** - Crust Shadow is a "Kusama version" for Crust Network, an early unaudited release of the code that is available first and holds real economic value.

**Crust Rocky** - A developer-oriented testnet for Crust internal testing.

**CRU** - Network tokens for Crust Mainnet and Crust Maxwell. [Reference reading](crust-account.md).

**CSM** - Network tokens for Crust Shadow.

## Blockchain protocol related

**GPoS** - The blockchain consensus protocol of Crust network (The full name is Guaranteed Proof of Stake). [Reference reading](GPoS.md).

**Validator** - The validators are nodes that generate blocks and includes blocks in a package in the Crust network to maintain the entire blockchain network.[Reference reading](validator.md).

**Candidate** - The candidates are nodes that compete in the Crust network to become a validator but does not qualify for verification.  [Reference reading](validator.md).

**Node/Chain Node** - When the term "node" is used in relation to Crust chain or GPoS, it broadly refers to all the nodes that make up the blockchain. As such, the Crust chain is composed of many Validator and Candidate nodes.

**Staking** - In the Crust network, nodes compete to become validators by staking, and Validators compete to generate blocks by staking. Nodes can increase their total staking amount by self-staking or obtaining guarantees from guarantors.

**Guarantor** - The guarantor is an account provided by any one or more nodes in the Crust network. Accounts with CRU tokens can become guarantors, and their CRUs can be used as guaranty assets. The guarantor can obtain guarantee income from the node, and shall also bearer the penalty risk of its guaranteed nodes in proportion. [Reference reading](guarantor.md).

**Era** - A unit of time. In Crust network, an Era is a 6-hour interval. Validators will be re-elected and the rewards of the previous Era will be settled in each new Era.

**Session**- A unit of time. In Crust network, a session is a 1-hour process. In each session, the validator online verification will be conducted and the kick-out check mechanism will be triggered.

**Slot** - A 6-second block generation cycle.

**Stake limit** - The effective stake limit that a Validator or Candidate node can obtain, which is associated with the capacity and the effective storage of this node. [Reference reading](GPoS.md).

## Off-chain mechanism related

**MPoW** - Meaningful Proof of Work is a mechanism used by nodes in Crust Network to perform storage proof. MPoW is implemented based on TEE technology.

**TEE** - Trusted Execution Environment is a sandbox environment running on a node. When an executable code is put into the TEE to run, no one can modify the execution of the code or snoop on the data protected by the TEE. [Reference reading](https://www.trustonic.com/technical-articles/what-is-a-trusted-execution-environment-tee/).

**sWorker** - sWorker is a module that runs the MPoW protocol and related features on a Crust node. It can be considered as an honest storage monitor running on the node. Once running, sWorker will periodically report the storage status of the node to the chain.

**SRD** - Sealed Ramdon Data. sWorker uses SRD to fill the available space of nodes, so that the capacity of each node is verifiable.

**Seal** - All the data on the node will be sealed by the TEE, which can only be decrypted by the TEE. This allows for the resistance against witch attacks and spawn attacks.

**Work Report** - The report that contains storage proof of the node. Verifiable Work Reports will be periodically generated in the sWorker of the node and sent to the chain.

**Node/ Storage Node** - When the term "node" is used in relation to MPoW or storage network, it refers to the basic units that make up the Crust storage network.

**Group** - Group consists of a Group Owner and multiple Group Member nodes. The storage capacity of Members in the same Group will be summarized as the total storage capacity of the Group Owner. The Group Owner corresponds to a Validator or a Candidate on the Crust chain.

**Group Owner** - An Owner node as the initiator of a Group is in charge of the Group and is responsible for generating blocks on the Crust chain. The storage of the Group Members will be aggregated to the Owner to increase the overall effective stake limit of this Group Owner.

**Group Member** - The Member node is a storage node, which is a storage provider in a Group. There can be multiple Member nodes in a Group, and their storage will be aggregated to the Owner, which will increase the effective stake limit of the Owner.

**Work Report Benefits** - Crust nodes can stake CRUs through the Work Report Benefits module to free them from the fee of sending Work Report.

## Decentralized storage market related

Coming soon

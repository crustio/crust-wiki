---
id: nodeOverview
title: Node Overview
sidebar_label: Node Overview
---

Comming soon

<!--
This tutorial introduces how to build and organize nodes so that you can successfully join Crust preview network - Maxwell and get corresponding rewards from the network. This tutorial requires a certain Linux foundation, please follow the tutorial steps and do not skip any steps. If you have any questions, please contact the [Crust official telegram](https://t.me/CrustNetwork). If you have multiple devices, it is recommended to refer to section 2, If you only have one device, it is recommended to refer to section 3.

## 1 Multiple Nodes (Recommended)

### 1.1 Group

A group is an on-chain logical organization composed of an owner and at least one member. By joining a group, a member will superimpose effective storage on the owner, increasing the owner’s stake limit and block generation power. 

If you have multiple devices, it is a reasonable choice to group these devices into a group. This not only increases the stake limit, but also helps to develop an optimized  storage strategy to manage all the group members, effectively balancing resources and efficiency.

### 1.2 Group Advantage

* Strong competitiveness: group can bring a huge stake limit for the group owner.

* Easy to manage: By centralizing the stake limit to the owner's account, it helps to recommend the unified account to the guarantors.

* Storage optimization: By default, the Crust program will have a set of default file strategies for group members to decide which user files to store. In addition, Crust has opened the source code of the file strategy, and capable owners can develop their own file strategies.

* Guide external nodes to join: Since group is an open organization, owner can guide more external discrete nodes to join the group and become member nodes.


### 1.3 Topology Inside Group

In the group conception, your devices will be divided into two types, namely owner node and member node, using 1:N topology, that mean: There is only one owner and multiple members in a group:

* Owner Node: Responsible for running the chain module and participating in block generation, we strongly recommend that the block generation node use a fixed public IP, otherwise it may cause losses due to unstable network. If necessary, this type of node can also be deployed in a cloud service.

* Member Node: Responsible for running chain modules (not involved in block generation) and storage modules. Such nodes need to have an SGX environment. At the same time, this type of node is responsible for storing user files, which will cause a large amount of network transmission, so sufficient network bandwidth is required.

For detailed configuration requirements and recommendations, please refer to [hardware spec]

### 1.4 Setup Owner Node

Refer to [owner node setup](ownerNode.md)

### 1.5 Setup Member Node

Refer to [member node setup](memberNode.md)

## 2 Setup Isolation Node

The Isolation node uses only one device to run functions of block generation, storage and file transfer. It can be simply understood as the combination of a owner and a member. From a technical perspective, a isolation node is easier to setup,  but because a single device has a storage limit (500TB) in Crust Network, there is no advantage in the competition of block generation. 

Refer to [isolation node setup](isolationNode.md) to build an Isolation node.
-->

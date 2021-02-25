---
id: sPlorerGuide
title: sPlorer Guide
sidebar_label: sPlorer Guide
---

Named after Crust Storage Explorer, sPlorer is home to the storage information. Click to enter [sPlorer](https://splorer.crust.network/).

sPlorer has two pages: General Information page and Miner Information page.

# General Information page
The General Information page displays general statistics and the node information.

## General statistics
![general_info1](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/general_info1.png)

The general statistics are reflected in the above figure, including

* Total number of nodes (in the entire network);
* Total number of user files (currently stored in Crust Network);
* Average copies of each file (in Crust Network);
* Real-time storage price (calculated from the supply-demand relation of the entire network, representing the price for each MB stored for 15 days);
* You can click on "Blockchain Information" on the right of the page to check the blockchain information in the blockchain browser;
* Storage (with the gram showing the spare and used storage capacity of the current network);
* Statistics for the latest 7 days (where you can switch between "Number of nodes", "Total storage", and "Total stored files");

## Node information

The primary information of the nodes in the entire network is displayed in tables as shown below.
![general_info2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/general_info2.png)

Each row in the table contains the information of a Group Owner. The "Stake Limit" is the total staking amount of the Group Owner. The Node ID includes all the Member nodes of the Group Owner, and you can click on the "..." button to unfold them.
![general_info2](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/nodes.png)

Each node ID (also MemberID) can be clicked and linked to the Miner Information page.

# Miner Information Page
The Miner Information page also consists of two parts: miner statistics and the file list.

## Miner Statistics
![miner_info](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/miner_info.png)

The miner statistics show the miner's balance, spare and used storage capacity and [Storage Collateral](merchantGuidance.md).

## File list

The file list displays the user files stored by the miner node.
* File CID: the unique ID of the file in IPFS Network;
* File Size: the size of the file; 
* Expired on: the date when the file order expires;
* Expected Earning: the storage rewards the file is expected to bring to the node. Refer to [Storage Merchant](merchantGuidance.md) for the reward mechanism.

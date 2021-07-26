---
id: appsStorageIssue
title: Apps Strorage Issue
sidebar_label: Apps Strorage Issue
---

Here are a few possible reasons for the long "pending" of a storage order:
1. The file is too large;
2. The local IPFS is not working;
3. The firewall is not turned off;
4. Poor network conditions;

To address this, you may need to:

## 1. Recommending file size is smaller than 64G

## 2. Make sure IPFS is enabled

## 3. Turn off your computer's firewall
For example, if you use the macOS, please go to "System Preferences" and click on "Security & Privacy".
![firewall](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/firewall_en.png)


Turn off the computer firewell.
![closed_firewall](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/firewall_closed_en.png)


Then with IPFS working properly, enter the [Storage Order](https://apps.crust.network/#/storage/market) page and place a new order for the file.


## 4. Report the issue on Crust Github

If the file is still not accepted by any node after the firewall is turned off and the order is placed again, it may be because the 2P2 network detected some problem. Then you may try the following steps.

### 4.1 Get the detail of the issue
Get the PEER ID and the CID of the long-pending file.

Peer ID:
![peer_id](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/peerid.png)


CID:
![cid](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/cid.png)


### 4.2 Report the issue on Github
https://github.com/crustio/crust/issues/new

Set the "Title" as: [DSM Order] + YOUR PEER ID

For example:

![peer_id](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/storage/new_issue.png)


### 4.3 Keep up with the issue 
Crust development team will follow up your reported issue and provide you with timely feedback. You may keep up with the status of the issue to check the progress.

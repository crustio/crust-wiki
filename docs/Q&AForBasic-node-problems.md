---
id: Q&AForBasicnodeproblems
title: Basic Node Problems
sidebar_label: Basic Node Problems
---

## 1 An apt update error occurs when installing Node

This is an error in the ubuntu system update package, and has nothing to do with crust. Generally, it can be solved by optimizing the network and replacing the mirror.

## 2 Owner's hardware requirements

- The network must be stable and have a public IP, otherwise unstable block production may lead to punishment
- Use SSD for hard disk, recommended 500GB ~ ​​1TB
- SGX is not required, cloud service machines are recommended

## 3 SGX settings

The SGX (Software Guard Extensions) module of the machine is turned off by default and needs to be set in the machine's BIOS. First set the SGX switch to enable, and at the same time turn off Secure Boot (some motherboards do not). If SGX only supports software enabled, please refer to this link [https://github.com/intel/sgx-software-enable](https://github.com/intel/sgx-software-enable), or use the following command :

```plain
wget https://github.com/crustio/crust-node/releases/download/sgxenable-1.0.0/sgx_enable && sudo chmod +x sgx_enable && sudo ./sgx_enable
```

## 4 Reasons and solutions for peers of the chain not going up

Peers can't go up mainly because of network problems, such as no fixed IP, insufficient bandwidth, and network segments are isolated. Generally, the network needs to be upgraded to solve this problem. Of course, it may also be because there is no fixed IP or because a large number of Member nodes are started in the same LAN. Port forwarding can be used to relieve a large number of Member nodes in the same LAN. The specific operations are as follows:

- Execute the command 'sudo crust config chain-port 30889' to change the port of the Member A node to 30889

- Execute the 'sudo crust config generate' command to generate configuration files

- Execute the 'sudo crust reload chain' command to restart the chain service

- Configure the 30889 port forwarding of this Member A node's intranet on the router side

- By analogy, MemberB node does 30887 port forwarding, and MemberC node does 30886 port forwarding

## 5 How to migrate owner

Please follow this guide to migrate your owner. https://wiki.polkadot.network/zh-CN/docs/maintain-guides-how-to-upgrade

## 6 Chain log error

If the following error occurs, it means that the chain data is damaged, execute 'sudo rm -rf /opt/crust/data/chain/chains/crust/db/' command to delete the chain db, and then execute 'sudo crust reload chain' to resynchronize the chain data. If it appears again, indicating that the system disk has bad sectors, please replace the system disk immediately

![Picture](assets/qa/chaindb.png)

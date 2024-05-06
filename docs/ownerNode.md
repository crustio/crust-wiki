---
id: ownerNode
title: Owner Node
sidebar_label: Owner Node
---

## 1. Overview

### 1.1 Node Responsibility

The Owner node is the initiator of and in charge of the Group, participating in block generation. Effective storage of the Member can be clustered on the Owner to participate in the block generation competition. Meantime, the organizers of the Owner node are accountable for the Group's strategy of receiving meaningful files to improve the Group's overall competitiveness. Since the Owner node itself does not store files, support for SGX is not necessary. The Owner node account is connected to block node through the session key. 

### 1.2 Hardware Spec

On Owner nodes run chain modules used for generating blocks, which is  similar to projects in Polkadot ecology, therefore, we strongly recommend that the block generation node use a fixed public network IP, otherwise it will be punished due to unstable block generation. If necessary, such node can also be configured in a cloud computer.  For detailed configuration requirements and recommendations, please refer to [this](node-Hard-wareSpec.md).

## 2. Ready to Deploy

> Note: The account of Crust mainnet starting with the letter 'c'.

### 2.1 Create your Accounts

The Owner node participates in the block generation competition. It needs to create accounts and be bonded to the Controller&Stash account group. For details, please refer to [this page](new-bond.md). 

Notices:

* The account should be unique and cannot be any other account for Owner, Member or Isolation;
* Be sure to reserve a small number of CRUs not locked in the Controller&Stash for sending transactions (about 1 CRU).

### 2.2 Create and manager group

#### 2.2.1 Create group

> The account to create the Group must be a bound Stash account

Enter Crust APPS, select 'Benefit', click on 'Create group',select the Owner **Stash account**, click on 'Create', enter the password of the stash account and click on 'Sign and Submit' to send the transaction and create Group.

![pic](assets/mining/create_group.png)
![pic](assets/mining/create_group1.jpg)

#### 2.2.2 Lockup CRU to reduce the fee of the work report

**The work report in mainnet requires handling fees.** Under normal circumstances, each Member will perform 24 workload reporting transactions per day, which brings a lot of handling fees. For this reason, the Crust network provides a Benefit module that exempts workload reporting fees. Group owners can reduce or waive member handling fees by locking CRUs. **Each Member** needs to lock 18CRU for fee reduction. However, considering the unstable reporting of workload, it is recommended to lock 24CRU~30CRU to ensure that the fee is completely free. For example, suppose your Group is ready to have 6 Members ready to join, then lock 30*6=180CRU

Enter [Crust APPS](https://apps.crust.network), select 'Account', select the 'Benefit' module, find the group created before, and click 'Increase lockup', as follows:

![pic](assets/mining/benefit_lockup1.png)

Enter the number of CRUs that **need to be added**, and sign the transaction, as follows:

![pic](assets/mining/benefit_lockup2.png)

### 2.3 Download Crust Node Package

a. Download

```plain
wget https://github.com/crustio/crust-node/archive/v2.0.0.tar.gz
```
b. Unzip
```plain
tar -xvf v2.0.0.tar.gz
```
c. Go to package directory
```plain
cd crust-node-2.0.0
```
### 2.4 Install Crust Service

Notice:

* The program will be installed under /opt/crust, please make sure this path is mounted with more than 250G of SSD space;

* If you have run a previous Crust testnet program on this device, you need to close the previous Crust Node and clear the data before this installation. For details, please refer to section 6.2;

* The installation process will involve the download of dependencies and docker images, which is time-consuming. Meantime, it may fail due to network problems. If it happens, please repeat the process until the installation is all complete.

Installation:

```plain
sudo ./install.sh
```
## 3. Node Configuration

### 3.1 Edit Config File

Execute the following command to edit the node configuration file:

```plain
sudo crust config set
```
### 3.2 Change Node Name

Follow the prompts to enter the name of your node, and press Enter to end:

![pic](assets/mining/owner_name.png)

### 3.3 Choose Mode

Follow the prompts to enter a node mode 'owner', and press Enter to end:

![pic](assets/mining/owner_mode.png)

### 3.4 Review the Configuration (Optional)

Execute following command to view the configuration file:

```plain
sudo crust config show
```
## 4. Start Node

### 4.1 Preparation

To start with, you need to ensure that the following ports are not occupied: 30888, 19944, and 19933.

Then open the P2P port:

```plain
sudo ufw allow 30888
```
### 4.2 Start

```plain
sudo crust start 
```
### 4.3 Check Running Status

```plain
sudo crust logs chain
```
As detailed below, all is ready for synchronizing blocks. 
![pic](assets/mining/owner_all_run.png)

## 5. Blockchain Validate

### 5.1 Get session key

Please wait for the chain to synchronize to the latest block height, and execute the following command:

```plain
sudo crust tools rotate-keys
```
Copy the session key as shown below:
![pic](assets/mining/gen_sessionkey.png)

### 5.2  Set session key

Enter [CRUST APPs](https://apps.crust.network/), click on "Staking" button under "Network" in the navigation bar, and go to "Account action". Click on "Session Key".

![pic](assets/mining/set_sessionkey1.png)

Fill in the sessionkey you have copied, and click on “Set session key”.

![pic](assets/mining/set_sessionkey2.png)


### 5.3 Be a Validator/Candidate

> Becoming a validator needs to shoulder the responsibility of maintaining the network, a large-scale disconnection will result in a certain degree of punishment (up to 7% of the effective pledge amount)

Please follow the steps below:

![pic](assets/mining/be_validator1.png)

After one era, you can find your account listed in the "Staking" or "Waiting" list, which means you have completed all the steps.

![pic](assets/mining/be_validator2.png)


## 6. Restart and Uninstall

### 6.1 Restart

If the device or Crust node related programs need to be somehow restarted, please refer to the following steps. 

**Please note**: This section only concerns restarting steps of Crust nodes, not including the basic software and hardware environment settings and inspection related information, such as hard disk mounting, IPFS configurations, etc. Please ensure that the hardware and software configuration is correct, and perform the following steps:

```plain
sudo crust reload
```
### 6.2 Uninstall and Data Cleanup

If you have run a previous version of Crust test chain, or if you want to redeploy your current node, you need to clear data from three sources:

* Delete basic Crust files under /opt/crust/data
* Clean node data under /opt/crust/crust-node by executing:

```plain
sudo /opt/crust/crust-node/scripts/uninstall.sh
```

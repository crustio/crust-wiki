---
id: buildNode
title: Crust Node
sidebar_label: Crust Node
---

Crust Node program is a set of integrated scripts to facilitate node operation. Crust Node program is open source on [Github](https://github.com/crustio/crust-node). You can refer to it for more technical details, and customize or create your own node scripts from there, to ease your own node operation.

## 1 System commands

### 1.1 Help

- Command
```shell
sudo crust help
```

- Instance

![start](assets/node/help.png)

### 1.2 Version

Version information includes node network, type and version, sworker details, docker image ID and other information

- Command
```shell
sudo crust version
```

- Instance
![start](assets/node/version.png)

### 1.3 Generate session key

- Command
```shell
sudo crust tools rotate-keys
```

- Instance

![start](assets/node/rotate-keys.png)

## 2 Configuration command

### 2.1 Set up and generate configuration files

Configure node name, node type, account backup file and password

- Command
```shell
sudo crust config set
```
- Instance
![start](assets/node/set.png)

### 2.2 Generate configuration files

- Command
```shell
sudo crust config generate
```

Manually modified the /opt/crust/crust-node/config.yaml configuration file

```shell
sudo vi /opt/crust/crust-node/config.yaml
```

Generate configuration files

![start](assets/node/generate.png)

### 2.3 Set up to connect to other chains

Set up to connect to other chains,default is "ws://127.0.0.1:19944"

- Command
```shell
sudo crust config conn-chain {ws}
```

- Instance
Set up a chain connected to "ws://7.7.7.7:19944"

```shell
sudo crust config conn-chain ws://7.7.7.7:19944
```
![start](assets/node/connchain.png)

### 2.4 Set the P2P port of the chain

- Command
```shell
sudo crust config chain-port {port}
```

- Instance
Change the default port 30888 of the chain to 30889

```shell
sudo crust config chain-port 30889
```
![start](assets/node/chainport.png)

### 2.5 Set the attestation mode of the sworker

- Command
```shell
sudo crust config attestation-mode {epid/ecdsa}
```

- Instance
Change the attestation-mode to ecdsa

```shell
sudo crust config attestation-mode ecdsa
```
![start](assets/node/attestation-mode.png)

### 2.6 Show configuration file

- Command
```shell
sudo crust config show
```

- Instance
![start](assets/node/show.png)

## 3 Control commands

### 3.1 Start Crust service
- Command

```shell
sudo crust start {chain|api|sworker|smanager|ipfs}
```
- Instance

Start all Crust service
 ```shell
sudo crust start
 ```
Start one Crust service
 ```shell
sudo crust start smanager
 ```
![start](assets/node/startsmanager.png)
 ```shell
sudo crust start api
 ```
![start](assets/node/startapi.png)

### 3.2 Stop Crust service

- Command
```shell
sudo crust stop {chain|api|sworker|smanager|ipfs}
```
- Instance

Stop all Crust service
![start](assets/node/stop.png)

Stop one Crust service
```shell
sudo crust stop api
```
![start](assets/node/stopapi.png)
```shell
sudo crust stop smanager
```
![start](assets/node/stopsmanager.png)

### 3.3 Reload Crust service

- Command
```shell
sudo crust reload {chain|api|sworker|smanager|ipfs}
```
- Instance

Reload all Crust service

![start](assets/node/reload.png)

Reload one Crust service

![start](assets/node/reloadapi.png)
![start](assets/node/reloadipfs.png)

## 4 Monitor commands

### 4.1 Query Crust node service status

- Command 
```shell
sudo crust status {chain|api|sworker|smanager|ipfs}
```
Includes three status: running, stop, and exited 
|**Status**|**Description**|
|-----|-----|
|running |Service is running normally|
|stop|Service is stop|
|exited|Service exits abnormally, query log analysis|

- Instance

Query Crust node's all service status
![start](assets/node/version.png)
Query Crust node's one service status
![start](assets/node/version.png)

### 4.2 Query node logs

Track service logs, ctrl-c to exit. use 'crust logs help' for more details

- Command
```shell
sudo crust logs {chain|api|sworker|sworker-a|sworker-b|smanager|ipfs}
```

- Instance

Query the latest 5 log lines of the node sworker service
```shell
sudo crust logs --tail 5 sworker
```
![start](assets/node/logs.png)

### 4.3 Disk details

Note:
1. Base data folder is used to store chain and db, 2TB SSD is recommended, you can mount SSD on /opt/crust/data
2. Please mount the hard disk to storage folders, paths is from: /opt/crust/disks/1 ~ /opt/crust/disks/128
3. SRD will not use all the space, it will reserve 50G of space

- Command
```shell
sudo crust tools space-info
```
- Instance

The disk has been successfully mounted in the three directories /opt/crust/data/disks/2, /opt/crust/data/disks/4, /opt/crust/data/disks/33
![start](assets/node/space-info.png)

## 5 Upgrade commands

### 5.1 Upgrade docker image

- Command
```shell
sudo crust tools upgrade-image {chain|api|smanager|ipfs|c-gen|sworker}
```

- Instance

Upgrade the chain's docker image
```shell
sudo crust tools upgrade-image chain
```

Upgrade the IPFS docker image
```shell
sudo crust tools upgrade-image ipfs
```

### 5.2 SWorker's AB upgrade

- Command
```shell
sudo crust tools sworker-ab-upgrade {code}
```
The parameter code is the only mrenclave code

- Instance
```shell
sudo crust tools sworker-ab-upgrade 032ceedd27918ddb4807c78ec5734a8a49878a2e7a7001381b90eae8d1d1c093
```
![start](assets/node/sworker-ab-upgrade.png)

## 6 SWorker commands

### 6.1 Change sworker's srd capacity
- Command
```shell
sudo crust tools change-srd {number}
```
- Instance

Add 1000Gb srd capacity
![start](assets/node/changeaddsrd.png)

Decrease 500Gb srd capacity
![start](assets/node/changedeletesrd.png)

### 6.2 Query storage status

- Command
```shell
sudo crust tools workload
```
File parameter description
|**Parameter**|**Description**|
|----|----|
|files-lost|Lost files|
|files-pending|Pending files|
|files-vaild|Valid files|

Srd parameter description
|**Parameter**|**Description**|
|----|----|
|srd_complete|Completed srd capacity, unit Gb|
|srd_remaining_task|Remaining srd tasks|
|disk_available_for_srd|Disk capacity of currently available srd|
|disk_available|Disk capacity currently available|
|disk_volume|Total disk capacity|
|sys_disk_available|Available capacity of system disk|
|srd_detail|Usage details of each storage filder|

- Instance
![start](assets/node/workload.png)

### 6.3 Query file information

- Command
```shell
sudo crust tools file-info {all/valid/lost/pending/{cid}} {output-file}
```

- Instance

Query all order information
![start](assets/node/fileall.png)
Query the order information in pending
![start](assets/node/filepending.png)

### 6.4 Delete file

- Command
```shell
sudo crust tools delete-file {cid}
```
- Instance

Delete the file whose cid is QmaK1Rbc4AYtDJoTLgZQNZx4JpDPYrN2DW269i54eA5Phk
```shell
sudo crust tools delete-file QmaK1Rbc4AYtDJoTLgZQNZx4JpDPYrN2DW269i54eA5Phk
```
![start](assets/node/delete.png)


### 6.5 Set sworker log level

- Command
```shell
sudo crust tools set-sworker-debug {true|false}
```
- Instance

Enable DEBUG log
![start](assets/node/debugtrue.png)
Disable DEBUG log
![start](assets/node/debugfalse.png)


## 7 Other commands

### 7.1 IPFS command

- Command
```shell
sudo crust tools ipfs {…}
```

- Instance

View the contents of a file
```shell
sudo crust tools ipfs cat QmddN7QgY7RHtsGN8bnUqWJq4VpMam2HXrRDafe5pBt3eq
```
![start](assets/node/ipfs.png)

### 7.2 Watch compose

- Command
```shell
sudo crust tools watch-chain
```
Generate a "watch-chain.yaml" configuration file in the current directory, and use docker-compose to start the watcher node

- Instance
Start:
```shell
sudo docker-compose -f watch-chain.yaml up -d
```

Monitor:
```shell
sudo docker logs crust-watch
```

## 8 Configure external source chain
The use of an external chain can make the member node more lightweight, and it can also make multiple members connect to the same watch chain node, thereby avoiding repeated chain synchronization to a certain extent. However, due to the single point of failure in this method, that is to say, the failure of the external source chain node will cause multiple members to fail to report the workload, so please try to use a better network device or cloud server to start the external source chain. At the same time, do not connect too many members to the same chain. It is recommended to have less than 10 members, otherwise the workload may not be reported due to congested transactions.

### 8.1 Configure watch chain service

a Machine selection

The requirements of the Watch machine are as follows:
- The machine running the watch does not require SGX
- 500GB solid state drive
- It is recommended to use a stable network with public IP and fixed ports, which will directly affect the workload report of member nodes
- Install Crust node
- Recommend cloud server

b Generate docker compose file

```shell
sudo crust tools watch-chain
```

Generate a "watch-chain.yaml" configuration file in the current directory

c Start watch chain

Start:
```shell
sudo docker-compose -f watch-chain.yaml up -d
```

Monitor:
```shell
sudo docker logs crust-watch
```

d Matters needing attention

- You can edit the "watch-chain.yaml" file to customize the watcher node
- The watcher node can provide ws and rpc services, the default port is 30888, 19933, 19944, pay attention to open ports

### 8.2 Member node use external source chain

Set up to connect to other chains,default is "ws://127.0.0.1:19944"

- Command
```shell
sudo crust config conn-chain {ws}
```
- Instance

Set up a chain connected to "ws://7.7.7.7:19944"

```shell
sudo crust config conn-chain ws://7.7.7.7:19944
```
![start](assets/node/connchain.png)

**If it is a node that is already running, the node needs to be restarted for the configuration of the external source chain to take effect**

## 9 Control SGX driver automatic installation

- Disable automatic installation of SGX driver

Execute the following commands before starting the node:
```shell
sudo mv /opt/crust/crust-node/scripts/install_sgx_driver.sh /opt/crust/crust-node/scripts/install_sgx_driveroff.sh
```
- Enable automatic installation of SGX driver

Execute the following commands before starting the node:

```shell
sudo mv /opt/crust/crust-node/scripts/install_sgx_driveroff.sh /opt/crust/crust-node/scripts/install_sgx_driver.sh
```
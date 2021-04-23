---
id: buildRockyGuidance
title: Crust Rocky Network
sidebar_label: Crust Rocky Network
---

Welcome to Crust Rocky Network. Crust Rocky Network is a test network for developers to test their application easily and quickly.

Here you will learn how to join the Crust Rocky Network, get the Rocky CRU from the faucet and important parameters of Crust Rocky Network.

## How to join the Crust Rocky Network.
You can join and check the Crust Rocky Network from our [apps](https://apps.crust.network/?rpc=wss%3A%2F%2Frocky-api.crust.network#/accounts). It's exact same with our Crust Maxwell Preview Network. You can create your account first and copy the account address.

## Get the Rocky CRU from the faucet.
Go to our faucet repo and [open an issue](https://github.com/decloudf/faucet-bot/issues/new?assignees=&labels=en%2C+token-wanted%F0%9F%99%8B&template=crust-profit-ark-test-token-application---.md&title=5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY) to get Rocky CRU. You just need to put your account address into the title and click the "Submit new issue" button.
![faucet_page](assets/build/rocky-faucet.jpg)

Wait for a second and you will get response from the bot. Rocky CRU would be sent to your account already.

## Parameters of Crust Rocky Network
To make sure your applications can be easily embedded into our Crust Maxwell Preview Network or the incoming Mainnet, most of the parameters are exact same with the Crust Maxwell Preview Network, except for the following parameters.

### GPoS
| **Parameters**                   | **Details**                                                  | **Rocky Network**   |
| :----------------------------------- | :----------------------------------------------------------- | :------------------ |
| **SessionDuration**                  | Duration of one session (min)                                | 5                  |
| **SessionsPerEra**                   | Sessions in one era                                          | 3                  |

### MPoW
| **Parameters**      | **Details**                                                  | **Rocky Network** |
| :------------------ | :----------------------------------------------------------- | :------------------ |
| **REPORT_SLOT**     | Work report cycle（block）                                   | 150                 |


You can check the [parameters page](parameters.md) if you want to know other parameters of Crust Rocky Network.

## Run a Crust Rocky chain locally.
If you want to connect to the Crust Rocky Network from a local chain. You can follow the below guidance. Make sure you have docker on the machine already.
1. Pull the docker image
```bash
sudo docker pull crustio/crust:rocky
```

2. Run the docker image, you can use any way to run it. Here we provide the docker-compose.yml as the example.
```yaml
version: '3'
services:
  crust-rocky:
    image: crustio/crust:rocky
    network_mode: host
    restart: always
    command:
      - "./crust"
      - --base-path
      - /tmp/rocky-watcher
      - --chain
      - rocky
      - --name
      - rocky-watcher
      - --pruning
      - archive
      - --port
      - "30333"
      - --ws-port
      - "9944"
      - --rpc-port
      - "9933"
      - --rpc-external
      - --ws-external
      - --rpc-cors
      - all
      - --ws-max-connections
      - "1000"
      - --in-peers
      - "100"
      - --no-telemetry
    volumes:
      - /tmp/rocky-watcher:/tmp/rocky-watcher
    ports:
      - "30333:30333"
      - "9933:9933"
      - "9944:9944"
```

If you want to build and run a chain from source code, please check the [readme](https://github.com/crustio/crust/blob/master/README.md) in the [crust repo](https://github.com/crustio/crust).

## API Docs
You can check [Crust Docs](http://101.132.117.183:8080/) website to learn supported api for our chain.
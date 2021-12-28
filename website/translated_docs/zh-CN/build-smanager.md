---
id: buildSmanager
title: Crust Storage Manager
sidebar_label: Crust Storage Manager
---

sManager (Storage Manager) is a file picking bot which continuously picking and handling files from Crust Network. Node operators can customize this module to implement their own file handling strategy. 

## Main Flow

sManager consists of a bunch of recurring jobs exchanging data via local database and application context. The main workflow is illustrated as below: 

![smanager-flow](assets/build/smanager-mainnet-flow.png)

- `Chain Event Indexer` subscribes chain event, and indexes latest file records to local database's `File Records Queue`

- `Chain Database Indexer` parses file records from Crust Network on-chain database, and indexes historical file records to local database's `File Records Queue`

- `Pull Scheduler` periodically picks file records from `File Records Queue` based on its picking strategy, pulls the file from IPFS network by *pinning* it to local IPFS node, and then seals the file by calling sWorker's seal API.


## Usage

1. Clone repo

```shell
git clone https://github.com/crustio/crust-smanager.git
```

2. Installing

It's recommended to use `volta` as the node version manager. Please follow the [volta docs](https://docs.volta.sh/guide/getting-started) to install it.

```shell
cd crust-smanager && npm i
```

3. Debug

```shell
npm run dev
```

4. Run in Prod
```shell
npm run build
npm start
```

It's recommended to run sManager using Docker with the `restart=always` restart policy.

A daemon guard should be configured if you want to run sManager natively without docker. Tools like `pm2` and `nodemon` could be used.

## Configuration

sManager could be configured with a json format file, whose name is specified with environment variable `SMANAGER_CONFIG`. If not set, default file name `smanager-config.json` will be used.

You could check [smanager-config.example.json](https://github.com/crustio/crust-smanager/blob/mainnet/data/smanager-config.example.json) as a sample config file:

```json
{
  "chain": {
    "account": "crustaccount",
    "endPoint": "ws://localhost:19944"
  },
  "sworker": {
    "endPoint": "http://localhost:12222"
  },
  "ipfs": {
    "endPoint": "http://localhost:5001"
  },
  "node": {
    "role": "member"
  },
  "telemetry": {
    "endPoint": "https://sm-submit.crust.network"
  },
  "dataDir": "data",
  "scheduler": {
    "minSrdRatio": 30,
    "strategy": {
      "dbFilesWeight": 0,
      "newFilesWeight": 100
    }
  }
}
```

Those config items will be loaded in the sManager configuration setup process. The meaning of each item is as follows:

- `chain.account`: your member account

- `chain.endPoint`: your chain endpoint

- `sworker.endPoint`: your sWorker endpoint

- `ipfs.endPoint`: your IPFS endpoint

- `dataDir`: the directory of the database of sManager

- `scheduler.minSrdRatio`: a minimum ratio of SRD that one node can start to accept storage orders.

    > For example, if the ratio is 30, your node will start to accept storage order once the ratio of SRD capacity is higher than 30%

- `scheduler.strategy.dbFilesWeight`: how much bandwidth of this node will be used to fetch and store the history storage orders (Storage orders in the past four months).

- `scheduler.strategy.newFilesWeight`: how much bandwidth of this node will be used to fetch and store the newest storage orders.


## Components

sManager is designed to have several tasks running independently. Tasks are either scheduled by the block event or by configured intervals. Each task plays as an actor which consumes/produces some information and communicate with other tasks through the local database or application context.

sManager follows the **Fails Early** principle which means it will shutdown on any unexpected error. To support this principle, tasks are designed to be recoverable after application restarts.

### Local Database

The local database stores below information:

1. **File Records**: The files metadata (tips, size, replicas count, expire time, etc) on Crust Network.

2. **File and Owner Relationship**: sManager also maintains the relationship between a file and an on-chain account. This information will help making better pulling decision.

3. **Chain Metadata**: E.g. the block and time on chain.

4. **Pin Records**: The pin history of files.

5. **Cleanup Records**: The files needs to removed from local file system, normally this is triggered when a file expires on Crust Network.

Checkout [Db Schema](https://github.com/crustio/crust-smanager/blob/mainnet/db-schema.md) for the schema details.

### Indexers

Indexers extract information into the local database from various data sources. Currently sManager has implemented below indexers:

1. **Chain Database Indexer**: Index file records from the Crust Network on-chain database.

2. **Chain Event Indexer**: Index file records by listening latest chain event.

3. **Chain Time Indexer**: A simple indexer which pushes the latest block height and it's timestamp to the config table.


### Simple Tasks

Simple tasks are specialized tasks which runs periodically. Currently sManager has implemented below tasks:

1. **Group Info Updater**: Update sworker identity information from sworker api.

2. **Ipfs Gc**: Schedule ipfs gc periodically.

3. **Telemetry Reporting**: Report smanager statistics information to the telemetry server.

4. **Pull Scheduler**: Schedule file pulling based on configured strategy.

5. **Seal Status Updater**: Update sealing status periodically.

6. **File Retry Task**: Retry pulling if possible.

7. **File Cleanup Task**: Cleanup deleted files from local file system.


## Resources

- `crust-smanager`: https://github.com/crustio/crust-smanager
- `crust.js`: https://github.com/crustio/crust.js
- `crust`: https://github.com/crustio/crust
- `crust-sworker`: https://github.com/crustio/crust-sworker
- `js-ipfs`: https://github.com/ipfs/js-ipfs

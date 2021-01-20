---
id: sWorkerGuide
title: Guide for sWorker
sidebar_label: sWorker
---

# Crust sWorker &middot; [![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fcrustio%2Fcrust%2Fbadge&style=flat)](https://github.com/crustio/crust-sworker/actions?query=workflow%3ACI) [![GitHub license](https://img.shields.io/github/license/crustio/crust-sworker)](LICENSE)
sWorker(storage worker) is an offchain storage work inspector of Crust MPoW protocol running inside TEE enclave.

## Prerequisites:
- Hardware requirements: 
  CPU must contain **SGX module**, and make sure the SGX function is turned on in the bios, please click [this page](https://github.com/crustio/crust/wiki/Check-TEE-supportive) to check if your machine supports SGX
  
- Other configurations
  - **Secure Boot** in BIOS needs to be turned off
  - Need use ordinary account, **cannot support root account**

- Ensure that you have one of the following required operating systems:
  * Ubuntu\* 16.04 LTS Desktop 64bits (just for docker mode)
  * Ubuntu\* 16.04 LTS Server 64bits (just for docker mode)
  * Ubuntu\* 18.04 LTS Desktop 64bits 
  * Ubuntu\* 18.04 LTS Server 64bits 

- Install git-lfs:
  ```
  curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
  sudo apt-get install git-lfs
  git lfs install
  ```

- Clone project
  ```
  git clone https://github.com/crustio/crust-sworker.git
  ```

## Build

### Build from docker
Please refer to [Crust sWorker docker mode](docs/Docker.md)

### Build from source code
- Prerequisites:
  ```
  sudo apt-get update
  sudo apt-get install -y wget expect kmod unzip libboost-all-dev libleveldb-dev build-essential linux-headers-`uname -r` libssl-dev curl libprotobuf-dev libcurl4-openssl-dev
  ```
  ***Note: This mode is just for Ubuntu\* 16.04***

- Install crust sworker
  ```
  sudo ./stripts/install.sh
  ```

## How to use

### Configure
In /opt/crust/crust-sworker/etc/Config.json file you can configure your sworker application.
```
{
    "base_path" : "/opt/crust/crust-sworker/0.7.0/sworker_base_path",        # sWorker key information location, must be absolute path
    "base_url": "http://127.0.0.1:12222/api/v0",                         # your sWorker node api address
    "srd_paths" : ["/data1", "/data2"],                                  # If this item is not set, base_path will be used
    "srd_init_capacity" : 4,                                             # srd initial disk storage in Gb
    
    "karst_url": "ws://0.0.0.0:17000/api/v0/node/data",                  # the kasrt node url

    "chain" : {
        "base_url" : "http://127.0.0.1:56666/api/v1",
        "address" : "5FqazaU79hjpEMiWTWZx81VjsYFst15eBuSBKdQLgQibD7CX",  # the address of crust api
        "account_id" : "a6efa374700f8640b777bc92c77d34447c5588d7eb7c4ec984323c7db0983009",
        "password" : "123456",
        "backup" : "{\"address\":\"5FqazaU79hjpEMiWTWZx81VjsYFst15eBuSBKdQLgQibD7CX\",\"encoded\":\"0xc81537c9442bd1d3f4985531293d88f6d2a960969a88b1cf8413e7c9ec1d5f4955adf91d2d687d8493b70ef457532d505b9cee7a3d2b726a554242b75fb9bec7d4beab74da4bf65260e1d6f7a6b44af4505bf35aaae4cf95b1059ba0f03f1d63c5b7c3ccbacd6bd80577de71f35d0c4976b6e43fe0e1583530e773dfab3ab46c92ce3fa2168673ba52678407a3ef619b5e14155706d43bd329a5e72d36\",\"encoding\":{\"content\":[\"pkcs8\",\"sr25519\"],\"type\":\"xsalsa20-poly1305\",\"version\":\"2\"},\"meta\":{\"name\":\"Yang1\",\"tags\":[],\"whenCreated\":1580628430860}}"
    }
}
```

### Run
```
/opt/crust/crust-sworker/0.7.0/bin/crust-sworker -c /opt/crust/crust-sworker/0.7.0/etc/Config.json
```

### Crust sWorker executable file
1. Run '**bin/crust-sworker -h, --help**' to show how to use ***crust-sworker***.
1. Run '**bin/crust-sworker -c, --config \<config_file_path\>**' to use customized configure file, you can get your own configure file by referring ***etc/Config.json***.
1. Run '**bin/crust-sworker -v, --version**', program will output version information. 
1. Run '**bin/crust-sworker --offline**', program will not interact with the chain.
1. Run '**bin/crust-sworker --debug**', program will output debug logs. 

## APIs
Crust sWorker provides plenty of getting and controlling interfaces, please refer to [Crust sWorker APIs](docs/API.md)

## Contribution
Thank you for considering to help out with the source code! We welcome contributions from anyone on the internet, and are grateful for even the smallest of fixes!
If you'd like to contribute to crust, please **fork, fix, commit and send a pull request for the maintainers to review and merge into the main codebase**.

### Rules
Please make sure your contribution adhere to our coding guideliness:
- **No --force pushes** or modifying the master branch history in any way. If you need to rebase, ensure you do it in your own repo.
- Pull requests need to be based on and opened against the `master branch`.
- A pull-request **must not be merged until CI** has finished successfully.
- Make sure your every `commit` is [signed](https://help.github.com/en/github/authenticating-to-github/about-commit-signature-verification)

### Merge process
Merging pull requests once CI is successful:
- A PR needs to be reviewed and approved by project maintainers;
- PRs that break the external API must be tagged with [`breaksapi`](https://github.com/crustio/crust-sworker/labels/breakapi);
- No PR should be merged until **all reviews' comments** are addressed.

## License
[GPL v3](LICENSE)
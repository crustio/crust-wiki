---
id: buildIPFSWeb3AuthGW
title: IPFS Web3 Auth Gateway
sidebar_label: IPFS Web3 Auth Gateway
---

IPFS Public Gateways(aka. IPFS GW) provide an HTTP-based service that allows IPFS-ignorant browsers and tools to access IPFS content, it's like a bridge connecting Web2 and Web3 world.

## Background

IPFS GWs support read-only and writeable API calls. However, the original GW configuration only support **public(open-to-all)** or **private(close-to-all)** way. If the GW providers want to limit access to requests with authentication, they may need to config a reverse proxy, develop a IPFS plugin or set a cache-layer in front of IPFS.

Reverse proxy is the most popular way for providers handling authentication. [This tutorial configuring private gateway](https://docs.ipfs.io/concepts/ipfs-gateway/#private-gateways) includes a description of constraining access with Nginx. Reverse proxy can also keep the original IPFS API calls which can make GW adapt to all IPFS SDK/toolkits.

![GW Web2 Arch](assets/build/build-gw-1.png)

Infura provides a [Web2-authed](https://infura.io/docs/ipfs#section/Authentication/Overview) GW, which allows user use `PROJECT_ID` and `PROJECT_SECRET` after passed a centralized register service(**with email/phone**).

For the Web3 users, they are more familiar with the web3 identities(**with wallet pubkey/privkey**). In this article, we will introduce a lightweight Web3-based authentication service basedon IPFS gateway and reverse proxy.

## Solution

The whole process shows below:

![GW Web3 Arch](assets/build/build-gw-2.png)

### Client-side

Lets say Alice want to upload her file to IPFS, she only needs to do the following steps:

- **Step1.** Sign her Pubkey(`0x123`) with her private key in any of Web3 wallet(Ethereum/Substrate-based chains/Filecoin/Solana ...), then she will get the Sig(`0x456`)
- **Step2.** Call original IPFS API(/api/v0/add) with basic auth header(`Basic 0x123:0x456`)

### Gateway-side

After the Web3 Authenticator received Alice's request:

- **Step1.** Parse the header, extract Pubkey(`0x123`) and Sig(`0x456`)
- **Step2.** Parse Sig with Pubkey, then get the Msg(`0x123`), determine wether the Msg and Pubkey are the same

## Deploy

`// Comming Soon`

## Configurations

### 1. With Caddy

`// Comming Soon`

### 2. With Nginx

`// Comming Soon`

## Resources

`// Comming Soon`

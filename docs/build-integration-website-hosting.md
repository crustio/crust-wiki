---
id: buildIntegrationWebsiteHosting
title: DApp Hosting
sidebar_label: DApp Hosting
---

Currenly, Crust provides 3 ways to host DApps/websites:

1. 💻 [Crust Command Line](https://github.com/crustio/crust-cli): Allows user to publish website to Crust Network through terminal command line.
2. 📦 [Crust Pin Nodejs Package](https://github.com/crustio/crust.js/tree/main/packages/crust-pin): Allows user to write javascript code to publish website to Crust Network through javascript code.
3. 🔗 [Crust IPFS Pin Github Action](https://github.com/crustio/ipfs-crust-action): Allows user to integrate standard [Github Action](https://github.com/features/actions) to publish website to Crust Network.

In this guide, we will **host a simple React website** as an example and show how to deploy and host it on Crust Network use 3 different ways.

## Create a Website

1. Create a React app

```shell
npx create-react-app hello-crust
```

2. Build it

```shell
cd hello-crust/
PUBLIC_URL=./ npm run build
```

## Deploy to Crust IPFS Network

### 1. [Local Mode] Through Crust CLI

> In the local mode, please make sure you have **IPFS** running locally, refer to [this](https://ipfs.io/#install) to install and run.

- Login with seeds

> *SEEDS* are 12 secret words of your Crust Account. You can refer to [this](crust-account.md) to create your Crust Account.

```shell
npx crust-cli login [SEEDS]
```

- Pin `build/`

```shell
npx crust-cli pin build/
```

You'll get an IPFS cid in this step, like `QmYene5icko1cusFCG9D92YUyfonN4hmRPNdPkxvJkNjTb`.

- Publish `build/`

```shell
npx crust-cli publish QmYene5icko1cusFCG9D92YUyfonN4hmRPNdPkxvJkNjTb
```

Now your website is published into Crust Network. Storage nodes in Crust Network will get notified and try to pull your website to store.

- Monitor website status

You can query your website's status by calling the command below, it will show you how many IPFS nodes are hosted your site.

```shell
npx crust-cli status QmYene5icko1cusFCG9D92YUyfonN4hmRPNdPkxvJkNjTb
```

### 2. [Script] Through Crust Pin Nodejs Package

> We take typescript as an example, in the script mode, please make sure you have **IPFS** running in your code environment, refer to [this](https://ipfs.io/#install) to install and run.

- Create an deploy project

```shell
mkdir site-deployer && cd site-deployer
yarn init
```

- Install dependencies

```shell
yarn add ipfs-http-client @crustio/crust-pin
```

- Pin site to IPFS

```typescript
const IpfsHttpClient = require('ipfs-http-client');
const { globSource } = IpfsHttpClient;

/**
 * 
 * @param folderPath Site files path
 * @returns IPFS CID
 */
async function pin(path: string): Promise<string> {
    // 1. Create IPFS client
    const ipfs = IpfsHttpClient();

    // 2. Pin it
    const { cid } = await ipfs.add(globSource(path, '**/*'));
    
    return cid;
}

pin('./build/');
```
  
- Publish site

```typescript
import CrustPinner from '@crustio/crust-pin';

/**
 * 
 * @param cid IPFS cid
 */
async function publish(cid: string) {
    // 1. Create CrustPinner
    const crustPinner = new CrustPinner(process.env.CRUST_SEEDS);
    
    // 2. Publish to Crust
    await crustPinner.pin(cid);
}

publish('QmP71MVoZBWzuh7BLXSPTnGSm7ykhfxYEsD6YNThqQ3go7');
```

This deploy code sample can be found on [Github](https://github.com/crustio/crust-demo/tree/main/website-hosting-demo).

### 3. [Github Action] Crust IPFS Pin

Crust also provides standard Github Action to help host website, you can refer [ipfs-crust-pinner's template workflow](https://github.com/crustio/ipfs-crust-pinner/blob/main/.github/workflows/template.yml) to config your own Github CD.

It uses 2 Github Actions provided by Crust Network:

- [Crust IPFS Upload](https://github.com/marketplace/actions/crust-ipfs-upload): This action helps to upload website onto Public IPFS Gateway - [crustwebsites.net](https://crustwebsites.net/ipfs/bafybeifx7yeb55armcsxwwitkymga5xf53dxiarykms3ygqic223w5sk3m#x-ipfs-companion-no-redirect), this action also can be replaced by some pin services, such as [Pinata Workflow](https://github.com/marketplace/actions/ipfs-pinata-deploy-github-action), [IPFS Cluster Workflow](https://github.com/marketplace/actions/add-to-ipfs), ...
- [Crust IPFS Pin](https://github.com/marketplace/actions/crust-ipfs-pin): This action helps to place a storage order(IPFS CID) on Chain, then the storage nodes will pull the file from local/gateway's IPFS and decentralized stored by the whole network.

## [Optional] Link a domain

Once you deployed your website to Crust Network and since Crust is a standard IPFS Network, you can refer [this doc](https://docs.ipfs.io/how-to/websites-on-ipfs/link-a-domain/#domain-name-service-dns) to link your domain with IPFS CID.

Also, there is a [standard Github Workflow](https://github.com/crustio/ipfs-crust-pinner/blob/main/.github/workflows/DNSLink-template.yml) to help automatically update the DNS Record of Cloudflare.

## Cases

There's already some project used Crust Network to host their website application.

- 🦄 [Uniswap](https://github.com/Uniswap/uniswap-interface/blob/main/.github/workflows/release.yaml#L57): Use Crust IPFS Pin Github Action
- 🟣 [Polkadot Apps](https://github.com/polkadot-js/apps/blob/master/scripts/ipfsUpload.cjs#L64-L65): Uses Crust Pin Nodejs package
- 🟠 [Crust Apps](https://github.com/crustio/crust-apps/actions/workflows/release.yml): Use Crust IPFS Pin Github Action
- *More*

## Resources

- [Uniswap](https://github.com/Uniswap/uniswap-interface)
- [Crust Apps](https://github.com/crustio/crust-apps/)
- [crust-pin](https://github.com/crustio/crust.js/tree/main/packages/crust-pin)
- [ipfs-crust-action](https://github.com/crustio/ipfs-crust-action)
- [ipfs-upload-action](https://github.com/crustio/ipfs-upload-action)
- [ipfs-crust-pinner](https://github.com/crustio/ipfs-crust-pinner)
- [website-hosting-demo](https://github.com/crustio/crust-demo/tree/main/website-hosting-demo)
- [ipfs-http-client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client)

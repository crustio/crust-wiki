---
id: buildFileStoringWithGWDemo
title: Store file with Crust IPFS Pinning Service API
sidebar_label: Store file with Crust IPFS Pinning Service API
---

This doc contains a code sample to demonstrate how to upload a file to [IPFS W3Auth Gateway](build-ipfs-w3auth-gateway.md), and place a storage order to get the file stored in Crust Network through [IPFS W3Auth Pinning Service](build-ipfs-w3auth-pinning-service.md). After that, the file can be retrieved via standard IPFS interface and gateway from anywhere. This scenario is simple but generic. It can be widely applied in DApp  hosting, NFT file storing, content/media delivery, cloud storage, etc.

The code sample is open source on GitHub repo: https://github.com/crustio/crust-demo/tree/main/store-file-with-gateway

## Overview

### 1. Storage process

Using IPFS Gateway and IPFS remote pinning service, developers can follow below process to upload, store and distribute files：

1. Upload the file to IPFS gateway, and get the file `CID` (a unique identifier generated based on the content of each file)
2. Use `CID` to call IPFS standard pinning service.
3. Obtain and monitor pinning status

### 2. Dependencies

The code sample mainly depends on the following libraries:

- [@crustio/type-definitions](https://github.com/crustio/crust.js) Custom data type, used to adapt to Crust network
- [@polkadot/api](https://github.com/polkadot-js/api) The polkadot api library provides a Promise-style interface for performing related operations on the Crust chain
- [ipfs-http-client](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client) ipfs http client library, contains all the ipfs apis

## Let's Rock 🤟🏻

### 0. Build web3 authentication header with Crust

> This demo only takes Crust(substrate-based chains) as an example, more web3 auth ways can be checked [here](https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW#usage).

```javascript
const { Keyring } = require('@polkadot/keyring');

const seeds = process.argv[2];

// 2. Construct auth header
const keyring = new Keyring();
const pair = keyring.addFromUri(seeds);
const sig = pair.sign(pair.address);
const sigHex = '0x' + Buffer.from(sig).toString('hex');

const authHeader = Buffer.from(`sub-${pair.address}:${sigHex}`).toString('base64');
```

### 1. Upload files to IPFS Gateway

```javascript
const { create, globSource } = require('ipfs-http-client');

// IPFS Web3 Authed Gateway address
const ipfsGateway = 'https://crustwebsites.net';

// 3. Create ipfs http client
const ipfs = create({
    url: ipfsGateway + '/api/v0',
    headers: {
        authorization: 'Basic ' + authHeader
    }
});

const { cid } = await ipfs.add(globSource(path, { recursive: true }));

if (cid) {
    console.log(cid.toV0().toString());
} else {
    throw new Error('IPFS add failed, please try again.');
}
```

> You can get full list of `ipfsGateway` address [here](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/ipfs-gateway-endpoints/index.ts).

### 2. Pin file through IPFS Pinning Service

```javascript
const got = require('got');

const ipfsPinningService = 'https://pin.crustcode.com/psa'; // IPFS Web3 Authed Pinning Service address

// 4. Pin to crust with IPFS standard W3Authed pinning service
const {body} = await got.post(
    ipfsPinningService + '/pins',
    {
        headers: {
            authorization: 'Bearer ' + authHeader
        },
        json: {
            cid: cid.toV0().toString(),
            name: 'crust-demo'
        }
    }
);
```

> You can get the full list of `ipfsPinningService` [here](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/ipfs-pinner/index.ts).

Will return `body` like

```json
{
   "requestId":"c7fc3e00-b303-4a24-8485-71ee7b3ffb78-1631776602227",
   "status":"pinning",
   "created":"2021-09-16T06:55:12+00:00",
   "pin":{
      "cid":"QmYboQmwDrNK6waGjm2VvH7eMGZbo1LUi5X5iMtzetzsnK",
      "name":"crust-demo",
      "meta":null,
      "origins":[
         
      ]
   },
   "delegates":[
      
   ],
   "info":{
      
   }
}
```

### 3. Query on-chain pinning status from IPFS Pinning Service

```javascript
if (body) {
    const rid = JSON.parse(body)['requestId'];
    console.log(body, rid);
    // 5. Query pinning status through pinning service
    while (true) {
        const {body: pinningStat} = await got(
            ipfsPinningService + `/pins/${rid}`,
            {
                headers: {
                    authorization: 'Bearer ' + authHeader
                }
            }
        );
        console.log(pinningStat); // After success, you can query the cid on Crust

        await timeout(1000);
    }
} else {
    console.log(body);
    throw new Error('Crust pin failed, please try again.');
}
```

After pinned success, the demo will return

```json
{
   "requestId":"c7fc3e00-b303-4a24-8485-71ee7b3ffb78-1631776602227",
   "status":"pinned",
   "created":"2021-09-16T06:55:12+00:00",
   "pin":{
      "cid":"QmYboQmwDrNK6waGjm2VvH7eMGZbo1LUi5X5iMtzetzsnK",
      "name":"crust-demo",
      "meta":null,
      "origins":[
         
      ]
   },
   "delegates":[
      
   ],
   "info":{
      
   }
}
```

## Resources

- [Code Demo](https://github.com/crustio/crust-demo)
- [IPFS Http Client](https://github.com/crustio/crust-demo/tree/main/store-file-with-gateway)
- [IPFS Gateway](https://docs.ipfs.io/concepts/ipfs-gateway/)
- [IPFS Pinning Service](https://docs.ipfs.io/how-to/work-with-pinning-services/)
- [IPFS W3Auth Gateway Full List](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/ipfs-gateway-endpoints/index.ts)
- [IPFS W3Auth Pinning Service Full List](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/ipfs-pinner/index.ts)

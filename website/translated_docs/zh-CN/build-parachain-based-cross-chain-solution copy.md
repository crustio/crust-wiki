---
id: buildParachainBasedCrossChainSolution
title: Crust's Parachain-based cross-chain dStorage solution
sidebar_label: Crust's Parachain-based cross-chain dStorage solution
---

## Introduction

Decentralized storage(dStorage) is the fundamental of Web3 ecosystem. As a supplement to the costly on-chain storage, dStorage can scale horizontally as distributed network and store unlimited data theoretically.

[Ethereum's Web3 stack](https://ethereum.org/en/developers/docs/storage/) lists some important considerations about dStorage:

- Persistence mechanism and incentive structure
- Data retention enforcement
- Decentrality
- Consensus

Based on these thoughts, dStorage projects are usually a **standalone** **blockchain** with consensus supporting data retention ability, incentive mechanism, and data persistence. The chart below shows an analysis of several mainstream Storage projects and their strategies for data retention and data persistence.

[ ](https://www.notion.so/68b99ae146214e73b3ef3a8cfcb6727a)

As the fundamental of Web3 ecosystem, dStorage is designed to serve the entire web3 ecosystem, including DApp hosting, NFT metadata storage, GameFi and social media data storage, even hosting the Metaverse. So we want to use **a single web3 identity for** DApps and personal data storage rather than multiple accounts. ***It's very similar to SSO(Single Sign-On) in Web2 world.***

There are many smart contract platforms such as Ethereum, Polkadot, Near, Polygon, Solana... Every platform has its own DApp ecosystem. Web3 users use different identities to call smart contracts on each blockchain. And providing dStorage to users on different blockchains becomes a basic requirement for dStorage projects.

## Solution
As a dStorage project in the Polkadot ecosystem, Crust Parachain builds on top of [Substrate](https://github.com/paritytech/substrate) and supports to place storage order through [***xStorage***] pallet (https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage). 

There are two Crust Parachains, you can use either of them to interact with the Crust dStorage network:
* Crust Parachain running on Polkadot Relaychain
* Crust Shadow running on Kusama Relaychain

### 1. Place Storage Order in Crust Parachain

The xStorage pallet allows all users to:

- Send storage request messages(Extrinsics) to Crust
- Pay storage fees on Crust by $CRU/$CSM token

Next, we need to send a transaction named `Place Storage Order through Parachain` on Crust Parachain, this transaction will dispatch your storage requirement to each Crust IPFS nodes through blockchain. Then the IPFS nodes will start pulling your file with IPFS protocol.

> You can find more `Crust Parachain Endpoints` on [LINK](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/endpoints/production.ts#L9).


```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { typesBundleForPolkadot, crustTypes } from '@crustio/type-definitions';
import { Keyring } from '@polkadot/keyring';
import { KeyringPair } from '@polkadot/keyring/types';

// Create global parachain chain api instance
const crustParachainEndpoint = 'wss://crust-parachain.crustapps.net';
const parachainApi = new ApiPromise({
    provider: new WsProvider(crustParachainEndpoint),
    typesBundle: typesBundleForPolkadot,
});

async function placeStorageOrder() {
    // 1. Construct place-storage-order tx
    const fileCid = 'Qm123'; // IPFS CID, take `Qm123` as example
    const fileSize = 2 * 1024 * 1024 * 1024; // Let's say 2 gb(in byte)
    const tx = parachainApi.tx.xstorage.placeStorageOrderThroughParachain(fileCid, fileSize);

    // 2. Load seeds(account)
    const seeds = 'xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx';
    const kr = new Keyring({ type: 'sr25519' });
    const krp = kr.addFromUri(seeds);

    // 3. Send transaction
    await parachainApi.isReadyOrError;
    return new Promise((resolve, reject) => {
        tx.signAndSend(krp, ({events = [], status}) => {
            console.log(`💸  Tx status: ${status.type}, nonce: ${tx.nonce}`);

            if (status.isInBlock) {
                events.forEach(({event: {method, section}}) => {
                    if (method === 'ExtrinsicSuccess') {
                        console.log(`✅  Place storage order success!`);
                        resolve(true);
                    }
                });
            } else {
                // Pass it
            }
        }).catch(e => {
            reject(e);
        })
    });
}
```

### 2. Query order status from Crust Mainnet

Then, you can query the order `status{replica_count, storage_duration, ...}` by calling on-chain status from Crust Mainnet.

```typescript
// Create global mainnet chain api instance
const crustMainnetEndpoint = 'wss://rpc.crust.network';
const mainnetApi = new ApiPromise({
    provider: new WsProvider(crustMainnetEndpoint),
    typesBundle: typesBundleForPolkadot,
});

async function getOrderState(cid: string) {
    await mainnetApi.isReadyOrError;
    return await mainnetApi.query.market.filesV2(cid);
}
```

And it'll return:

```json
{
    "file_size": 23710,
    "spower": 24895,
    "expired_at": 2594488, // Storage duration
    "calculated_at": 2488,
    "amount": "545.3730 nCRU",
    "prepaid": 0,
    "reported_replica_count": 1, // Replica count
    "remaining_paid_count": 3,
    "replicas": {
        "cTHATJrSgZM2haKfn5e47NSP5Y5sqSCCToxrShtVifD2Nfxv5": {
            "who": "cTHATJrSgZM2haKfn5e47NSP5Y5sqSCCToxrShtVifD2Nfxv5",
            "valid_at": 2140,
            "anchor": "0xd9aa29dda8ade9718b38681adaf6f84126531246b40a56c02eff8950bb9a78b7c459721ce976c5c0c9cd4c743cae107e25adc3a85ed7f401c8dde509d96dcba0",
            "is_reported": true,
            "created_at": 2140
        }
    } // Who stores the file
}
```

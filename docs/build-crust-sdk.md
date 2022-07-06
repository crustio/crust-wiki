---
id: buildCrustKits
title: Crust SDK
sidebar_label: Crust SDK
---

Crust provides PolkadotJS based SDK to access Crust Network functionalities. It is implemented as crust.js library to provide additional type definitions.

# crust.js

This library provides additional typing information for users to access Crust Network by using [polkadot.js](https://github.com/polkadot-js/api)

## Getting Started

1. Install dependencies

```shell
yarn add @polkadot/api@4.2.2-4 @crustio/type-definitions
```

2. Create API instance

```ts
import {ApiPromise, WsProvider} from '@polkadot/api';
import {typesBundleForPolkadot} from '@crustio/type-definitions';

async function main() {
    const api = new ApiPromise({
      provider: new WsProvider('wss://api.crust.network'),
      typesBundle: typesBundleForPolkadot,
    });
    await api.isReady;

    // Use api
}

main();
```

3. Interact with chain

```ts
// Query file info
const fileInfo = await api.query.market.filesV2('QmRaknS23vXEcdJezkrVC5WrApQNUkUDdTpbRdvh5fuJHc');
console.log(fileInfo.toHuman());
```

E2E code sample can be found [here](build-developer-guidance.md).

## Crust Types

- Use crust types

```ts
import {crustTypes} from '@crustio/type-definitions';

// Define FileInfo
export type FileInfo = typeof crustTypes.market.types.FileInfoV2;

// Use FileInfo as `interface`
```

- Types

  - [DSM Types](https://github.com/crustio/crust.js/blob/main/src/market.ts): `FileInfoV2`, `MerchantLedger`, `Replica`, ...
  - [MPoW Types](https://github.com/crustio/crust.js/blob/main/src/swork.ts): `Identity`, `WorkReport`, ...
  - [GPoS Types](https://github.com/crustio/crust.js/blob/main/src/staking.ts): `Guarantee`, ...


## Additional Resources

- [@polkadot/api](https://github.com/polkadot-js/api) The polkadot api library provides a Promise-style interface for performing related operations on substrate-based chains including Crust chain
- [ipfs-core](https://github.com/ipfs/js-ipfs) ipfs library contains all the functions of ipfs

  
## API Specifications

### Crust API

Please visit [Crust Docs](https://docs.crust.network/) to check all Crust API. You can check the [`Constants`](https://docs.crust.network/crust/constants) to get all constants stored on chain. You can learn how the chain state organazied on [`Storage`](https://docs.crust.network/crust/storage) page and all supported extrinsices on [`Extrinsics`](https://docs.crust.network/crust/extrinsics). You can check the [`Events`](https://docs.crust.network/crust/events) and [`Errors`](https://docs.crust.network/crust/errors) as well if neccessary.

### PolkadotJS API 

The PolkadotJS API document can be found [here](https://polkadot.js.org/docs/api).

### Contributes on Crust API Specifications

You are welcome to contribute on Crust API specifications to provide more integrated and user-friendly documents.


---
id: tonBuild101
title: Build With TON 101
sidebar_label: Build With TON 101
---

## I. Description

This article will describe how to use CrustBags storage smart contract to place order.

## II. Storage smart contract

- Testnet storage contract address: https://testnet.tonviewer.com/EQBOOMNqG0rvNm6vFGfR4qZl48BTDw_gYefVI4DQ70t9GoPC
- Mainnet storage contract address: (coming soon)

## III. SDK & Example

Developers could use [crustbags-sdk](https://www.npmjs.com/package/@crustnetwork/crustbags-sdk) to place storage orders.

**Installation**

```sh
$ npm install @crustnetwork/crustbags-sdk @ton/ton @ton/core @ton/crypto
```

**Usage**

```javascript
import crustbagssdk from '@crustnetwork/crustbags-sdk'
import { default_storage_period } from "@crustnetwork/crustbags-sdk/src/CrustBags";
import { Address, toNano } from "@ton/core";
import { mnemonicToPrivateKey } from "@ton/crypto";
import { TonClient, WalletContractV4 } from "@ton/ton";

const tc = new TonClient({
    endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
});
const crustbagsAddress = Address.parse(
    "EQBOOMNqG0rvNm6vFGfR4qZl48BTDw_gYefVI4DQ70t9GoPC"
);
const crustBags = crustbagssdk.CrustBags.createFromAddress(crustbagsAddress);

const openCrustBags = tc.open(crustBags);
const keyPair = await mnemonicToPrivateKey(["your", "mnemonic"]);
const wallet = tc.open(
    WalletContractV4.create({ workchain: 0, publicKey: keyPair.publicKey })
);
await openCrustBags.sendPlaceStorageOrder(
    wallet.sender(keyPair.secretKey),
    tonrrentHash, // torrentHash or bagId
    1024n, // fileSize
    merkleHash, // file merkle tree root hash
    toNano("0.1"), // storageFee
    default_storage_period // storage period time
);
```

Before placing order, the file need be encoded into a merkle tree, and the root hash need be passed to CrustBags storage contract. Below is the code example:

```javascript
import { merkle } from '@crustnetwork/crustbags-sdk'

const readAsBlob = async (file: string) => {
  return new Promise<Blob>((resolve, reject) => {
    let chunks: Buffer[] = [];
    fs.createReadStream(file)
      .on("error", reject)
      .on("data", (data: Buffer) => {
        chunks.push(data);
      })
      .on("end", () => resolve(new Blob(chunks)));
  });
};

const mt = new merkle.MerkleTree();
const blob = await readAsBlob("test.txt");
// generate merkle tree
await mt.genTree(blob);
// merkle tree root
const merkleRoot = mt.tree![0];
```
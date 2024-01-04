---
id: algorandBuild101
title: Build With Algorand 101
sidebar_label: Build With Algorand 101
---

## I. Description

This article will describe how to use Algorand storage smart contract(short for storage contract below) to place order.

## II. Concepts

1. **IPFS**
IPFS(InterPlanetary File System) is a p2p storage procotol, anyone can start an IPFS node to share files or pull files from others' nodes. The file stored in IPFS is divided into many pieces which are organized in the form of merkle tree. The root hash of this tree is the cid(content id) of the file, which represents the file itself. An IPFS node can search its wanted cid in IPFS network, when a node claims it has the cid, they can establish a connection and the file data would be sent to the searcher. For more information about IPFS, check [this document](https://docs.ipfs.tech/).
1. **Crust Network**
Crust Network is a decentralized storage platform built on IPFS protocol. It is an incentive layer to encourage storage nodes to store the ordered files. [MPOW](crust-overview.md#mpow) and [GPOS](GPoS.md) are the core protocols of Crust Network. With these protocols Crust Network builds the [DSM](DSM.md)(Decentralized Storage Market) to provide storage service for the whole Web3 ecosystem.

## III. Storage smart contract

- Testnet storage contract application ID: [507867511](https://testnet.algoexplorer.io/application/507867511)
- Mainnet storage contract application ID: [1275319623](https://algoexplorer.io/application/1275319623)

## IV. Example

Before you place order with storage contract, you need uploading your file to an IPFS gateway. You can start [a local gateway](https://docs.ipfs.tech/install/ipfs-desktop/), or use [the public ones](https://docs.ipfs.tech/concepts/ipfs-gateway/#gateway-providers), or use [these](https://github.com/crustio/crust-apps/blob/041258d0aca109a8d5e24cdade0be351c3e57f73/packages/apps-config/src/ipfs-gateway-endpoints/index.ts) maintained by Crust Network. After that let's rock.

### 0. Build web3 authentication header with Algorand

```python
import sys
from algosdk import account, mnemonic
from nacl.signing import SigningKey
import base64

# 1. Construct auth header
args = sys.argv[1:]
mn = args[0]
pk = mnemonic.to_private_key(mn)
addr = account.address_from_private_key(pk)
sk = list(base64.b64decode(pk))
sig_hex = f"0x{SigningKey(bytes(sk[:32])).sign(addr.encode()).signature.hex()}"
authHeader = base64.b64encode(f"sub-{addr}:{sig_hex}".encode('utf-8')).decode('utf-8')
```

### 1. Upload files to IPFS Gateway

```python
import requests
import json

# IPFS Web3 Authed Gateway address
ipfsGateway = 'https://gw.crustfiles.app';

# 2. Upload file to IPFS gateway
headers = { "Authorization" : f"Basic {authHeader}" }
files = {'upload_file': open(<file_path>,'rb')}
res = requests.post(f"{ipfsGateway}/api/v0/add", files=files, headers=headers)
res_json = json.loads(res.text)
cid = res_json['Hash']
size = int(res_json['Size'])
```

> You can get full list of `ipfsGateway` address [here](https://github.com/crustio/crust-apps/blob/master/packages/apps-config/src/ipfs-gateway-endpoints/index.ts).

### 2. Get price from storage contract

```python
from w3bucket import app
from beaker import client, localnet
from algosdk.v2client import algod

# 3. Get algod application client
app_id = 1275319623
algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
algod_address = "https://mainnet-api.algonode.cloud"
algod_client = algod.AlgodClient(algod_token=algod_token,algod_address=algod_address)
account = localnet.kmd.LocalAccount(address=addr,private_key=pk)
app_client = client.ApplicationClient(
  client=algod_client,
  app=app,
  sender=account.address,
  signer=account.signer,
  app_id=app_id
)

# 4. Get price
is_permanent = True
price = app_client.call(
  "get_price",
  size=size,
  is_permanent=is_permanent
).return_value
```

> You can get the w3bucket file [here](https://github.com/crustio/algorand-storage-contract/blob/main/contracts/w3bucket/w3bucket.py).

### 3. Send storage order transaction to storage contract

```python
from beaker import client
from algosdk.encoding import decode_address
from algosdk.transaction import PaymentTxn
from algosdk.atomic_transaction_composer import TransactionWithSigner

# 5. Get order node to place order
order_node_address = app_client.call(
  "get_random_order_node",
  boxes=[(app_client.app_id, "nodes")]
).return_value

# 6. Place order
sp = app_client.get_suggested_params()
sp.flat_fee = True
sp.fee = 2000 * 4
ptxn = PaymentTxn(
  account.address,
  sp,
  app_client.app_addr,
  price,
)
app_client.call(
  "place_order",
  seed=TransactionWithSigner(ptxn, account.signer),
  merchant=order_node_address,
  cid=cid,
  size=size,
  is_permanent=is_permanent,
  boxes=[(app_client.app_id, decode_address(order_node_address)),(app_client.app_id, "nodes")],
)
```
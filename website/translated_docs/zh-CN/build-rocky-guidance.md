---
id: buildRockyGuidance
title: Crust Rocky Network
sidebar_label: Crust Rocky Network
---

In this wiki, you'll learn

- What's rocky network
- How to connect with rocky network
- How to get testcoin
- How to run a rocky node

## ⛰ About Rocky

Crust Rocky Network is a free test network for developers to test applications before deploying to Mainnet. Rocky has the same function and parameters with Mainnet.

## 🔗 How to connect

Rocky network can be viewed on Crust Apps:

- Centralized version: https://apps.crust.network
- IPFS version: https://crustapps.net

![apps-rocky](assets/build/rocky-app.jpg)

And Rocky's public websocket endpoint is

- `wss://rpc-rocky.crust.network` (Hosted by Crust Network)

## 💸 Get testcoin

- Step 1. Go to Crust Discord [#🚰faucet channel](https://discord.gg/d6XuBXCqxU)
- Step 2. Just send your rocky account address
- Step 3. Wait a few seconds, you'll got the money😉

## 🎮 Run a rocky node

Please refer the build section of Crust [README](https://github.com/crustio/crust).

Or you can just use the following compose file to start rocky just 10 seconds.

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
      - --execution
      - "WASM"
    volumes:
      - /tmp/rocky-watcher:/tmp/rocky-watcher
    ports:
      - "30333:30333"
      - "9933:9933"
      - "9944:9944"
```

## Related resources

- [Crust API Docs](https://docs.crust.network)
- [IPFS API Docs](https://docs.ipfs.io/reference/http/api/)

---
id: Q&AForFix
title: Fix unstable chain
sidebar_label: Fix unstable chain
---

## 1 Owner & Isolation node

### 1.1 Confirm that the chain synchronization is normal

View the log of the chain with the following command:

```shell
sudo crust logs chain
```

If the best block reaches the highest block (the highest can be viewed on [APPs](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/explorer), the difference between  finalized block and best block is less than 5 blocks, indicating that the chain is in normal condition. As shown below:

![pic](assets/qa/check_top.png)

If there is an abnormality, please shovel the data of the chain, resynchronize the block (it is recommended to use the db of the normal Owner node for synchronization acceleration), and set a new session key.

### 1.2 Become a Validator again

Before performing this step, please double check whether the node is synchronized to the highest block, and the difference between finalized and best is less than 5 blocks. As shown below:

![pic](assets/qa/check_top.png)

If the synchronization is normal, execute the validate operation in [APPs](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/staking/actions) to become a validator again

## 2 Member

View the log of the chain with the following command:

```shell
sudo crust logs chain
```

If the best block reaches the highest block (the highest can be viewed on [APPs](https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/explorer), the difference between  finalized block and best block is less than 5 blocks, indicating that the chain is in normal condition. As shown below:

![pic](assets/qa/check_top.png)

If there is an abnormality, please shovel **the data of the chain** and resynchronize the block (it is recommended to use the db of the Member node for synchronization acceleration).
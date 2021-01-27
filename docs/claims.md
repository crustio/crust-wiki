---
id: claims
title: Crust Claims
sidebar_label: Crust Claims
---

If you want to **map ERC20 CRU to Maxwell Preview Network** and participate in the preview network, you follow this tutorial step by step to claim Maxwell CRU.

## Preparation

In order to prevent unknown errors in the claim process, we highly recommend using the following tools to help you in the entire claim process:

> Don't worry about being unfamiliar with the following tools, we will teach you how to use them step by step in the following steps.

1. [MyEtherWallet](https://www.myetherwallet.com/interface/dashboard)
2. [ImToken](https://token.im/)
3. [Crust Apps](https://apps.crust.network/)

## Steps

### 1. Send ERC20 Claim Transaction

First of all, you need to transfer CRUs to *Crust Official Claim Account* on the Ethereum side. Transfering can be done on any wallet side, but you **must pay attention to following points** before transfering CRUs:

1. **⚠️ Make sure you have the authority to make signature with the private key of the account (all accounts created by exchanges are not applicable, please use the wallet with private key stored to perform following steps)**
2. **The transfer contract address is: [CRUST](https://etherscan.io/token/0x32a7C02e79c4ea1008dD6564b35F131428673c41)**
3. **The destination address of contract transfer is: [0x2B2b3F6a8c08d789fB48e5316Fd314e4662fFA2A](https://etherscan.io/address/0x2B2b3F6a8c08d789fB48e5316Fd314e4662fFA2A)** (Case insensitive)

Please confirm your transfering is successful and make sure it has **at least 6 confirmations**, **copy the hash value of this successful transaction** and do to the following steps.

### 2. Verify transactions and bridge tokens

Go to the Claims page of [Crust Apps](https://apps.crust.network/#/claims)

![Apps Claim1](assets/claims/apps_claims1.png)

1. Select the account of Maxwell Preview Network that you want to claim
2. Input the Tx Hash you copied from  [step 1](#1-send-erc20-claim-transaction)
3. Click "Continue", this step will wait for a while, backend bridge service will check the legicimacy of your claim transaction. **The network may busy for a while, and you will receive a failure hint, if that, you can wait and try it later.**

![Apps Claims2](assets/claims/apps_claims2.png)

### 3. Log in to MyEtherWallet and Connect to your wallet

1. Open [MyEtherWallet](https://www.myetherwallet.com/access-my-wallet):
    - Click 'MEW wallet'
    - Click 'WalletCoAn
    - A QR code will apear

**⚠️ Pay Attention, please ensure that the connected wallet address is same as the address where the transaction was successfully sent in [step 1](#1-send-erc20-claim-transaction)**(We need to sign the message with the private key of this address)

![Connect Wallet1](assets/claims/connect_wallet1.jpg)

![Connect Wallet2](assets/claims/connect_wallet2.jpg)

![Connect Wallet3](assets/claims/connect_wallet3.png)

2. On the ImToken mobile client, click the *scan icon* in the upper right corner, scan the QR code displayed by MyEtherWallet and authorize

![Connect Wallet4](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/main.jpeg)

![Connect Wallet5](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/allow.jpeg)

3. After the authorization is successful, you will see the following screen on the MyEtherWallet page, which means your wallet is successfully connected

![Connect Wallet6](assets/claims/connect_wallet6.jpg)

### 4. Get the Ethereum Signature

Make sure you completed [step 2](#2-verify-transactions-and-bridge-tokens), then continue with following steps

1. In Crust Apps Claim page，**Click the gray box to copy the text**

![Sign Msg1](assets/claims/sign_msg1.jpg)

2. In MyEtherWallet page, click **Message** on the left side as shown, select **Sign Message**, and paste the text in the gray box into the text box, click **Sign**

![Sign Msg2](assets/claims/sign_msg2.png)

3. There will be a pop-up in the ImToken side, Click "Confirm", **⚠️ Please be attention here, At this step, the communication between MyEtherWallet and ImToken may be interrupted and no authorization information will pop up. Please execute** [Step 3](#3-log-in-to-myetherwallet-to-connect-to-your-wallet) again.

![Sign Msg3](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/confirm.jpeg)

4. Go back to MyEtherWallet, click **Confirm Signing**

![Sign Msg4](assets/claims/sign_msg4.jpg)

5. When MyEtherWallet shows **Signed Message**, click 'Copy'

![Sign Msg5](assets/claims/sign_msg5.jpg)

### 5. Claim CRUs

Go back to **Crust Apps Claims** page, with the **Signed Message** copied in [step 4](#4-get-the-ethereum-signature):

1. Paste the signature into the area shown in the image below, and click "Confirm claim". The green area shown as the image below will appear if the claim is recorded on chain.

![Claim Done1](assets/claims/claim_done1.jpg)

2. Click to claim

![Claim Done2](assets/claims/claim_done2.jpg)

3. Claim Successfully

![Claim Done3](assets/claims/claim_done3.jpg)

## References

Crust Claims is a **centralized service, but all the codes and rules are open source and traceable**. Only the legal interpretation of centralized CRU claim address and the CRU claim transactions on Ethereum  belong to the Crust team.

The code involved in claim process has been open source:

1. [Crust Bridge](https://github.com/decloudf/crust-bridge)
2. [Crust Claims](https://github.com/crustio/crust/tree/master/cstrml/claims)

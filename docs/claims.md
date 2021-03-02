---
id: claims
title: Crust Claims
sidebar_label: Crust Claims
---

If you want to **map ERC20 CRU to Crust Preview Network Maxwell** and participate in the preview network, you follow this tutorial step by step to claim Maxwell CRU.

## Preparation

In order to prevent unknown errors in the claim process, we highly recommend using the following tools to help you in the entire claim process:

> Don't worry about being unfamiliar with the following tools, we will teach you how to use them step by step in the following steps.

1. [MyEtherWallet](https://www.myetherwallet.com/interface/dashboard)
2. [ImToken](https://token.im/) or [MetaMask](https://metamask.io/)
3. [Crust Apps](https://apps.crust.network/)

## Steps

### I. Send ERC20 Claim Transaction

First of all, you need to transfer CRUs to ***Crust Maxwell Claim Address*** on the Ethereum side. Transfering can be done on any wallet side, but you **must pay attention to following points** before transfering CRUs:

1. **⚠️ Make sure you have the authority to make signature with the private key of the account (all accounts created by exchanges are not applicable, please use the wallet with private key stored to perform following steps)**
2. **Confirm the CRU ERC20: [CRUST](https://etherscan.io/token/0x32a7C02e79c4ea1008dD6564b35F131428673c41)**
3. ***Crust Maxwell Claim Address***:
   - New Claim Address(Contract): [0x17a9037cdfb24ffcc13697d03c3bcd4dff34732b](https://etherscan.io/address/0x17a9037cdfb24ffcc13697d03c3bcd4dff34732b)
   ![new claim address](assets/claims/new_claim_addr.png)
   - Old Claim Address: [0x2B2b3F6a8c08d789fB48e5316Fd314e4662fFA2A](https://etherscan.io/address/0x2B2b3F6a8c08d789fB48e5316Fd314e4662fFA2A)
   ![old claim address](assets/claims/old_claim_addr.png)

> Both old and new claim accounts are legal

Please confirm your transfering is successful and make sure it has **at least 6 confirmations**, **copy the hash value of this successful transaction** and do the following steps.

### II. Verify transactions and bridge tokens

Go to the Claims page of [Crust Apps](https://apps.crust.network/#/claims)

![Apps Claim1](assets/claims/apps_claims1.png)

1. Select the account of Maxwell Preview Network that you want to claim
2. Input the Tx Hash you copied from  [Step I](#i-send-erc20-claim-transaction)
3. Click "Continue", this step will wait for a while, backend bridge service will check the legicimacy of your claim transaction. **The network may busy for a while, and you will receive a failure hint, if that, you can wait and try it later.**

![Apps Claims2](assets/claims/apps_claims2.png)

### III. Log in to MyEtherWallet and Connect to your wallet

1. Open [MyEtherWallet](https://www.myetherwallet.com/access-my-wallet):
    - Click 'MEW wallet'
    - Connect the wallet which you **transfer ERC20 CRU**(The following process will use 'ImToken' and 'MetaMask' as example)

**⚠️ Pay Attention, please ensure that the connected wallet address is same as the address where the transaction was successfully sent in [Step I](#i-send-erc20-claim-transaction)**(We need to sign the message with the private key of this address)

![Connect Wallet1](assets/claims/connect_wallet1.jpg)

![Connect Wallet2](assets/claims/connect_wallet2.jpg)

![Connect Wallet3](assets/claims/connect_wallet3.png)

2. On the ImToken mobile client, click the *scan icon* in the upper right corner, scan the QR code displayed by MyEtherWallet and authorize

![Connect Wallet4](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/main.jpeg)

![Connect Wallet5](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/allow.jpeg)

If you use MetaMask, please click `MEW CX` after you access your Wallet

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/connect_mm.jpeg)

![](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/connected.jpg)


3. After the authorization is successful, you will see the following screen on the MyEtherWallet page, which means your wallet is successfully connected

![Connect Wallet6](assets/claims/connect_wallet6.jpg)

### IV. Get the Ethereum Signature

Make sure you completed [Step II](#ii-verify-transactions-and-bridge-tokens), then continue with following steps

1. In Crust Apps Claim page，**Click the gray box to copy the text**

![Sign Msg1](assets/claims/sign_msg1.jpg)

2. In MyEtherWallet page, click **Message** on the left side as shown, select **Sign Message**, and paste the text in the gray box into the text box, click **Sign**

![Sign Msg2](assets/claims/sign_msg2.png)

3. There will be a pop-up in the ImToken side, Click "Confirm", **⚠️ Please be attention here, At this step, the communication between MyEtherWallet and ImToken may be interrupted and no authorization information will pop up. Please execute** [Step III](#iii-log-in-to-myetherwallet-and-connect-to-your-wallet) again.

![Sign Msg3](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/confirm.jpeg)

If you use MetaMask, you just need to make your sign through Metamask pop-up window.
![Sign mm](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/general/mm_sig.jpg)

4. Go back to MyEtherWallet, click **Confirm Signing**

![Sign Msg4](assets/claims/sign_msg4.jpg)

5. When MyEtherWallet shows **Signed Message**, click 'Copy'

![Sign Msg5](assets/claims/sign_msg5.jpg)

### V. Claim CRUs

Go back to **Crust Apps Claims** page, with the **Signed Message** copied in [Step IV](#iv-get-the-ethereum-signature):

1. Paste the signature into the area shown in the image below, and click "Confirm claim". The green area shown as the image below will appear if the claim is recorded on chain.

![Claim Done1](assets/claims/claim_done1.jpg)

2. Click to claim

![Claim Done2](assets/claims/claim_done2.jpg)

3. Claim Successfully

![Claim Done3](assets/claims/claim_done3.jpg)

## References

The code involved in claim process has been **open source**:

1. [Crust Bridge](https://github.com/decloudf/crust-bridge)
2. [Crust Claims](https://github.com/crustio/crust/tree/master/cstrml/claims)

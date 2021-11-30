---
id: Q&AForGuarantor
title: Guarantor
sidebar_label: Guarantor
---

## 1 How to change the guarantee object?

1) First cancel the guarantee object A
![Picture](assets/qa/cutguarantor.jpg)

2) Re-select guarantor B for guaranty
![gua](assets/gpos/gurantee1.png)
![gua](assets/gpos/gurantee2.png)
![gua](assets/gpos/gurantee3.png)


## 2 How to vouch for multiple validators/candidates?

When the amount of guarantee is sufficient, the guarantee operation can be performed multiple times, and a maximum of 16 validators (candidates) can be guaranteed

## 2 How many people can a validator/candidate be sponsored at most?

The upper limit is 64

## 3 As a guarantor, how to revoke the guarantee?

> Note: Dosing operations are temporarily not supported, and if multiple guarantees are guaranteed, the guarantees need to be revoked one by one

1) Through the STASH account of the guarantor, check out all the node accounts guaranteed by the account and the guarantee limit

![Picture](assets/qa/checkguarantor.jpg)

2) Withdraw the guarantee for each node

![Picture](assets/qa/cutguarantor.jpg)

3) Query through the account of the guaranteed person found in step 1 and click on the account to enter the "guaranteed account", enter the amount of cancellation of the guarantee in the "amount", and click CutGuarantee.

![Picture](assets/qa/cutguarantor1.jpg)

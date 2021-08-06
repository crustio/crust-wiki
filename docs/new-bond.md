---
id: newBond
title: New Bond
sidebar_label: New Bond
---

Crust account, featuring a standard dual account (Controller/Stash) model, needs to go through a set of account bonding procedures. In the dual-account model, the Controller account is used as a hot wallet, and only a small amount of CRU is required as a transaction fee to support most operations, reducing possible risks. This section will illustrate how to create accounts and bond account relationships through actions in Crust APPs.

## Create a stash account
Click "Accounts" in the navigation bar at the top of the window, and click "Add account", as shown below.

![](assets/newBond/accounts.png)

The secret seed value for this account. Ensure that you keep this in a safe place and check "I have saved my mnemonic seed safely"

![](assets/newBond/stash1.png)

Enter your account name and password, and click "Next" 

![](assets/newBond/stash2.png)

Click "Save" the account will be backed up on your device by default. Please remember to keep the backup file, the format is as follows "cTJhJ6m3xxxxxxxxTPBdqKHjUpWiQMHY4ox3in.json"

![](assets/newBond/stash3.png)

We will use the first created account as a Stash account. Stash account is a user's asset account, which is often used to manage the user's assets. It should be noted that a certain number of CRUs are required of the Stash account for subsequent actions such as transactions and asset staking.

##  Create a Controller account
Repeat the above steps to create another account.

![](assets/newBond/controller1.png)

![](assets/newBond/controller2.png)

![](assets/newBond/controller3.png)

This time we name the newly created account as CONTROLLER, a reminder that this account will be used as a controller to control assets. Also, a certain number of CRUs are required of the account to pay subsequent transaction fees.


## Bond Controller to Stash
Click "Staking" from the "Network" column in the navigation bar, and select "Account actions".

![](assets/newBond/stakingAccount.png)

Click "Stash" in the upper right corner, select Stash and Controller account in the pop-up window, enter the number of CRUs to be staked ("number" here is the number of CRUs allowed to be controlled by the Controller account), and then click "Stake".


![](assets/newBond/bond.png)

Since staking needs to be performed on the chain, it is required to unlock the Stash account and pay a certain amount of fees.

![](assets/newBond/sendTx.png)

When staking is successfully implemented, you can find that a staking relationship has now been added to the "Account actions" window.
![](assets/newBond/stakingSuccess.png)


To this far, your account configuration has been well completed.

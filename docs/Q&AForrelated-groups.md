---
id: Q&AForrelatedgroups
title: Related Groups
sidebar_label: Related Groups
---

## 1 Why can't a member add a group?

- The Member node needs to report the workload once to add the group. This process takes a long time, about an hour. If the workload is not reported, the group will report the swork.IdentityNotExist error. You can see whether the workload is reported by the following command on the member machine

```shell
sudo crust logs sworker | grep'Send work report'
```

- Member accounts need to be added to the whitelist of the group before they can be added to the group

- Double check whether the right account is selected and whether the top or bottom is reversed

- A Member with meaningful files cannot be added to a group, it will report Illegal Spower, please refer to how to change the group of the Member node

## 2 Lockup CRU to reduce the fee of the work report

- Why lock

The reporting of the workload of the main network requires a handling fee. Under normal circumstances, each Member will carry out 24 workload reporting transactions per day, which brings a lot of handling fees. For this reason, the Crust network provides a Benefit module that exempts workload reporting fees. Group owners can reduce or waive member handling fees by locking CRUs.

- Why lock 30

Each member needs to lock 18CRU for fee reduction. However, considering the unstable situation of workload reporting, it is recommended to lock 24CRU~30CRU to ensure that the fee is completely free. For example, suppose your Group is ready to have 6 members ready to join, then lock 30*6=180CRU

- How much can be saved

The handling fee for workload reporting is related to the meaningful file changes reported in each round. Damage to the hard disk and instability of the network will increase the handling fee. Preliminary estimates are that the handling fee for each member for one year is between 1CRU ~ 20CRU


## 3 How to change the group of Member nodes?

- Exit the old group

![Picture](assets/qa/quit1.png)
![Picture](assets/qa/quit2.png)

- Execute the following command to query whether the Member node has received meaningful file orders
```shell
sudo crust tools file-info all
```
- If you have received a meaningful document order, call the following command to delete it, and wait for the next workload report, which will be reported every 1 hour
```shell
sudo crust tools delete-file {cid}
```

- Add whitelist
![Picture](assets/benefits/addallowaccount1.png)
![Picture](assets/benefits/addallowaccount2.png)

- Join a new group
![Picture](assets/benefits/joingroup1.png)
![Picture](assets/benefits/joingroup2.png)

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

Once you exit the old group, you will see such errors "swork.IllegalFilesTransition" in the work report. Please use the following scripts to fix it.

- Execute the following command to query whether the Member node has received meaningful file orders
```shell
sudo crust tools file-info all
```
- If you have received a meaningful document order, call the following command to delete it, and wait for the next workload report, which will be reported every 1 hour
```shell
#!/bin/bash
basedir=$(cd `dirname $0`; pwd)
crust_base_url="http://localhost:12222/api/v0"

### Delete files
# Delete pending files
for cid in $(sudo crust tools file-info pending | jq -r "keys|.[]"); do
    sudo crust tools delete-file $cid
done
# Delete valid and lost files
cids=($(sudo crust tools file-info valid | jq -r "keys|.[]") $(sudo crust tools file-info lost | jq -r "keys|.[]"))
recover_data='{"deleted_files":['
if [ ${#cids[@]} -gt 0 ]; then
    for cid in ${cids[@]}; do
        recover_data="${recover_data}\"$cid\","
    done
    recover_data="${recover_data:0:len-1}]}"
    curl -s -XPOST "$crust_base_url/file/recover_illegal" --header 'Content-Type: application/json' --data-raw "$recover_data"
    for cid in ${cids[@]}; do
        sudo crust tools delete-file $cid
    done
fi
```

If the above scripts cannot fix the error, please try the following scripts. It need the network support and might fail. Please retry until it succeed.

```shell
#!/bin/bash
basedir=$(cd `dirname $0`; pwd)
### Get all valid cids
tmpfile=$basedir/TMPFILE
tmpfile2=$basedir/TMPFILE2

crust_base_url="http://localhost:12222/api/v0"
account=$(curl -s http://localhost:12222/api/v0/enclave/id_info | jq -r .account)
if [ x"$account" = x"" ]; then
    echo "ERROR: account cannot be empty!"
    exit 1
fi
echo "INFO: account:$account"
echo "INFO: get files from subsquid..."
curl -s -XPOST 'https://app.gc.subsquid.io/beta/crust-v5/003/graphql' --data-raw '{"query": "query MyQuery {\n  accountById(id: \"'$account'\") {\n    workReports {\n      addedFiles\n      deletedFiles\n    }\n  }\n}"}' -H "content-type: application/json; charset=utf-8" > $tmpfile
if ! cat $tmpfile | jq '.' &>/dev/null; then
    echo "ERROR: get data from subsquid failed, please try later."
    exit 1
fi
parameters=()
acc=0
maxLen=100
flag=0
recover_del_data='{"deleted_files":['
cat $tmpfile | jq -r ".data.accountById.workReports|.[]|.addedFiles|.[]|.[0:1]|.[]" > $tmpfile2
cat $tmpfile | jq -r ".data.accountById.workReports|.[]|.deletedFiles|.[]|.[0:1]|.[]" >> $tmpfile2
for el in $(cat $tmpfile2); do
    curl -s -XPOST "$crust_base_url/storage/delete" --data-raw '{"cid": "'$cid'"}'
    cid=$(echo $el | xxd -r -p)
    recover_del_data="$recover_del_data\"$cid\","
    flag=1
    ((acc++))
    if [ $acc -ge $maxLen ]; then
        recover_del_data="${recover_del_data:0:len-1}]}"
        parameters[${#parameters[@]}]=$recover_del_data
        recover_del_data='{"deleted_files":['
        flag=0
        acc=0
    fi
done
if [ $flag -eq 1 ]; then
    recover_del_data="${recover_del_data:0:len-1}]}"
    parameters[${#parameters[@]}]=$recover_del_data
fi
if [ ${#parameters[@]} -gt 0 ]; then
    for parameter in ${parameters[@]}; do
        curl -s -XPOST "$crust_base_url/file/recover_illegal" --header 'Content-Type: application/json' --data-raw "$parameter"
    done
    echo "INFO: delete files successfully"
else
    echo "INFO: no files to delete"
fi

```

- Add whitelist
![Picture](assets/benefits/addallowaccount1.png)
![Picture](assets/benefits/addallowaccount2.png)

- Join a new group
![Picture](assets/benefits/joingroup1.png)
![Picture](assets/benefits/joingroup2.png)

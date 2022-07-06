---
id: Q&AForrelatedgroups
title: Related Groups
sidebar_label: Related Groups
---

## 1 Member为啥加不了组?

- Member节点需要上报一次工作量才能加组，该过程耗时较长，大约一小时左右，如果未上报工作量操作加组会报swork.IdentityNotExist的错误。在member机器上通过以下命令可以看到是否上报工作量

```shell
sudo crust logs sworker | grep 'Send work report'
```

- Member账户需要添加到Group的白名单后才能加入Group中

- 仔细检查是否选对账户，有没有上下选反

- 存在有意义文件的Member是无法加组的，会报Illegal Spower，请参考Member节点如何换组

## 2 锁定CRU免上报手续费?

- 为什么要锁

主网的工作量上报需要手续费。一般情况下，每个Member每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了免除工作量上报费用的Benefit模块，Group owner可以通过锁定CRU的方式，减免Member的手续费。

- 为什么锁30个

每个Member需要锁定18CRU来进行手续费减免，但考虑到存在工作量上报不稳定的情况，建议锁定24CRU~30CRU来确保手续费的完全免费。举个例子，假设你的Group准备有6个Member准备加入，那就锁定30*6=180CRU 

- 能省多少

工作量上报的手续费是和每轮上报的有意义文件变化有关，硬盘损坏，网络不稳都会使得手续费增加。初步预估每台member一年的手续费在1CRU ~ 20CRU之间


## 3 Member节点如何换组？

- 退出旧组

![图片](assets/qa/quit1.png)
![图片](assets/qa/quit2.png)

退出旧组之后工作量上报会暂时性出现错误“swork.IllegalFilesTransition”，请用下述脚本修复。

- 执行如下命令查询该Member节点是否接过有意义文件订单
```shell
sudo crust tools file-info all
```
- 如果接过有意义文件订单，调用如下命令将其删掉，并等待下一次上报工作量，大约1小时上报一次工作量
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

如果上述脚本无法修复上报错误，请跑下述脚本。注意下述脚本需要网络环境支持，可能会失败，请重试。
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

- 增加白名单
![图片](assets/benefits/addallowaccount1.png)
![图片](assets/benefits/addallowaccount2.png)

- 加入新组
![图片](assets/benefits/joingroup1.png)
![图片](assets/benefits/joingroup2.png)

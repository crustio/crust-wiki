---
id: buildIntegrationCloudStorage
title: Cloud storage
sidebar_label: Cloud storage
---

Crust Network在结合IPFS的基础上提供了标准的文件上传与下载服务。开发者可以在此基础上构建云存储服务，文件分发以及标准的S3服务. 本文将从上传文件，文件存储，文件下载和使用的角度来进行阐述。

## 准备工作

### 启动IPFS节点
相较于传统的中心化存储，IPFS的存取模式有所不同，网络中的每个IPFS都是对等的，所以如果你想存一个文件首先你需要启动一个IPFS的节点，来加入整个存储网络。IPFS的相关信息请参考以下[链接](https://github.com/ipfs/go-ipfs)

### 依赖库
- [@crustio/type-definitions](https://github.com/crustio/crust.js) 自定义数据类型，用于适配Crust网络
- [@polkadot/api](https://github.com/polkadot-js/api) polkadot api库，提供Promise风格的接口，用于对Crust链进行相关操作

## 上传文件到IPFS
可以使用命令行，HTTP请求或者[ipfs-http-client](https://www.npmjs.com/package/ipfs-http-client)方式来操作IPFS，具体可以参考[链接](https://github.com/ipfs/go-ipfs)，下面以HTTP请求为例。

上传文件，其中5001为ipfs的默认api端口：
```shell
curl --location --request POST 'http://127.0.0.1:5001/api/v0/add' --form '=@"/home/crust/Capture.PNG"
```
返回：
```json
{
    "Name": "Capture.PNG",
    "Hash": "QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV",
    "Size": "285920"
}
```
其中，返回值中获得CID：QmcztAX232UrQ3VUg7MZXsHSrkaRzT3uACZMJSRN7ymjYV 与 Size：285920

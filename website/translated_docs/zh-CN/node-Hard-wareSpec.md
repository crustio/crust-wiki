---
id: nodeHardwareSpec
title: Node Hardware Spec
sidebar_label: Node Hardware Spec
---

注意：对于Isolation节点形态和多节点形态下的Member节点，CPU需要支持SGX：

* 在开始之前请检测您的 CPU 是否支持 SGX。 使用以下方法检测
  * 脚本检测：https://github.com/crustio/crust/wiki/Check-TEE-supportive
  * 官网查询：https://www.intel.com/content/www/us/en/search.html
* 部分主板仅支持SGX的software enabled 方式，参考这个链接https://github.com/intel/sgx-software-enable
* 部分主板的BIOS没有SGX开启选项，请在购买或配置前确定

## 多节点形态硬件Spec

多节点形态下，网络需要一个维护Crust链的出块的Owner节点，以及多个Member节点。

多节点安装流程请查看[这里](ownerNode.md)

### Owner节点

| ** | **CPU** | **主板** | **内存** | **固态硬盘** | **网络环境** | **操作系统** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 要求 | 1. 核心数八核及以上<br>2. 主频高于3Ghz | \ | 总容量 >= 32G | 1.用于存放链（Authority节点）以及其辅助程序的核心数据;<br>2.由于链数据的持续增长，半年约200G，使用1T及以上容量的固态 | 1.带宽 >= 100M<br>2.链（Authority节点）出块对网络要求很高，极力推荐使用有公网IP和固定端口的网络，否则可能因为网络波动带来不必要的损失 | Ubuntu |
| 推荐 | intel 酷睿 i5-9600KF，intel 酷睿 i7-7700K，intel 酷睿 i7-10700，AMD 锐龙5 3500X | \|32G/64G DDR4 的内存 | 1T m.2固态 | 优质网络环境或IDC机房或云节点 | Ubuntu 16.04 / 18.04 / 20.04 |
| 数量 | 1 | 1 | N | 1 | \ | \ |

### Member节点

| ** | **CPU** | **主板** | **内存** | **固态硬盘** | **机械硬盘** | **网络环境** | **操作系统** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 要求 | 1.支持SGX（Software Guard Extensions;<br>2.Intel i5七代及以上;<br>3.核心数八核及以上 | BIOS支持开启SGX | 总容量 >= 32G | 1.用于存放链（Full节点）以及其辅助程序的核心数据;<br>2.由于核心数据的持续增长，建议使用2T及以上的固态 | 1. 做存储盘，存放服务数据<br>2. 读/写速度 >= 200M/s<br>3. 缓存 >= 256M<br>4. 转速 >= 7200 | 1.带宽 >= 100M<br>2.FULL节点同步块对网络有较高要求，需要优质的网络环境，避免工作量交易无法发送所带来的损失 | Ubuntu 16.04 / 18.04 / 20.04 |
| 推荐 | intel 酷睿 i5-9600KF or intel 酷睿 i7-7700K or intel 酷睿 i7-10700 | 配合CPU，有较多的SATA接口支持多个硬盘的接入，或者支持RAID卡 | 32G/64G DDR4 的内存 | 2T m.2固态 | 希捷监控级硬盘8TB 酷鹰系列 7200转256M，西数机械硬盘8TB 7200转256M, 如果做RAID的话推荐硬件RAID | 优质网络环境或IDC机房 | Ubuntu 18.04 |
| 数量 | 1 | 1 | N  | 1 | 1~48 | \ | \ |

## Isolation节点形态硬件Spec

Isolation节点安装流程请查看[这里](isolationNode.md)

| ** | **CPU** | **主板** | **内存** | **固态硬盘** | **机械硬盘** | **网络环境** | **操作系统** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 要求 | 1.支持SGX（Software Guard Extensions;<br>2.Intel i5七代及以上;<br>3.核心数八核及以上 | BIOS支持开启SGX | 总容量 >= 32G | 1.用于存放链（Authority节点）以及其辅助程序的核心数据;<br>2.由于核心数据的持续增长，建议使用2T及以上的固态 | 1. 做存储盘，存放服务数据<br>2. 读/写速度 >= 200M/s<br>3. 缓存 >= 256M<br>4. 转速 >= 7200 | 1.带宽 >= 100M<br>2.链（Authority节点）出块对网络要求很高，极力推荐使用有公网IP和固定端口的网络，否则可能因为网络波动带来不必要的损失 | Ubuntu 16.04 / 18.04 / 20.04 |
| 推荐 | intel 酷睿 i5-9600KF or intel 酷睿 i7-7700K or intel 酷睿 i7-10700 | 配合CPU，有较多的SATA接口支持多个硬盘的接入，或者支持RAID卡 | 32G/64G DDR4 的内存 | 2T m.2固态 | 希捷监控级硬盘8TB 酷鹰系列 7200转256M，西数机械硬盘8TB 7200转256M, 如果做RAID的话推荐硬件RAID | 优质网络环境或IDC机房 | Ubuntu 18.04 |
| 数量 | 1 | 1 | N | 1 | 1~48 | \ | \ |

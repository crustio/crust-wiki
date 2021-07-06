---
id: nodeHardwareSpec
title: Node Hardware Spec
sidebar_label: Node Hardware Spec
---

Note: For storage nodes in single-node and multi-node form, the CPU needs to support SGX:

* Before starting, please use the following methods to detect whether your CPU supports SGX.
  * Script Detection: https://github.com/crustio/crust/wiki/Check-TEE-supportive
  * Official Website Detection: https://www.intel.com/content/www/us/en/search.html
* Some motherboards only support SGX's software enabled method, please refer to this link: https://github.com/intel/sgx-software-enable
* The BIOS of some motherboards does not have an option to enable SGX, please confirm before purchasing or configuring.

## Isolation Node Spec

Isolation node setup [guidence](isolationNode.md)

| ** | **CPU** | **Motherboard** | **RAM** | **SSD** | **HDD** | **Network** | **OS** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Requir ements | 1.Supports SGX（Software Guard Extensions; 2.Intel i5 7th generation or above; 3.Eight cores or above | BIOS supports SGX | Bigger then 32G  | Due to  the continuius growth of data, it is recommended to use 2TB or highter capacity SSD | 1.I/O >= 200M/s; 2.Cache >= 256M; 3.Speed >= 7200; | 1.Bandwidth >= 100M; 2.It is recommended to use a network with public IP and fixed ports, otherwise it may cause unnecessary losses due to network fluctuations | Ubuntu 16.04 / 18.04 / 20.04 |
| Recomm ended  | Intel Core i5-9600KF or intel or Intel Core i7-7700K or Intel Core i7-10700 | CPU Compatible and there are sufficient SATA interfaces to support multiple hard disk access or support RAID controller | 32G/64G DDR4 RAM | 2T m.2 SSD | SEAGATE Hard Disk 8TB Skyhark 7200RPM, 256 MB Cache or Western Digital HDD 8TB, 7200 RPM, 256MB Cache. If drives RAID, hardare RAID is recommended | High-quality network environment or IDC | Ubuntu 18.04 |
| Quantity | 1 | 1 | N | 1 | 1~48 | \ | \ |

## Group Node Spec

Group consists of a group owner and multiple group members.

### Owner Node

Owner node setup [guidence](ownerNode.md)

| ** | **CPU** | **Motherboard** | **RAM** | **HDD** | **Network** | **OS** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Require ments | 1.Eight cores or above; 2.Clock speed higher than 3Ghz | \ | >= 32G | Due to  the continuius growth of chain data, it is recommended to use a 1TB or highter capacity SSD | 1.Bandwidth >= 100M; 2.It is recommended to use a network with public IP and fixed ports, otherwise it may cause unnecessary losses due to network fluctuations | Ubuntu |
| Recomm ended | intel core i5-9600KF or intel core i7-7700K or intel core  i7-10700 or AMD Ryzen 5 3500X | \ | 32G/64 GB DDR4 | 1T SSD | High-quality network environment or IDC | Ubuntu 16.04 / 18.04 / 20.04 |
| Quantity | 1 | 1 | N | 1 | \ | \ |

### Member Node

Member node setup [guidence](memberNode.md)

| ** | **CPU** | **Motherboard** | **RAM** | **SSD** | **HDD** | **Network** | **OS** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Require ments | 1.Supports SGX（Software Guard Extensions; 2.Intel i5 7th generation or above; 3.Eight cores or above | BIOS supports SGX | Bigger then 32G | Due to  the continuius growth of chain data, about  160-200 GB in half a year, it is recommended to use a highter capacity SSD | 1.I/O >= 200M/s; 2.Cache >= 256M; 3.Speed >= 7200; | 1.Bandwidth >= 100M; 2.It requires a high-quality network environment to avoid the loss caused by the inability to send workreport | Ubuntu 16.04 / 18.04 / 20.04 |
| Recomm ended  | Intel Core i5-9600KF or intel or Intel Core i7-7700K or Intel Core i7-10700 | CPU Compatible and there are sufficient SATA interfaces to support multiple hard disk access or support RAID controller | 32G/64G DDR4 RAM | 2T m.2 SSD | SEAGATE Hard Disk 8TB Skyhark 7200RPM, 256 MB Cache or Western Digital HDD 8TB, 7200 RPM, 256MB Cache. If drives RAID, hardare RAID is recommended | High-quality network environment or IDC | Ubuntu 18.04 |
| Quantity | 1 | 1 | N | 1 | 1~48 | \ | \ |

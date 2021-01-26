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

Isolation node setup[guidence](http://Isolation节点形态硬件Spec  Isolation节点安装流程请查看这里)

| ****         | **CPU**                                                      | **Motherb oard**                                             | **RAM**          | **SSD**                                                      | **HDD**                                                      | **Network**                                                  | **OS**             |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------- |
| Requirements | <ol><li>Supports SGX（Software Guard Extensions;</li></ol><ol><li>Intel i5 7th generation or above;</li></ol><ol><li>6 cores or above</li> | BIOS supports SGX                                            | Bigger then 32G  | <br>Due to  the continuius growth of chain data, about  160-200 GB in half a year, it is recommended to use a highter capacity SSD | <ol><li>I/O >= 200M/s;</li></ol><ol><li>Cache >= 256M</li></ol><ol><li>Speed >= 7200;</li></ol><br><ol><li>The hard disk needs to be mounted to a single directory, and technologies such as RAID can be used</li> | <ol><li>Bandwidth >= 100M;</li></ol><ol><li>It is recommended to use a network with public IP and fixed ports, otherwise it may cause unnecessary losses due to network fluctuations</li> | Ubuntu 16.04/18.04 |
| Recommended  | Intel Core i5-9600KF or intel or Intel Core i7-7700K or Intel Core i7-10700 | CPU Compatible and there are sufficient SATA interfaces to support multiple hard disk access or support RAID controller | 32G/64G DDR4 RAM | 512G or 1T m.2 SSD                                           | SEAGATE Hard Disk 8TB Skyhark 7200RPM, 256 MB Cache or Western Digital HDD 8TB, 7200 RPM, 256MB Cache<br><br><br>If drives RAID, hardare RAID is recommended | High-quality network environment or IDC                      | Ubuntu 16.04/18.04 |
| Quantity     | 1                                                            | 1                                                            | N                | 1                                                            | 1~24                                                         | \|\                                                          |                    |



## Group Node Spec

Group consists of a group owner and multiple group members.

### Owner Node

Owner node setup[guidence](http://owner ndoe)

| ****        | **CPU**                                                      | **Motherboard**  | **RAM**                                                      | **SSD**                                                      | **Network**              | **OS** |
| :---------- | :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------- | :----- |
| Required    | <ol><li>6 cores or above</li></ol><ol><li>Clock speed higher than 3Ghz</li> | \|>= 32G         | <br>Due to  the continuius growth of chain data, about  160-200 GB in half a year, it is recommended to use a highter capacity SSD | <ol><li>Bandwidth >= 100M;</li></ol><ol><li>It is recommended to use a network with public IP and fixed ports, otherwise it may cause unnecessary losses due to network fluctuations</li> | Ubuntu                   |        |
| Recommended | intel core i5-9600KF or intel core i7-7700K or intel core  i7-10700 or AMD Ryzen 5 3500X | \|32G/64 GB DDR4 | 512G or 1T m.2 SSD                                           | High-quality network environment or IDC                      | Ubuntu 16.04/18.04/20.04 |        |
| Quantity    | 1                                                            | 1                | N                                                            | 1                                                            | \|\                      |        |




### Member Node

Member node setup[guidence](http://owner ndoe)

| ****         | **CPU**                                                      | **Motherb oard**                                             | **RAM**          | **SSD**                                                      | **HDD**                                                      | **Network**                                                  | **OS**             |
| :----------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------- |
| Requirements | <ol><li>Supports SGX（Software Guard Extensions;</li></ol><ol><li>Intel i5 7th generation or above;</li></ol><ol><li>6 cores or above</li> | BIOS supports SGX                                            | Bigger then 32G  | <br>Due to  the continuius growth of chain data, about  160-200 GB in half a year, it is recommended to use a highter capacity SSD | <ol><li>I/O >= 200M/s;</li></ol><ol><li>Cache >= 256M</li></ol><ol><li>Speed >= 7200;</li></ol><br><ol><li>The hard disk needs to be mounted to a single directory, and technologies such as RAID can be used</li> | <ol><li>Bandwidth >= 100M;</li></ol><ol><li>It requires a high-quality network environment to avoid the loss caused by the inability to send workreport</li> | Ubuntu 16.04/18.04 |
| Recommended  | Intel Core i5-9600KF or intel or Intel Core i7-7700K or Intel Core i7-10700 | CPU Compatible and there are sufficient SATA interfaces to support multiple hard disk access or support RAID controller | 32G/64G DDR4 RAM | 512G or 1T m.2 SSD                                           | SEAGATE Hard Disk 8TB Skyhark 7200RPM, 256 MB Cache or Western Digital HDD 8TB, 7200 RPM, 256MB Cache<br><br><br>If drives RAID, hardare RAID is recommended | High-quality network environment or IDC                      | Ubuntu 16.04/18.04 |
| Quantity     | 1                                                            | 1                                                            | N                | 1                                                            | 1~24                                                         | \|\                                                          |                    |




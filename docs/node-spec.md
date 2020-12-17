---
id: nodeSpec
title: Node spec
sidebar_label: Node Spec
---


Note: For storage nodes in single-node and multi-node form, the CPU needs to support SGX:
- Before starting, please use the following methods to detect whether your CPU supports SGX. 
  - Script Detection: https://github.com/crustio/crust/wiki/Check-TEE-supportive
  - Official Website Detection: https://www.intel.com/content/www/us/en/search.html 
- Some motherboards only support SGX's software enabled method, please refer to this link: https://github.com/intel/sgx-software-enable
- The BIOS of some motherboards does not have an option to enable SGX, please confirm before purchasing or configuring.


<br>

## Single-Node Hardware Spec


Here is the [node setup](node-setup.md) manual for single-node.


![SingleNodeSpec](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/nodespec/single.png)



## Multi-Node Form Hardware Spec
In the multi-node configuration, the node requires a blockchain service node that maintains the crust chain, as well as multiple storage nodes

Here is the [node setup](node-setup.md) manual for multi-node.

### Service Node

![ServiceNodeSpec](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/nodespec/servicenode.png)


<br>

### Work Node

![WorkNodeSpec](https://crust-data.oss-cn-shanghai.aliyuncs.com/wiki/nodespec/worknode.png)
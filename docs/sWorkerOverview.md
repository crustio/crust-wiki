---
id: sWorkerOverview
title: Overview
sidebar_label: Overview
---

## What is sWorker
sWorker(Storage Worker) is one of the core components of Crust Network which is used to validate and inspect storage workload of node and sending it to Crust blockchain. It completes MPoW(Meaningful Proof of Work) mechanism. sWorker resolves the key problem of decentralized storage network which is validating and inspecting storage workload. The problem is that node A claims that it has 10TB storage volumn, how can the inspector quantify this 10TB volumn? How about letting A prove by itself? Obviously, this wouldn’t work. For benefit, A would cheat others. Now that self-proof doesn’t work, other-proof which means proving something from the third perspective may do good for it. This method needs an independent inspector which can be another node or a trusted program. Based on these two views, there are two methods: Zero knowledge proof(ZK proof) and TEE(Trusted Execution Environment) technology. sWorker uses TEE which has the advantages of lower cost, lower network overhead and more efficient validation.

> **ZK proof** can be explained as provement can be done without extra information except proved thing itself. For example, node A claims that it has file X which consists of 1000 pieces. Node B has X too, and if B wants to check if A has X, it can ask A for a random piece of X, such as the 100th piece. B will compare recieved piece with the one it has. Equality means A indeed has X, while inequality means not. The whole process just needs X information. You may ask what we can do if B helps A cheat others. It’s ok, because there is C can check A too. If C cheats too, there has D. In a word, more nodes there are, more hardly to cheat. In the end every node will prove others honestly for their own benefit. You have to say ZK proof is a successful use case for blockchain. Though ZK proof is much more safer, its weakness is obvious. In order to prove X owned by A, almost all nodes need to request X pieces from A, it leads to huge number of requests existing in the network. As the number of file is growing up, the whole network will be too crowded to work well.

> **TEE technology** can let node run a honest process, this process will tell the true workload of the node. Further more it cannot be hacked by any process in the computer, that is to say, even though you have root privilege, you cannot alter or spy on its situation. With this honest process node can prove its workload by itself which reduces pressures of network. But it is hard to design the interfaces of data exchange between secure process and outside. In addition there exists break risk of TEE, if it was broken into a malware process, the whole network would face a huge problem which may lead to collapse.


## How does sWorker work

### Increase workload
sWorker is developed with TEE technology which means it doesn’t trust workload generated outside. sWorker has to increase workload by generating data by itself. There are two methods to generate workload: SRD(Sealed Random Data) and seal file.

1.	SRD raises workload through random data. In detail, random data will be generated in sWorker and then stored in disk. The proof of random data will be maintained in sWorker. Through this proof sWorker can validate related random data.
1.	Seal file increases workload by sealing files. The whole process can be  described as: a file block is sent to sWorker for sealing(Note: no matter how many times a file block is sealed, every time there would come out a different sealed file block. This can effectively prevent Generating Attack and Sybil Attack from happening). Sealed file block will be stored outside while the proof of the sealed block stored in sWorker for validation. 
The process of SRD and seal file are so complicated that we will discuss them later.

### Report workload
sWorker reports workload to Crust blockchain every fixed duration. In order to let Crust chain recognize the workload, sWorker should enroll itself in Crust chain immediately after starting up. Every sWorker has identity and the workload it reports belongs to a specific Crust chain account. Enrollment is to bind identity of sWorker to a Crust chain account. When Crust chain recieves a workload, it will validate the signature and workload, if passed, the workload can be writen into Crust chain.


## Other features

### Metadata persistance
sWorker maintains some secrets such as private key, SRD and seal file proofs. It stores these data in encrypted memory. Preventing loss of these secrets from abnormal termination, power-off and incidents like them, sWorker stores the secrets to outside termly after sealing them. The sealing algorithm is provided by TEE which can only be applied with hardware support. And the encrypted data can only be decrypted by the process which sealed it. In this way sWorker can restore its secrets after restarting from incidents.

### Upgrade
Upgrade of sWorke needs Crust chain support. New sWorker from upgrade will inherit all of the old one’s data.

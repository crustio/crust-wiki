---
id: Q&AForMining
title: Q&A
sidebar_label: Q&A
---

## 1 基础知识

### 1.1 ERA是多久？

一个块大约6秒，一个era大约6小时。很多事件的更新都和era有关，比如有效质押量，验证人选择等。

### 1.2 主网锁定时间？

主网所有的锁定和质押，解锁时间都是112era（28天）

### 1.3 收益的种类和形式？

收益种类主要有三种：出块奖励，质押奖励以及存储收益。收益会全部以是CRU结算。在第一年，网络维护的奖励是5000000CRU，次年变为之前的88%，以此类推。即在第一年，每个era的奖励包括684CRU出块奖励（一天2736CRU）和2737CRU质押奖励（一天10948CRU），其中出块奖励根据出块得分均分给验证人，质押奖励根据生效抵押均分给验证人、候选人、担保人。

### 1.4 1P的机器收益是多少？

可以简单的用每天的CRU增发量去除以全网P数，全网P数可以在APPS中查看

![图片](assets/qa/total_storage.png)

当然，由于验证人会有独立的20%的收入，并且不同节点给出的担保费率不同，所以节点的收入是不平均的


### 1.5 主网1T需要质押多少CRU？

主网前期1T可以获得1CRU的质押上限。存用户数据会提高质押上限（最多10倍），也就是1台机器抵上10台。

### 1.6 如何迁移Maxwell预览网的账户到主网？

方法一：

将Maxwell上账户的backup文件导入到主网上，再把该账户重新备份，生成新的backup文件。然后忘记这个账户，并用新的backup文件恢复，即可配置到节点进行使用
![图片](assets/qa/restore.png)
![图片](assets/qa/restore1.png)

方法二：

将Maxwell上账户的backup文件导入到[Crust Wallet](crustWallet.md),将钱包网络切换为Crust，再通过钱包导出backup文件，即可配置到节点进行使用

### 1.7 运行主网节点需要多少CRU？

举个例子，有一个owner，两个member，每台member 100TB，那么你至少需要1+（2+100）×2=205cru，如果考虑免手续费再加24×2（只是锁仓，不会消耗），这个费用长期是划算的。通过[这里](node-overview.md)查看owner和member的定义。

### 1.8 解除绑定

> 注：解除绑定的金额不能超过可解绑的金额，如果想全部解绑，担保人需要先撤销所有担保，其他角色可直接解绑

![图片](assets/qa/unbond1.jpg)

在“unbond amount”中输入需要解绑的金额，解绑过程持续112个era（28天），在此期间不能作为抵押，该资金将可在解除绑定期后提取

![图片](assets/qa/unbond2.jpg)

## 2 验证人和候选人

### 2.1 什么是候选人和验证人？

验证人和候选人都是网络的维护者，负责产生区块和打包交易。区别在于验证人是有效质押高的节点，直接参与网络维护，而候选人作为验证人的备选，需要随时做好出块的准备。

### 2.2 验证人和候选人的收益区别？

候选人是没有竞争到验证人的节点，它不能获得出块奖励，但是依然可以获得质押奖励。在第一年，网络维护的奖励是5000000CRU，次年变为之前的88%，以此类推。即在第一年，每个era的奖励包括684CRU出块奖励（一天2736CRU）和2737CRU质押奖励（一天10948CRU），其中出块奖励根据出块得分均分给验证人，质押奖励根据生效抵押均分给验证人、候选人、担保人。

### 2.3 候选人如何成为验证人？

通过竞争成为，有效质押量排名靠前的节点就会被选择成为验证人。存储容量决定质押上限，质押或担保决定质押量，质押上限和质押量的最小值是有效质押。质押上限是每1小时更新，质押量和有效质押是每个era更新。验证人的选择每个era重新计算一遍。详情请看这个[链接](validatorGuidance.md)
![图片](assets/qa/be_validator.png)

### 2.4 验证人总数变化规则？

验证人总数会动态调整，这样设置是为了保证网络安全与节点之间有充分的竞争，前期会由技术委员会进行讨论决定，网络稳定后会通过议案表决来决定增加或者减少验证人总数。

### 2.5 验证人界面图标意义？

![图片](assets/qa/app_validator_page.png)
- 1 下个era会参与验证人竞争
- 2 一个session出块的数量，一个era有6个session
- 3 其他人给你质押的有效CRU量
- 4 自己质押的有效CRU量，参数3与参数4加起来用于竞争成为验证人
- 5 由节点提供硬盘容量以及有意义文件计算出的值，决定了该节点可以质押的上限
- 6 由节点设置的担保费率，假设你设置90%，节点将从担保人的收益中抽取10%的钱
- 7 出块得分，决定era的收益，该数据从概率上每个验证人是相同的
- 8 该节点目前出的最新块

### 2.6 担保费（奖励佣金百分比）是什么意思，具体设置多少合适？

担保费（奖励佣金百分比）：给担保人的分成比例，这个值越大，担保人收益分成越高

下列以一个场景进行举例说明： 假如节点A质押了1000 CRU，并被担保了200 CRU，而其质押上限为1000 CRU，设置的担保费为95%，假设每轮产生质押收益为600 CRU，假如全网有效质押量为2000，那么可以算出每个Era的收益为：

- 验证人的有效质押 = 最小值（1000， 1200）*（1000 / 1200） = 1000 * （1000 / 1200） = 833.3 CRU

- 担保人的有效质押 = 最小值（1000，1200）* （200 / 1200）= 1000 * （200 / 1200） = 166.66 CRU

- 验证人收益 = 600 * （833.3 / 2000） + 600 * （166.66 / 2000） * 5% = 252.49

### 2.7 增加/减少质押

- 增加质押金额

![validator](assets/gpos/staking.png)
![validator](assets/gpos/bondmore.png)

- 减少质押金额

![validator](assets/gpos/staking.png)
![validator](assets/gpos/unbond.png)

### 2.8 更改担保费率影响

担保率可以随时更改。当增加时，下个era会生效。当减少时，将会有一个era的惩罚，即下个era的收益将全部给担保人，再下个era就会更改。

## 3 担保人

### 3.1 如何更换担保对象？

1)首先撤销担保对象A
![图片](assets/qa/cutguarantor.jpg)

2)重新选择担保对象B进行担保
![gua](assets/gpos/gurantee1.png)
![gua](assets/gpos/gurantee2.png)
![gua](assets/gpos/gurantee3.png)


### 3.2 如何担保多个验证人/候选人？

在担保金额充足的情况下，可以多次执行担保操作，最多担保16个验证人（候选人）

### 3.2 验证人/候选人最多被多少人担保?

上限是64个

### 3. 作为担保人，如何撤销担保？

> 注：暂时不支持配量操作，多个被担保的话需要依次撤销担保

1)通过担保人的STASH账户查询出该账户担保的所有节点账户和担保额度

![图片](assets/qa/checkguarantor.jpg)

2)撤销对每个节点的担保

![图片](assets/qa/cutguarantor.jpg)

3)通过在步骤一中查询到的被担保人的账户查询并点击该账户，使其进入“guaranteed account”在“amount”中输入撤销担保的额度，点击CutGuarantee.

![图片](assets/qa/cutguarantor1.jpg)

## 4 奖励和惩罚

### 4.1 怎么领取质押和担保奖励？

领取奖励操作流程如下：
进入Crust APPS中，选择Staking，选择Payouts
![图片](assets/qa/payouts1.jpg)
![图片](assets/qa/payouts2.jpg)

### 4.2 每次质押和担保领取奖励，怎么查看收益？

打开[Subscan](https://crust.subscan.io/)
用你的收益账户查询，"收益和罚金"中可以看到领取到的数量
![图片](assets/qa/subscanreward2.jpg)

### 4.3 收益如何解锁？

验证人和候选人的奖励会入账Stash并自动抵押，可以观察到"total stakes"和"own effective stake"的自动增加，如果不想抵押可以执行"unbond"操作进行解锁，注意unbond的数额>为收益的值

担保人的收益会入账担保人的Stash账户，状态为绑定，若想把收益继续担保，需要手动操作，若想解绑，执行"unbond"操作即可，注意unbond的数额为收益的值

收益解锁的时间为28天

### 4.4 Owner节点掉线惩罚相关问题

a. 罚没触发条件

- 每个Session（1小时）结束时会判断验证人是否掉线，当检测到验证人掉线时，会触发惩罚机制，开始惩罚数额的计算
- 每次产生区块的时候，会对区块的打包人（作者）进行双花检测，如果检测到在同样的块高，试图产生两个不同区块的时候，会对其产生罚没

b. 罚没结果

抵押的CRU会被按照惩罚比率扣除，自身会被移除验证人身份，并且在处于罚没的验证人，在被罚没之前被担保的部分会丢失。

c. 罚没比率

惩罚金额为在一个SlashingSpan中发生的最大的惩罚比例乘以验证人自身有效质押量。

```shell
罚没比率 = min((3 * (k - (n / 10 + 1))) / n, 1) * 0.07
```

其中k是全网era掉线人数，n是整体验证人（出块人）的数目。10%以内的掉线人数不会触发实际的惩罚，最终会线性爬升到最大值7%。当三分之一的验证人掉线时惩罚比例约等于5%。

d. 罚没的实际扣钱时间

罚没不会立即发，发生时间会延迟108个Era(27天)后扣钱。

### 4.5 Member节点掉线惩罚

Member节点掉线会触发工作量上报无效的惩罚，会导致有效质押量下降。这段时间内是没有收益的，持续大约9小时，惩罚时间会自动续延

### 4.6 Group如何分发收益的？

链不做收益分发，需owner私下结算

## 5 节点基本问题

### 5.1 安装Node时出现apt update错误

这个是ubuntu系统更新包的错误，和crust无关，一般可以通过优化网络和更换镜像的方式进行解决。

### 5.2 Owner对的硬件要求

- 网络必须稳定，有公网IP，否则出块不稳定可能会导致惩罚
- 硬盘使用SSD，建议500GB ~ 1TB
- 不要求SGX，推荐使用云服务机器

### 5.3 SGX 设置

机器的 SGX（Software Guard Extensions）  模块的默认关闭的，需要在机器的 BIOS 设置。首先将SGX 开关设置为 enable，同时把Secure Boot 关闭（部分主板没有）。如果 SGX 只支持 software enabled 方式，参考这个链接[https://github.com/intel/sgx-software-enable](https://github.com/intel/sgx-software-enable)，或使用以下命令:

```plain
wget https://github.com/crustio/crust-node/releases/download/sgxenable-1.0.0/sgx_enable && sudo chmod +x sgx_enable && sudo ./sgx_enable
```

### 5.4 链的peers上不去原因和解决办法

peers上不去主要是因为网络问题, 如没有固定IP，带宽不够，网段被隔离，一般需要升级网络来解决这个问题。当然也可能是因为没有固定IP或者是因为同一个局域网内启动了大量Member节点，对于同一局域网内启动大量Member节点可以做端口转发来缓解，具体操作如下：

- 执行sudo crust config chain-port 30889的命令将Member A节点的端口改成30889

- 执行sudo crust config generate命令生成配置文件

- 执行sudo crust reload chain命令重启链服务

- 在路由端配置这个Member A节点内网的30889端口转发

- 依此类推MemberB节点做30887的端口转发,MemberC节点做30886的端口转发

### 5.5 如何迁移owner

分为以下四步

- APPS上停止验证，并等待1个era
- 停止原先的owner
- 启用新的owner，并获得新的session key
- 设置新的session key，并重新点击验证

## 6 Member节点相关

### 6.1 安装SGX驱动错误

- BIOS设置错误

出现如下错误，需要查看是否设置好BIOS里面的相关项。需要将secure boot设置为**Disabled**，SGX设置为**Enabled**。若SGX无法设置为**Enabled**，可以设置为**software enabled**，并在启动进入系统后，使用软件的方式激活SGX。
![图片](assets/qa/sworker/install/setBios.png)

![图片](assets/qa/sworker/install/secureBoot.png)

![图片](assets/qa/sworker/install/SGXEnable.png)

- 网络错误

如下图所示，是网络错误，需要检查网络连接是否有问题
![图片](assets/qa/sworker/install/networkErr.png)

- 安装依赖库

如下图所示错误，需要根据安装时候系统给出的错误提示，输入指定指令来修复错误
![图片](assets/qa/sworker/install/aptErr.png)

- 驱动有冲突

如果之前有安装过其他SGX的驱动，可能存在驱动冲突问题，建议直接重装系统

### 6.2 如何挂载硬盘

安装前的注意点：

系统盘的配置：

- 程序将会被安装在/opt/crust路径下，请确保系统盘有大于2TB的固态硬盘空间。 如果不希望使用系统盘，而使用其他的固态硬盘，请事先创建/opt/crust目录，并将该固态挂在到这个目录，注意目录读写权限

文件盘的配置：

接单的文件和SRD占位文件将会被写入/opt/crust/disks/1 ~ /opt/crust/disks/128目录下，这取决于你挂载硬盘的方式。每台物理机最多可以配置500TB的预留空间

- 单一机械硬盘：直接挂载到/opt/crust/disks/1即可

- 多个机械硬盘（多目录）：分别将硬盘挂载到/opt/crust/disks/1 ~ /opt/crust/disks/128目录。举个例子，假设有三块硬盘/dev/sdb，/dev/sdc和/dev/sdd，则可以将他们分别挂载到/opt/crust/disks/1，/opt/crust/disks/2， /opt/crust/disks/3目录。这种方式的效率相对比较高，方式也比较简单，但硬盘的容错性会降低

- 多个机械硬盘（单目录）：对于稳定性不佳的硬盘，利用RAID/LVM/mergerfs等手段将硬盘组合，并挂载到/opt/crust/disks/1目录不失为一种选择。这种方式可以增加硬盘的容错性，但也会带来效率上的下降

- 多个机械硬盘（混合）：结合单目录和多目录的方式进行挂载

可以使用如下命令查看文件目录挂载的具体情况：
```shell
sudo crust tools space-info
```

### 6.3 Member节点可以使用网络硬盘吗？

可以使用，但是只支持挂载/opt/crust/disks/1单个路径

### 6.4 如何在运行的Member节点上增加硬盘?

提示：增加硬盘需要重启crust服务，重启sworker会触发工作量无效的惩罚，持续大约9小时没收益。

- 执行sudo crust stop sworker命令停止sworker服务

- 将需要添加的硬盘挂载到/opt/crust/disks/1 ~ /opt/crust/disks/128

- 执行sudo crust start sworker命令启动sworker服务

- 执行sudo crust tools change-srd xxx添加srd封装任务

### 6.5 Sworker启动错误

- 升级BIOS

如下图所示错误，需要BIOS固件进行升级或者降级，需要调整BIOS的版本号到合适版本(视具体情况进行升级或降级)。如果都不行就更换主板。
![图片](assets/qa/sworker/start/4006upgradeBios.png)

- 网络不稳定

出现4012和AES服务问题，说明网络不稳定，请调整网络
![图片](assets/qa/sworker/start/4012networkUnstable.png)

![图片](assets/qa/sworker/start/AESErr.png)
出现IAS请求失败，是因为IAS服务器不稳定造成，请重试多次直到成功
![图片](assets/qa/sworker/start/IASUnstable.png)

- 配置出错

如下图所示错误，是因为用户更改了backup配置，导致无法重启，请使用第一次启动时配置的账户的backup。如果确定要换账户，请清除所有文件重新配置节点。
![图片](assets/qa/sworker/start/AccountErr.png)
如下图所示错误，是因为没有按照步骤进行设置，请严格按照节点手册进行相关操作
![图片](assets/qa/sworker/start/configErr.png)

- 其他启动错误

没有出现以上错误，却依然无法启动的，请尝试重启多次

### 6.6 sworker日志报"Inability to pay some fees , e.g. account balance too low"的报错是什么原因？

- 执行sudo crust logs chain查看链的日志，具体查看best块高是否和Apps的块高一致，如不一致执行以下命令重启sworker

```shell
sudo crust reload sworker
```

- 确认Member节点配置的账户是否有一定数量的CRU

### 6.7 sworker日志报"Unable to decode using the supplied passphrase"

Member节点配置的账户密码不正确

### 6.8 硬盘设备错误

- 以下是几种常见的由于磁盘不稳定，或者权限没有配置好，导致的问题，出现如下错误请检查磁盘以及相关的读写权限

![图片](assets/qa/sworker/device/4011openfileErr.png)

![图片](assets/qa/sworker/device/4013deleteErr.png)

![图片](assets/qa/sworker/device/4015mkdirErr.png)

- 查看workload的时候卡住，说明某些磁盘的磁道存在问题，需要对磁盘进行检测

![图片](assets/qa/sworker/device/diskErr.png)

![图片](assets/qa/sworker/device/diskErrOrSlow.png)

![图片](assets/qa/sworker/device/diskLost.png)

![图片](assets/qa/sworker/device/inputoutputErr.png)

![图片](assets/qa/sworker/device/readonlyfilesys.png)

### 6.9 Sworker工作量上报错误

使用以下命令查看工作量上报错误的原因：

```shell
sudo crust logs sworker | grep 'WRE'
```

大多数情况下，是链同步不稳定造成的，尽量改善网络环境

### 6.10 封装好的算力，能够切到另一台机器挖吗？

不能，封装的算力是与SGX模块相关的，每一台SGX模块的硬件密钥都是有区别的

### 6.11 illegal reporter

Member配置的账户与其他member重复

## 7 组相关

### 7.1 Member为啥加不了组?

- Member节点需要上报一次工作量才能加组，该过程耗时较长，大约一小时左右，如果未上报工作量操作加组会报swork.IdentityNotExist的错误。在member机器上通过以下命令可以看到是否上报工作量

```shell
sudo crust logs sworker | grep 'Send work report'
```

- Member账户需要添加到Group的白名单后才能加入Group中

- 仔细检查是否选对账户，有没有上下选反

- 存在有意义文件的Member是无法加组的，会报Illegal Spower，请参考Member节点如何换组

### 7.2 锁定CRU免上报手续费?

- 为什么要锁

主网的工作量上报需要手续费。一般情况下，每个Member每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了免除工作量上报费用的Benefit模块，Group owner可以通过锁定CRU的方式，减免Member的手续费。

- 为什么锁30个

每个Member需要锁定18CRU来进行手续费减免，但考虑到存在工作量上报不稳定的情况，建议锁定24CRU~30CRU来确保手续费的完全免费。举个例子，假设你的Group准备有6个Member准备加入，那就锁定30*6=180CRU 

- 能省多少

工作量上报的手续费是和每轮上报的有意义文件变化有关，硬盘损坏，网络不稳都会使得手续费增加。初步预估每台member一年的手续费在1CRU ~ 20CRU之间


### 7.3 Member节点如何换组？

- 退出旧组

![图片](assets/qa/quit1.png)
![图片](assets/qa/quit2.png)

- 执行如下命令查询该Member节点是否接过有意义文件订单
```shell
sudo crust tools file-info all
```
- 如果接过有意义文件订单，调用如下命令将其删掉，并等待下一次上报工作量，大约1小时上报一次工作量
```shell
sudo crust tools delete-file {cid}
```

- 增加白名单
![图片](assets/benefits/addallowaccount1.png)
![图片](assets/benefits/addallowaccount2.png)

- 加入新组
![图片](assets/benefits/joingroup1.png)
![图片](assets/benefits/joingroup2.png)


## 8 其它

### 8.1 质押上限为0是什么原因？

> 注：质押上限（stake limit）每一小时更新一次，有效质押每6小时更新一次

- 排查是否已经点击验证，验证完需要等待1小时才能显示质押上限

- 排查Member节点是否正确加组

- Member节点加组时间需要超过1小时抵押上限才会展示

- 排查owner节点的链是不是正常同步，没有出现掉线情况


### 8.2 有了抵押上限，但是有效抵押为什么还是0？

自己抵押或者别人担保的金额会在1-2个era之后才会生效，大约需要等待6-12小时的时间

### 8.3 认领操作钱包Walletconnect连不上myetherwallet？

1)安装[小狐狸钱包(Metamask)](https://metamask.io/download.html)，推荐使用浏览器插件版本

2)将imtoken或者其他无法walletconnect钱包的私钥导入到小狐狸钱包

3)使用小狐狸钱包连接myetherwallet进行签名

### 8.4 系统盘1T的SSD支不支持
链数据大概一年会产生250G的数据，如果IPFS存储400T的数据，其数据索引会占用1T的容量，所以从机器稳定运行和磁盘利用率来看，推荐使用2T的SSD作为系统盘


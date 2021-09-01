---
id: Q&AForMining
title: Q&A
sidebar_label: Q&A
---

## Crust 主网

### 1. 收益的种类和形式？

收益种类主要有三种：出块奖励，质押奖励以及存储收益。收益会全部以是CRU结算。

### 2. 主网1T需要质押多少币？

节点上报1T的工作量需要质押1CRU,2T则需要质押2CRU,根据生效质押获得抵押收益

## 验证人和候选人

### 1. 候选人如何成为验证人？

通过竞争成为，"effective stake"（effective stake = other effective stake + own effective stake）大节点会被选择成为验证人。"effective stake"是由两个参数决定的，其一，你需要通过增加存储来增加"staking limit"；其二，需要通过质押CRU或者让其他人给你担保CRU来增加"effective stake"。验证人的选择每个era重新计算一遍。详情请看这个[链接](validatorGuidance.md)
![图片](assets/qa/be_validator.png)

### 2. 验证人和候选人的区别？

每个Era的奖励包括484CRU出块奖励和2737CRU质押奖励，其中出块奖励根据出块得分均分给验证人，质押奖励根据生效抵押均分给验证人、候选人、担保人

### 3. 验证人总数变化规则？

验证人总数会动态调整，这样设置是为了保证节点之间有充分的竞争，社区成员可以通过议案表决来决定增加或者减少验证人总数。

### 4. 验证人界面图标意义？
![图片](assets/qa/app_validator_page.png)
- 1 下个era会参与验证人竞争
- 2 一个session出块的数量，一个era有6个session
- 3 其他人给你质押的有效CRU量
- 4 自己质押的有效CRU量，参数3与参数4加起来用于竞争成为验证人
- 5 由节点提供硬盘容量以及有意义文件计算出的值，决定了该节点可以质押的上限
- 6 由节点设置的担保费率，假设你设置90%，节点将从担保人的收益中抽取10%的钱
- 7 出块得分，决定era的收益，该数据从概率上每个验证人是相同的
- 8 该节点目前出的最新块

### 5. 节点启动之后好久"stake limit"和"effective stake"还是0？
"stake limit"每一小时更新一次，"effective stake"每6小时更新一次，如果节点正在SRD, "stake limit"每隔一小时线性增长，如果SRD完成，"stake limit"会保持不变，如果有下降，请及时排查原因

### 6. 担保费（奖励佣金百分比）是什么意思，具体设置多少合适？
担保费（奖励佣金百分比）：给担保人的分成比例，这个值越大，担保人收益分成越高

下列以一个场景进行举例说明： 假如节点A质押了1000 CRU，并被担保了200 CRU，而其质押上限为1000 CRU，设置的担保费为95%，假设每轮产生质押收益为600 CRU，假如全网有效质押量为2000，那么可以算出每个Era的收益为：

1. 验证人的有效质押 = 最小值（1000， 1200）*（1000 / 1200） = 1000 * （1000 / 1200） = 833.3 CRU

2. 担保人的有效质押 = 最小值（1000，1200）* （200 / 1200）= 1000 * （200 / 1200） = 166.66 CRU

3. 验证人收益 = 600 * （833.3 / 2000） + 600 * （166.66 / 2000） * 5% = 252.49

### 7. Member节点如何换组？
1)执行如下命令查询该Member节点是否接过有意义文件订单
```shell
sudo crust tools file-info all
```
2)如果接过有意义文件订单，调用如下命令将其删掉，并等待下一次上报工作量，大约1小时上报一次工作量
```shell
sudo crust tools delete-file {cid}
```
3)退出旧组

![图片](assets/qa/quit1.png)
![图片](assets/qa/quit2.png)

4)增加白名单
![图片](assets/benefits/addallowaccount1.png)
![图片](assets/benefits/addallowaccount2.png)

5)加入新组
![图片](assets/benefits/joingroup1.png)
![图片](assets/benefits/joingroup2.png)

### 8. 为啥加不了组?
1)Member节点需要上报一次工作量才能加组，该过程耗时较长，大约一小时左右，如果未上报工作量操作加组会报swork.IdentityNotExist的错误

2)Member账户需要添加到Group的白名单后才能加入Group中

### 9. 为什么要锁定CRU免上报手续费，锁多少，能省多少，为什么要锁30个?
主网的工作量上报需要手续费。一般情况下，每个Member每天会进行24次工作量上报交易，这带来的大量的手续费开销。为此Crust网络提供了免除工作量上报费用的Benefit模块，Group owner可以通过锁定CRU的方式，减免Member的手续费。每个Member需要锁定18CRU来进行手续费减免，但考虑到存在工作量上报不稳定的情况，建议锁定24CRU~30CRU来确保手续费的完全免费。举个例子，假设你的Group准备有6个Member准备加入，那就锁定30*6=180CRU 

### 10. 如何在运行的member节点上增加硬盘?

提示：增加硬盘需要重启crust服务，重启sworker会触发工作量无效的惩罚，持续大约9小时。

1)执行sudo crust stop命令停止Crust服务

2)将添加的硬盘挂载到/opt/crust/disks/1 ~ /opt/crust/disks/128

3)执行sudo crust start命令启动Crust服务

4)执行sudo crust tools change-srd xxx添加srd封装任务

### 11. Member节点Sworker服务为"exited"状态，查看sworker日志报"Inability to pay some fees , e.g. account balance too low"的报错是什么原因？
1)执行sudo crust logs chain查看链的日志，具体查看best块高是否和Apps的块高一致

2)确认Member节点配置的账户是否有一定数量的CRU

### 12. sworker日志报"Unable to decode using the supplied passphrase"
Member节点配置的账户密码不正确

### 13. 抵押上限为0是什么原因？
1)排查Member节点是否正确加组

2)Member节点加组时间需要超过1小时抵押上限才会展示

3)排查owner节点的链是不是正常同步，没有出现掉线情况

### 14. 有了抵押上限，但是有效抵押为什么还是0？
自己抵押或者别人担保的金额会在1-2个era之后才会生效，大约需要等待6-12小时的时间

## 担保人

### 1. 如何更换担保对象？
1)首先撤销担保对象A
![图片](assets/qa/cutguarantor.jpg)

2)重新选择担保对象B进行担保
![gua](assets/gpos/gurantee1.png)
![gua](assets/gpos/gurantee2.png)
![gua](assets/gpos/gurantee3.png)


### 2. 如何担保多个验证人（候选人）？

在担保金额充足的情况下，可以多次执行担保操作，最多担保16个验证人（候选人）

### 3. 作为担保人，如何撤销担保？
>注：暂时不支持配量操作，多个被担保的话需要依次撤销担保

1)通过担保人的STASH账户查询出该账户担保的所有节点账户和担保额度

![图片](assets/qa/checkguarantor.jpg)

2)撤销对每个节点的担保

![图片](assets/qa/cutguarantor.jpg)

3)通过在步骤一中查询到的被担保人的账户查询并点击该账户，使其进入“guaranteed account”在“amount”中输入撤销担保的额度，点击CutGuarantee.

![图片](assets/qa/cutguarantor1.jpg)


## 奖励和惩罚
### 1. 验证人、候选人和担保人的奖励分布
每个Era的奖励包括484CRU出块奖励和2737CRU质押奖励，其中出块奖励根据出块得分均分给验证人，质押奖励根据生效抵押均分给验证人、候选人、担保人

### 2. Group如何分发收益的？
存储收益是各自结算的， 而其他收益链不做收益分发，需owner私下结算

### 3. 怎么领取奖励？
领取奖励操作流程如下：
进入Crust APPS中，选择Staking，选择Payouts
![图片](assets/qa/payouts1.jpg)
![图片](assets/qa/payouts2.jpg)

### 4. 每次领取奖励，怎么查看收益？
打开[Subscan](https://crust.subscan.io/)
用你的收益账户查询，"收益和罚金"中可以看到领取到的数量
![图片](assets/qa/subscanreward2.jpg)

### 5. owner节点和member节点掉线惩罚相关问题
只有验证人（出块人），真正打包区块和交易的节点会被罚没，需要注意的是

1. 罚没触发条件

- 每个Session（1小时）结束时会判断验证人是否掉线，当检测到验证人掉线时，会触发惩罚机制，开始惩罚数额的计算
- 每次产生区块的时候，会对区块的打包人（作者）进行双花检测，如果检测到在同样的块高，试图产生两个不同区块的时候，会对其产生罚没

2. 罚没结果

抵押的CRU会被按照惩罚比率扣除，自身会被移除验证人身份，并且在处于罚没的验证人，在被罚没之前被担保的部分会丢失。

3. 罚没比率

惩罚金额为在一个SlashingSpan中发生的最大的惩罚比例乘以验证人自身有效质押量。

```shell
罚没比率 = min((3 * (k - (n / 10 + 1))) / n, 1) * 0.07
```

其中**k是全网era掉线人数，n是整体验证人（出块人）的数目**。10%以内的掉线人数不会触发实际的惩罚，最终会线性爬升到最大值7%。当三分之一的验证人掉线时惩罚比例约等于5%。

4. 罚没的实际扣钱时间

罚没不会立即发，发生时间会延迟108个Era(27天)后扣钱。未实际发生的惩罚可以被取消（通过民主模块进行申请）。

member节点掉线惩罚

1. member节点掉线会触发工作量上报无效的惩罚，持续大约9小时，惩罚时间会自动续延

### 6. 验证人&担保人收益解锁与再质押
验证人和候选人的奖励会入账Stash并自动抵押，可以观察到"total stakes"和"own effective stake"的自动增加，如果不想抵押可以执行"unbond"操作进行解锁，注意unbond的数额>为收益的值

担保人的收益会入账担保人的Stash账户，状态为绑定，若想把收益继续担保，需要手动操作，若想解绑，执行"unbond"操作即可，注意unbond的数额为收益的值

## sWorker

### 1. 安装错误

#### 设置BIOS
出现如下错误，需要查看是否设置好BIOS里面的相关项。需要将secure boot设置为**Disabled**，SGX设置为**Enabled**。若SGX无法设置为**Enabled**，可以设置为**software enabled**，并在启动进入系统后，使用软件的方式激活SGX。
![图片](assets/qa/sworker/install/setBios.png)

![图片](assets/qa/sworker/install/secureBoot.png)

![图片](assets/qa/sworker/install/SGXEnable.png)

#### 网络错误
如下图所示，是网络错误，需要检查网络连接是否有问题
![图片](assets/qa/sworker/install/networkErr.png)

#### 安装依赖库
如下图所示错误，需要根据安装时候系统给出的错误提示，输入指定指令来修复错误
![图片](assets/qa/sworker/install/aptErr.png)

### 2. 启动错误

#### 升级BIOS
如下图所示错误，需要BIOS固件进行升级或者降级，需要调整BIOS的版本号到合适版本(视具体情况进行升级或降级)
![图片](assets/qa/sworker/start/4006upgradeBios.png)

#### 网络不稳定
出现4012和AES服务问题，说明网络不稳定，请调整网络
![图片](assets/qa/sworker/start/4012networkUnstable.png)

![图片](assets/qa/sworker/start/AESErr.png)
出现IAS请求失败，是因为IAS服务器不稳定造成，请重试多次直到成功
![图片](assets/qa/sworker/start/IASUnstable.png)

#### 配置出错
如下图所示错误，是因为用户更改了backup配置，导致无法重启，请使用第一次启动时配置的账户的backup
![图片](assets/qa/sworker/start/AccountErr.png)
如下图所示错误，是因为没有按照步骤进行设置，请严格按照节点手册进行相关操作
![图片](assets/qa/sworker/start/configErr.png)

#### 其他启动错误
没有出现以上错误，却依然无法启动的，请尝试重启多次

### 3. 设备错误
以下是几种常见的由于磁盘不稳定，或者权限没有配置好，导致的问题，出现如下错误请检查磁盘以及相关的读写权限
![图片](assets/qa/sworker/device/4011openfileErr.png)

![图片](assets/qa/sworker/device/4013deleteErr.png)

![图片](assets/qa/sworker/device/4015mkdirErr.png)
查看workload的时候卡住，说明某些磁盘的磁道存在问题，需要对磁盘进行检测
![图片](assets/qa/sworker/device/diskErr.png)

![图片](assets/qa/sworker/device/diskErrOrSlow.png)

![图片](assets/qa/sworker/device/diskLost.png)

![图片](assets/qa/sworker/device/inputoutputErr.png)

![图片](assets/qa/sworker/device/readonlyfilesys.png)

## 其它

### 1. 认领操作钱包Walletconnect连不上myetherwallet？

1)安装[小狐狸钱包(Metamask)](https://metamask.io/download.html)，推荐使用浏览器插件版本

2)将imtoken或者其他无法walletconnect钱包的私钥导入到小狐狸钱包

3)使用小狐狸钱包连接myetherwallet进行签名

### 2. 链的peers上不去原因和解决办法
peers上不去主要是因为网络问题,可能是因为没有固定IP或者是因为同一个局域网内启动了大量Member节点

对于同一局域网内启动大量Member节点可以做端口转发来缓解，具体操作如下：

1)执行sudo crust config chain-port 30889的命令将Member A节点的端口改成30889

2)执行sudo crust config generate命令生成配置文件

3)执行sudo crust reload chain命令重启链服务

4)在路由端配置这个Member A节点内网的30889端口转发

5)依此类推MemberB节点做30887的端口转发,MemberC节点做30886的端口转发.......

### 3. 封装好的算力，能够切到另一台机器挖吗？
不能，封装的算力是与SGX模块相关的，每一台SGX模块的硬件密钥都是有区别的

### 4. 解除绑定

>注：解除绑定的金额不能超过可解绑的金额，**如果想全部解绑，担保人需要先撤销所有担保**，其他角色可直接解绑

![图片](assets/qa/unbond1.jpg)

在“unbond amount”中输入需要解绑的金额，解绑过程持续28个era，在此期间不能作为抵押，该资金将可在解除绑定期后提取

![图片](assets/qa/unbond2.jpg)

### 5. APPs上的Epoch和Era怎么理解?
Era:一个时长单位。在Crust网络中，一个Era时长为6个小时。每个Era都会重新进行一次验证人的竞选并且对上一Era的奖励进行结算

Epoch:一个时长单位，时长为1小时。每session会进行验证人的在线检测并触发踢出检查机制

### 6. Member加入group,报"swork.IdentityNotExist"错误
这是因为加入group需要有链上唯一身份，所以需要等待第一次上报work report后（大概一小时），再执行加入的操作。

### 7. 如何挂载硬盘
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

### 8. 系统盘1T的SSD支不支持
链数据大概一年会产生250G的数据，如果IPFS存储400T的数据，其数据索引会占用1T的容量，所以从机器稳定运行和磁盘利用率来看，推荐使用2T的SSD作为系统盘

### 9. 如何迁移Maxwell预览网的账户到主网？

方法一：

将Maxwell上账户的backup文件导入到主网上，再把该账户重新备份，生成新的backup文件，即可配置到节点进行使用
![图片](assets/qa/restore.png)
![图片](assets/qa/restore1.png)

方法二：

将Maxwell上账户的backup文件导入到[Crust Wallet](crustWallet.md),将钱包网络切换为Crust，再通过钱包导出backup文件，即可配置到节点进行使用

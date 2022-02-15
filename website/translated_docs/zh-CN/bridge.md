---
id: bridge
title: Bridge
sidebar_label: Bridge
---

Crust提供了一个可以实时到账的资产跨链桥，允许用户将Crust主网上的CRU跨链转账到以太坊上，也可以将以太坊上的CRU（ERC20）跨链转账到Crust主网上。CRU跨链转账请按照以下流程进行操作。

## 准备工作

1. 安装以太坊插件钱包Metamask，可参考Metamask官方网站进行相关操作。https://metamask.io/
2. 在钱包中导入CRU通证：

打开Metamask钱包，点击“Add Token”进入导入页面

![addToken](assets/general/addToken.png)

在“Search”中直接输入CRU，或者在“Custom Token”中输入CRU通证的合约地址：0x32a7c02e79c4ea1008dd6564b35f131428673c41

![adding](assets/general/adding.png)

点击“Next”进行导入，导入成功后，CRU通证将会显示在钱包列表中。

![added](assets/general/added.png)

## 从Crust主网跨链转账到以太坊

进入Crust Apps -->Accounts-->Bridge，此时浏览器会唤起以太坊钱包。从Crust主网跨链转账到以太坊可以不用连接以太坊钱包，但为了方便确认转账是否成功，建议保持连接。

![toEthConnect](assets/general/toEthConnect.png)

选择“Crust to Ethereum”，在对话框2中输入接收CRU的以太坊地址，在对话框3中输入希望跨链转账的数量，确认无误后点击“Transfer”，签名并完成转账。

![toEthTransfer](assets/general/toEthTransfer.png)

注意，转账通过智能合约自动执行，收10CRU作为手续费。转账可能会存在一定的延时，请耐心等待，可以点击界面右边的链接查看转账状态。

![toEthCheck](assets/general/toEthCheck.png)

跨链转移成功后，CRU通证将会显示在以太坊钱包中。

![toEthShow](assets/general/toEthShow.png)

## 从以太坊跨链转账到Crust主网

进入Crust Apps -->Accounts-->Bridge-->Ethereum to Crust，从以太坊跨链转账到Crust主网，必须要连接以太坊钱包。

在对话框1中选择接收CRU的Crust地址，在对话框2中输入希望跨链转账的CRU数量，点击“Approve”进行签名授权确认。

![toCrustApprove](assets/general/toMaxwellApprove.png)

签名需要花费一定的ETH作为手续费，请保持以太坊账号中有足够的ETH余额。

![toCrustApproveSign](assets/general/toMaxwellApproveSign.png)

完成“Approve”签名授权后，“Submit”会转为可操作状态，点击“Submit”进行签名跨链转账操作。

![toCrustSign](assets/general/toMaxwellSign.png)

每次跨链转账都需要用户完成：1.“Approve”签名授权；2.“Submit”签名转账。出于安全考虑，Apps页面会间隔一段时间后自动刷新，刷新后需要重新进行“Approve”签名授权，所以请在“Approve”授权完成后尽快点击“Submit”并完成签名转账，避免造成手续费的浪费。

## 从Crust主网跨链转账到Elrond

进入Crust Apps -->Accounts-->Bridge，此时浏览器会唤起以太坊钱包。从Crust主网跨链转账到Elrond可以不用连接以太坊钱包.

选择“Crust to Elrond”，在对话框2中输入接收CRU的Elrond地址，在对话框3中输入希望跨链转账的数量，确认无误后点击“Transfer”，签名并完成转账。

![toErlondTransfer](assets/general/toElrondTransfer.png)

注意，转账通过智能合约自动执行，但是目前并不是并不会实时到账。每周三后台程序会周期性执行，待功能稳定后会优化为实时到账。

跨链转移成功后，CRU通证将会显示在Elrond钱包中。

![toErlondShow](assets/general/toElrondShow.png)

## 参考

1. [ChainSafe Bridge](https://github.com/ChainSafe/ChainBridge)
2. [Crust Bridge Pallet](https://github.com/crustio/crust/tree/mainnet/cstrml/bridge)
3. [Crust ChainBridge Service](https://github.com/crustio/ChainBridge)
4. [Crust ChainBridge Types](https://github.com/crustio/chainbridge-substrate-events)
5. [Crust ETH Bridge Contract](https://github.com/crustio/chainbridge-solidity)

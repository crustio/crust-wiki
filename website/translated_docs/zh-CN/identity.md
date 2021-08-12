---
id: identity
title: Identity
sidebar_label: Identity
---

Crust网络允许用户对自己的链上身份进行相关信息披露，并可以提交到Crust社区进行认证。通过完成链上身份设置和认证，用户可以得到以下好处：

* 对于普通用户而言，可以方便他人记忆和搜寻，并方便他人通过身份披露信息建立联系；
* 对于验证人/候选人节点而言，除了上述好处以外，还能帮助节点树立品牌，增加担保人对节点的信任度，建立长期稳定的担保关系。

不同的链上身份状态在Crust网络中会有不同的显示，以下图为例：

![validators](assets/identity/validators.png)

未做链上身份设置的账户，在网络中只会显示其地址信息：

![noid](assets/identity/noid.png)

完成链上身份设置，但未提交或未通过社区认证的账户，在网络中会显示账户的展示姓名（Display name）：

![displayName](assets/identity/displayName.png)

完成链上身份设置，并提交社区认证审核通过的账户，在展示姓名（Display name）前，会显示一个绿色打钩标识符：

![identified](assets/identity/identified.png)

链上身份的设置需要5CRU作为押金，当发起“Clear identity”操作后，押金将会全额退回。

## 链上身份设置操作说明

1. 进入Crust Apps ->Accounts ->My accounts页面，在账户操作列表中选择“Set on-chain identity”

![setOnchainIdentity](assets/identity/setOnchainIdentity.png)

2. 在弹出的对话框中进行相关的信息披露：

![register](assets/identity/register.png)

其中“Display name”是必填项，其余项目根据展示的需求，通过“include field”开关选择并进行信息的填写。填写完成后，点击“Set Identity”。

3. 在弹出的对话框中输入账户密码，并点击“Sign and Submit”完成链上签名操作。钱包用户可以在Crust wallet中完成此项签名操作。

![sign](assets/identity/sign.png)

链上身份设置完成后，其它用户都可以在网络中看到其展示姓名，点击展示姓名之后，会在弹出的页面显示出账户主动披露的所有信息：

![check](assets/identity/check.png)

4. 若用户不再希望披露相关信息，可以通过“Clear Identity”完成清除身份信息操作。

![clear](assets/identity/clear.png)

## 链上身份的认证

完成链上身份设置的用户，可以向Crust社区提出认证申请，社区对其披露信息进行审核并确认其完整性和真实性后，将给予认证通过，认证通过后的账户前面会显示绿色打钩标识符，身份信息页面中的认证审核信息也将从“No judgments”变为“Reasonable”。

![reasonable](assets/identity/reasonable.png)

验证人/候选人节点和普通用户完成认证审核需要披露的信息要求有所不同，具体的信息披露要求和申请渠道将在Crust社区的认证活动中进行说明。

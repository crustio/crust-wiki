---
id: nodeQos
title: Configure QoS
sidebar_label: Configure QoS
---

Crust的Member节点和Isolation节点在服务过程中会涉及到大量文件数据传输操作，在带宽有限的环境下时常会引起链数据同步不稳定，远程登录卡顿等问题。流量控制显得尤为必要。

## 1. QoS概述

服务质量 (QoS) 是一组在网络上工作的技术，以保证其能够在有限的网络容量下可靠地运行高优先级应用程序和流量。 QoS 技术通过为网络流量中的特定流提供差异化处理和容量分配来实现这一点。用户可以通过在路由器中配置不同的QoS策略来管理自己的网络流量。不同型号的路由器会有不同的配置方式，本文仅提供一些常用路由器的配置参考链接，如需更多信息请自行搜索。

## 2. 参考链接

TP-Link:

https://www.tp-link.com/us/support/faq/1104/

OpenWrt:

https://openwrt.org/docs/guide-user/network/traffic-shaping/sqm

D-Link:

https://eu.dlink.com/uk/en/support/faq/routers/mydlink-routers/dir-810l/how-do-i-configure-qos-quality-of-service-settings-on-my-router

Huawei:

https://support.huawei.com/enterprise/en/doc/EDOC1000169679/fdf155e6/qos-configuration

Netgear:

https://kb.netgear.com/24266/How-to-enable-Quality-of-Service-QoS-on-routers-using-the-NETGEAR-web-interface

Asus:

https://netstorage.ringcentral.com/guides/asus.pdf

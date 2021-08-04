---
id: nodeQos
title: Configure QoS
sidebar_label: Configure QoS
---

Crust's Member node and Isolation node will involve a large number of file data transmission operations in the service process, and in an environment with limited bandwidth, it will often cause problems such as unstable link data synchronization and remote login stalls. Flow control is particularly necessary.

## 1. QoS Overview

Quality of Service (QoS) is a set of technologies that work on a network to guarantee its ability to dependably run high-priority applications and traffic under limited network capacity. QoS technologies accomplish this by providing differentiated handling and capacity allocation to specific flows in network traffic. Users can manage their own network traffic by configuring different QoS policies in the router. Different models of routers have different configuration methods. This article only provides reference links for the configuration of some commonly used routers. If you need more information, please search by yourself.

## 2. Reference links

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

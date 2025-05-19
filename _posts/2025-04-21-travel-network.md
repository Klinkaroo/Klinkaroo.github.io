---
layout: post
title: "Using the GL.iNet Beryl AX for Travel and RV Networking"
date: 2025-04-21
categories: [Networking, RV]
tags: 
toc: true
mermaid: true
---

The **GL.iNet Beryl AX** is a compact travel router based on OpenWRT. I use it for secure internet access while traveling, seamless LAN connectivity for devices, and encrypted access to my home network. It performs well in both short-term travel and long-term RV use.

---

## VPN: WireGuard Then, Tailscale Now

One of the primary roles of the Beryl AX in my setup is serving as a VPN gateway. This ensures all network traffic is encrypted and routed through my home network, providing both security and seamless access to internal services. I started with WireGuard and later migrated to Tailscale for a simpler, more flexible setup.

### Original Setup: WireGuard

Initially, I configured the Beryl AX as a **WireGuard client**, connecting to a **WireGuard server** running on my UDM-Pro. While reliable and secure, this approach came with several management challenges:

- Manual key exchange between client and server
- Tracking my **dynamic home IP** and updating the config when it changed
- NAT traversal and firewall rules:
  - The UDM-Pro handled this automatically since the VPN server was on the gateway
  - On other routers, or when the VPN server was behind the gateway, **manual port forwarding** was required
- Static routes had to be configured for LAN access

At one point, my home IP changed while I was away, and I lost access. I had to remotely determine the new public IP and update the WireGuard config. Dynamic DNS would have solved this, but I never implemented it. Overall, the setup worked — but it wasn’t scalable or resilient to network changes.

### Current Setup: Tailscale

I now use **Tailscale**, a mesh VPN built on WireGuard that handles **key management**, **NAT traversal**, and **device discovery** using a centralized control plane. It requires no port forwarding or static IPs and significantly simplifies remote access.

- The **Beryl AX runs the Tailscale client**
- **All traffic is tunneled through my Unraid server**, configured as a **Tailscale exit node**
- **Subnet routing** is enabled:
  - The Beryl AX advertises its local subnet (`10.0.90.0/24`), allowing access to travel LAN devices from home
  - The Beryl AX can access all of my home VLANs through the tunnel

This setup is more resilient than my earlier static route method and requires no firewall or NAT configuration. Devices on both ends automatically discover and connect to each other, and DNS resolution is centralized through my internal DNS servers.

#### Home Network VLANs

My network is segmented using VLANs for access control and isolation:

- `10.0.10.0/24` – **Trusted** (Phones, tablets, desktops, laptops)
- `10.0.20.0/24` – **Servers** (Self-hosted services, Unraid)
- `10.0.30.0/24` – **Security** (Cameras, NVRs; no internet access)
- `10.0.40.0/24` – **IoT** (Home Assistant, Zigbee devices, TVs, plugs; isolated from internal VLANs)
- `10.0.50.0/24` – **Amateur Radio** (Isolated services for future 44-net use)
- `10.0.60.0/24` – **DMZ** (Public services, no access to internal networks)
- `10.0.80.0/24` – **Guest** (Guest Wi-Fi and work devices with internet-only access)

Additional internal-use subnets:

- `10.0.11.0/24` – Former WireGuard VPN network
- `192.168.11.0/24` – WAS-110 management (BellMTS GigaHub bypass)
- `10.0.21.0/28` – 10 Gbps direct storage link between Unraid and Proxmox

I also run Tailscale on my **personal phone** and **laptop** to access my network from anywhere. Having Tailscale on the **Beryl AX** means other devices — including family tablets and TVs — can tunnel securely without needing Tailscale clients installed.

---

## Internet Connectivity

The Beryl AX connects to the internet in several ways:

- **Wi-Fi repeater mode** (used in hotels and campgrounds)
- **USB tethering** to my iPhone 11 (preferred in low-signal or off-grid situations)
- **WAN port** (RJ45 Ethernet), used occasionally
- **USB cellular modems** are supported, though I don’t currently use one

When staying in hotels, the Beryl AX proves especially useful. Many hotel networks have captive portals or device count restrictions. I authenticate once via the router, and all connected devices gain access automatically — no repeated logins on each family device. This also allows casting and local sharing, which hotel networks often block via client isolation.

### USB Phone Tethering

Most provincial and national parks I visit don’t offer Wi-Fi. In those cases, I rely on **USB tethering** to my phone.

Advantages include:

- All devices connect to a single LAN (TVs, laptops, tablets, etc.)
- Avoids mobile hotspot limitations (range, device caps)
- Phone stays positioned near the **WeBoost booster** for optimal LTE signal

This setup also supports **my AllStarLink node**, which I run using a **SHARI module**. While it could connect directly to my phone, the router offers a more stable and persistent connection. It also keeps the phone stationary near the booster and frees up Wi-Fi range and bandwidth.

### Wi-Fi Repeater

When public Wi-Fi is available (campgrounds, libraries, etc.), the Beryl AX:

- Connects to the access point and rebroadcasts a stronger local signal
- Avoids client isolation, enabling device-to-device communication (e.g. casting from a phone to a TV)

### WAN Port

The WAN port can connect to a wired internet source when available. I’ve considered using **Starlink**, and if I adopt it in the future, I can simply plug it into the WAN port. No internal reconfiguration would be needed — all LAN devices would work as expected, even with Starlink’s CGNAT setup.

---

## Power and Hardware Specs

- **Wi-Fi 6 support**  
- **2.5 Gbps WAN port** (configurable as WAN or LAN)  
- **1 Gbps LAN port**  
- **USB-C powered** (5V, up to 3A draw)  
- **Power usage:** under 8 watts (suitable for solar setups)

In the RV, I currently power it from a **120V inverter** (1000W), though a 12V-to-USB-C buck converter would reduce conversion loss and be more efficient for solar/battery power.

---

## Summary

The **GL.iNet Beryl AX** is a capable, reliable travel router that performs well in both mobile and RV-based setups. It integrates smoothly with advanced networking environments and offers features typically found in much larger systems.

### Key Benefits:
- Full VPN support (Tailscale, WireGuard, OpenVPN)
- Wi-Fi repeater and captive portal handling
- USB and Ethernet internet input flexibility
- Subnet routing and exit node functionality
- Based on OpenWRT — highly customizable
- Low power usage for off-grid and solar-friendly applications

It’s proven itself enough that I now carry one when traveling and keep another permanently installed in the RV.


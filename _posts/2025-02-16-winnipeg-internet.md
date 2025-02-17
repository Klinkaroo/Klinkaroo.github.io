---
layout: post
title: "Winnipeg Home Internet"
date: 2025-02-16
categories: [Networking]
tags: 
toc: true
mermaid: true
---

Every time you shop for internet, ISPs try to sell you on **faster speeds** - 1 Gbps, 1.5 Gbps, even 3 Gbps plans. But do you actually need that much speed? Probably not.

Most people assume *more speed = better performance*, but that's not always true. The way your internet works depends on WiFi quality, congestion, latency, and how your devices connect - not just the speed on your bill.
- For streaming, most houstholds don't use more than 200 Mbps.
- For gaming, ping (latency) matters more than speed.
- Bad WiFi is usually the real problem, not slow internet.
- You can get the same quality service for less money with a TPIA provider.

## Winnipeg's Internet Providers

Winnipeg’s internet infrastructure is controlled primarily by two legacy network operators that own the physical cables and fiber optics that deliver internet to homes and businesses. Other providers either rent access, build their own infrastructure, or use alternative technologies.

### Legacy Network Operators

#### Rogers (Formerly Shaw)
- Owns most of the **cable internet** network in Winnipeg
- Offers high-speed broadband via coaxial hybrid-fiber infrastructure.
- Historically the main competitor to BellMTS in the city.

✅ **Pros:** Reliable cable internet with wide availability. Strong competition in urban areas.

❌ **Cons:** Limited upload speeds compared to fiber. No rural expansion plans.

#### BellMTS
- Owns most of the fiber and DSL networks in Winnipeg
- Expanding fiber-to-the-home (FTTH) in select areas.
- Also provides legacy DSL in some rural locations.

✅ **Pros:** Fiber offers symmetrical speeds. Expanding fiber in urban centers.

❌ **Cons:** Legacy DSL is slow. fiber expansion is selective and not available everywhere.

### TPIA Providers (Third-Party Internet Access)

TPIA providers  rent access from Rogers or BellMTS but provide their own customer service, pricing, and billing. This allows consumers to access the same infrastructure as the major ISPs at often lower prices.

Some TPIA Providers in Winnipeg:
- Oxio
- TekSavvy
- Can Com
- VMedia

✅ **Pros:** Lower cost, no aggresive upselling, same infrastructure as major ISPs.

❌ **Cons:** Limited control over maintenance, reliant on Rogers or BellMTS for network repairs.

> Within city limits, a TPIA is likely your best option for network reliability and costs.
{: .prompt-tip}

### Small Fiber Operators Expanding Rural Broadband

Some independent fiber ISPs are building their own fiber networks in rural areas of Manitoba, often bringing gigabit speeds to communities that previously only had DSL or wireless options.

Example: Valley Fiber
- Expanding fiber-optic networks in rural Manitoba.
- Offers true gigabit speeds in serviced areas.
- Exclusive control over infrastructure for the first several years before TPIA regulations apply.

✅ **Pros:** Brings fiber to underserved areas. High-speed, symmetrical connections.

❌ **Cons:** Limited availability. Some areas still waiting for deployment.

### Wireless ISPs (WISPs) Providing Rural Connections

Wireless ISPs use radio towers to deliver broadband to areas where fiber and cable are unavailable. These ISPs provide fixed wireless and LTE-based home internet solutions.

Some WISPs in Manitoba:
- RFNow
- CommStream
- Swift High Speed

✅ **Pros:** Available in areas without wired infrastructure. No need for extensive cabling.

❌ **Cons:** Speeds and reliability depend on distance to the tower and weather conditions.

### Satellite Operators

Satellite internet is available anywhere with a clear view of the sky, amking it a last-resort option for areas with no wired or wireless internet access.

Popular Satellite Internet Providers:
- Starlink (Low Earth Orbit - LEO)
- Xplornet (Geostationary and LEO Hybrid)

✅ **Pros:** Available anywhere. Good for extreme rural locations.

❌ **Cons:** High latency (except Starlink), expensive, limited data plans in some cases.

> Satellite internet can be a viable option for remote areas, but latency is a key factor—especially for gaming and real-time applications. Just remember to factor this into your decision-making.
{: .prompt-warning}

## How Much Speed Do You Really Need?

Many households think they need gigabit (1,000 Mbps) internet, but let's look at real-world usage:

### Streaming Bandwidth Needs

If you have four people stremaing at the same time, her's what you're actually using:
- Netflix 4K: ~25 Mbps per stream
- Netflix 1080p: ~5 Mbps per stream
- YouTube 1080p: ~5-8 Mbps per stream

If everyone is streaming in 4K, your household uses about 100 Mbps total. If they're in 1080p, it's only 20-40 Mbps total.

Even with extra bandwidth for web browsing, video calls, and smart devices, most homes rarely exceed 150-200 Mbps of real usage at any given time.

### Gaming: Speed Doesn't Matter, Ping Does

Many assume you need fast internet for gaming, but that's a myth. Games barely use any bandwidth.
- Online games (Call of Duty, Fortnite, etc.) typically use 5-10 Mbps of bandwidth.
- Ping (latency) is what really matters.

#### What is Ping?

Ping is the time it takes for data to travel between your device and the game server.
- Good ping: Under 30ms (ideal for competitive gaming)
- Average ping: 30-60ms (still good)
- Bad ping: Over 100ms (noticeable lag)

A faster internet speed won't lower your ping - that depends on:
- Your ISP's network quality
- Your reouter's QoS (Quality of Service) settings
- Using wire (Ethernet) instead of WiFi

## Why WiFi Quality Matters More Than Speed

Most internet slowdowns at home aren't because of internet speed, but bad WiFi performance.

### Proper Access Point Placement is Key

WiFi coverage is highly dependent on where you place your Access Points (APs). A high-speed plan won't help if your AP is in a poor location. For best performance:
- Place your AP in the centre of your home, avoiding basements or corners.
- Avoid placing APs near metal objects, microwaves, or thick walls, which can degrade signals
- Use multiple APs or a mesh system for larger homes, to ensure full coverage.
- If using ISP-provided extenders, make sure they are correctly positioned to rebroadcast the signal efficiently. 

### Wired Connections: The Best Way to Improve Your Network

Whenever possible, wire everything you can. A wired Ethernet connection provides lower latency, more stability, and removes congestion from your WiFi network. If your ISP-provided router only has four Ethernet ports, you can easily expand it by adding a simple, unmanaged switch (available in 4, 8, or 16 ports). These are relatively cheap and straightfoward to set up, allowing you to increase the number of wired connections in your hom effortlessly.

Devices that should be wired whenever possible:
- Gaming PCs and consoles (lowers ping and improves stability)
- Smart TVs and streaming devices (frees up WiFi for mobile devices)
- Desktop computers (ensures reliable speeds for work and downloads)
- Smart home hubs and security cameras (improves performance and reduces interference)

### Why Replace Your ISPs Router?

Most ISP-provided routers are underpowered and lack advanced features like QoS and better WiFi handling.

#### Recommended Routers
- **Budget option:** TP-Link Archer AX55 (WiFi 6)
- **Mid-range option:** ASUS RT-AX86U (WiFi 6 with strong QoS features)
- **High-end option:** Ubiquiti UniFi Dream Machine or ASUS ROG Rapture GT-AX11000 (WiFi 6E)

## Upload Speed: Do You Really Need High Upload or Symmetrical Speeds?

Most standard internet plans have much lower upload speeds than download speeds, and for most people, this is perfectly fine. High upload speeds or symmetrical download/upload speeds are not necessary unless you have a specific use case where upload speed is critical.

### When Does Upload Speed Matter?
- Working from home - If you're frequently video conference (Zoon, MS Teams), uploading large files, or using cloud-based applications, having at least 10-30 Mbps upload can make a difference.
- **Content creators** - If you regularly stream on Twitch, upload YouTube videos, or back up large files to cloud storage, a higher upload speed (50+ MBps) can reduce wait times and improve performance.
- **Hosting game servers** - If you're running a dedicated game server for friends, a higher upload speed helps ensure smooth performance.
- **Smart security cameras** - Many WiFi security cameras continuously upload footage to the cloud. If you have multiple cameras, a good upload speed (10-20 Mbps or more) helps prevent video lag or buffering.

For general use - browsing, streaming, gaming, and light video calls - a standard upload speed of 10-20 Mbps is more than enough. Paying extra for symmetrical speeds or extremely high upload speeds is unnecessary unless you fall into one of the categories above.

## Internet Plan Costs

| ISP             | 25  | 30  | 50  | 75  | 100 | 150 | 250 | 300 | 500 | 750 | 1000 | 1500 | 2000 | 3000 |
| :------         | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: | :-:  | :-:  | :-:  | 
| BellMTS (Fiber) | --- | --- | 85  | --- | 93  | --- | --- | 102 | 112 | --- | ---  | 127  | ---  | 147  |
| Rogers          | --- | --- | --- | --- | 90  | --- | 100 | --- | 110 | --- | 125  | ---  | 145  | ---  |
| Oxio            | 40  | 43  | --- | 49  | 57  | 71  | --- | 82  | --- | 88  | 90   | ---  | ---  | ---  |
| TekSavy         | --- | 61  | --- | --- | 81  | --- | --- | --- | 118 | --- | 130  | ---  | ---  | ---  |
| VMedia          | 35  | --- | --- | 40  | --- | 70  | 75  | 80  | --- | 90  | 95   | ---  | ---  | ---  |
| Can Com         | 40  | 45  | --- | 52  | 62  | --- | 75  | --- | --- | 87  | 95   | ---  | ---  | ---  |

Disclaimers:
- Regular prices, does not include promos
- Based on an address in Winnipeg, Manitoba
- Prices checked *16 February 2025*

> **Recommendation:** For most four-person households with typical internet needs, a 150–300 Mbps plan from Oxio, VMedia, or Can Com is a solid choice. If you have a rare use case requiring higher upload speeds (e.g., streaming or frequent large file uploads), consider BellMTS Fiber if available—its symmetrical 300/300 Mbps plan is more than sufficient. Avoid Rogers and TekSavvy due to high prices and aggressive sales tactics. Remember, most households rarely need more than 300 Mbps—those who do already know it. 
{: .prompt-tip}

## Final Thoughts: What Itnernet Plan Should You Actually Get?

- Most households don't need more than a 300 Mbps plan.
- Gaming is about latency, not speed.
- Bad WiFi, not slow internet, is what causes buffering and lag.
- High upload speeds aren't necessary unless you have specific need like stremaing or hosting.
- TPIA providers offer alternatives to big ISPs, often at lower prices.

Instead of overpaying for 1 Gbps because an ISP told you to, focus on what actually improves your internet experience - better WiFi, proper router placement, and a good ISP. You'll save money and get better performance where it matters most. 
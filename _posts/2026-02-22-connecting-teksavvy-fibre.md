---
layout: post
title: "Connecting TekSavvy Fibre on BellMTS"
date: 2026-02-22
categories: []
tags: []
toc: true
mermaid: true
---

# Background

I started browsing TekSavvy while looking for alternative internet plan now that our BellMTS promo was finishing and they had no interest in continuing a reasonable price. I wasn't generally interested because service would be through Rogers cable and my house currently doesn't have a Rogers drop and I'm not interested in waiting years for them to trench in a temporary service. However, when I typed in my address for service, another option now popped up... 1500/940 Mbps. That's fibre! Wait, is TekSavvy reselling fibre? 

A few google searches, I found [Telecom Decision CRTC 2023-358](https://crtc.gc.ca/eng/archive/2023/2023-358.pdf) which required large incumbent companies to provide workable wholesale access to their FTTP networks in Ontario and Quebec within six months of the decision (available by May 2024). This was temporary at the time, until the order. Then came [Telecom Order CRTC 2024-261](https://crtc.gc.ca/eng/archive/2024/2024-261.pdf) in October 2024 expanded this requirement across Canada, including Manitoba, by 15 February 2025. This decision opened up FTTP lines via wholesale for all the current infrastructure but gave incumbents a 5 year headstart on new infrastructure. 

So in February 2025, TekSavvy jumped into fibre game in Manitoba. TekSavvy had already been operating in town through Rogers' network and BellMTS DSL lines. Luckily, the fibre infrastructure in my neighborhood was eligible.

I chose TekSavvy for a few reasons:
- Local peering at MBIX (Manitoba Internet Exchange), as well as as their peering policy generally which emphasizes in-country interconnection. It aligns with my view that Canada-to-Canada traffic should be kept within Canadian borders.
- More transparent and privacy friendly Terms of Service and Privacy Policy
- Technically open-minded to bringing your own equipment (the Bell Gigahub's inability to bridge is ridiculous)

# The Service

If you are not familiar with TPIAs, TPIA stands for Third Party Internet Access. TekSavvy is a TPIA provider, meaning they don't own the physical fibre lines but lease access to BellMTS' distribution network within the city.

When you sign up with TekSavvy, they send a request to BellMTS (the line provider). BellMTS technicians are responsible for any work on their lines, including installation.

So traffic flows:
- Demarcation point: Where BellMTS's responsibility ends and your home network begins
- Last mile/local loop: The fibre from your house to the street to the cabinet or central office
- Backhaul: From the cabinet or central office to the Point of Interconnection (POI) or handoff point
- POI: Where BellMTS hands off the traffic to TekSavvy's network

## In your home

### BellMTS Supplied

In your home, BellMTS will use the existing fibre line in your home, or pull a new line if you don't have one or need a second because you have existing BellMTS services. At the end of that, BellMTS will typically provision a Nokia G-010S-A GPON ONT ([Data Sheet](https://www.nokia.com/asset/210921/)), which is an SFP module. I've also heard of installs using a Nokia XS-010X-Q or similar non-SFP ONT. That standalone device will take the incoming fibre and provide you with an RJ45 connection. Both do the same thing.

It should be noted that at the time of writing, TekSavvy only provides the 1.5 Gbps plan, so BellMTS will install a GPON unit. It will not be XGS-PON.

This ONT device is basically your "modem".

### TekSavvy Supplied

To facilitate connection to TekSavvy's network, and because consumers expect it, they will ship you an Adtran 856v6 ([Data Sheet](https://www.adtran.com/-/media/adtran/resources/data-sheets/pdfs/854-v-6.pdf)). This device is a router. It is not strictly necessary, but it drastically simplifies TekSavvy's deployment. That router will handle the authentication to TekSavvy, get your IP address, VLAN tagging, and forward traffic between your local area network (LAN) and the wide area network (WAN) while providing you with WiFi.

#### Adtran 856v6 Tech Specs

For WAN, the Adtran 856v6 will get that in one of two ways. If BellMTS gives you an SFP ONT, then it will plug into the 2.5GE SFP Port on the bottom of the router. If they provision you with a standalone ONT, then you will plug a network cable between that ONT and the 2.5GBASE-T Port on the back of the device.

For your LAN, the Adtran 856v6 has 4 1000BASE-T Ports with RJ-45 Connectors as well as 2.4 GHz and 5.0 GHz radios (802.11b/g/n/ac/ax).

So with a 1.5 Gbps service, it's important to note that there are no wired links to get the full service to a single device. You will saturate your link either through multiple devices or potentially on wireless (theoretically, your mileage may vary). If you plan to use your own equipment and bridge the Adtran to your own router via a network cable, you will cap out at 940/940 Mbps. My current understanding is that the 2.5GBASE-T cannot be used as the bridged port.

# Installation Experience

The installation process was not straightforward.

## Initial Order and Setup

We ordered the service on TekSavvy's website and chose an appointment about 4 business days later. We waited all day for the technician, but nobody showed up. We called TekSavvy and they reported that the ticket was never placed with BellMTS. They confirmed a new appointment for the following week. This was a 3 business day delay due to a sloppy ordering process on TekSavvy's part.

When the BellMTS technician arrived with the SFP ONT, he checked the line signal (-12 dBm), inserted the ONT into an HH3000, synced everything with their backend systems, and installed the ONT into the Adtran. Everything should have worked, but it didn't and the Adtran showed an orange light with no connection.

## Troubleshooting Begins

Multiple calls to TekSavvy with pin hole resets and other troubleshooting attempts gave nothing. TekSavvy contacted BellMTS, who reported "Everything looks fine on our end." BellMTS really playing the "we don't want to support TPIAs." They send a field technician.

The second BellMTS technician (a contractor) checked the signal (-12 dBm), confirmed everything looked good on their end, and left. Another round of calls with TekSavvy technicial support, BellMTS is blaming the Adtran router. TekSavvy and I are fairly confident it's not a router issue, but TekSavvy sends one anyways to appease BellMTS. Four business days, router arrives, and same problem.

Now that the router has been swapped, BellMTS accepts that maybe it's on their end. So they send a third technician who replaces the ONT. They also say "they've rebuilt the profile" on the line. By this point, three technicians had verified the physical line is good (-12 dBm each time), suggesting the issue was routing-related, not physical. At this point, it's been a few weeks, a TekSavvy supervisor now takes on the case. 

## Escalation and Root Cause

More back and forth between the TekSavvy Supervisor and BellMTS. They send a fourth technician, the original installer, who checks everything with their backend support. They check the provisioning, the serial numbers, the mac addresses... Everything on the systems that they have access to says it's good on their end. We cannot figure out why it won't work. 

That evening, I connected the SFP directly to my UDM-Pro and tested with the PPPoE credentials provided by TekSavvy. My UDM logs showed I was contacting an Access Aggregator, but it was declining my credentials as invalid. This proved the issue wasn't the physical line and it has to be provisioning or routing. The Adtran system logs are not ideal, because they don't show many lines. Since this time I knew what to look for, I found the authentication failure in the logs and sent screenshots to TekSavvy as evidence that it was beyond field tech support.

## Legal Escalation and Resolution

The supervisor contacted BellMTS, who assured them they would look into it. Apparently, that meant dispatching another field technician without notifying me. I happened to be home and explained the issue was routing, not physical—there was nothing they could do. After reporting this visit, the TekSavvy supervisor escalated the case to their Carrier Affairs and legal department.

In my opinion, BellMTS was effectively refusing to provide TekSavvy access in accordance with the CRTC decision. About a week after legal got involved, they escalated to BellMTS higher management. Within hours, the issue was fixed and the Adtran connected.

The root problem was bureaucratic: BellMTS's field technicians and Tier 1/2 support don't have access to or authority over the provisioning and routing systems that were actually broken. They were working off scripts that don't cover TPIA routing issues. It took the legal department to reach the right people, the ones who can actually change the system-level configurations. It's frustrating that it required that level of escalation, but it highlights how fragmented large incumbents are, with departments that don't communicate across boundaries.

## Final Instalation Thoughts

This whole experience is typical of a bigger problem in Canadian telecom. The CRTC wanted to let other companies compete by using BellMTS's fibre lines, but without real enforcement, BellMTS can just slow things down and make it so frustrating that people give up. On Reddit, you'll see multiple posts from TekSavvy customers who had similar issues getting connected... problems that weren't TekSavvy's fault at all. It's hard not to ponder whether dragging out the process is intentional, designed to frustrate people enough that they abandon the switch and come back to BellMTS for service. It seems like BellMTS management doesn't want to give their field technicians and support teams the tools to actually help TPIA customers. No escalation pathways, no playbooks for routing issues, nothing. When the system is deliberately kept broken at the management level, the frontline staff can't fix it even if they wanted to. The result is the same either way: people can't switch providers.

The fact that it took the TekSavvy legal team escalating this to BellMTS management just to get basic service working shows how broken this system is. The CRTC set up these rules to foster competition, but nobody is enforcing it with real teeth. Unless that changes, these wholesale access orders won't mean much, and Canada's internet market will stay dominated by giants.

# My Network Configuration

I always intended to run my own equipment. I used the Adtran to set up the connection initially so that BellMTS can't blame my side for the issue. Now that I'm connected, the Adtran has been packed up and placed on the shelf.

## TekSavvy on BellMTS Settings

- TekSavvy uses **PPPoE** for their FTTP on BellMTS. Get your credentials from them.
  - This is different from BellMTS FTTP residential subscribers, who use DHCP in Manitoba. When Bell bought MTS, they inherited their plant equipment, so some things are different than the Bell Canada deployment in Ontario or the Bell Aliant deployment out east. Not all "Bell guides" are correct.
- You need to set **VLAN 40** on your WAN interface.
- I cloned my Adtran MAC address. I'm not sure that was strictly necessary, but it's easy to do.

## Gateway and 2.5G Negotiation

My gateway is a Unifi Dream Machine Pro. Behind that sits my local area network, which includes a few access points, some 1 Gig wired devices, and a couple 10 Gig wired devices. While I could just bridge the Adtran, I would then limit my WAN connection to 940/940 Mbps. I'm paying for 1500/940, so I want my network to take full advantage of it—whether it's multiple devices saturating the link or a single 10 Gig device.

First, I wanted to verify that the UDM-Pro could even connect to TekSavvy's network. I placed the Nokia ONT directly into my UDM-Pro's WAN SFP+ port with VLAN 40, MAC address, and PPPoE credentials. In seconds, my UDM-Pro connected and got its public IP. That's confirmed as working! One issue though: the UDM-Pro SFP+ ports can only negotiate at 1 Gig or 10 Gig. Since the Nokia ONT only supports 1 Gig or 2.5 Gig, it negotiates to 1 Gig. This is fine if you're okay with a 940/940 service and similar to bridge mode but with the Adtran out of the equation. Not a bad setup.

So I needed a way to get the Nokia ONT to connect at 2.5 Gig. A lot of Reddit posts recommend a media converter, but a few mentioned a 2.5 Gig switch. Since the switch option was cheaper, that's what I went with. I picked up a [MokerLink 2G04210GS from Amazon](https://www.amazon.ca/dp/B0CN8NRF96). A cheap, unmanaged 2.5G Ethernet switch with SFP+ ports that can negotiate 2.5G. It's really important that you check the tech specs of the switch or media converter to make sure the SFP cage can do 2.5G; some are like the UDM-Pro where it's 10G or 1G only. With the switch in hand, I plugged the Nokia ONT into the SFP cage and got 2.5G negotiation. For the next part, I needed to get the switch connected to the UDM-Pro. A couple options exist. The switch I got has two SFP cages, so I could probably get a DAC cable and go from the switch into my UDM-Pro SFP+ port and have that negotiate at 10Gig. However, I had a [10Gtek ASF-10G-T](https://www.amazon.ca/dp/B01KFBFL16) lying around unused, so I used that instead. It has the ability to negotiate different rates on either end. Plugged into the UDM-Pro, it's 10G on the SFP side, and then it has an RJ-45 port on the other. That RJ-45 connects via a network cable to a 2.5G RJ45 port on the switch and negotiates at 2.5G. Once everything was plugged in with the same settings on the UDM-Pro, we had connection!

## Speedtest Time

I quickly pulled up Fast.com and Speedtest.net on my desktop. I wanted to see over 940 Mbps! I ran both tests targeting different servers and couldn't get above 940 Mbps. After longer than I care to admit, I realized I was an idiot. I have a 1 Gig connection to my desktop. So I jumped into the Unifi console, ran a speedtest there, and sure enough: 1500 down, 940 up. Perfect.

But do I trust Unifi speedtest? No. I wanted to see more than one test. So I hopped onto one of the 10 Gig servers and downloaded a Linux ISO (Thanks [MUUG](https://muug.ca/)!). Speed? About 1.1 Gbps. Well, that's above 940, so I call that a success and proof that I can get more than a gig out of the connection. 

## MTU and MSS Clamping

After everything was up, I noticed some apps and sites would hang. For example, the Reddit app would sometimes just not load. Close and reopen, and it was fine. Same thing with some sites: the page would spin, I’d refresh, and it would load.

I dug into the logs and noticed something odd in the PPPoE negotiation. During discovery, the MTU is negotiated at 1492 on both sides. After I send my login credentials and they’re accepted, the server requests that I send only 1452, while it’s still fine with me receiving 1492 inbound. My guess is this has something to do with how BellMTS is routing traffic to TekSavvy and whatever tagging they’re doing upstream.

Some digging led me to TLS not behaving well when packets get fragmented. If packets are larger than the effective MTU, they get chopped up, and some apps don’t like it. The fix is MSS clamping. I won’t pretend to fully understand it, but it basically tells devices on your network not to send TCP segments larger than a set size so they fit inside that 1452 upstream requirement.

I set MSS Clamping to **Custom** and the Max TCP Connection Segment Size to **1412**. (In the Unifi Console: Unifi Devices → your gateway → Settings → MSS Clamping → Custom. It’s not under the normal Internet or Networks menus.) Once I set that, the weird hangs disappeared and everything has been smooth since.

# Performance and Peering

TekSavvy peers at [MBIX](https://www.mbix.ca/) (Manitoba Internet Exchange) in Winnipeg, plus [HFXIX](https://aixp.ca/) (Halifax Internet Exchange), [MonctonIX](https://aixp.ca/) (Moncton Internet Exchange), [CANIX](https://canix.ca/) (CANIX Montreal), [SIX Seattle](https://www.seattleix.net/) (Seattle Internet Exchange), [TORIX](https://www.torix.ca/) (Toronto Internet Exchange), [VANIX](https://www.vanix.ca/) (Vancouver Internet Exchange), [YXEIX](https://yxeix.ca/) (Saskatoon Internet Exchange), and [YYCIX](https://yycix.ca/) (Calgary Internet Exchange). Unlike BellMTS, which often backhauls traffic to Toronto, local peering keeps a lot of traffic closer to home and typically reduces latency and hop count.

I can connect directly to LES.NET services at about 1 ms now, instead of the 50+ ms I was seeing when the path went to Toronto and came back to Winnipeg via Chicago. [Radio Amateurs of Manitoba](https://ramb.ca) IP infrastructure is hosted here. Thanks [LES.NET](https://les.net/)!

Cloudflare peers at MBIX, so I get about 1 ms of latency to their edge. Services behind Cloudflare's CDN often respond around 8 ms for me, even when the origin isn't in Manitoba, because their edge caches are local. That's how the internet is supposed to work, and how CDNs are supposed to accelerate applications.

I've run a few traceroutes and noticed peering in Manitoba. Some AWS traffic appears to hand off to TekSavvy in Toronto, while some western destinations go west through Calgary and then down to Seattle/LA instead of heading east to Toronto. Routes vary by service and time, but overall the paths make more sense than everything being dragged through Toronto like on BellMTS.

# Final Thoughts

The physical fibre segment performs as advertised once BellMTS gets their act together.

The install experience took nearly a month. I will put a little blame on TekSavvy here. It took almost two weeks for us to find in the system logs that we were reaching a server but the login was failing. That could have given TekSavvy the ammunition earlier to push BellMTS to fix a provisioning or routing issue instead of wasting time checking lines. BellMTS likely would have still mucked around, but the troubleshooting on the TekSavvy side could be tighter.

Once we identified the issue, they were persistent and engaged the right people. If you stick with them, you will eventually get connected. The root cause was on BellMTS, and as consumers that is where the real blame belongs.

After it was sorted, bypassing the TekSavvy gear worked great. I like how open TekSavvy is. They provide credentials, give the warning that "We cannot guarantee anything on your equipment," and then wish you luck. That is a very different experience compared to BellMTS and other providers who actively discourage you from bypassing their equipment. They even break bridge modes. The Bell Gigahub used to have a working ADMZ that they broke and never fixed. TekSavvy even has guides on [how to bridge their equipment](https://help.teksavvy.com/teksavvy-faq/post/all-about-the-adtran-834-v6-yJuSPLQ0Yf7HXds#ea59f8d7-fe30-4879-9d54-c18035fe0aa6). Yes!

I feel bad for the small TPIAs trying to bring competition to the sector. I looked at the [Tariff](https://crtc.gc.ca/eng/archive/2024/2024-261.pdf) and BellMTS charges TekSavvy $68.94 for my line. They also charge $244.13 for the FTTP install. The promotional rate for TekSavvy is $90 a month for 12 months. With a little rounding, over 12 months that is about $70 for the line and about $20 a month for the install they paid. They make $0 in the first year. Meanwhile, BellMTS sends out contracted marketing agencies door to door to offer the 1500/940 service for less than the wholesale rates. The whole system is meant to discourage competition. The fact that the CRTC allows them to set those rates and then undercut them at retail pricing is absurd. On top of the pricing, BellMTS caused technical difficulties that burned a lot of TekSavvy hours. The supervisor on my case spent hours on it. The other Tech Support employees spent hours on hold with BellMTS support. The Carrier Affairs team. The NOC team doing diagnosis. The whole system is designed to squeeze the small players out and maintain large conglomerate consolidation in the market.

I hope TekSavvy continues and does not get bought out like many other TPIAs. I hope they keep supporting the fight and lobbying for better internet access for all.
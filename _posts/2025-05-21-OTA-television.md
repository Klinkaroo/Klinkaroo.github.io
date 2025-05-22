---
layout: post
title: "Over-the-Air Television in Manitoba"
date: 2025-05-21
categories: []
tags: []
toc: true
mermaid: true
---

How I avoid paying for cable but still get local programming and live TV.

I haven’t had a cable TV subscription since 2018. One of the ways I get television programming is through over-the-air (OTA) television.

## What is OTA Television

Over-the-air television is a way to receive **free** TV broadcasts using an antenna. There are no subscription fees, and no cable or satellite plan is required. 

TV stations transmit digital signals on VHF and UHF frequencies. If you live within range, a simple set-top antenna can be had for around $50. However, there are different types of antennas with varying performance — more on that below.

This isn't the fuzzy analog TV your grandparents had. OTA TV in Canada is digital, with stations broadcasting in HD 720p or even 1080i resolution.

It's a great way to get local news, sports, and national programming for free.

### Antennas

#### Set-Top Antennas

These are small, flat antennas designed to sit near or on top of your TV — think of those old bunny ears, but updated. In urban environments with strong signals, these work great. Placing them in a window helps. I have a SkyWire AD-525 from Canadian Tire for $50 taped in a window. I'm able to receive Radio-Canada, CBC, and Global with no issues. I'm on the fringe for getting CTV reliably. If it were mounted outside, I’d probably have no problem. CityTV comes in weak, which brings us to the next antenna types.

#### Attic Antennas

Installed in your attic, these antennas stay out of sight and out of the weather. You don't need a mast or tower on your roof, which some people consider unsightly. They can be directional, which helps boost gain in one direction. Being in the attic also gives them more elevation than your living room, although roof materials do attenuate the signal slightly.

#### Rooftop or Tower Antennas

Once a common sight in neighborhoods, these antennas are mounted on a mast or tower on your roof or property. They provide the best signal quality and range. Many are directional, and some people even use multiple antennas to capture signals from different directions. Installation is more involved and more expensive, but the payoff is the ability to pull in signals from tens of kilometers away.

### Broadcast Inside the House

Today, very few stations still broadcast in analog. Most now use digital, which requires an **ATSC tuner**. Most TVs made after 2008 include this — look for labels like "ATSC", "Digital Tuner", or "HDTV." If your TV is older, you'll need a digital converter box.

That setup works great for a single TV, but I wanted more flexibility.

#### HDHomeRun FLEX DUO

So I connected my antenna to an HDHomeRun — specifically the **Flex Duo** model. This device is a network-connected TV tuner with two ATSC tuners built in. It receives the OTA signal, extracts the MPEG-2 Transport Stream, and serves it over your home network.

Using an app like VLC, I can go to a stream address like `http://192.168.1.100:5004/auto/v3` and watch live TV. HDHomeRun also has apps for smart devices so you can watch from anywhere on your network.

But I wanted even more flexibility — like the ability to record.

#### Plex

Plex integrates live TV directly into my server and adds DVR functionality. Since my HDHomeRun has two tuners, I can record two channels at once. I use Plex as my interface across all my devices — Apple TVs, iPads, even while camping. Because I VPN back to my house, I can access Winnipeg OTA channels remotely.

Plex also gives me guide info, so it feels like a modern TV service.

## Broadcasters that do OTA

In Manitoba, you can get CBC, CTV, Global, CityTV, and Radio-Canada — all free over the air.

### Programming

One of the big advantages of OTA TV is access to **local programming**. Most networks provide Winnipeg or Manitoba-focused newscasts.

Also, **live sports**. CBC carries *Hockey Night in Canada*, and that’s how I watch the NHL playoffs — for free. No Sportsnet+ subscription required!

### Manitoba Towers

| Call Sign | Virtual Channel | RF Channel | Network | Resolution | Location                               |
| :-------- | :-------------: | :--------: | :------ | :--------- | :-------                               |
| CBWFT-DT  | 3.1             | 32.3       | SRC     | 720p       | Richardson Building, Downtown Winnipeg |
| CBWT-DT   | 6.1             | 27.3       | CBC     | 720p       | Richardson Building, Downtown Winnipeg |
| CKY-DT    | 7.1             | 7.1        | CTV     | 1080i      | Sainte Agathe, South of Winnipeg       |
| CKND-DT   | 9.1             | 19.1       | Global  | 1080i      | 201 Portage, Downtown Winnipeg         |
| CKND-2    | 2.1             | 9.1        | Global  | 1080i      | West of Minnedosa                      |
| CHMI-DT   | 13.1            | 13.2       | CityTV  | 1080i      | South of Elie                          |

---

## Nerd Talk

### ATSC 1.0

OTA TV in Canada currently uses the **ATSC 1.0** standard (Advanced Television Systems Committee), which replaced analog NTSC broadcasts. It transmits **digital MPEG-2 video** and **AC-3 audio** over a 6 MHz-wide TV channel.

Each RF channel carries one **MPEG-2 transport stream**, which can include:
- 1 or more video streams
- Audio
- Program guide data (via PSIP)
- Emergency alerts

ATSC 1.0 uses **8VSB modulation**, optimized for fixed reception with high image quality — up to **1080i HD** — but it's sensitive to interference and not ideal for mobile devices (which is where ATSC 3.0 will shine eventually).

The **maximum bitrate** per channel is ~**19.39 Mbps**, which has to be shared between all subchannels. That’s why a station with only one 1080i stream looks better than one broadcasting three 480i subchannels.

### Channel-to-Frequency Map

Here’s how the local RF channels in Winnipeg map to actual frequencies in MHz. Each RF channel occupies 6 MHz of bandwidth.

| Virtual | RF Channel | Frequency Range (MHz)  | Center Frequency |
|---------|------------|------------------------|------------------|
| 3.1     | 32         | 578–584                | 581 MHz          |
| 6.1     | 27         | 548–554                | 551 MHz          |
| 7.1     | 7          | 174–180                | 177 MHz          |
| 9.1     | 19         | 500–506                | 503 MHz          |
| 2.1     | 9          | 186–192                | 189 MHz          |
| 13.1    | 13         | 210–216                | 213 MHz          |

If you're watching TV on 3.1 (SRC), you're actually tuned into RF 32 — in the **UHF band**, broadcasting at 581 MHz. Your TV uses **PSIP data** to map this physical channel to the familiar virtual channel number. This system was introduced during the digital transition and spectrum reallocation — particularly the repack of the 600 MHz band — allowing stations to keep their original channel branding even if their actual transmission frequency changed.

### Full RF Chennel-to-Frequency Map (Canada/US ATSC 1.0)

| RF Channel | Frequency Range (MHz)  | Center Frequency (MHz)  | Band       |
|------------|------------------------|-------------------------|------------|
| 2          | 54–60                  | 57                      | VHF Low    |
| 3          | 60–66                  | 63                      | VHF Low    |
| 4          | 66–72                  | 69                      | VHF Low    |
| 5          | 76–82                  | 79                      | VHF Low    |
| 6          | 82–88                  | 85                      | VHF Low    |
| 7          | 174–180                | 177                     | VHF High   |
| 8          | 180–186                | 183                     | VHF High   |
| 9          | 186–192                | 189                     | VHF High   |
| 10         | 192–198                | 195                     | VHF High   |
| 11         | 198–204                | 201                     | VHF High   |
| 12         | 204–210                | 207                     | VHF High   |
| 13         | 210–216                | 213                     | VHF High   |
| 14         | 470–476                | 473                     | UHF        |
| 15         | 476–482                | 479                     | UHF        |
| 16         | 482–488                | 485                     | UHF        |
| 17         | 488–494                | 491                     | UHF        |
| 18         | 494–500                | 497                     | UHF        |
| 19         | 500–506                | 503                     | UHF        |
| 20         | 506–512                | 509                     | UHF        |
| 21         | 512–518                | 515                     | UHF        |
| 22         | 518–524                | 521                     | UHF        |
| 23         | 524–530                | 527                     | UHF        |
| 24         | 530–536                | 533                     | UHF        |
| 25         | 536–542                | 539                     | UHF        |
| 26         | 542–548                | 545                     | UHF        |
| 27         | 548–554                | 551                     | UHF        |
| 28         | 554–560                | 557                     | UHF        |
| 29         | 560–566                | 563                     | UHF        |
| 30         | 566–572                | 569                     | UHF        |
| 31         | 572–578                | 575                     | UHF        |
| 32         | 578–584                | 581                     | UHF        |
| 33         | 584–590                | 587                     | UHF        |
| 34         | 590–596                | 593                     | UHF        |
| 35         | 596–602                | 599                     | UHF        |
| 36         | 602–608                | 605                     | UHF        |

Channels 37–51 are no longer available for OTA TV use in Canada or the U.S. due to the 600 MHz band repack and auction for mobile services.
---
layout: post
title: "First Parks on the Air Activation - Hecla-Grindstone (CA-0546)"
date: 2025-05-19
categories: [Camping, RV, Amateur Radio, POTA]
tags: [radio, pota, camping]
toc: true
mermaid: true
---

On the May long weekend, I completed my first **Parks on the Air (POTA)** activation at **Hecla-Grindstone Provincial Park (CA-0546)** in Manitoba. The weather on arrival was cold and rainy, and day one (May 17) was overcast with some light flurries throughout the morning. Conditions improved slightly by mid-day on day two (May 18), when the overcast cleared and allowed for some limited solar generation.

This was our second camping trip of the season and an opportunity to field test both the new amateur radio setup and the updated RV electrical system. We departed with the battery at approximately 90% due to charging limitations with the onboard converter. Using a 100W Renogy portable panel, we were only able to bring in around 10Ah on day two, which was just enough to maintain operations through to our departure. I plan to upgrade the battery bank to 200Ah to improve runtime in low-sun conditions.

## Antenna Setup

This was the first field deployment of a homebrew End-Fed Half Wave (EFHW) antenna system designed specifically for portable operations. The components included:
- **Matching Transformer**: 49:1 mounted in a 3D-printed case from [MakerWorld](https://makerworld.com/en/models/811197-end-fed-antenna-efhw-winder?from=search#profileId-752571), printed using a Bambu Lab P1S using PETG
- **Radiating Element**: Approximately 10 meters of 16 AWG speaker wire
- **Feedline**: Coaxial RG58 cable to the radio
- **Supports**: Trees at the campsite

![Antenna Internals](/assets/img/2025-05-19-first-POTA-activation/antenna-open.jpg)
![Antenna Complete](/assets/img/2025-05-19-first-POTA-activation/antenna-closed.jpg)

For tuning, I used a **RigExpert Stick Pro** to verify antenna resonance. The wire was not trimmed but instead folded back to bring the system into range. The final measured SWR was 1.25 at 14.100 MHz, which was sufficient for 20-metre SSB operation.

On Day 1, the antenna was installed with the feedpoint approximately 1 metre off the ground and the high end around 2 metres. For Day 2, I adjusted the configuration to raise the feedpoint to about 2 metres and the high end to around 3–4 metres. This change resulted in noticeably improved signal reports and receive conditions.

The antenna was strung roughly east–west, resulting in a north–south radiation pattern. This favoured contacts into the U.S. and made Western Canada a bit more challenging. Receive conditions overall were excellent. The noise floor was around –120 dBm, with no noticeable RFI in the RV. The transformer enclosure remained cool, and the antenna handled 20 W SSB without issue.

![Antenna Deployed](/assets/img/2025-05-19-first-POTA-activation/antenna-deployed.jpg)

## Day 1 - Partial Activation Attempt

On 17 May, I operated for a short period in the evening and completed two SSB contacts—one into Ontario and another into Ohio. However, I ran out of time before the UTC rollover and did not meet the minimum number of contacts required for activation.

## Day 2 - Successful Activation

![Radio Setup](/assets/img/2025-05-19-first-POTA-activation/radio.png)

The next morning, I returned to 20 metres SSB and completed a full activation. Over the course of the morning and early afternoon, I made ten successful contacts. Most were with stations in the U.S. Midwest and Northeast, including Pennsylvania, Indiana, Ohio, West Virginia, and Louisiana. I also made a contact into Texas, which was the furthest of the activation and a first for me. A station from Alberta was also logged—challenging due to the antenna's orientation but ultimately successful.

## Digital Modes and Next Steps

FT8 would have been useful during this activation, particularly given the band conditions and marginal signal reports. I’m currently waiting on interface cables for the Digirig Mobile to integrate FT8 with the Xiegu G90. Once installed, digital modes should make it easier to secure contacts during low-bandwidth windows and help close out remaining QSOs when time or conditions are limited.

I also plan to improve my voice operation technique. I’ve been primarily hunting, but I need to get more comfortable calling CQ and holding a frequency to draw stations in. This should speed up future activations, particularly during peak periods. That said, I’ll continue to pursue park-to-park contacts when they come up—those are a highlight of the POTA experience.

## Summary

This first activation confirmed that the field setup is functional and reasonably efficient for voice operation. A few planned improvements—FT8 integration, increased battery capacity, and better deployment flexibility for the antenna—should make future activations smoother. I'm looking forward to activating more parks this summer with these lessons applied.

If you’ve done similar setups or have suggestions for improving portable operations, I’d be happy to hear your feedback.
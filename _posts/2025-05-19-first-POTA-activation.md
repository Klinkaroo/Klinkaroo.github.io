---
layout: post
title: "First Parks on the Air Activation - Hecla-Grindstone (CA-0546)"
date: 2025-05-19
categories: [Camping, RV, Amateur Radio, POTA]
tags: [radio, pota, camping]
toc: true
mermaid: true
---

On the May long weekend, I completed my first **Parks on the Air (POTA)** activation at **Hecla-Grindstone Provincial Park (CA-0546)** in Manitoba. The weather when we arrived in the evening was cold and rainy. We woke up on day one (May 17) to overcast and temperatures near freezing. There were even some light flurries in the morning. My mid-day on day two (May 18), the overcast started to break up, which allowed us to generate a little bit of solar power.

This was the second trip with the upgraded electrical setup. We left with the battery at approximately 90% due to the quirks of the onboard converter ([more on that here](/posts/camping-trailer-electrical/)). On day two, we were finally able to throw out the 100W portable panel, but we were only able to bring in around 10Ah with the spring sun. This helped through and got us to day three with about 10 Ah left in the bank. I plan on upgrading the battery bank to 200Ah to improve the runtime in low-sun and long-weekend conditions.

## Antenna Setup

This was the first deployment of my new homebrew End-Fed Half Wave (EFHW) antenna. It's made with:
- **Matching Transformer**: 49:1 mounted in a 3D-printed case from [MakerWorld](https://makerworld.com/en/models/811197-end-fed-antenna-efhw-winder?from=search#profileId-752571), printed using a Bambu Lab P1S using PETG
- **Radiating Element**: Approximately 10 meters of 16 AWG speaker wire
- **Feedline**: Coaxial RG58 cable to the radio
- **Supports**: Trees at the campsite

![Antenna Internals](/assets/img/2025-05-19-first-POTA-activation/antenna-open.jpg)
![Antenna Complete](/assets/img/2025-05-19-first-POTA-activation/antenna-closed.jpg)

For tuning, I have a **RigExpert Stick Pro**. The wire was folded back to bring the resonance into range. The final measured SWR was 1.25 at 14.100 MHz.

On Day 1, the antenna was installed with the feedpoint approximately 1 metre off the ground and the high end around 2 metres. Which is probably more of an NVIS deployment I had orignally envisioned for this system on 40 metres.

For Day 2, I adjusted the configuration to raise the feedpoint to about 2 metres and the high end to around 3–4 metres. This change resulted in noticeably improved receive conditions.

![Antenna Deployed](/assets/img/2025-05-19-first-POTA-activation/antenna-deployed.jpg)

The antenna was strung roughly east–west, resulting in a north–south radiation pattern. This favoured contacts into the US and made Western Canada a bit more challenging. Receive conditions overall were excellent. The noise floor was around –120 dBm. The antenna handled 20W SSB without issue.

## Day 1 - Partial Activation Attempt

On 17 May, I operated for a short period in the afternoon and completed two SSB contacts—one into Ontario and another into Ohio. However, I ran out of time before the UTC rollover and did not meet the minimum number of contacts required for activation.

Thanks Gary (KM1GRY) for being my first POTA and HF contact and sticking it out through the noise. 

## Day 2 - Successful Activation

![Radio Setup](/assets/img/2025-05-19-first-POTA-activation/radio.png)

The next morning, I returned to 20 metres SSB and completed a full activation. Over the course of the morning, I made ten successful contacts. All park-to-park since my CQ calls went unawnsered. I'm thinking I just didn't have the power to make myself known, even with a self-spot on the POTA website. Most contacts worked were down in the noise with weak signal. I worked stations in the U.S. Midwest and Northeast, including Pennsylvania, Indiana, Ohio, West Virginia, and Louisiana. I also made a contact into Texas, which was the furthest of the activation. A station from Alberta was also logged—challenging due to the antenna's orientation but ultimately successful.

## Digital Modes

FT8 would have been useful during this activation, particularly given the band conditions and marginal signal reports. I was waiting on interface cables for the Digirig Mobile to integrate FT8 with the Xiegu G90. Once received, digital modes should make it easier to secure contacts during low-bandwidth windows and help finish off remaining QSOs when time or conditions are limited.

## Summary

This first activation confirmed that the field setup is functional. A few planned improvements—FT8 integration, increased battery capacity, and better deployment flexibility for the antenna—should make future activations smoother. I'm looking forward to activating more parks this summer with these lessons applied.

If you’ve done similar setups or have suggestions for improving portable operations, I’d be happy to hear your feedback.
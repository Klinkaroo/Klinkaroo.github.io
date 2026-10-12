---
title: Canada's Aviation Weather Observing Network
date: 2026-10-11 12:00:00 -0500
# last_modified_at: 
categories: [Aviation, Weather]
tags: [aviation, weather, meteorology]
---

Canadian weather observation sites, TAF aerodromes, upper-air stations, upper wind forecast points and weather radars. Toggle layers with the legend. Click a site for details.

<div id="map" style="height: 600px;"></div>

<script src="/assets/leaflet/canadian-weather-network.js"></script>

<style>
    .wx-swatch {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 6px 0 2px;
      vertical-align: middle;
      box-sizing: border-box;
    }

    .wx-swatch-icon {
      border-radius: 0;
      width: 12px;
      height: 12px;
      font-size: 12px;
      line-height: 0;
    }

    .wx-balloon {
      background: none;
      border: none;
    }

    .wx-balloon span {
      display: block;
      font-size: 22px;
      line-height: 0;
      filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 1px #000);
    }

    .wx-count {
      color: #888;
      font-size: 11px;
    }

    .leaflet-control-layers-overlays label {
      margin-bottom: 2px;
    }

    .wx-legend-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-weight: bold;
    }

    .wx-legend-toggle {
      width: 22px;
      height: 22px;
      padding: 0;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: #fff;
      color: #333;
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
    }

    .wx-legend-toggle:hover {
      background: #f4f4f4;
    }

    .leaflet-control-layers:not(.wx-minimized) .wx-legend-header {
      margin-bottom: 6px;
    }

    .wx-minimized .leaflet-control-layers-list {
      display: none;
    }
</style>

# Map items

## Weather observation – aerodrome (blue)

A surface weather observation reported under the aerodrome's identifier (e.g. CYWG). Observations come from a person (`METAR`), an automated system (`METAR AUTO`), or both at different hours.

## Weather observation – not an aerodrome (green)

A station with its own identifier, mostly ECCC climate stations. Reports SYNOP and SWOB for forecasting and climate records. Some sit on or beside an airport.

## TAF aerodrome (pink ring)

An aerodrome forecast is issued here by the Canadian Meteorological Aviation Centres. TAFs are only issued where METAR and SPECI reports are available.

## Upper-air station (balloon)

A radiosonde is launched by balloon at 00Z and 12Z to measure pressure, temperature, humidity and wind aloft. Run by ECCC.

## Upper wind and temperature point (white)

A point in the FB forecast of wind and temperature aloft. ECCC (`CWAO`) issues 3,000 to 18,000 ft; the US National Weather Service (`KWNO`) issues 24,000 to 53,000 ft. Some points are grid points with no station.

## Weather radar (purple)

An ECCC S-band Doppler weather radar. The ring shows 240 km Doppler coverage.

# Popup terms

| Term | Meaning |
| :- | :- |
| Human observations | METAR by a person: FSS, contract weather office, CARS or DND |
| CARS | Community Aerodrome Radio Station; its staff take the observations |
| FSS | Flight Service Station |
| AWOS | NAV CANADA or DND automated station issuing `METAR AUTO` |
| LWIS | Limited automated report (wind, temperature, altimeter) after hours |
| AWS | ECCC automatic weather station |

# Sources

- [ECCC SWOB-ML station list](https://dd.weather.gc.ca/today/observations/doc/swob-xml_station_list.csv)
- [ECCC MSC Datamart bulletins](https://dd.weather.gc.ca/today/bulletins/alphanumeric/)
- [Transport Canada AIM](https://tc.canada.ca/en/aviation/publications/transport-canada-aeronautical-information-manual-tc-aim-tp-14371), MET section
- [MANOBS](https://www.canada.ca/en/environment-climate-change/services/weather-manuals-documentation/manobs-surface-observations.html)
- [OurAirports](https://ourairports.com/data/) and [aviationweather.gov](https://aviationweather.gov/data/api/)

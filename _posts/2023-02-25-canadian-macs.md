---
title: Canadian Military Aeronautical Communications System (MACS)
date: 2024-02-25 21:00:00 -0600
# last_modified_at: 
categories: [Aviation, Military]
tags: [aviation, radio, air traffic control]
image:
  path: /assets/img/macs.png
---
# MACS Locations

|          | Site | Name           | Latitude | Longitude  |
| :-       | :-   | :-             | :-:      | :-:        |
| Edmonton | RX   | Riverbend      | 53.67799 | -113.31629 |
|          | TX   | Cardiff        | 53.78539 | -113.54327 |
| Trenton  | RX   | Carrying Place | 44.03212 | -77.55042  |
|          | TX   | Poite Petre    | 43.84366 | -77.14800  |
| Debert   | RX   | Masstown       | 45.37714 | -63.43516  |
|          | TX   | Great Village  | 45.42124 | -63.55974  |

<div id="map" style="height: 250px;"></div>

<script>
  var map = L.map('map').setView([49.7713, -96.8165], 3);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var macs = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Riverbend Receiver",
        "type": "rx"
      },
      "geometry": {
        "coordinates": [
          -113.31629,
          53.67799
        ],
        "type": "Point"
      },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Cardiff Transmitter",
        "type": "tx"
      },
      "geometry": {
        "coordinates": [
          -113.54327,
          53.78539
        ],
        "type": "Point"
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Carrying Place Receiver",
        "type": "rx"
      },
      "geometry": {
        "coordinates": [
          -77.55042,
          44.03212
        ],
        "type": "Point"
      },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Poite Petre Transmitter",
        "type": "tx"
      },
      "geometry": {
        "coordinates": [
          -77.148,
          43.84366
        ],
        "type": "Point"
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Masstown Receiver",
        "type": "rx"
      },
      "geometry": {
        "coordinates": [
          -63.43516,
          45.37714
        ],
        "type": "Point"
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Great Village Transmitter",
        "type": "tx"
      },
      "geometry": {
        "coordinates": [
          -63.55974,
          45.42124
        ],
        "type": "Point"
      },
      "id": 5
    }
  ]
}

  function getMarkerColor(type) {
    return type === 'tx' ? 'red' : 'green';
  }

  L.geoJSON(macs, {
    pointToLayer: function(feature,latlng) {
      var markerColor = getMarkerColor(feature.properties.type);
      var markerIcon = L.icon({
        iconUrl: '/assets/leaflet/markers/antenna-' + markerColor + '.png',
        iconSize: [25,25],
        iconAnchor: [12,31],
        popupAnchor: [1,-34],
        shadowSize: [41,41]
      });
      return L.marker(latlng, {icon: markerIcon});
    },
    onEachFeature: function(feature, layer) {
      if (feature.properties.name) {
        var popupContent = feature.properties.name;
        layer.bindPopup(popupContent);
      }
    }
  }).addTo(map);
</script>

# MACS Frequencies

All stations are remoted to Trenton, call sign **TRENTON MILITARY**

## Initial Contact

| Freq (kHz) (West of 90W) | Freq (kHz) (East of 90W) |
| :-:                      | :-:                      |
| 11271                    | 11232                    |
| 8989                     | 9007                     |


## Working Frequencies

| Freq (kHz) | Freq (kHz) | Freq (kHz) | Freq (kHz) |
| :-:        | :-:        | :-:        | :-:        |
| 3047       | 6706       | 11232      | 15031      |
| 3092       | 6745       | 11265      | 17994      |
| 4703       | 8989       | 11271      | 18012      |
| 5717       | 9007       | 13257      | 23250      |

> During SAR operations, oinly those stations actively engaged in these operations will make use of **5717 kHz**. Aircraft other than those participating in SAR operations will be instructed to change to another MACS frequency.
{: .prompt-info}

# Trenton Automated Hourly Broadcast Schedule (VOLMET)
- QAM = Actuals
- QFZ = Forecasts

| Freq      | Time        |
| :-        | :-          |
| 15034 kHz | 1000Z-0000Z |
| 6754 kHz  | 2300Z-1100Z |

| Time         | Ident | Location   |
| :-:          | :-:   | :-         |
| H+00 to H+10 |       | *No Broadcast* |
| H+10 to H+15 | CYAW  | Shearwater |
|              | CYZX  | Greenwood  |
|              | CYQX  | Gander     |
|              | CYHZ  | Halifax    |
| H+15 to H+20 | CYBG  | Bagotville |
|              | CYTR  | Trenton    |
|              | CYOW  | Ottawa     |
|              | CYYZ  | Toronto    |
| H+20 to H+25 | CYYC  | Calgary    |
|              | CYOD  | Cold Lake  |
|              | CYWG  | Winnipeg   |
| H+25 to H+30 | CYQQ  | Comox      |
|              | CYYJ  | Victoria   |
|              | CYVR  | Vancouver  |
|              | CYXX  | Abbotsford |
| H+30 to H+35 | LDZA  | Zagreb     |
|              | LDSP  | Split      |
|              | LIPY  | Ancona     |
|              | BGTL  | Thule      |
| H+35 to H+40 | EINN  | Shannon    |
|              | EGPK  | Prestwick  |
|              | BIKF  | Keflavik   |
|              | LPLA  | Lajes      |
| H+40 to H+45 | CYAW  | Shearwater |
|              | CYZX  | Greenwood  |
|              | CYQX  | Gander     |
|              | CYHZ  | Halifax    |
| H+45 to H+50 | CYBG  | Bagotville |
|              | CYTR  | Trenton    |
|              | CYOW  | Ottawa     |
|              | CYYZ  | Toronto    |
| H+50 to H+55 | CYYC  | Calgary    |
|              | CYOD  | Cold Lake  |
|              | CYWG  | Winnipeg   |
| H+55 to H+60 | CYYJ  | Victoria   |
|              | CYVR  | Vancouver  |
|              | CYXX  | Abbotsford |
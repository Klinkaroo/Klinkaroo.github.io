// Initialize the map
var map = L.map('map').setView([60, -96], 3);

// Add the tile layer
L.tileLayer(
  'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/Tile/{z}/{y}/{x}.png',
  {
    attribution:
      'Map data &copy; Esri, HERE, Garmin, © OpenStreetMap contributors, and the GIS User Community | Stations: ECCC, NAV CANADA, WMO OSCAR',
  }
).addTo(map);

// Pane so the radar coverage sits underneath everything else
map.createPane('coverage').style.zIndex = 380;

// One entry per layer: label, marker style, stacking order, and whether it is shown on load
var categories = {
  'obs-ad':    { label: 'Weather observation &ndash; at an aerodrome',     color: '#4cc9f0', radius: 4, z: 405, on: true },
  'obs-other': { label: 'Weather observation &ndash; not at an aerodrome', color: '#80b918', radius: 3, z: 404, on: false },
  'taf':       { label: 'TAF aerodrome (ring)',                     color: '#ff70a6', radius: 9, z: 395, on: true, ring: true },
  'upper-air': { label: 'Upper-air (radiosonde) station',           color: '#ef233c', radius: 6, z: 390, on: true, icon: true },
  'fd':        { label: 'Upper wind &amp; temp (FB) point',         color: '#f8f9fa', radius: 2.5, z: 401, on: false },
  'radar':     { label: 'Weather radar (240 km ring)',              color: '#9d4edd', radius: 6, z: 385, on: false },
};

// Surface observing programmes are drawn as one dot per site, coloured by whether the site is an aerodrome (shares its identifier)
var obsCategories = ['human', 'cars', 'awos-nc', 'aws-eccc', 'aws-other'];

// Balloon icon for the radiosonde stations (takes its colour from currentColor)
var balloonSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">' +
  '<path fill="currentColor" d="M9.85 13.8a.75.75 0 0 1-.6 1.2h-2.5a.75.75 0 0 1-.6-1.2l.6-.8h2.499zM8 1c2.761 0 5 2 5 5c0 2.255-1.854 4.68-3.353 6H6.352C4.852 10.679 3 8.254 3 6c0-3 2.239-5 5-5m.164 1.836c-.613-.613-1.854-.364-2.773.555c-.92.919-1.168 2.16-.555 2.773s1.854.364 2.773-.555c.92-.919 1.168-2.16.555-2.773" />' +
  '</svg>';

var categoryNames = {
  'human': 'Human observations (METAR)',
  'cars': 'Community Aerodrome Radio Station',
  'awos-nc': 'NAV CANADA AWOS (METAR AUTO)',
  'aws-eccc': 'ECCC automatic weather station',
  'aws-other': 'Automatic weather station (other operator)',
  'upper-air': 'Upper-air (radiosonde) station',
  'taf': 'Aerodrome forecast (TAF)',
  'fd': 'Upper wind &amp; temperature forecast (FB) point',
  'radar': 'Weather radar',
};

var groups = {};
var counts = {};
Object.keys(categories).forEach(function (key) {
  map.createPane(key).style.zIndex = categories[key].z;
  groups[key] = L.layerGroup();
  counts[key] = 0;
});

// Popup text listing every programme at the site, not just the clicked layer
function popupFor(p, programs) {
  var html = '<strong>' + (p.name || p.id) + '</strong><br>';
  html += 'ID: ' + p.id;
  if (p.wmo) html += ' &middot; WMO ' + p.wmo;
  html += '<br>';
  if (p.prov) html += p.prov + '<br>';
  if (p.elev) html += 'Elevation: ' + Math.round(p.elev) + ' m<br>';
  if (p.kind === 'grid point') html += 'Forecast grid point (not a station)<br>';
  if (p.note) html += p.note + '<br>';
  html += '<ul style="margin:4px 0 0 0;padding-left:16px">';
  // A CARS site's staff take its human observations, so CARS is shown as the human-observation line
  var cars = programs.some(function (q) { return q.category === 'cars'; });
  var order = ['cars', 'human', 'awos-nc', 'aws-eccc', 'aws-other', 'taf', 'upper-air'];
  programs = programs.slice().sort(function (x, y) { return order.indexOf(x.category) - order.indexOf(y.category); });
  programs.forEach(function (q) {
    if (q.category === 'human' && cars) return;
    var name = categoryNames[q.category];
    var operator = q.operator;
    if (q.category === 'cars') {
      name = categoryNames.human;
      operator = 'NAV CANADA (CARS)';
    } else if (q.category === 'human' && q.observer) {
      operator += ' (' + q.observer + ')';
    } else if (q.category === 'awos-nc' && q.lwis) {
      name = 'LWIS (outside CARS hours)';
    }
    html += '<li>' + name + (operator ? ' &ndash; ' + operator : '') + '</li>';
  });
  return html + '</ul>';
}

// Load the GeoJSON data
fetch('/assets/weather-data/canadian-weather-network.geojson')
  .then(response => response.json())
  .then(data => {
    // Index programmes by site ID so each popup can show all of them
    var bySite = {};
    data.features.forEach(function (f) {
      if (f.properties.category === 'fd' || f.properties.category === 'radar') return;
      (bySite[f.properties.id] = bySite[f.properties.id] || []).push(f.properties);
    });

    var obsDrawn = {};
    data.features.forEach(function (f) {
      var p = f.properties;
      var layer = p.category;
      if (obsCategories.indexOf(p.category) >= 0) {
        if (obsDrawn[p.id]) return;
        obsDrawn[p.id] = true;
        var atAerodrome = (bySite[p.id] || [p]).some(function (q) { return q.aerodrome; });
        layer = atAerodrome ? 'obs-ad' : 'obs-other';
      }
      var c = categories[layer];
      var latlng = [f.geometry.coordinates[1], f.geometry.coordinates[0]];
      var marker = c.icon
        ? L.marker(latlng, {
            pane: layer,
            icon: L.divIcon({
              className: 'wx-balloon',
              html: '<span style="color:' + c.color + '">' + balloonSvg + '</span>',
              iconSize: [22, 22],
              // Anchor below the icon so the balloon floats just above the TAF ring and station dot
              iconAnchor: [11, 30],
              tooltipAnchor: [0, -30],
              popupAnchor: [0, -30],
            }),
          })
        : L.circleMarker(latlng, {
            pane: layer,
            radius: c.radius,
            color: c.ring ? c.color : '#111',
            weight: c.ring ? 2 : 1,
            fill: !c.ring,
            fillColor: c.color,
            fillOpacity: 0.9,
          });
      marker.bindPopup(popupFor(p, bySite[p.id] || [p]));
      marker.bindTooltip(p.id + ' &ndash; ' + (p.name || ''), { direction: 'top' });
      groups[layer].addLayer(marker);
      counts[layer]++;

      if (p.category === 'radar') {
        groups.radar.addLayer(L.circle(latlng, {
          pane: 'coverage',
          radius: 240000,
          color: c.color,
          weight: 1,
          fillOpacity: 0.05,
          interactive: false,
        }));
      }
    });

    // Layer menu doubles as the legend
    var overlays = {};
    Object.keys(categories).forEach(function (key) {
      var c = categories[key];
      var swatch = c.icon
        ? '<span class="wx-swatch wx-swatch-icon" style="color:' + c.color + '">' + balloonSvg + '</span>'
        : c.ring
        ? '<span class="wx-swatch" style="border:2px solid ' + c.color + ';background:transparent"></span>'
        : '<span class="wx-swatch" style="background:' + c.color + ';border:1px solid #666"></span>';
      overlays[swatch + c.label + ' <span class="wx-count">(' + counts[key] + ')</span>'] = groups[key];
      if (c.on) groups[key].addTo(map);
    });
    var layersControl = L.control.layers(null, overlays, { collapsed: false }).addTo(map);

    // Header with a button that minimizes the legend (starts minimized on narrow screens)
    var container = layersControl.getContainer();
    var header = L.DomUtil.create('div', 'wx-legend-header');
    header.innerHTML = '<span>Legend</span>';
    var toggle = L.DomUtil.create('button', 'wx-legend-toggle', header);
    toggle.type = 'button';
    container.insertBefore(header, container.firstChild);

    function setMinimized(min) {
      container.classList.toggle('wx-minimized', min);
      toggle.innerHTML = min ? '+' : '&minus;';
      toggle.title = min ? 'Show legend' : 'Hide legend';
      toggle.setAttribute('aria-label', toggle.title);
      toggle.setAttribute('aria-expanded', String(!min));
    }
    L.DomEvent.on(toggle, 'click', function (e) {
      L.DomEvent.stop(e);
      setMinimized(!container.classList.contains('wx-minimized'));
    });
    setMinimized(window.innerWidth < 600);
  })
  .catch(error => console.error('Error loading GeoJSON:', error));

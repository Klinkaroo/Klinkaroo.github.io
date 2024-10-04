// Initialize the map
var map = L.map('map').setView([49.7713, -96.8165], 3);

// Add the tile layer
L.tileLayer(
  'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/Tile/{z}/{y}/{x}.png',
  {
    attribution:
      'Map data &copy; Esri, HERE, Garmin, © OpenStreetMap contributors, and the GIS User Community',
  }
).addTo(map);

// Point Layer
var macs = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Riverbend Receiver',
        type: 'rx',
      },
      geometry: {
        coordinates: [-113.31629, 53.67799],
        type: 'Point',
      },
      id: 0,
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cardiff Transmitter',
        type: 'tx',
      },
      geometry: {
        coordinates: [-113.54327, 53.78539],
        type: 'Point',
      },
      id: 1,
    },
    {
      type: 'Feature',
      properties: {
        name: 'Carrying Place Receiver',
        type: 'rx',
      },
      geometry: {
        coordinates: [-77.55042, 44.03212],
        type: 'Point',
      },
      id: 2,
    },
    {
      type: 'Feature',
      properties: {
        name: 'Poite Petre Transmitter',
        type: 'tx',
      },
      geometry: {
        coordinates: [-77.148, 43.84366],
        type: 'Point',
      },
      id: 3,
    },
    {
      type: 'Feature',
      properties: {
        name: 'Masstown Receiver',
        type: 'rx',
      },
      geometry: {
        coordinates: [-63.43516, 45.37714],
        type: 'Point',
      },
      id: 4,
    },
    {
      type: 'Feature',
      properties: {
        name: 'Great Village Transmitter',
        type: 'tx',
      },
      geometry: {
        coordinates: [-63.55974, 45.42124],
        type: 'Point',
      },
      id: 5,
    },
  ],
};

// Function to determine marker colour
function getMarkerColor(type) {
  return type === 'tx' ? 'red' : 'green';
}

// Add custom markers
L.geoJSON(macs, {
  pointToLayer: function (feature, latlng) {
    var markerColor = getMarkerColor(feature.properties.type);
    var markerIcon = L.icon({
      iconUrl: '/assets/leaflet/markers/antenna-' + markerColor + '.png',
      iconSize: [25, 25],
      iconAnchor: [12, 31],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    return L.marker(latlng, { icon: markerIcon });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties.name) {
      var popupContent = feature.properties.name;
      layer.bindPopup(popupContent);
    }
  },
}).addTo(map);
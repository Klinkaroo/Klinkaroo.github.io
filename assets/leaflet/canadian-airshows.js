// Initialize the map
var map = L.map('map').setView([49.7713, -96.8165], 3);

// Add the tile layer
L.tileLayer(
  'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/Tile/{z}/{y}/{x}.png',
  {
    attribution:
      'Map data &copy; Esri, HERE, Garmin, © OpenStreetMap contributors,  and the GIS User Community; <a href="https://www.flaticon.com/free-icons/fighter-jet" title="fighter jet icons">Fighter jet icons created by Mayor Icons - Flaticon</a>; <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Plane icons created by Ahmad Yafie - Flaticon</a>',
  }
).addTo(map);

// Define custom icons
var militaryIcon = L.icon({
  iconUrl: '/assets/leaflet/markers/military-airshow.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

var civilianIcon = L.icon({
  iconUrl: '/assets/leaflet/markers/civilian-airshow.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Add markers for military base airshows
var AirshowMarker = L.marker([49.716146364712124, -124.89536538053588], {
  icon: militaryIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>19 Wing Comox Air Show</b><br>Location: 19 Wing Comox, British Columbia'
);
var AirshowMarker = L.marker([44.271672296270275, -79.90753259467603], {
  icon: militaryIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Borden Canadian Armed Forces Days & Air Show</b><br>Location: 16 Wing Borden, Ontario'
);
var AirshowMarker = L.marker([46.36646740844318, -79.42234210100173], {
  icon: militaryIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>North Bay Armed Forces Day</b><br>Location: Jack Garland Airport, North Bay, Ontario'
);
var AirshowMarker = L.marker([48.332025627790514, -70.99232087118529], {
  icon: militaryIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Bagotville International Air Show</b><br>Location: 3 Wing Bagotville, Quebec'
);
var AirshowMarker = L.marker([44.119041328450514, -77.52845951057084], {
  icon: militaryIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Quinte International Air Show</b><br>Location: 8 Wing Trenton, Ontario'
);
var AirshowMarker = L.marker([54.40223261190452, -110.27862650253581], {
  icon: militaryIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Cold Lake Air Show</b><br>Location: 4 Wing Cold Lake, Alberta'
);
var AirshowMarker = L.marker([44.98334359492526, -64.9129094445039], {
  icon: militaryIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Air Show Atlantic</b><br>Location: 14 Wing Greenwood, Nova Scotia'
);

// Add markers for civilian airport airshows
var AirshowMarker = L.marker([43.17393783683856, -79.9238913005731], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Air Force 100 Weekend </b><br>Location: Canadian Warplane Heritage Museum, Hamilton, Ontario'
);
var AirshowMarker = L.marker([62.46858183487121, -114.44294405271286], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Yellowknife Air Show</b><br>Location: Yellowknife Airport'
);
var AirshowMarker = L.marker([49.90886130931313, -98.27211260188031], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Manitoba Air Show</b><br>Location: Southport, Manitoba'
);
var AirshowMarker = L.marker([49.023886316822285, -122.36604507878242], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Abbotsford International Air Show</b><br>Location: Abbotsford International Airport, British Columbia'
);
var AirshowMarker = L.marker([53.67206268444931, -113.86217688024057], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Alberta International Air Show</b><br>Location: Villeneuve Airport, Alberta'
);
var AirshowMarker = L.marker([43.63074616127024, -79.43164539823623], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Canadian International Air Show</b><br>Location: Toronto, Ontario'
);
var AirshowMarker = L.marker([45.52074806902342, -75.56134796748655], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Aero Gatineau-Ottawa</b><br>Location: Gatineau-Ottawa Executive Airport'
);
var AirshowMarker = L.marker([43.033785265667284, -81.1499414248547], {
  icon: civilianIcon,
}).addTo(map);
AirshowMarker.bindPopup(
  '<b>Airshow London</b><br>Location: London International Airport, Ontario'
);

// Initialize the map
var map = L.map('map').setView([65, -85], 3);

// Add the tile layer
L.tileLayer(
  'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/Tile/{z}/{y}/{x}.png',
  {
    attribution:
      'Map data &copy; Esri, HERE, Garmin, © OpenStreetMap contributors, and the GIS User Community',
  }
).addTo(map);

// Define the default style for polygons
var defaultStyle = {
  color: 'blue', // Blue outline
  weight: 2, // Border weight
  opacity: 1, // Full border opacity
  fillOpacity: 0.3, // 30% fill opacity
  fillColor: 'blue', // Blue fill color
};

// Define the highlight style for polygons
var highlightStyle = {
  fillOpacity: 0.65, // Increase opacity to 65% on hover
};

// Load the GeoJSON data
fetch('/assets/airspace-data/fir/2024-09-05-fir-4326.geojson')
  .then(response => response.json())
  .then(data => {
    // Add the GeoJSON layer to the map
    L.geoJSON(data, {
      style: defaultStyle, // Apply the default style

      // Function to define what happens on each feature (polygon)
      onEachFeature: function (feature, layer) {
        // Create the label with fir_code on the first line and fir_name on the second line
        var labelText = '<strong>' + feature.properties.fir_code + '</strong><br>' + feature.properties.fir_name;

        // Add a static tooltip (label) that is always visible
        layer.bindTooltip(labelText, {
          permanent: true,   // Make the label always visible
          direction: "center", // Center the label on the polygon
          className: 'label-class' // Custom CSS class for the label (optional)
        }).openTooltip(); // Open the tooltip immediately

        // Add hover effect: change style on mouseover and mouseout
        layer.on('mouseover', function (e) {
          e.target.setStyle(highlightStyle);  // Apply the highlight style
        });

        layer.on('mouseout', function (e) {
          e.target.setStyle(defaultStyle);    // Revert to the default style
        });
      }
    }).addTo(map);
  })
  .catch(error => console.error('Error loading GeoJSON:', error));


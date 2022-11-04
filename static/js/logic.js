
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// ADD ANOTHE TILE LAYER: DARK MAP
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center of Toronto, zoom level 2 and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/MarcelinGian/Mapping_Earthquakes/main/torontoRoutes.json";

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);    
// });


// // // 13.5.5
// SKILL DRILL
// Edit the L.geoJSON() layer so that it displays the following:
// The default map layer as night navigation with day navigation as another option.
// The airline routes are in light yellow with a weight of 2.
// Each airline route has a popup marker that shows the airline code and destination.
// // //

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   color: "#ffffa1",
//   weight: 2,
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup('<h3> Airline' + feature.properties.airline + "</h3> <hr> Destination: "
//     + feature.properties.dst + "</h3>")
//   }
// })
// .addTo(map);    
// });

// ^AGAIN!  make this code easier to read, now we'll create 
//   an object with the style parameters for the lines and assign it to a variable, myStyle. Add the following code before d3.json().

// CREATE a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// THEN, in the L.geoJSON() layer, the style key will be assigned to the myStyle object as shown:
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup('<h3> Airline' + feature.properties.airline + "</h3> <hr> Destination: "
    + feature.properties.dst + "</h3>");
  }
})
.addTo(map);    
});

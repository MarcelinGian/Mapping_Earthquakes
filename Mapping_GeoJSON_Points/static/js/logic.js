// Add console.log to check to see if our code is working.
// console.log("working");

// change the coordinates for the center of the map to center on SFO update zoom level to 10
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
// ^NOTE that the coordinates appear in reverse order for GeoJSON data

// // //
// ^GeoJSON objects are added to the map through a GeoJSON layer
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       // We add the city to the popup marker
//       .bindPopup("<h2>" + feature.properties.city + "</h2>");
//     }

//   }).addTo(map);

//^the pointToLayer callback function, the basic syntax for adding functionality to a marker is as follows:
// L.geoJson(data, {
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng);
//    }
// });
// // //


// // //
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // add a popup marker using the onEachFeature function
//   onEachFeature: function(feature, layer) {
//     // pass layer in the console.log()function to investigate
//     console.log(layer);
//     layer.bindPopup();
//    }
// }).addTo(map);

// ^ the onEachFeature callback function, basic syntax for adding functionality to a marker is as follows:
// L.geoJSON(data, {
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup();
//    }
// });
// // //


// // //
// ADD MULTIPLE MAPS
// To add another map, we'll use the Leaflet Layers Control





// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/MarcelinGian/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);    
});



// // //
// SKILL DRILL: Edit your logic.js to create a popup marker for San Francisco Airport on a night preview navigation map.
//    When you click on the popup, it will display the city, state, and the name of the airport.
// // //


// // //
// Edit your logic.js to create a popup marker for the San Francisco Airport on the outdoor map. 
// When you click on the popup, it will display the airport code and name of the airport.
// // //

// // // 13.5.4
// SKILL DRILL: Edit your L.geoJson() layer to add a popup marker that displays all airports' codes and names for both the Street and Dark layers.
// // //

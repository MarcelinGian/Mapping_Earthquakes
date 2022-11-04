// // Add console.log to check to see if our code is working.
// console.log("working");

// // Create the map object with a center and zoom level.
// //      !now we'll change zoom from 4 to 14 AND LAT/LON from 40.7, -94.5 to 34.0522, -118.2437 (to see LA instead of all of USA)
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// //  Add a marker to the map for Los Angeles, California.
// // // let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // add circle marker to the map for Los Angeles, CA
// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // //

// SKILL DRILL: Using the Leaflet documentation, create a light-yellow circle with black lines 
// indicating a 300-meter radius of Central Los Angeles on a dark map.

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//      !now we'll change zoom from 4 to 14 AND LAT/LON from 40.7, -94.5 to 34.0522, -118.2437 (to see LA instead of all of USA)
let map = L.map('mapid').setView([34.0522, -118.2437], 14);


// add circle marker to the map for Los Angeles, CA
// SD: radius updated to 300 from 100
// L.circle([34.0522, -118.2437], {
//   color: 'black',
//   fillColor:'#FDEE04',
//   fillOpacity: 0.3,
//   radius: 300
// }).addTo(map);

// ^ ALTERNATIVELY, we can create a circle using the circleMarker() function. 
// The circleMarker() function measures the radius of the circle in pixels, with the default radius set at 10 pixels. 
L.circleMarker([34.0522, -118.2437], {
  color: 'black',
  fillColor:'#FDEE04',
  fillOpacity: 0.2,
  radius: 300
}).addTo(map);

// We create the tile layer that will be the background of our map.
// SD: Make a Dark Map - change "mapbox/streets-v11" to "mapbox/dark-v10"
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
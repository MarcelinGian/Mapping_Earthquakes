// Add console.log to check to see if our code is working.
console.log("working");

// change the coordinates for the center of the map to somewhere between LAX and SFO update zoom level to 7
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// create a line on a map using the Leaflet polyline() function
// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// add line variable code Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// // // 13.4.3
// SKILL DRILL: create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops, 
//Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). 
// Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.
// // //
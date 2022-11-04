
// // Add console.log to check to see if our code is working.
// console.log("working");

// // Create the map object with a center and zoom level.
// //      !NOW!-  we'll change zoom from 4 to 14 AND LAT/LON from 40.7, -94.5 to 34.0522, -118.2437 (to see LA instead of all of USA)
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// // ^ REPLACE the marker variable (which we used to map one location) with the cities variable that references the five 
// // most populous cities array (located in 'cities.js'). Iterate through the array & add each lat/lon to the map

// // Here where the cities array was previously located, add a variable and assign it to the cities array.

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//       radius: city.population/100000
//       // ^ radii are too large and don't fit on the map We've reduced each city's radius so the circle markers fit on the map 
//       //    by dividing the city.population value by "100000" 
//     })
//     // adding the bindPopup() method to display City, State & Population
//     // ALSO: format the population with a thousands separator by using the toLocaleString() method on the city.population
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });
// // ^ ALSO now we've replaced the marker() function "L.marker(city.location).addTo(map)" with the circleMarker() function in the forEach() function

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// // //
// // //
// SKILL DRILL: Edit the logic.js file to create an orange circle popup marker for each city, 
//    with a lineweight of 4, a radius where the population number is decreased by 200,000,  that's on a dark map
// // //

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
      radius: city.population/200000,
      color: 'orange',
      weight: 6
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
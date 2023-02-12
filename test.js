// const OSM = require('osm-schema');
// const fs = require('fs');

// // Load the OpenStreetMap data for the city of interest
// const cityData = fs.readFileSync('path/to/city.osm', 'utf8');
// const city = new OSM(cityData);

// // Extract the data for buildings and roads
// const buildings = city.filterNodes({tags: {building: 'yes'}});
// const roads = city.filterWays({tags: {highway: '*'}});

// // Calculate the density of buildings
// const buildingDensity = buildings.length / city.bounds.area();

// // Calculate the average road length
// const roadLength = roads.reduce((sum, road) => sum + road.length(), 0) / roads.length;

// // Evaluate the planning structure based on building density and road length
// if (buildingDensity > 0.05 && roadLength > 1000) {
//   console.log('The city has a well-structured planning, with high building density and long roads.');
// } else if (buildingDensity < 0.05 && roadLength < 1000) {
//   console.log('The city has a poorly structured planning, with low building density and short roads.');
// } else {
//   console.log('The city has an average planning structure.');
// }

// const OSM = require('osm-schema');
// const axios = require('axios');

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Enter the name of the city: ', async cityName => {
// //   Download the OpenStreetMap data for the city of interest
//   const cityData = await axios.get(${cityName});
//   const city = new OSM(cityData.data);

//   // Extract the data for buildings and roads
//   const buildings = city.filterNodes({tags: {building: 'yes'}});
//   const roads = city.filterWays({tags: {highway: '*'}});

//   // Calculate the density of buildings
//   const buildingDensity = buildings.length / city.bounds.area();

//   // Calculate the average road length
//   const roadLength = roads.reduce((sum, road) => sum + road.length(), 0) / roads.length;

//   // Evaluate the planning structure based on building density and road length
//   if (buildingDensity > 0.05 && roadLength > 1000) {
//     console.log('The city has a well-structured planning, with high building density and long roads.');
//   } else if (buildingDensity < 0.05 && roadLength < 1000) {
//     console.log('The city has a poorly structured planning, with low building density and short roads.');
//   } else {
//     console.log('The city has an average planning structure.');
//   }

//   readline.close();
// });


require("dotenv").config();

// Variables
var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var axios = require("axios");

var moment = require("moment");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);


// 9. Make it so liri.js can take in one of the following commands:

//     `concert-this`

//     `spotify-this-song`

//     `movie-this`

//     `do-what-it-says`

var getArtistName = function(artist) {
  return artist.name;
};

var getArtistName = artist.name






  // check activity 17, 23, 
  // Format the address using process.argv
  // var address = process.argv.slice(2).join(" ");



// Replace with your mapquest consumer API key
// var options = {
//   provider: "mapquest",
//   apiKey: "YOUR-MAPQUEST-API-CONSUMER-KEY"
// };

// var geocoder = NodeGeocoder(options);

// Format the address using process.argv
// var address = process.argv.slice(2).join(" ");

// Log the address we built
// console.log("Searching for " + address);

// Then use the geocoder object to search the address
// geocoder.geocode(address, function(err, data) {

// Then console log the result and stringify it.
// Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
// See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
console.log(JSON.stringify(data, null, 2));

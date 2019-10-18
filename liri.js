require("dotenv").config();

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

var getArtistName = 

  // check activity 17, 23, 
  // Format the address using process.argv
  // var address = process.argv.slice(2).join(" ");


// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    })
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });


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

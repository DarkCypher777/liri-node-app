require(".env").config();

// Variables

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var moment = require("moment");

var fs = require("fs");


var action = process.argv[2];
var value = process.argv[3];

//* Commands
switch (action) {
  case "concert-this":
    concertThis(value);
    break;
  case "spotify-this-song":
    spotifySong(value);
    break;
  case "movie-this":
    movieThis(value);
    break;
  case "do-what-it-says":
    doThis(value);
    break;
};

//* Concert
function concertThis() {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
      for (var i = 0; i < response.data.length; i++) {

        var dateTime = response.data[i].dateTime;
        var dateArr = dateTime.split(",");

        var concertResults =
          console.log("------------------------------")
        "\nVenue Name: " + response.data[i].venue.name +
          "\nVenue Location: " + response.data[i].venue.city +
          "\nDate of the Concert: " + moment(dateArr[0], "MM-DD-YYYY");
        console.log(concertResults);
      }
    })
    .catch(function (err) {
      console.log(err);
    });

}

//* Spotify
function spotifySong(value) {
  if (!value) {
    value = "The Sign";
  }
  spotify
    .search({
      type: "track",
      query: value
    })
    .then(function (response) {
      for (var i = 0; i < 5; i++) {
        var spotifyResults =
          console.log("------------------------------------")
        "\nArtist: " + response.tracks.items[i].artists[0].name +
          "\nSong Name: " + response.tracks.items[i].name +
          "\nAlbum Name: " + response.tracks.items[i].album.name +
          "\nPreview Link: " + response.tracks.items[i].preview_url;

        console.log(spotifyResults);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

//* Movie
function movieThis(value) {
  if (!value) {
    value = "mr nobody";
  }
  axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
    .then(function (response) {
      var movieResults =
        console.log("------------------------------");
      "\nMovie Title: " + response.data.title +
        "\nYear of Release: " + response.data.year +
        "\nIMDB Rating: " + response.data.imdbRating +
        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].value +
        "\nCountry Produced: " + response.data.Country +
        "\nLanguage: " + response.data.Language +
        "\nPlot: " + response.data.Plot +
        "\nActors/Actresses: " + response.data.Actor +
        console.log(movieResults);
    })
    .catch(function (error) {
      console.log(error);
    });
}

//* Do what it says
function doThis(value) {

  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    var dateArr = data.split(",");
    spotifySong(dateArr[0], dataArr[1]);
  })
}

console.log(JSON.stringify(data, null, 2));
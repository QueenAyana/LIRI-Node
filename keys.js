var Spotify = require('node-spotify-api');
var request = require("request");
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

class Keys {
    constructor(search, term) {
        this.search = search;
        this.term = term;
    }

    callAPI() {
        // if search is show
        if (this.search === "concert-this") {
            console.log("Searching for a Venue.");
            this.findVenue();
        }
        else if (this.search === "spotify - this - song") {
            console.log("Searching for your song.");
            this.findSong();
        }
        else if (this.search === "movie - this") {
            console.log("Searching for your Movie.");
            this.findMovie();
        }
        else {
            console.log("Please enter a request!")
        }

    }
    
    findVenue() {
        var URL = `https://rest.bandsintown.com/artists/ ${this.term}/events?app_id=codingbootcamp`;
        // make our ajax call using the new query url
        request(URL, (err, response, body) => {
            // Parse the response body (string) to a JSON object
            var jsonData = JSON.parse(body);

            // assign the stuff we are going to print to the console to
            // a class property called data
            this.data =
                `venue: ${jsonData.venue.name}
                 
            location: ${jsonData.venue.city}
            
            time: ${jsonData.datetime}`
        });
    };
    findSong() {

    };
    findMovie() {
        var URL = `https://rest.bandsintown.com/artists/ ${this.search}/events?app_id=codingbootcamp`;
        // make our ajax call using the new query url
        request(URL, (err, response, body) => {
            // Parse the response body (string) to a JSON object
            var jsonData = JSON.parse(body);

            // assign the stuff we are going to print to the console to
            // a class property called data
            this.data =
                `Artsit(s): ${jsonData.venue.name}
                 
            song title: ${jsonData.venue.city}
            
            link: ${jsonData.datetime}
            
            album: ${jsonData.search}`
        });
    };
};
//spotify - this - song
//movie - this
//do -what - it - says
module.exports = Keys;


var Keys = require("./keys");

require("dotenv").config();

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

var input = new Keys(search, term);

input.movie();

input.spotify();

input.concert();

//console.log(term);

//console.log(keys.spotify)



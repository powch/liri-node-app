const concertThis = require('./assets/javascripts/concert-this');
const spotifyThis = require('./assets/javascripts/spotify-this-song');
const movieThis = require('./assets/javascripts/movie-this');
const doWhatItSays = require('./assets/javascripts/do-what-it-says');

const searchArr = process.argv;
const searchSplice = searchArr.splice(0, 3);
const command = searchSplice[2];
let searchTerm = searchArr.join(' ');


switch (command) {
    case 'concert-this':
        concertThis.concert(searchTerm);
        break;

    case 'spotify-this-song':
        spotifyThis.song(searchTerm);
        break;

    case 'movie-this':
        movieThis.movie(searchTerm);
        break;

    case 'do-what-it-says':
        doWhatItSays.doIt();
        break;

    default:
        console.log(`
Please try one of the following commands:
concert-this [artist/band]
spotify-this-song [song name]
movie-this [movie name]
do-what-it-says
        `);
        break;
}
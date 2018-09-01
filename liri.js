const concertThis = require('./assets/javascripts/concert-this');
const spotifyThis = require('./assets/javascripts/spotify-this-song');

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

        break;

    case 'do-what-it-says':

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
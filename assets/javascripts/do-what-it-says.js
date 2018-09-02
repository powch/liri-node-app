const fs = require('fs');
const concertThis = require('./concert-this');
const spotifyThis = require('./spotify-this-song');
const movieThis = require('./movie-this');

const doWhatItSays = () => {

  fs.readFile('random.txt', 'utf-8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    const dataArr = data.split(',');
    const command = dataArr[0];
    const searchTerm = dataArr[1].trim();

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
    
        default:
            console.log('nope');
            break;
    }

  });
};

module.exports = {
  doIt: doWhatItSays
};

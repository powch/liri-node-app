require('dotenv').config();

const Spotify = require('node-spotify-api');
const keys = require('../../keys.js');
const spotify = new Spotify(keys.spotify);
const append = require('./append');


const songSearch = (searchTerm) => {
    if (searchTerm === '') {
        spotify
            .request('https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE')
            .then((data) => {
                console.log(`
Artist(s)     : ${data.artists[0].name}
Song Title    : ${data.name}
Song Preview  : ${data.preview_url}
Album         : ${data.album.name}
                `);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        spotify.search({ type: 'track', query: searchTerm }, (err, data) => {
            if (err) {
                return console.log(err);
            }

            const songData = data.tracks.items[0];

            const loggedResults = `
Artist(s)     : ${songData.artists[0].name}
Song Title    : ${songData.name}
Song Preview  : ${songData.preview_url}
Album         : ${songData.album.name}
            `;

            console.log(loggedResults);
            append.appendResults(loggedResults, 'spotify-this-song');
        });
    }
}

module.exports = {
    song: songSearch
}
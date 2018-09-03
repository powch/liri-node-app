const request = require('request');
const append = require('./append');

const movieThis = (searchTerm) => {
    const searchArr = searchTerm.split(' ');
    const newSearch = searchArr.join('+');
    const url = `http://www.omdbapi.com/?apikey=trilogy&t=${newSearch}`;

    request(url, (err, res, data) => {
        if (err) {
            return console.log(err);
        }

        const dataObj = JSON.parse(data);

        const loggedResults = `
Title           :   ${dataObj.Title}
Year            :   ${dataObj.Year}
IMDB            :   ${dataObj.imdbRating}
Rotten Tomatoes :   ${dataObj.Ratings[1].Value}
Country         :   ${dataObj.Country}
Language        :   ${dataObj.Language}
Plot            :   ${dataObj.Plot}
Actors          :   ${dataObj.Actors}
        `;

        console.log(loggedResults);
        
        append.appendResults(loggedResults, 'movie-this');
    });
}

module.exports = {
    movie: movieThis
}
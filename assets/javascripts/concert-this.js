const moment = require('moment');
const request = require('request');


const concertThis = (searchTerm) => {
    request(`https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=codingbootcamp`, (err, res, body) => {
        if (err) {
            return console.log(err);
        }

        const data = JSON.parse(body);

        console.log(`
Concerts for ${searchTerm}
--------------------------------------------------`)
        data.forEach((key) => {
            console.log(`
Venue    : ${key.venue.name}
Location : ${key.venue.city} ${key.venue.region}
Date     : ${moment(key.datetime).format('MM-DD-YYYY')}
            `);
        });
    });
}

module.exports = {
    concert: concertThis
}
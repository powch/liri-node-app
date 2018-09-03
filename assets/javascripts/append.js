const fs = require('fs');

const appendResults = (loggedResults, passedCommand) => {
    fs.appendFile('./log.txt', `Results from ${passedCommand}:
        ${loggedResults}
        ---------------------------------------------\n`,
        (err) => {
            if (err) {
                console.log(err);
            }
        });
}

module.exports = {
    appendResults: appendResults
}
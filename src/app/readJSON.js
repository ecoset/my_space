// 
const readJSON = (dirJSONFile) => {
    const fs = require('fs');

    return fs.readFileSync(dirJSONFile, 'utf-8', (err, text) => {
        if(err) throw err;
        return text;
    })
}

module.exports = readJSON;


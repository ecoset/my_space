const jsonMusic = () => {
    const readJSON = require('./readJSON');
    const path = require('path')

    return readJSON(path.resolve(__dirname, '../data/Music/Music.json'))
}

module.exports = jsonMusic;
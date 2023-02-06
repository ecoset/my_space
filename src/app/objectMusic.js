

const objectMusic = () => {
    const convertJsonToObject = require('./convertJsonToObject');
    const jsonMusic = require('./jsonMusic')
    
    return convertJsonToObject(jsonMusic());
}

module.exports = objectMusic;
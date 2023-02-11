// Returns True if the directory is a folder
const path = require('path');
const fs = require('fs');

const verificationOfDirectory = (directory) => {
    return new Promise((resolve, reject) => {
        fs.stat(directory, (errDir, returnBoolean) => {
            if (errDir) reject(errDir);
            resolve(returnBoolean.isDirectory);
        });
    });
};

verificationOfDirectory(path.resolve(__dirname, '../../public/audio/music/Artists'))
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// module.exports = verificationOfDirectory;

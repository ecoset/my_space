const forTest = () => {
    const fs = require('fs');
    const path = require('path');

    // DIRECTORIES
    // Artists directories
    const dirArtists = path.resolve(
        __dirname,
        '../../public/audio/music/Artists/'
    );

    // RETURN in ARTISTS ARRAY
    const artistList = fs.readdirSync(dirArtists, (err, folders) => {
        if (err) throw err;
        return folders;
    });



    const arrayObjects = () => {
        artistList.map(item => {

        })
    };
    return arrayObjects();
};

console.log(JSON.stringify(forTest()));

// module.exports = forTest;

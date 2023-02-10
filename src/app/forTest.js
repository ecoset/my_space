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
        return artistList.map((item) => {
            let albumItem = fs.readdirSync(
                `${dirArtists}/${item}/`,
                (errAlbum, albumItem) => {
                    if (errAlbum) throw errAlbum;
                    return { albumItem };
                }
            );
            return {
                artist: item,
                albums: [
                    {
                        album: [{ name: albumItem, }],
                    },
                ],
            };
        });
    };
    return arrayObjects();
};

// console.log(forTest());

module.exports = forTest;

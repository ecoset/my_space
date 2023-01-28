const music = [
    {
        id: 21,
        style: 'ddd',
        artist: 'Hocico',
        slug: 'hocico',
        albums: [
            {
                album: 'Autoagresion Persistente',
                age: 1994,
                posted: 01272023,
                slug: 'Autoagresion_Persistente',
            },
            {
                album: 'Odio Bajo El Alma',
                age: 1997,
                posted: 01232023,
                slug: 'Odio_Bajo_El_Alma',
            },
            {
                album: 'Sangre Hirviente',
                age: 1999,
                posted: 01272023,
                slug: 'Sangre_Hirviente',
            },
            {
                album: 'Signos De Aberracion',
                age: 2022,
                posted: 02052023,
                slug: 'Signos_De_Aberracion',
            },
        ],
    },
    {
        id: 22,
        style: 'ddd',
        artist: 'Unter Null',
        slug: 'unternull',
        albums: [
            {
                album: 'Neocide',
                age: 2002,
                posted: 02102023,
                slug: 'neocide',
            },
            {
                album: 'Moving On',
                age: 2010,
                posted: 02152023,
                slug: 'movingon',
            },
        ],
    },
];

const setMusic = music.map((artist) => {
    return artist.albums.map((album) => album.album);
});

// const filMusic = music.filter(item => item.artist === 'Hocico')
setMusic.sort((a, b) => a[a] > b[0] ? 1 : -1)
console.log(setMusic)
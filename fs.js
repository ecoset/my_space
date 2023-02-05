// СОЗДАСТ ПАПКУ NODEFFF В РОД. ДИРЕКТОРИИ
// fs.mkdir(path.join(__dirname, 'NODEFFF'), err => {
//     if(err) throw new Error(err)
// })

// СОЗДАСТ ФАЙЛ hey.hey В РОД. ДИР. В ПАПКЕ NODEFFF и запишет туда "Hey World"
// ПРИ ПОВТОРОНОМ ВЫЗОВЕ БУДЕТ ПЕРЕПИСЫВАТЬ ФАЙЛ
// fs.writeFile(path.join(__dirname, 'NODEFFF', 'hey.hey'), 'Hey World', err => {
//     if(err) throw err;
// })

// До пишет в файл
// fs.appendFile(path.join(__dirname, 'NODEFFF', 'hey.hey'), ' Ha-ha-ha', err => {
//     if(err) throw err;
// })

// Чтение файлов через Buffer.from(data).toString()
// fs.readFile(path.join(__dirname, 'NODEFFF', 'hey.hey'), (err, data) => {
//     if(err) throw err;
//     console.log(Buffer.from(data).toString())
// })

// Чтение файлов через второй аргумент readFile - 'utf-8'
// fs.readFile(path.join(__dirname, 'NODEFFF', 'hey.hey'), 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// Переименовать файл
// fs.rename(
//     path.join(__dirname, 'NODEFFF', 'hey.hey'),     // Путь до папки
//     path.join(__dirname, 'NODEFFF', 'note.txt'),
//     err => {
//         if(err) throw err
//     }
// )


// ! Вернуть json в виде массива объектов
const convertJSONToObject = (jsonFile) => {
    const path = require('path');
    const fs = require('fs');

    const dirFileJSON = path.join(__dirname, 'data', jsonFile)
    return fs.readFileSync(dirFileJSON, (err, text) => {
        if(err) throw err;
        return JSON.parse(text);
    })
}

// 
const convertToJSON = () => {
    
}

// ! Вернуть имена папок из директории .../Artists
const returnDirArtists = (folder) => {
    // import area:
    const fs = require('fs');
    const path = require('path');

    // Parental directory
    const dirArtists = path.join(__dirname, 'public', '/audio/music/Artists/');

    return fs.readdirSync(dirArtists, (err, folders) => {
        if (err) throw err;
        return folders;
    });
};

// ! Создать массив объектов, распредилить по объектам имена папок с ключём 'Artists'
// const array = ["one", "two", "three", "four"];
// const result = array.map(item => ({artist: item,}));
// console.log(result);

const arrayObjectsMusic = (array) => {
    const result = array.map((item) => {
        if (!array.includes(item.artist)) {
            return { artist: item };
        }
    });
    return result;
};
console.log(arrayObjectsMusic(returnDirArtists()))
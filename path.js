const path = require('path');

// console.log(__filename)
// console.log(path.basename(__filename)) // возвращает полный путь до файла
// console.log(path.dirname(__filename)) // возвращает название директории где распологается файл
// console.log(path.extname(__filename)) // возвращает расширение

// console.log(path.parse(__filename)) // вернт значение ввиде объекта со свойствами - root, dir, base, ext, name

// console.log(path.join(__dirname, 'test', '/second.js')) // генерирует путь в текущей папке
// console.log(path.resolve(__dirname, 'test', '/second.js')) // генерирует корректный путь. работает как с относительными так и с абс. 

// const musicDir = process.env.PUBLIC_URL + '/audio/music/Artists/'

const musicDir = path.join(__dirname, 'public', '/audio/music/Artists/')


console.log(musicDir)
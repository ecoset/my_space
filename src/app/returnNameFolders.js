// Return the name of the folders
const returnNameFolders = (parentalFolder) => {
    const fs = require('fs');
    return fs.readdirSync(parentalFolder, (err, folders) => {
        if(err) throw err;
        return folders;
    })
}

export default returnNameFolders;
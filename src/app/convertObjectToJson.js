const forTest = require("./forTest");

const convertObjectToJson = (getObject) => {
    return JSON.stringify(getObject);
}

// module.exports = convertObjectToJson;
console.log(convertObjectToJson(forTest()))
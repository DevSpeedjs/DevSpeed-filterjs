const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let badwords = BANWORD.banWords;


let getBanWord = (callback) => {
    if (typeof callback === "function") {
        return callback(BANWORD)
    }
    return BANWORD
}


module.exports = getBanWord;

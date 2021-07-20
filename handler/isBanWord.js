const BANWORD = require('../data/banword.json')
const Filter = require('../FilterClass.js')
let badwords = BANWORD.banWords;



let isBanWord = (banWord, debug)=>{
    let reg = new RegExp(badwords.join('|'), "gi")

    if(debug === true){console.log(reg.test(banWord))}

    return reg.test(banWord)
};


module.exports = isBanWord;
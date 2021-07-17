const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let { customBanWord }= require('./data/customWord.json')
let badwords = BANWORD.banWords;



let isBanWord = (banWord, debug)=>{
    let value = badwords.includes(banWord) 

    if(debug === true){console.log(value)}

    return value

};


module.exports = isBanWord;
const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let { customBanWord }= require('./data/customWord.json')
let badwords = BANWORD.banWords;


let hasCustomWord = (banWord, callback)=>{
    let reg = new RegExp(customBanWord.join('|'), 'gi')
    
    return reg.test(banWord)   
}


module.exports = hasCustomWord;
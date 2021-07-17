const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let { customBanWord }= require('./data/customWord.json')
let badwords = BANWORD.banWords;

let hasBanWord = (sentence)=>{
    let INPUTVALUE = sentence;
    let Value = false

    badwords.forEach(data => {
      if (INPUTVALUE.includes(data)){
        Value = true
      }
    })

    return Value
};


module.exports = hasBanWord;
const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let { customBanWord }= require('./data/customWord.json')
let badwords = BANWORD.banWords;


let addCustomWord = (word, callback) =>{
    let err = ''
     if (!word) {  
        err = new TypeError('cannot add Custom Word of no value')
        return callback(err)
     }else if (word.length === 0){
        err = new TypeError('cannot add Custom Word of empty value')
        callback(err)
     }
     console.log(word)
     customBanWord.push(word)
}


module.exports = addCustomWord;
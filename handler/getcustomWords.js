const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let { customBanWord }= require('./data/customWord.json')
let badwords = BANWORD.banWords;


let getCustomWord = ()=>{
    customBanWord.forEach(data => {
        console.log(data)
        return data
    })
}



module.exports = getCustomWord;
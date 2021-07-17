const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let { customBanWord }= require('./data/customWord.json')
let  getCustomWord = require('./handler/getcustomWords')
let getBanWord = require('./handler/getBanWords')
let isBanWord = require('./handler/isBanWord')
let hasBanWord = require('./handler/hasBanWord')
const addCustomWord = require('./handler/addCustomwords')






let censor = (banword)=>{
     
    let regex = new RegExp(badwords.join("|"), "gi");
    return banword.replace(regex, function (match) {
        let stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }
        return stars;
    });
   
    
}




module.exports = {
    isBanWord,
    hasBanWord,
    getBanWord,
    addCustomWord,
    censor,
    Filter,
    getCustomWord,
}




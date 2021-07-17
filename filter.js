const BANWORD = require('./data/banword.json')
let badwords = BANWORD.banWords;

let getBanWord = (callback) => {
    if(typeof callback === 'function'){
        callback(BANWORD)
    }
    return badwords
}


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


let isBanWord = (banWord, debug)=>{
    let value = badwords.includes(banWord) 

    if(debug === true){console.log(value)}

    return value

};


let  hasCustomBan = (banWord, customBanWord)=>{
    if(!customBanWord){
        throw new TypeError('customBanWord was not specified')
    }
    let outputValue = false
    
    customBanWord.forEach(data =>{
        if(banWord.includes(data)){
           outputValue = banWord.includes(data)
        }    
    })
   return outputValue
}




module.exports = {
    hasBanWord,
    isBanWord,
    getBanWord,
    hasCustomBan,
}




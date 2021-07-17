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
let rgx = new RegExp(badwords.join("|"), "gi");

let sensor = (banword)=>{
     
    var regex = new RegExp(badwords.join("|"), "gi");
    return banword.replace(regex, function (match) {
        let stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }

        return stars;
    });

}


module.exports = {
    hasBanWord,
    isBanWord,
    sensor,
    getBanWord,
    hasCustomBan,
}




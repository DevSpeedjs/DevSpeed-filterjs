const BANWORD = require('./data/banword.json')

let badwords = BANWORD.banWords; 

class Filter {
    constructor(banWord){
        this.banWord = banWord;
    }

    isBanWord(callback) {
        let reg = new RegExp(badwords.join('|'), "gi")
        if(typeof callback === "function"){
           return callback(reg.test(this.banWord))
        }
        return reg.test(this.banWord)
    }
   
    hasBanWord(callback){
      let reg = new RegExp(badwords.join('|'), "gi")
        if(typeof callback === 'function'){
            return callback(reg.test(this.banWord))
        }

        return reg.test(this.banWord)
    }

    sensor(){
     let regex = new RegExp(badwords.join("|"), "gi");
      return this.banWord.replace(regex, function (match) {
        let stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }
        return stars;
      });
    }
}

module.exports = Filter;
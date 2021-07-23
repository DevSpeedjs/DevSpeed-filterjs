import BANWORD from './banword.json';
const badwords: string[] = BANWORD.banWords;



class Filter {
    private BanWord: string;

    constructor(BanWord: string){
         this.BanWord = BanWord;
    }

    getBanWord(callback: (result: any)=> any){
        if (typeof callback === "function") {
            return callback(BANWORD)
        }
        return BANWORD
    }

    isBanWord(callback: (results: any)=> any) {
        let reg = new RegExp(badwords.join('|'), "gi")
        if(typeof callback === "function"){
           return callback(reg.test(this.BanWord))
        }
        return reg.test(this.BanWord)
    }
    
    
    hasBanWord(callback: (results: any)=>any){
        let reg = new RegExp(badwords.join('|'), "gi")
          if(typeof callback === 'function'){
              return callback(reg.test(this.BanWord))
          }
  
          return reg.test(this.BanWord)
    };

    censor(){
        let regex = new RegExp(badwords.join("|"), "gi");
         return this.BanWord.replace(regex, function (match) {
           let stars = '';
           for (var i = 0; i < match.length; i++) {
               stars += '*';
           }
           return stars;
         });
    }
  

}

export = Filter
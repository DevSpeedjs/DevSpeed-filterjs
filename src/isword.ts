
import BANWORD from './banword.json';
import getBanWord from './getwords';
const badwords: string[] = BANWORD.banWords;

let isBanWord = (banWord: string, debug: boolean)=>{
    let reg = new RegExp(badwords.join('|'), "gi")

    if(debug === true){console.log(reg.test(banWord))}

    return reg.test(banWord)
};

export = isBanWord;
import BANWORD from './banword.json';
const badwords: string[] = BANWORD.banWords;


let hasBanWord = (banword: string)=>{
    let INPUTVALUE = banword;
    let Value: boolean = false

    badwords.forEach(data => {
      if (INPUTVALUE.includes(data)){
        Value = true
      }
    })

    return Value
};

export = hasBanWord
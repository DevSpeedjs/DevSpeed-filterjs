import  badwords  from './data/badwords.js'
import Filter from './filter.js'



function isBanWord(banWord, test) {
    let value = badwords.includes(banWord) 
    
    if(test === true){console.log(value)}

    return value
}


let hasBanWord = ()=>{
    let INPUTVALUE = sentence;
    let Value = false

    badwords.forEach(data => {
        if (INPUTVALUE.includes(data)){
         Value = sentence.includes(data)
        }
    });

    if(test = true){console.log(Value) }
          
  return Value;
}




export default {isBanWord, hasBanWord,}



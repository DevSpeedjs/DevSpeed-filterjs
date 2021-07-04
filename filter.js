import badwords from "./data/badwords.js";

import isBanWords from "./gobal.js";


function Filter() {
    return{
        getBanWord: (log) => {
           if(log === true){
              console.log(badwords)

              return badwords
           }

           return badwords
        },


        hasBanWord: (sentence, test )=>{
            let INPUTVALUE = sentence;
            let Value = false

            badwords.forEach(data => {
              if (INPUTVALUE.includes(data)){
                 Value = sentence.includes(data)
              }
          });

          if(test === true){console.log(Value)}
          
          return Value;
        },
        

        isBanWord: (banWord, test)=>{
            let value = badwords.includes(banWord) 
    
            if(test === true){console.log(value)}

            return value

        },
        
        
        hasCustomBan: (banWord, customBanWord, test)=>{
          if(!customBanWord){
              throw new TypeError('customBanWord was not specified')
          }

          let outputValue;
          
          
          customBanWord.forEach(data =>{
              if(banWord.includes(data)){
                 outputValue = banWord.includes(data)
              }    
          })

          if (outputValue == true) {
             console.log(outputValue) 
          }

          return outputValue
        }       
    }
    
}


export default Filter;
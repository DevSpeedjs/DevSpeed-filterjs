import BANWORD from './banword.json';
const badwords: string[] = BANWORD.banWords;


let censor = (banword: string)=>{
     
    let regex = new RegExp(badwords.join("|"), "gi");
    return banword.replace(regex, function (match) {
        let stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }
        return stars;
    });
   
    
}

export = censor


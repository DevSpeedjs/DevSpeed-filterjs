import BANWORD from './banword.json';
const badwords: string[] = BANWORD.banWords;

let getBanWord = (callback: (result: any)=> any) => {
    if (typeof callback === "function") {
        return callback(BANWORD)
    }
    return BANWORD
}

export = getBanWord;
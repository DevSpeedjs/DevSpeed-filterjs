import censor from "./censor";
import getBanWord from "./getwords";
import Filter from "./Class";
import isBanWord from "./isword";
import hasBanWord from "./hasword";
import BANWORD from './banword.json';
const badwords: string[] = BANWORD.banWords;




export {
    censor,
    getBanWord,
    hasBanWord,
    Filter,
    isBanWord,
    
}
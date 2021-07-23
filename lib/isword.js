"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const banword_json_1 = __importDefault(require("./banword.json"));
const badwords = banword_json_1.default.banWords;
let isBanWord = (banWord, debug) => {
    let reg = new RegExp(badwords.join('|'), "gi");
    if (debug === true) {
        console.log(reg.test(banWord));
    }
    return reg.test(banWord);
};
module.exports = isBanWord;
//# sourceMappingURL=isword.js.map
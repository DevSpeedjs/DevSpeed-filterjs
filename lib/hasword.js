"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const banword_json_1 = __importDefault(require("./banword.json"));
const badwords = banword_json_1.default.banWords;
let hasBanWord = (banword) => {
    let INPUTVALUE = banword;
    let Value = false;
    badwords.forEach(data => {
        if (INPUTVALUE.includes(data)) {
            Value = true;
        }
    });
    return Value;
};
module.exports = hasBanWord;
//# sourceMappingURL=hasword.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = exports.addBanWord = exports.isBanWord = exports.getBanWord = exports.hasBanWord = exports.censor = void 0;
const banword_json_1 = __importDefault(require("./banword.json"));
const badwords = banword_json_1.default.banWords;
//  Get all banwords from banword.json file
let getBanWord = (callback) => {
    if (typeof callback === "function") {
        return callback(banword_json_1.default);
    }
    return banword_json_1.default;
};
exports.getBanWord = getBanWord;
let censor = (banword) => {
    let regex = new RegExp(badwords.join("|"), "gi");
    return banword.replace(regex, function (match) {
        let stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
        }
        return stars;
    });
};
exports.censor = censor;
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
exports.hasBanWord = hasBanWord;
let isBanWord = (banWord, debug) => {
    let reg = new RegExp(badwords.join('|'), "gi");
    if (debug === true) {
        console.log(reg.test(banWord));
    }
    return reg.test(banWord);
};
exports.isBanWord = isBanWord;
let addBanWord = (banword) => {
    if (!banword || banword === null || banword === undefined) {
        return;
    }
    else if (Array.isArray(banword) === false) {
        throw new Error('addbanWord() must take an Array');
    }
    for (let index = 0; index < banword.length; index++) {
        // geting ban word form the param and adding it
        const customBanword = banword[index];
        badwords.push(customBanword);
    }
};
exports.addBanWord = addBanWord;
// the class Filter
class Filter {
    constructor(BanWord) {
        this.BanWord = BanWord;
    }
    getBanWord(callback) {
        if (typeof callback === "function") {
            return callback(banword_json_1.default);
        }
        return banword_json_1.default;
    }
    isBanWord(callback) {
        let reg = new RegExp(badwords.join('|'), "gi");
        if (typeof callback === "function") {
            return callback(reg.test(this.BanWord));
        }
        return reg.test(this.BanWord);
    }
    hasBanWord(callback) {
        let reg = new RegExp(badwords.join('|'), "gi");
        if (typeof callback === 'function') {
            return callback(reg.test(this.BanWord));
        }
        return reg.test(this.BanWord);
    }
    ;
    censor() {
        let regex = new RegExp(badwords.join("|"), "gi");
        return this.BanWord.replace(regex, function (match) {
            let stars = '';
            for (var i = 0; i < match.length; i++) {
                stars += '*';
            }
            return stars;
        });
    }
    static addBanWord(banword) {
        if (!banword || banword === null || banword === undefined) {
            return;
        }
        else if (Array.isArray(banword) === false) {
            throw new Error('addbanWord() must take an Array');
        }
        for (let index = 0; index < banword.length; index++) {
            // geting ban word form the param and adding it
            const customBanword = banword[index];
            badwords.push(customBanword);
        }
    }
}
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map
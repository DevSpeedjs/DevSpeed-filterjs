"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const banword_json_1 = __importDefault(require("./banword.json"));
const badwords = banword_json_1.default.banWords;
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
}
module.exports = Filter;
//# sourceMappingURL=filterClass.js.map
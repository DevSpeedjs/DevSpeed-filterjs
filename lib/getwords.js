"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const banword_json_1 = __importDefault(require("./banword.json"));
const badwords = banword_json_1.default.banWords;
let getBanWord = (callback) => {
    if (typeof callback === "function") {
        return callback(banword_json_1.default);
    }
    return banword_json_1.default;
};
module.exports = getBanWord;
//# sourceMappingURL=getwords.js.map
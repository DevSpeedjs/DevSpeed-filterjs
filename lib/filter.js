"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBanWord = exports.Filter = exports.hasBanWord = exports.getBanWord = exports.censor = void 0;
const censor_1 = __importDefault(require("./censor"));
exports.censor = censor_1.default;
const getwords_1 = __importDefault(require("./getwords"));
exports.getBanWord = getwords_1.default;
const Class_1 = __importDefault(require("./Class"));
exports.Filter = Class_1.default;
const isword_1 = __importDefault(require("./isword"));
exports.isBanWord = isword_1.default;
const hasword_1 = __importDefault(require("./hasword"));
exports.hasBanWord = hasword_1.default;
const banword_json_1 = __importDefault(require("./banword.json"));
const badwords = banword_json_1.default.banWords;
//# sourceMappingURL=filter.js.map
const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
let { customBanWord }= require('./data/customWord.json')
const  getCustomWord = require('./handler/getcustomWords')
const getBanWord = require('./handler/getBanWords')
const isBanWord = require('./handler/isBanWord')
const hasBanWord = require('./handler/hasBanWord')
const addCustomWord = require('./handler/addCustomwords')
const censor = require('./handler/censor')



module.exports = {
    isBanWord,
    hasBanWord,
    getBanWord,
    addCustomWord,
    censor,
    Filter,
    getCustomWord,
}




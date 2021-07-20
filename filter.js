const BANWORD = require('./data/banword.json')
const Filter = require('./FilterClass.js')
const getBanWord = require('./handler/getBanWords')
const isBanWord = require('./handler/isBanWord')
const hasBanWord = require('./handler/hasBanWord')
const censor = require('./handler/censor')



module.exports = {
    isBanWord,
    hasBanWord,
    getBanWord,
    censor,
    Filter,
}




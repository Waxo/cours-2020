const R = require('ramda');
const {filterEmptyLines, readAndParseFile} = require('./app/parser');
const {
  getMeanTicketPriceByClass,
  getSurvivorByClass,
  getMeanAgeByClass,
  getMeanAgeBySex,
  getSurvivorBySex
} = require('./app/stats');
const {prepareData, trainNN} = require('./app/nn');

R.pipeWith(R.andThen, [
  readAndParseFile,
  filterEmptyLines,
  prepareData,
  R.tap(console.log),
  trainNN,
  R.tap(console.log)
])('./titanic.csv');

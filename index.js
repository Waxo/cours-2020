const R = require('ramda');
const {filterEmptyLines, readAndParseFile} = require('./app/parser');
const {prepareData, trainNN} = require('./app/nn');

R.pipeWith(R.andThen, [
  readAndParseFile,
  filterEmptyLines,
  prepareData,
  trainNN
])('./titanic.csv');

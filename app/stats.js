const R = require('ramda');

const getMeanAge = R.pipe(
  R.pluck('age'),
  R.filter(R.complement(R.isEmpty)),
  R.mean
);
const getSurvivors = R.pipe(R.filter(R.prop('survived')), R.length);

const filterByProp = R.curry((fn, propName, propValue) =>
  R.pipe(R.filter(R.propEq(propName, propValue)), fn)
);

const getMeanAgeBy = filterByProp(getMeanAge);
const getMeanAgeBySex = getMeanAgeBy('sex');
const getMeanAgeByClass = getMeanAgeBy('pClass');

const getSurvivorBy = filterByProp(getSurvivors);
const getSurvivorBySex = getSurvivorBy('sex');
const getSurvivorByClass = getSurvivorBy('pClass');

const getMeanTicketPrice = R.pipe(
  R.pluck('fare'),
  R.filter(R.complement(R.isNil)),
  R.mean
);
const getMeanTicketPriceBy = filterByProp(getMeanTicketPrice);
const getMeanTicketPriceByClass = getMeanTicketPriceBy('pClass');

module.exports = {
  getMeanTicketPriceByClass,
  getSurvivorByClass,
  getMeanAgeByClass,
  getMeanAgeBySex,
  getSurvivorBySex
};

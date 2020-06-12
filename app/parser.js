const R = require('ramda');
const fs = require('fs-extra');

const fileReader_ = (x) => fs.readFile(x, 'utf-8');

const parseToSomeType_ = R.curry((type, n, array) =>
  R.pipe(R.nth(n), R.unless(R.isEmpty, type))(array)
);

const parseToNumber_ = parseToSomeType_(Number);
const parseToBoolean_ = parseToSomeType_(R.pipe(Number, Boolean));
const nameHandler_ = R.pipe((a, b) => `${a}, ${b}`, R.replace(/"/g, ''));

const parseLine = R.pipe(
  R.split(','),
  R.applySpec({
    passengerId: parseToNumber_(0),
    survived: parseToBoolean_(1),
    pClass: parseToNumber_(2),
    name: R.converge(nameHandler_, [R.nth(3), R.nth(4)]),
    sex: R.nth(5),
    age: parseToNumber_(6),
    sibSp: parseToNumber_(7),
    parch: parseToNumber_(8),
    ticket: R.nth(9),
    fare: parseToNumber_(10),
    cabin: R.nth(11),
    embarked: R.nth(12)
  })
);

const parseFile = R.pipe(R.split('\n'), R.tail, R.map(parseLine));
const readAndParseFile = R.pipe(fileReader_, R.andThen(parseFile));

const filterEmptyLines = R.filter(
  R.propSatisfies(
    R.and([R.complement(R.isNil), R.complement(R.isEmpty)]),
    'passengerId'
  )
);

module.exports = {filterEmptyLines, readAndParseFile};

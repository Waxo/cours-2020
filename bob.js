const R = require('ramda');

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => (Math.random() > 0.5 ? -1 : 1))
);

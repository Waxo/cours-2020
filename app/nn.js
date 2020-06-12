const brain = require('brain.js');
const R = require('ramda');

const trainNN = (data) => {
  const netCfg = {
    hiddenLayers: [3],
    activation: 'sigmoid'
  };

  const trainCfg = {
    iterations: 20000,
    log: (x) => (R.not(x.iterations % 2000) ? console.log(x) : '')
  };

  const net = new brain.CrossValidate(brain.NeuralNetwork, netCfg);

  net.train(data, trainCfg);
};

const prepareData = R.map(
  R.pipe(
    R.applySpec({
      input: {
        // PassengerId: R.prop('passengerId'),
        pClass: R.prop('pClass'),
        sex: R.pipe(
          R.prop('sex'),
          R.ifElse(R.equals('male'), R.always(0), R.always(1))
        ),
        age: R.pipe(R.prop('age'), R.when(R.equals(''), R.always(20))),
        sibSp: R.prop('sibSp'),
        parch: R.prop('parch'),
        fare: R.prop('fare')
      },
      output: R.pipe(R.prop('survived'), Number, R.of)
    }),
    R.over(R.lensProp('input'), R.values)
  )
);

module.exports = {trainNN, prepareData};

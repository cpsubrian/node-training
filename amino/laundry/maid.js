var amino = require('amino').use(require('amino-queue')).init();

var loads = ['lights', 'darks', 'towels', 'sheets', 'bathmats'];

var washing = false;
var drying = false;

function wash () {
  var load = loads.shift();
  console.log('Putting ' + load + ' in the washer');
  amino.queue('wash', load);
}

function dry (load) {
  console.log('Putting ' + load + ' in the dryer');
  amino.queue('dry', load);
}

amino.subscribe('washed', function (load) {
  console.log('  Done');
  dry(load);
  wash();
});

amino.subscribe('dried', function (load) {
  if (!loads.length) {
    console.log('All Done!');
    process.exit();
  }
});

wash();
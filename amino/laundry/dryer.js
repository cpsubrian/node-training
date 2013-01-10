var amino = require('amino').use(require('amino-queue')).init();

amino.process('dry', function(load, callback) {
  console.log('Drying ' + load);
  setTimeout(function () {
     console.log('  Done!');
     amino.publish('dried', load);
     callback();
  }, 10000);
});
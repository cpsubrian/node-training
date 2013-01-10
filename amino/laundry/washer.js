var amino = require('amino').use(require('amino-queue')).init();

amino.process('wash', function(load, callback) {
  console.log('Washing ' + load);
  setTimeout(function () {
     console.log('  Done!');
     amino.publish('washed', load);
     callback();
  }, 5000);
});
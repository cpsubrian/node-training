var amino = require('amino').init()
  , prompt = require('prompt');

amino.subscribe('reply', function (msg) {
  console.log(msg);
});


prompt.start();

function cycle() {
  prompt.get(['message'], function (err, results) {
    amino.publish('message', results.message);
    cycle();
  });
}

cycle();
var amino = require('amino').init();

amino.subscribe('message', function (msg) {
  console.log(msg);
  amino.publish('reply', 'I got yo msg bro');
});
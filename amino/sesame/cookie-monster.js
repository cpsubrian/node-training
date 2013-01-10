var amino = require('amino').init();

setInterval(function () {
  amino.request('baker', '/', function (err, res, body) {
    console.log('Nom NOM nom .. I ate a ' + body + ' cookie!');
  });
}, 1000);
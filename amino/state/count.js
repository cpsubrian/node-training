var amino = require('amino').init()
  , http = require('http')
  , count = 0;

var server = http.createServer(function (req, res) {
  res.end('Count: ' + count);
  console.log('Sent: ' + count);
  amino.publish('up');
});

amino.subscribe('up', function () {
  count++;
});

amino.createService('count', server);
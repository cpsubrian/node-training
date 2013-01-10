var amino = require('amino').init()
  , http = require('http');

var cookies = ['Orea', 'Oatmeal', 'Chocolate Chip', 'Sugar', 'Peanut Butter'];

var server = http.createServer(function (req, res) {
  var cookie = cookies[Math.floor(Math.random() * cookies.length)];
  console.log('Serving a ' + cookie + ' cookie');
  res.end(cookie);
});

amino.createService('baker@0.1.2', server);

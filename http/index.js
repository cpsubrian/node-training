var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
  console.log(req.url);
  res.writeHead(200);
  res.end('You hit ' + req.url);
});

server.listen(9000, function () {
  console.log('Server started on port 9000');
});
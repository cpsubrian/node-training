var fs = require('fs')
  , path = require('path');

console.log('A');

// Sync
var content = fs.readFileSync(path.join(__dirname, 'foo.txt'), 'utf8');
console.log('Sync: ' + content);

console.log('B');

// Async
fs.readFile('foo.txt', 'utf8', function (err, data) {
  // Deal with the error.
  if (err) {
    console.log(err);
    return;
  }

  // No Error, do something.
  console.log('Async: ' + data);
});

console.log('C');

// Async stream!!!
var stream = fs.createReadStream('foo.txt', {encoding: 'utf8'});
stream.on('data', process.stdout.write.bind(process.stdout));
stream.on('end', function () {
  console.log(' via stream');
});

console.log('D');

// Streams Piped!
var stream2 = fs.createReadStream('foo.txt', {encoding: 'utf8'});
stream2.pipe(process.stdout);


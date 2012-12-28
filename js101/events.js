var EventEmitter = require('events').EventEmitter;

var foo = new EventEmitter();

foo.on('error', function (err) {
  console.error(err);
});

foo.on('bar', function (msg) {
  console.log('bar: ' + msg);
});

foo.on('baz', function (msg) {
  console.log('baz: ' + msg);
});

foo.emit('bar', 'Brian');
foo.emit('baz', 'Sagar');

setTimeout(function () {
  foo.emit('bar', 'Jesse');
}, 5000);

var count = 0;
setInterval(function () {
  foo.emit('baz', count++);
}, 1000);


setTimeout(function () {
  foo.emit('error', new Error('OMG THE WORLD IS ENDING!!!'));
}, 10000);
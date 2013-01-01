var async = require('async')
  , later = require('./later');

console.log('Running the program');

/*
later('A', function (err) {
  if (err) return console.error(err);
  later('B', function (err) {
    if (err) return console.error(err);
    later('C', function (err) {
      if (err) return console.error(err);
      later('D', function (err) {
        if (err) return console.error(err);
        console.log('Done!');
      });
    });
  });
});
*/

async.map(
  ['A', 'B', 'C', 'D', 'E'],

  function (letter, next) {
    later(letter, next);
  },

  handleResults
);

function handleResults (err, results) {
  if (err) return console.error(err);
  console.log(results);
  console.log('Done!');
}



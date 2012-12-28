
function sum (a, b) {
  console.log(a + ' + ' + b + ' = ' + (a + b));
}

// sum(1, 2);
// sum.call(null, 4, 12);
// sum.apply(null, [10, 20]);

function sumAll () {
  var args = Array.prototype.slice.call(arguments, 0);

  var sum = 0;

  for (var i = 0; i < args.length; i++) {
    sum += args[i];
  }

  console.log(args.join(' + ') + ' = ' + sum);
}

sumAll(4, 2, 19, 4);

sumAll.apply(null, [3, 4, 5, 6]);

var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.unshift(i);
}
sumAll.apply(null, numbers);

sumAll.call(null, 4, 8, 12);
sumAll.call(null, numbers);


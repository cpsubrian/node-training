console.log('Concat:');
var a = ['A'];
var b = ['B'];
var c = a.concat(b);
console.log(c);


console.log('----------------');
console.log('Filter');
var source = ['A', 'B', 'C', 'D'];
var filtered = source.filter(function (val) {
  return val !== 'C';
});
console.log(filtered);

filtered = source.filter(function (val, i) {
  return i > 1;
});
console.log(filtered);

console.log('----------------');
console.log('For Each');
['A', 'B', 'C'].forEach(function (val, i) {
  console.log(i + ': ' + val);
});


console.log('----------------');
console.log('Map');
var mapped = ['A', 'B', 'C', 'D'].map(function (val, i) {
  if (i === 2) return 'Skip';
  switch (val) {
    case 'A':
      return 'Apple';

    case 'B':
      return 'Bannana';

    case 'D':
      return 'Dill Pickle';
  }
});
console.log(mapped);

console.log('----------------');
console.log('Reduce (Sum)');
var nums = [1, 3, 5, 7, 9];
var sum = nums.reduce(function (curr, next) {
  return curr + next;
});
console.log(sum);

console.log('----------------');
console.log('Reduce (Implode)');
console.log(['A', 'B', 'C', 'D'].reduce(function (curr, next) {
  return curr + ', ' + next;
}));

console.log('----------------');
console.log('Reduce (Sum + Init)');
console.log([1, 2, 3, 4, 5].reduce(function (curr, next) {
  return curr + next;
}, 10));

console.log('----------------');
console.log('Reduce (Sum + Meta)');
var nums = [1, 1, 4, 6, 6, 20];
var result = nums.reduce(function (curr, next) {
  curr.nums.push(next);
  curr.counts[next] = ++curr.counts[next] || 1;
  curr.total += next;
  return curr;
}, {nums: [], counts: {}, total: 0});
console.log(result);


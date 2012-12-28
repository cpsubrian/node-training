
console.log('A');

console.log('B');

setTimeout(function () {
  console.log('C');
}, 5000);

setTimeout(function () {
  console.log('D');
}, 1000);

console.log('E');

console.log('F');

var count = 0;
function printCount () {
  console.log(count++);
  process.nextTick(printCount);
}
printCount();
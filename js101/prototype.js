var util = require('util');

function Animal (name) {
  this.name = name;
}
Animal.prototype.greet = function () {
  console.log('Hello, I\'m ' + this.name);
};

function Dog (name) {
  Animal.call(this, name);
}
util.inherits(Dog, Animal);

Dog.prototype.emote = function () {
  console.log('Bark!');
};

var rex = new Dog('Rex');
rex.greet();
rex.emote();

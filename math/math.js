module.exports = {
  sum: function (a, b, c) {
    if (typeof a === 'string') {
      throw new Error('Y U NO NUmber?');
    }

    var sum = a + b;
    if (c) {
      sum += c;
    }
    return sum;
  },
  multiply: function (a, b, c) {
    var multiple = a * b;
    if (c) {
      multiple = multiple * c;
    }
    return multiple;
  }
};
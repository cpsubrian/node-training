var math = require('../math')
  , assert = require('assert');

describe('math api', function () {

  describe('sum', function () {
    it('should add two numbers', function () {
      var sum = math.sum(2, 4);
      assert.equal(sum, 6);
    });
    it('should add three numbers', function () {
      var sum = math.sum(1, 2, 3);
      assert.equal(sum, 6);
    });
    it('should throw error on string', function () {
      assert.throws(function () {
        math.sum('foo', 2);
      }, /Y U NO/);
    });
  });

  describe('multiply', function () {
    it('should multiply two numbers', function () {
      var multiple = math.multiply(57000, 13);
      assert.equal(multiple, 741000);
    });
    it('should multiuply three numbers', function () {
      var multiple = math.multiply(1, 2, 3);
      assert.equal(multiple, 6);
    });
  });

});
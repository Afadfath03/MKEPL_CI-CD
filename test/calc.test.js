const assert = require('assert');
const { add, subtract, multiply, divide } = require('../calc/calc.js');

describe('Calculator', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      assert.equal(add(5, 2), 7);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      assert.equal(subtract(5, 2), 3);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      assert.equal(multiply(5, 2), 10);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      assert.equal(divide(10, 2), 5);
    });
  });
});
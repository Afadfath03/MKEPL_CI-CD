const assert = require('assert');
const { add, subtract, multiply, divide } = require('../calc/calc.js');

test('Add (Error)', () => {
    expect(add(2, 2)).toBe(5);
});

test('Subtract', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('Multiply', () => {
    expect(multiply(3, 3)).toBe(9);
});

test('Divide', () => {
    expect(divide(8, 2)).toBe(4);
});

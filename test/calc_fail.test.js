const assert = require('assert');
const { add, subtract, multiply, divide } = require('../calc/calc.js');

// Failing test examples

test('add should fail when expecting wrong result', () => {
    expect(add(2, 2)).toBe(5); // This will fail, 2 + 2 = 4
});

test('subtract should fail when expecting wrong result', () => {
    expect(subtract(10, 5)).toBe(0); // This will fail, 10 - 5 = 5
});

test('multiply should fail when expecting wrong result', () => {
    expect(multiply(3, 3)).toBe(10); // This will fail, 3 * 3 = 9
});

test('divide should fail when expecting wrong result', () => {
    expect(divide(8, 2)).toBe(5); // This will fail, 8 / 2 = 4
});

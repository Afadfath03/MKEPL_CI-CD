const assert = require('assert');
const { add, subtract, multiply, divide } = require('../calc/calc.js');

test('add should fail when expecting wrong result', () => {
    expect(add(2, 2)).toBe(4);
});

test('subtract should fail when expecting wrong result', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('multiply should fail when expecting wrong result', () => {
    expect(multiply(3, 3)).toBe(9);
});

test('divide should fail when expecting wrong result', () => {
    expect(divide(8, 2)).toBe(4);
});

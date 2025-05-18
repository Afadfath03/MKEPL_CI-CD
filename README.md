# Calculator Function

## Structure

- `index.js` — Entry point (currently empty, can be used to run calculator functions)
- `calc/calc.js` — Calculator module with arithmetic functions
- `test/calc.test.js` — Unit tests for the calculator functions (using Node's `assert` and jest)
- `package.json` — Project configuration and dependencies
- `jest.config.js` — Jest configuration

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Afadfath03/MKEPL_T10_CI-CD.git
   cd MKEPL_T10_CI-CD
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

You can use the calculator functions by importing them from `calc/calc.js`:

```js
const { add, subtract, multiply, divide } = require('./calc/calc');

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 3)); // 12
console.log(divide(10, 2)); // 5
```

## Running Tests

The project includes unit tests for all calculator functions. To run the tests:

```sh
npm test
```

## Notes
- The division function throws an error if dividing by zero.
- The test file uses Mocha and Node's built-in `assert` module.
- The `package.json` currently lists Jest as a dev dependency, but the tests are written for Mocha. You may want to update the test script and dependencies if you prefer Jest.
# Calculator Function

## Structure

- `index.js` — Entry point (currently empty)
- `calc/calc.js` — Calculator module with arithmetic functions
- `test/calc.test.js` — Unit tests for the calculator functions
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

console.log(add(2, 3));         // Output: 5
console.log(subtract(5, 2));    // Output: 3
console.log(multiply(4, 3));    // Output: 12
console.log(divide(10, 2));     // Output: 5
```

## Running Tests

The project includes unit tests for all calculator functions. To run the tests:

```sh
npm test
```
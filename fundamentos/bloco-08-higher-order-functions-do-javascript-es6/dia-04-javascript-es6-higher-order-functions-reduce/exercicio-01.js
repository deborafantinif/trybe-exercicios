const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const concatValues = (total, value) => total.concat(value);

function flatten() {
  return arrays.reduce(concatValues)
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
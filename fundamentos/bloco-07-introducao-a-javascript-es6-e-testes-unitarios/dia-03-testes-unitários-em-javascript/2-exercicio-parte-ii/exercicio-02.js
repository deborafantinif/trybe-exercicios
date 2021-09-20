const assert = require('assert');

const wordLengths = array => {
  const numberLetter = [];

  for (let i = 0; i < array.length; i += 1) {
    numberLetter.push(array[i].length);
  }
  
  return numberLetter;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
const removeVowels = (word) => {
  const characters = word.split('');
  let results = [];
  let vogals = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      vogals += 1;
      results.push(vogals);
    } else {
      results.push(characters[index]);
    }
  }
  results = results.join('');
  return results;
};

const assert = require('assert');
assert.strictEqual(typeof removeVowels, 'function');

const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);

assert.strictEqual(output, result);
assert.strictEqual(parameter, 'Dayane');
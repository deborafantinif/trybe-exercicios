const assert = require('assert');

const sum = (a, b) => {
  if (typeof(a) === String || typeof(b) === String) throw new Error("parameters must be numbers");
  return a + b;
}

assert.strictEqual(sum(4, 5), 9, "parameters must be numbers");
assert.strictEqual(sum(0, 0), 0, "parameters must be numbers");
assert.throws(() => {sum(4, '5')}, /^Error:parameters must be numbers$/);

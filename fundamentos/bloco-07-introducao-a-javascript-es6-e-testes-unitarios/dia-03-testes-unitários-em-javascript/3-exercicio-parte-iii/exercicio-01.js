const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

const assert = require('assert');
assert.strictEqual(typeof greetPeople, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
greetPeople(parameter);

assert.deepStrictEqual(greetPeople(parameter), result);
assert.deepStrictEqual(parameter, ['Irina', 'Ashleigh', 'Elsa']);
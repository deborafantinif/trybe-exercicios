let table = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
};

function encode(string) {
  let newString = string.split('');

  for (let i = 0; i < string.length; i += 1) {
    for (let key in table) {
      if (string[i] === key) {
        newString[i] = table[key];
        break;
      } else {
        newString[i] = string[i];
      }
    }
  }

  newString = newString.join("");

  return newString;
}

console.log(encode('aeiou'));

function decode(string) {
  let newString = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let key in table) {
      if (string[i] == table[key]) {
        newString[i] = key;
        break;
      } else {
        newString[i] = string[i];
      }
    }
  }
  newString = newString.join("");
  return newString;
}

module.exports = {
  encode,
  decode,
};
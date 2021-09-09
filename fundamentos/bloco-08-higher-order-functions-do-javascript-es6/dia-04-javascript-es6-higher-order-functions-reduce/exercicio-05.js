const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let numberAs = 0;
  names.map(name => { name
  .split('')
  .filter(letter => ((letter.toLowerCase() === 'a') ? numberAs += 1 : numberAs))
  })

  return numberAs;
}


assert.deepStrictEqual(containsA(), 20);
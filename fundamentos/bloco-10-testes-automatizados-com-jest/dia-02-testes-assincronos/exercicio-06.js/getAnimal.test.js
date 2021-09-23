const { expect } = require("@jest/globals");

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// parte 1
const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) return resolve(animal);
    
      return reject(new Error('Nenhum animal com esse nome!'));
    }, 200);
  })
);

// parte 2
const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.age === age);
      if (animal) return resolve(animal);

      return reject(new Error('Nenhum animal com essa idade!'));
    }, 100);
  })
);

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => (
      findAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      })
    ))
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch(error => {
        expect(error.message).toEqual('Nenhum animal com esse nome!')
      });
    });
  });
});

describe('Testando promisse - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    it('Retorne o objeto do animal', () => (
      findAnimalByAge(2).then((animal) => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      })
    ))
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    it('Retorne uma mensagem de erro', () => {
      expect.assertions(1);
      return findAnimalByAge(10).catch((error) => {
        expect(error.message).toEqual('Nenhum animal com essa idade!');
      })
    })
  });
});
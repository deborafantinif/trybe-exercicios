const {obj1, obj2, obj3} = require('./exercicio-05');

describe('Verifica se os objetos são iguais', () => {
  it('Verifica se obj1 é igual a obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Verifica se obj1 é igual a obj3', () => {
    expect(obj1).toEqual(obj3);
  });

  it('Verifica se obj3 é igual a obj2', () => {
    expect(obj3).toEqual(obj2);
  });
})

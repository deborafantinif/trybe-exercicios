const math = require('./math');
const { expect } = require('@jest/globals');
const { exp } = require('prelude-ls');

describe('Mockando as funções presentes em Math', () => {
  // Exercício 01
  it('Verificando a chamada da função subtrair', () => {
    math.subtrair = jest.fn();
    expect(math.subtrair).toHaveBeenCalledTimes(0);
  });

  // Exercício 02
  it('Verificando o retorno da função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(5, 5)).toBe(10)
  });

  // Exercício 03
  it('Verifica o andamento da função somar', async () => {
    const sum = jest.spyOn(math, 'somar');

    sum(1, 2);
    expect(sum).toHaveBeenCalled();
    await expect(sum(1, 2)).resolves.toBe(3);
    expect(sum).toHaveBeenCalledWith(1, 2);
  });

  // Exercício 04
  it('Verifica o andamento da função dividir', async () => {
    math.dividir = jest.fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);

    math.dividir(1, 1);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledWith(1, 1);
    expect(math.dividir).toHaveBeenCalledTimes(2);
  });

  // Exercício 05
  it('Verifica o andamento da função subtrair', async () => {
    const sub = jest.spyOn(math, 'subtrair');
    sub.mockImplementation((x, y) => x * y);
    sub.mockReturnValue(20);

    expect(sub(10, 2)).toBe(20);
    expect(sub).toHaveBeenCalled();
    expect(sub).toHaveBeenCalledTimes(1);
    expect(sub).toHaveBeenCalledWith(10, 2);

    sub.mockRestore();
    sub.mockReturnValue(8);

    expect(sub(10, 2)).toBe(8);
    expect(sub).toHaveBeenCalled();
    expect(sub).toHaveBeenCalledTimes(1);
    expect(sub).toHaveBeenCalledWith(10, 2);
  });

})
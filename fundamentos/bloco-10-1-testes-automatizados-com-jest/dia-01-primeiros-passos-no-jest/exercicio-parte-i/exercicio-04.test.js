const myFizzBuzz = require('./exercicio-04');

describe('Verificacao da função myFizzBuzz', () => {

  it('Verifica se a chamada com um número divisível por 3 e 5 recebe o retorno esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se a chamada com um número divisível por 3 recebe o retorno esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifica se a chamada com um número divisível por 5 recebe o retorno esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Verifica se a chamada com um número que não é divisível por 3 e 5 recebe o retorno esperado', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });

  it('Verifica se a chamada com um parâmetro que não é um número recebe o retorno esperado', () => {
    expect(myFizzBuzz('6')).toBe(false);
  });
})


const { expect } = require('@jest/globals');
const { exp } = require('prelude-ls');
let randomNumber = require('./randomNumber');

describe('Verifica a função randomNumber', () => {
  it('Testa se o retorno da mock é 10', () => {
    randomNumber = jest.fn()
      .mockReturnValue(10);
    
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  })
})
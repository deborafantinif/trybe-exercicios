const service = require('../exercicio-01/randomNumber');

describe('Atribuindo uma nova implementação a função randomNumber', () => {
  it('Retornando a divisão dos dois parâmetros na primeira chamada da função', () => {
    service.randomNumber = jest.fn()
      .mockImplementation((x, y) => x / y);
    
    expect(service.randomNumber(10, 5)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})
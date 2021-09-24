const service = require('../exercicio-01/randomNumber');

describe('Atribuindo outras implementações para a função randomNumer', () => {
  it('Realizando a multiplicação entre três parâmetros', () => {
    service.randomNumber = jest.fn()
      .mockImplementation((x, y, z) => x * y * z);

    expect(service.randomNumber(10, 2, 3)).toBe(60);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2, 3);
  });

  it('Retornando o dobro de um parâmetro', () => {
    service.randomNumber.mockRestore();
    service.randomNumber.mockImplementation((x) => x * 2);

    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10);
  })
})
const service = require('./strings');
jest.mock('./strings');

describe('Atribuindo outras aplicações para as funções', () => {
  it('Retorna a string em caixa baixa', () => {
    service.uppercase.mockImplementation((string) => string.toLowerCase());

    expect(service.uppercase('DEBOrA')).toBe('debora');
    expect(service.uppercase).toHaveBeenCalled();
    expect(service.uppercase).toHaveBeenCalledTimes(1);
    expect(service.uppercase).toHaveBeenCalledWith('DEBOrA');
  });

  it('Retorna a última letra da string', () => {
    service.firstLetter.mockImplementation((string) => string[string.length - 1]);

    expect(service.firstLetter('Fantini')).toBe('i');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('Fantini');
  });

  it('Retorna a concatenação dos três parâmetros', () => {
    service.concatWords.mockImplementation((word1, word2, word3) => word1 + word2 + word3);

    expect(service.concatWords('Debora', 'Fantini', 'Fernandes')).toBe('DeboraFantiniFernandes');
    expect(service.concatWords).toHaveBeenCalled();
    expect(service.concatWords).toHaveBeenCalledTimes(1);
    expect(service.concatWords).toHaveBeenCalledWith('Debora', 'Fantini', 'Fernandes');
  });
})
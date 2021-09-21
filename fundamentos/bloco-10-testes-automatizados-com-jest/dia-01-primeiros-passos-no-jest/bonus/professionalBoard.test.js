const searchEmployee = require('./professionalBoard');

describe('Verifica a função searchEmployee', () => {

  it('Verifica se é uma função', () => {
    expect(typeof searchEmployee).toEqual('function');
  });

  it('Verifica se retorna o firstName quando colocado como parâmetro', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toEqual('9852-2-2 - Jeff');
  });

  it('Verifica se retorna o lastName quando colocado como parâmetro', () => {
    expect(searchEmployee('8579-6', 'lastName')).toEqual('8579-6 - Gates');
  });

  it('Verifica se retorna as specialities quando colocado como parâmetro', () => {
    expect(searchEmployee('5569-4', 'specialities')).toEqual('5569-4 - Frontend,Redux,React,CSS');
  });

  it('Verifica se retorna erro quando colocado id errado como parâmetro', () => {
    expect(() => {searchEmployee('8579-3', 'firstName')}).toThrowError(new Error('ID não identificada'));
  });

  it('Verifica se retorna erro quando colocado details errado como parâmetro', () => {
    expect(() => {searchEmployee('8579-6', 'firstNome')}).toThrowError(new Error('Informação indisponível'));
  });
})
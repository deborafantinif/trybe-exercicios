const getUserName = require('./getUserName');

describe('Verifica a função getUserName', () => {
  it('passando um id existente, retorna o nome esperado', () => (
    expect(getUserName(1)).resolves.toEqual('Mark')
  ));

  it('passando um id inexistente, retorna uma mensagem de erro', () => (
    expect(getUserName(5))
      .rejects.toEqual(new Error(`User with 5 not found.`))
  ));
});
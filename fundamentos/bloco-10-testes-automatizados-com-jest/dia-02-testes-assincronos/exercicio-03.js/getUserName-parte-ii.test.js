const { expect } = require('@jest/globals');
const getUserName = require('../exercicio-02/getUserName');

describe('Verifica a função getUserName', () => {
  it('passando um id existente, retorna o nome esperado', async () => {
    await expect(getUserName(1)).resolves.toEqual('Mark')
  });

  it('passando um id inexistente, retorna uma mensagem de erro', async () => {
    expect.assertions(1);
    try {
      await getUserName(5);
    } catch (error) {
      expect(error.message).toEqual('User with 5 not found.');
    }
  });
});
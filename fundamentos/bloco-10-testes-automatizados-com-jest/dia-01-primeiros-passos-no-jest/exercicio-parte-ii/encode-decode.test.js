const { encode, decode } = require('./encode-decode');

describe('Validação das funções encode e decode', () => {

  it('Verifica se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Verifica se o retorno de a, e, i, o, u é respectivamente 1, 2, 3, 4 e 5', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('Verifica se o retorno de 1, 2, 3, 4 e 5 é respectivamente a, e, i, o, u', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('Verifica se o retorno de bdjrty é respectivamente bdjrty', () => {
    expect(decode('bdjrty')).toEqual('bdjrty');
  });

  it('Verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const name = 'Debora';
    expect(encode(name).length).toEqual(name.length);
  });
})
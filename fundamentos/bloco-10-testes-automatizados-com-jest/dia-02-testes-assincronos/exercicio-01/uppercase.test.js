const uppercase = require('./uppercase');

test('Verifica a função uppercase', (finish) => {
  uppercase('debora', (result) => {
    try {
      expect(result).toBe('DEBORA');
      finish();
    } catch (error) {
      finish(error);
    }
  });
});
const service = require('../exercicio-04/strings');

test('Nova implemetação na função uppercase e retorno da implementação original', () => {
  const upper = jest
    .spyOn(service, 'uppercase')
    .mockImplementation((string) => string.toLowerCase());

  expect(upper('DEBOrA')).toBe('debora');
  expect(upper).toHaveBeenCalled();
  expect(upper).toHaveBeenCalledTimes(1);
  expect(upper).toHaveBeenCalledWith('DEBOrA');

  service.uppercase.mockRestore();

  expect(service.uppercase('dEbOrA')).toBe('DEBORA');
})
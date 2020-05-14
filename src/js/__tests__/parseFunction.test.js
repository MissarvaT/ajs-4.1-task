/* eslint-disable no-undef */
import parseItemsNumber from '../parseFunction';

test('returns error', () => {
  const result = parseItemsNumber('Строка');

  expect(result).toBe('Повторите ввод');
});


test('returns number', () => {
  const result = parseItemsNumber('23');

  expect(result).toBe(23);
});


test('returns error', () => {
  const result = parseItemsNumber('0XA');

  expect(result).toBe('Повторите ввод');
});

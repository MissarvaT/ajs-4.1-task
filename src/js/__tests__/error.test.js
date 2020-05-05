/* eslint-disable no-undef */
import parseItemsNumber from '../parseFunction';

test('returns error', () => {
  const result = parseItemsNumber('Строка');

  expect(result).toBe(NaN);
});

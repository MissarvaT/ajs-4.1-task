/* eslint-disable no-undef */
import parseItemsNumber from '../parseFunction';

test('returns number', () => {
  const result = parseItemsNumber('23');

  expect(result).toBe(23);
});

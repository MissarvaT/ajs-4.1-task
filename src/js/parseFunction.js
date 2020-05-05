
// eslint-disable-next-line consistent-return
export default function parseItemsNumber(itemsQuantity) {
  try {
    const number = Number(itemsQuantity);
    if (typeof number === 'number') {
      return number;
    }
    throw new Error('Ошибка ввода!');
  } catch (e) {
    return 'Повторите ввод';
  }
}

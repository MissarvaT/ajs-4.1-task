
// eslint-disable-next-line consistent-return
export default function parseItemsNumber(itemsQuantity) {
  try {
    if (itemsQuantity.startsWith('0')) {
      throw new Error('Ошибка ввода!');
    }
    const number = parseFloat(itemsQuantity);
    if (Number.isNaN(number)) {
      throw new Error('Ошибка ввода!');
    }
    if (typeof number === 'number') {
      return number;
    }
  } catch (e) {
    return 'Повторите ввод';
  }
}

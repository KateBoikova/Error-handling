'use strict';

// Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
// Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.

const pow = (base, exponent) => {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError ('This should be a number');
  }
  if (!Number.isSafeInteger(base) || !Number.isSafeInteger(exponent)) {
    throw new RangeError ('This number is out of range');
  }
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}


try {
  console.log(pow(Infinity, 5));
} catch (e) {
  if (e instanceof TypeError) {
    alert(e.message);
  }
  if (e instanceof RangeError) {
    alert(e.message);
  }
}
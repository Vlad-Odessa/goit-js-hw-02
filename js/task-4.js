// Использование if else и арифметических операторов
// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

// Переменная credits хранит количество средств - 23580 кредитов.

// Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

// Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).

// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Вы купили ${} дроидов, на счету осталось ${} кредитов
// const ACCESS_DENIED = 'Недостаточно средств на счету!'
// Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
// Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
// А также используйте if else для выбора значений переменной message.

const orderPieces = 0;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (totalPrice < credits) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (totalPrice > credits) {
  message = ACCESS_DENIED;
}

console.log(message);
// ------------------------------------------------------------------------


// Задача 2-4
// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.

function formatString (string, maxLength = 40) {
  // Write code under this line
  let word = string.split('');
  word = word.slice(0, maxLength);
  
  const letters = word.length >= maxLength ? word.join('') + ('...') : word.join('');
  
  return letters;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));// 'Curabitur ligula sapien, tincidunt non.'
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));// 'Vestibulum facilisis, purus nec pulvinar...'
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));// 'Vestibulum facilisis, purus ne...'
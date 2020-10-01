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

function formatString(string, maxLength = 40) {
  // Write code under this line
  let word = string.split("");
  word = word.slice(0, maxLength);

  const letters =
    word.length >= maxLength ? word.join("") + "..." : word.join("");

  return letters;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // 'Curabitur ligula sapien, tincidunt non.'
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // 'Vestibulum facilisis, purus nec pulvinar...'
console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
); // 'Vestibulum facilisis, purus ne...'
// -------------------------------------------------------------------------

// Задача 3-4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  const values = Object.values(employees);

  let total = 0;

  for (const value of values) {
    total += value;
  }
  return total;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
// --------------------------------------------------------------------------------

// Задача 4-4
// this в методах объекта
// Расставь отсутствующие this в методах объекта account.

// В комментариях показаны операции с объектом и ожидаемые результаты.

const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value; // Write code in this line
  },
  showOrders() {
    return this.orders; // Write code in this line
  },
  addOrder(cost, order) {
    this.balance -= cost; // Write code in this line
    this.orders.push(order); // Write code in this line
  },
};
const copyAccount = Object.assign({}, account);
copyAccount.orders = [...account.orders]; // копируем для автотестов ссылочные типы

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.log(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, "order-4");
console.log(account.balance); // 19000

console.log(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
// -----------------------------------------------

// Задача 5-4
// переиспользование методов класса
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// Write code under this line
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
// ----------------------------------------------

// Задача 6-4
// filter и оператор !
// Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive)

// Используй деструктурирующее присваивание для параметра функции ({isActive}) без пробелов и переносов на новую строку.

// Используй оператор !.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив.
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const getInactiveUsers = array  => array.filter(({isActive}) => !isActive);

console.log(getInactiveUsers(users));

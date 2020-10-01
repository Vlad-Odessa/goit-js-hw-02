// const name = "«Генератор защитного поля»"; // Write code on this line
// Объяви две переменные хранящие название и цену товара name и price.

// Присвой переменным следующие характеристики товара (сразу при объявлении)

// название: «Генератор защитного поля»
// цена: 1000
// Используя шаблонную строку и переменные name и price задай новой переменной firstMessage текст:

// Выбран «Генератор защитного поля», цена за штуку 1000 кредитов
// Присвой товару (price) новую цену - 2000

// Используя шаблонную строку и переменные name и price задай новой переменной secondMessage текст:

// Выбран «Генератор защитного поля», цена за штуку 2000 кредитов

let price = 1000; // Write code on this line
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
console.log(firstMessage);

price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
console.log(secondMessage);
// ---------------------------------------------------------------------------------------------

// Задача 2-1
// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку,
// полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for

const getItemsString = function (array) {
  // строгий режим!
  "use strict";
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }

  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
  '1 - Mango
  2 - Poly
  3 - Ajax
  4 - Lux
  5 - Jay
  6 - Kong
  '
  */

console.log(getItemsString([5, 10, 15]));
/*
  '1 - 5
  2 - 10
  3 - 15
  '
  */
// -----------------------------------------------------------

// Задача 3-1
// CRUD для свойств объекта
// С - create (создать)
// R - read (читать)
// U - update (обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки ('\n')

let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

//Write code under this line
(user.mood = "happy"),
  (user["full time"] = true),
  (user.hobby = "skydiving"),
  (user.premium = false);

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}

console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
// --------------------------------------------------------

// Задача 4-1
// Callback функция
// Функция mapArray(array, cb), принимает 1-м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова (callback).
// Функция mapArray создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.

// Оформи создание массива numbers нужной длины используя new Array () и необходимый аргумент для задания длины, равной длине array.

// Напиши функцию обратного вызова addIndex , которая принимает два параметра - element и index и возвращает число - сумму element и index (сложение).

// Напиши функцию обратного вызова subIndex , которая принимает два параметра - element и index и возвращает число - разность element и index (вычитание).

const addIndex = (element, index) => element + index;
// Write code under this line
const subIndex = (element, index) => element - index;

function mapArray(array, cb) {
  "use strict";
  // Write code under this line
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    numbers[i] = cb(element, index);
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex)); // [1, 3, 5, 7, 9]
console.log(mapArray(arr, subIndex)); // [1, 1, 1, 1, 1]
// --------------------------------------------------------

// Задача 5-1
// function-constructor
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции-конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.

// Write code under this line
const Account = function ({ login, email } = {}) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return `login : ${this.login}, email: ${this.email}`;

  console.log(typeof Account.prototype.getInfo);
};
// 'function'

const mango = new Account("Mangozedog", "mango@dog.woof");
console.log(mango.getInfo()); // 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account("Poly", "poly@mail.com");
console.log(poly.getInfo()); // 'login : Poly, email: poly@mail.com'
// ---------------------------------------------------------------------

// Задача 6-1
// map
// Получи массив имен всех пользователей (свойство name) используя деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Деструктурирующее присваивание для параметра функции
// PS Деструктурирующее присваивание (ДП):

// Объект как параметр без ДП
// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object)) // 2
// ДП
// const object = {num : 2}
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2
// Объект как параметр c ДП
// const object = {num : 2}
// //function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2

// Write code under this line
const getUserNames = (array) => array.map(({ name }) => name);

console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */

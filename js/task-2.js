// Использование тернарного оператора
// Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

// Есть переменные

// stock = 100. Это количество товаров на складе.
// invoice. Эта переменная - количество единиц товара в заказе. Переменной присваиваются только целые положительные числа (проверку на целые положительные числа делать не нужно). Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е. меньше чем stock, 100, т.е. равно stock и 150 - больше чем stock.
// message. Это переменная для текста с ответом на запрос о покупке. Возможно два значения:
// "На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
// "Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.

const total = 200;
const stock = 100;
let message;

if (total <= stock) {
  message = "Заказ оформлен, с вами свяжется менеджер.";
} else {
  message = "На складе недостаточно твоаров!";
}

console.log(message);
// --------------------------------------
const invoice = 200;
const stock = 100;

const message =
  invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";
console.log(message);
// --------------------------------------------------------------------------------------

// Задача 2-2
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0)
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.

const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
  message.split(" ").length * pricePerWord; // Write code in this line

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
console.log(calculateEngravingPrice("Uno", 100)); // 100
// --------------------------------------------------------------------------------------------------------

// Задача 3-2
// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться

const countProps = function (obj) {
  "use strict";
  return (obj = Object.keys(obj).length); // Write code under this line
};

console.log(countProps({})); // 0
console.log(countProps({ a: 1, b: 1 })); // 2
console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
// --------------------------------------------------------

// Задача 4-2
// Callback функция и метод push
// Функция isUniq принимает три параметра - element, index и arr.
// Функция возвращает true или false в зависимости от того встречается ли элемент первый раз в массиве (true) или этот элемент в массиве уже встречался (false) .

// Функция isEven принимает один параметр - element. Функция возвращает true или false в зависимости от того является ли элемент четным числом или нет.

// Функция filterArray(array, cb), принимает 1-м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова (callback).
// Дополни тело функции так, чтобы функция filterArray заполняла новый пустой массив numbers только теми элементами из массива array, для которых вызов функции cb вернет true.

const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    // Write code under this line
    if (cb(element, index, array)) {
      numbers.push(element);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq)); // [1, 2, 3, 4, 5]
console.log(filterArray(arr, isEven)); // [2, 4, 2]
// -----------------------------------------------------------

// Задача 5-2
// class
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// Write code under this line
class User {
  constructor({name, age, followers} = {}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }
}

console.log(typeof User); // 'function'

const mango = new User("Mango", 2, 20);
console.log(mango.getInfo()); // 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo); // 'function'

const poly = new User("Poly", 3, 17);
console.log(poly.getInfo()); // 'User Poly is 3 years old and has 17 followers'
// ----------------------------------------------------------

// Задача 6-2
// filter
// Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor), 
// используя деструктурирующее присваивание для параметра функции ({eyeColor}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. 
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

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
const getUsersWithEyeColor = (array, color) => array.filter( ({eyeColor}) => eyeColor === color );

console.log(getUsersWithEyeColor(users, 'blue'));
/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */

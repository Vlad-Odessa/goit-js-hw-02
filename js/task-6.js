// Задача 2-6
// Конструкция new Array(10) создаст массив, длинной в 10 элементов. Значения в таком массиве будут отсутствовать, т.е. не будет даже undefined.
// Поэтому такой массив нужно заполнить значениями для дальнейшего использования.

// Есть еще способ создания и заполнения массива - можно создать пустой массив [] и заполнять его методом push()

function mapArray(array) {
  "use strict";
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    numbers[i] = array[i] * 10;
  }
  return numbers;
}

console.log(mapArray([-2, 0, 2])); // [-20, 0, 20]
console.log(mapArray([-2.5, 0, 2.5])); // [-25, 0, 25]
// -------------------------------------------------------------

// Задача 3-6
// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.

function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  let result = 0;
  for (const product of array) {
    if (prop === product.name) {
      result += product.price * product.quantity;
    }
  }
  return result;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар")); // 9080
console.log(calculateTotalPrice(products, "Сканер")); // 10200
console.log(calculateTotalPrice(products, "Захват")); // 2400
console.log(calculateTotalPrice(products, "Дроид")); // 2800
// -------------------------------------------------------------

// Задача 6-6
// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей, 
// которые попадают в возрастную категорию от min до max лет (значение свойства age).

// Сравнение, пример

// const x = 13;

// // num больше 10 ?
// const larger = num > 10; // true

// // num меньше 100 ?
// const smaller = 100 > num; // true

// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true
// Создание анонимных объектов:

// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
// /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age > min && age < max)    
 .map(({name, email}) => ({name, email}));  

console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */
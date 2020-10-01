// Задача 2-8
// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.
// Для подсчета суммы используй переменную total. Функция должна возвращать 0 если массив пустой и значение total в противном случае.

function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line
  for (const value of array) {
    total += value;
  }

  return total;
}

console.log(reduceArray([1, 2, 3])); // 6
console.log(reduceArray([-2, 0, 2])); // 0
console.log(reduceArray([1, 2, 2.5])); // 5.5

// другой вариант решения

function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }

  return total;
}

console.log(reduceArray([1, 2, 3])); // 6
console.log(reduceArray([-2, 0, 2])); // 0
console.log(reduceArray([1, 2, 2.5])); // 5.5
// --------------------------------------------------------------

// Задача 6-8
// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.

// Используй деструктурирующее присваивание для параметра функции {friends}и ({name}) без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив.
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);

console.log(getUsersWithFriend(users, "Briana Decker"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, "Goldie Gentry"));
// [ 'Elma Head', 'Sheree Anthony' ]

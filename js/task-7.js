// Задача 2-7
// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив. Функция проверяет каждое значение массива - является ли значение конечным числом (Number.isFinite).
// Для проверки используй цикл for.
// Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются.
// По завершению проверки массива array возвращается массив numbers.

function filterArray(array) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (!Number.isFinite(array[i])) continue;
    numbers.push(array[i]);
  }
  return numbers;
}

console.log(filterArray([-2, 0, 2])); // [-2, 0, 2]
console.log(filterArray([1, NaN, Infinity])); // [1]
console.log(filterArray([0, -0, 100, "100"])); // [0, 0, 100]
console.log(filterArray([undefined, false, null, [], 1])); // [1]
console.log(filterArray([{}, () => {}, 2])); // [2]
// ------------------------------------------------------------

// Задача 6-7
// reduce
// Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

// Используй деструктурирующее присваивание для параметра функции {balance} без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. 
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const calculateTotalBalance = array => array.reduce((acc, {balance}) => {return acc + balance}, 0);

console.log(calculateTotalBalance(users)); // 20916
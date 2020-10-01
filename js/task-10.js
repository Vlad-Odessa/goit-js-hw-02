class User {
  conctructor({ name, age, followers }) {
    this.name = " ";
    this.age = Number;
    this.followers = Number;
  }
  getInfo() {
    console.log(
      `User ${" "} is ${Number} years old and has ${Number} followers`
    );
  }
}

console.log(typeof User);
// 'function'

const mango = new User("Mango", 2, 20);
console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo);
// 'function'

const poly = new User("Poly", 3, 17);
console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
// --------------------------------------------------

// Задача 6-10
// reduce, filter, sort
// Получи массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// Слияние массивов:

// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив.
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const getSortedUniqueSkills = (array) =>
  array
    .reduce((acc, item) => [...acc, ...item.skills], [])
    .filter((current, index, arr) => arr.indexOf(current) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */

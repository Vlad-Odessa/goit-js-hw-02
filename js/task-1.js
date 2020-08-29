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

const getItemsString = function(array) {
    // строгий режим!
    'use strict'; 
    // Write code under this line
    let result = '';
    for(let i=0; i<array.length; i+=1) {
    result += `${i+1} - ${array[i]}\n`;
    }
    
    return result;
    
  };
  
  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
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

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
//Write code under this line  
user.mood = 'happy',
 user['full time'] = true,
 user.hobby = 'skydiving',
 user.premium = false;
   
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
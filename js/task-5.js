// Напиши скрипт имитирующий оформление заказа в избранную страну.

// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName . Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'. Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква (свойство [0]) была заглавной (метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Доставка в ${} будет стоить ${} кредитов
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// Для определения стоимости (переменная price) или записи сообщения о невозможности доставки используй switch.

// В случае, если доставка возможна (цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const countryName = "Китай";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    // Write code under this line
    case CHINA:
      price = 100;
      break;

    case AUSTRALIA:
      price = 170;
      break;

    case INDIA:
      price = 80;
      break;

    case JAMAICA:
      price = 120;
      break;

    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
// ---------------------------------------------------------------------------

// Задача 2-5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

function checkForSpam(str) {
  "use strict";
  // Write code under this line
  let message =
    str.toLowerCase().includes("spam") || str.toLowerCase().includes("sale");
  return message;
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// другой вариант решения

function checkForSpam(str) {
  "use strict";
  // Write code under this line
  return str.toLowerCase().includes("spam") ||
    str.toLowerCase().includes("sale")
    ? true
    : false;
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// -----------------------------------------------------------------------------

// Задача 3-5
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

function getAllPropValues(array, prop) {
  "use strict";
  // Write code under this line
  let result = [];
  for (const key of array) {
    if (prop in key) {
      result.push(key[prop]);
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

console.log(getAllPropValues(products, "name")); // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 2, 1, 1, 3, 7, 2]
console.log(getAllPropValues(products, "category")); //  []
// ------------------------------------------------------------------

// Задача 4-5
// bind для замены this в методах объекта
// Оформи вызов метода invokeInventoryAction таким образом, чтобы в качестве this для методов

// inventory.add
// inventory.remove выступал объект inventory

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function (itemName, action) {
  const act = action(itemName);
  const msg = `Invoking action on ${itemName}`;
  return { act, msg };
};

const invokeAdd = invokeInventoryAction(
  "Medkit",
  inventory.add.bind(inventory) // Write code in this line
);
const arrayAdd = [...inventory.items];

console.log(invokeAdd); //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

console.log(arrayAdd); // ['Knife', 'Gas mask', 'Medkit']

const invokeRemove = invokeInventoryAction(
  "Gas mask",
  inventory.remove.bind(inventory) // Write code in this line
);

const arrayRemove = [...inventory.items];

console.log(invokeRemove); //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

console.log(arrayRemove); // ['Knife', 'Medkit']
// -------------------------------------------------

// Задача 5-5
// класс
// Напиши класс Car с указанными свойствами и методами.

// class Car {
  /*
   * Добавь `статический` метод `getSpecs(car)`, который принимает объект-машину как параметр 
   * и возвращает шаблонную строку со свойствами и значениями объекта.
   * Свойства: 
   *   maxSpeed, 
   *   speed, 
   *   isOn, 
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, 
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль. 
   *         Значения `true` или `false`,  
   *         начальное значение false
   *  distance - пробег в километрах, 
   *             начальное значение `0`
   */
  // constructor() {}

  /*
   * Добавь геттер и сеттер для свойства `price`, который будет работать с свойством цены автомобиля.
   * ВАЖНО: для записи методов get и set значение параметра записывают с подчеркиванием. См. ниже пример 1.
   */

  /*
   * Метод, который заводит автомобиль Записывает в свойство `isOn` значение `true`
   */
  // turnOn() {}

  /*
   * Метод, чтобы заглушить автомобиль Этот метод должен записывать в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
  // turnOff() {}

  /*
   * Этот метод должен добавлять к свойству `speed` полученное значение, при условии, что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
  // accelerate(value) {}

  /*
   * Этот метод должен отнимать от свойства `speed` полученное значение, при условии, что результирующая скорость не меньше 0
   */

  // decelerate(value) {}

  /*
   * Этот метод должен добавлять к свойству `distance` пробег в километрах, т.е. hours * speed, но только в том случае, 
   * если машина заведена!
   */
  // drive(hours) {}
// }

// #### Пример 1.

// ```js
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     /* параметр name не должен 
//      *   совпадать с названием свойства
//      *   но должен быть похож.
//      *   Поэтому используют прием смены
//      *   названия добавляя символ '_'.
//      *   Хотя это может любой другой символ
//      */
//     this._name = name;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
}

class Car {
  // Write code under this line
   static getSpecs(car){
   return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
   }
   
   constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0} = {}){
   this.speed = speed;
   this.price = price;
   this.maxSpeed = maxSpeed;
   this.isOn = isOn;
   this.distance = distance;
   }
   
   get price() {
   return this._price;
   }
   
   set price(value) {
   this._price = value;
   }
   
   turnOn() {
   this.isOn = true;
   }
   
   turnOff() {
   this.isOn = false;
     this.speed = 0;
   }
   
   accelerate(value) {
   if ((this.speed + value) <= this.maxSpeed) {
   this.speed += value;
   } else {this.speed = this.maxSpeed}
   }
   
   decelerate(value) {
   if ((this.speed - value) >= 0) {
   this.speed -= value;
   } else {this.speed = 0}
   }
   
   drive(hours) {
   if (this.isOn) {
   this.distance += hours * this.speed;
   }
   }
 }
  
 const mustang = new Car({ maxSpeed: 200, price: 2000 });
 mustang.turnOn();
 mustang.accelerate(50);
 mustang.drive(2);
 
 console.log(Car.getSpecs(mustang)); // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 
 mustang.decelerate(20);
 mustang.drive(1); 
 mustang.turnOff();
 
 console.log(Car.getSpecs(mustang)); // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
 
 console.log(mustang.price); // 2000
 mustang.price = 4000;
 console.log(mustang.price); // 4000
//  ---------------------------------------------

// Задача 6-5
// find
// Получи объект пользователя (не массив) по уникальному значению свойства email.

// Используй деструктурирующее присваивание для параметра функции ({email}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. 
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);


console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

/* {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
} */

console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));

/* {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
} */

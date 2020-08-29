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

const message = invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";
    console.log(message);
// --------------------------------------------------------------------------------------


// Задача 2-2
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.

const calculateEngravingPrice = (message = "", pricePerWord = 0) => message.split(' ').length * pricePerWord; // Write code in this line

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120
console.log(calculateEngravingPrice('Uno', 100)); // 100
//Таски на умови.

//1) Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
let userValue = Number(prompt("Enter a number:"));
const inputValue = 10;

if (userValue === inputValue) {
  console.log("Number" + userValue + "is equal to 10 ");
} else {
  console.log("The number" + userValue + "is not equal 10 ");
}

//2) Напишіть дві перевірки.
//Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.

const test = true;

if (test) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

//Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'

const test1 = false;

if (!test1) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}

//3) Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.
const purchase = Number(prompt("Введіть суму покупки"));
if (purchase > 500) {
  console.log("Ваша знижка" + (purchase % 3) + "грн");
} else if (purchase > 800) {
  console.log("Ваша знижка" + (purchase % 3) + "грн");
}
/************************************************* *****************/
//Таски на цикли.
//Кожне завдання вирішити циклами while, for.

//1) Виведення чисел від 25 до 0 (порядок зменшення).
let i = 25;
while ((i < 26, i > -1)) {
  console.log(i);
  i--;
}

for (i = 25; i >= 0; i--) {
  console.log(i);
}

//2) Виведення чисел від 10 до 50, які кратні 5.
let f = 10;
while (f <= 50) {
  console.log(f);
  f += 5;
}

for (f = 10; f <= 50; f += 5) {
  console.log(f);
}

//3) Знайти суму чисел в межах від 1 до 100.

let n1 = 0;
let n2 = 0;

while (n1++ < 100) {
  console.log(n2);
}

let m1 = 0;
let m2 = 0;
for (let m1 = 0; m1 <= 100; m1++) {
  m2 += m1;
}
console.log(m2);

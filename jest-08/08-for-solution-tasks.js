// Задача 1: Функция принимает число
// Вернуть строку, содержащую числа от 1 до n, разделенные пробелами.
const printNumbers = (n) => {
  let str = "";
  let cnt = 1;
  while (cnt <= n) {
    str += cnt + " ";
    cnt++;
  }
  return str.slice(0, -1);
};

// Задача 2: Функция принимает число (n)
// Вернуть сумму чисел от 1 до n.
const calculateSum = (n) => {
  let sum = 0;
  let cnt = 1;
  while (cnt <= n) {
    sum += cnt;
    cnt++;
  }
  return sum;
};

// Задача 3: Функция принимает число (n)
// Вернуть количество четных чисел от 1 до n.
const countEvenNumbers = (n) => {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      cnt++;
    }
  }
  return cnt;
};

// Задача 4: Функция принимает число (n)
// Вернуть объект, где ключи - числа от 1 до n, а значения - их квадраты.
const calculateSquares = (n) => {
  let obj = {};
  for (let i = 1; i <= n; i++) {
    obj[i] = i * i;
  }
  return obj;
};

// Задача 5: Удвоить каждый элемент массива, внутри функции лучше использовать forEach
// Вернуть новый массив, в котором каждый элемент умножен на 2.
const doubleArray = (arr) => {
  const newArr = [];
  arr.forEach((num) => {
    newArr.push(num * 2);
  });
  return newArr;
};

// Задача 6: Объединить значения свойств объекта в строку, внутри функции лучше использовать forEach
// Вернуть строку, содержащую все значения свойств объекта, разделенные запятой.

const joinObjectValues = (obj) => {
  let str = "";
  Object.values(obj).forEach((element) => {
    str += element + ",";
  });
  return str.slice(0, -1);
};
console.log(joinObjectValues({ a: "apple", b: "banana", c: "cherry" }));
module.exports = {
  printNumbers,
  calculateSum,
  countEvenNumbers,
  calculateSquares,
  doubleArray,
  joinObjectValues,
};

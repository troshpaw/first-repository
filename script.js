
// Сортировка массива и опредление min и max значений

var min = function(list){
    list.sort(compareNumbers);
    return list[0];
};

var max = function(list){
    list.sort(compareNumbers);
    let lengthList = list.length;
    return list[lengthList - 1];
};

/* сортировка по возрастанию
var min = function(list){
  list.sort((a, b) => (a - b));
  return list[0];
}
*/

/* сортировка по убыванию
var max = function(list){
  list.sort((a, b) => (b - a));
  return list[0];
}
*/

// вариант функции №1
/* 
function compareNumbers(a, b) {
  return a - b;
};
*/

// вариант функции №2
/*
function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
};
*/

// вариант функции №3
function compareNumbers(a, b) {return a - b};

/* описание функции
function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
};
*/

randomArr = [1,4,2,8,0,-4,5,-7,7,1,5];
console.log("Исходный массив: " + randomArr);
console.log("Минимальное значение: " + min(randomArr));
console.log("Максимальное значение: " + max(randomArr));
console.log("Массив после сортировки: " + randomArr);
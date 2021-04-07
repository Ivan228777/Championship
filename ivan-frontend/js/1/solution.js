// Решение пиши тут. Скопируй сюда код из template.js


//задача номер 1


'use strict';
function abProblem(a, b) {
  if (typeof a != "number" ){
    console.log("TypeError")
    return undefined
  }
  else if (typeof b != "number"){
    console.log("TypeError")
    return undefined
  }
  return a + b
}
console.log(abProblem(10, 10))



// задача номер 2


'use strict'
 function centuryByYearProblem(year) {
   if (typeof year != "number"){
     console.log("TypeError")
     return undefined
   }
   else if (year < 0){
     console.log("RangeError")
     return undefined
   }
   let cent = year / 100
   cent =  Math.floor(cent)
   cent = cent + 1
   return(cent)
}
console.log(centuryByYearProblem(2021))



// задача номер 3 

"use strict"
let a = "242"
if (a.length === 2 & a.length != 3){
  console.log("0"+a)
}
if (a.length === 3){
  console.log(a)
}
let b = "343"
if (b.length === 2 & b.length != 3){
  console.log("0"+b)
}
if (b.length === 3){
  console.log(b)
}
let c = "44"
if (c.length === 2 & c.length != 3){
  console.log("0"+c)
}
if (c.length === 3){
  console.log(c)
}



//задача номер 5

'use strict';

function phoneProblem(phoneNumber) {
  let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
  if(!regex.test(phoneNumber)){
    console.log('False');
  }
  else if (typeof phoneNumber != "string"){
    console.log("TypeError")
    return undefined
  }
  else{
    console.log('True');
}
  }
console.log(phoneProblem("89000000000"))


//задача с фибоначи
"use strict"


function fibonacciProblem(n) {
  if (n === 1 || n === 2){
    return 1
  }
  return fibonacciProblem(n - 2) + fibonacciProblem(n-1)
  if (typeof n != "number"){
    throw "TypeError"
  }
  if (Number.isInteger(n) != True | n < 0){
    throw "RangeError"
  }
}
console.log(fibonacciProblem(15))


// задача со смайликами
"use strict"

let str =":):ewqeqweqwe):dsadasda)dasdas:)"
let subst = ":)"
if (typeof str != "string"){
  throw "TypeError"
}
let p = 0
let score = 0
while (true){
  let fp = str.indexOf(subst , p)
  if (fp === -1) 
    break
  score = score + 1
  p = fp + 1
}
 console.log(score);





// новая задача
// Напишите программу, которая выводит через console.log все цифры от 1 до
// 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех
// чисел, которые делятся и на 3 и на 5.

"use strict"
let n = 0
for (n; n < 100 ; n++){
  if (n % 3 === 0 & n % 5 != 0){
    let n = "Fizz"
    console.log(n)
  }
  if (n % 5 === 0 & n % 3 != 0){
    let n = "Buzz"
    console.log(n)
  }
  if (n % 3 === 0 & n % 5 === 0){
    let n = "FizzBuzz"
    console.log(n)
  }
  if (n % 3 != 0 & n % 5 != 0){
    console.log(n)
  }
}



module.exports = {
  abProblem,
  centuryByYearProblem,
  colorsProblem,
  fibonacciProblem,
  phoneProblem,
  smilesProblem,
  ticTacToeProblem
};



// сделать поле для ввода и кнопку. Ты воодишь нат. число ( в поле для ввода) , дальше наж. кнопку , а он ниже выводит число фибоначи ( по номеру , как в задачке).
//( новый HTML док , скрипт , кнопку , и функция задачки.)
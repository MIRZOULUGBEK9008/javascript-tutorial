// Arrayning ichida qaysi harf nechtadan qatnashganini aniqlab beruvchi kod yozish
// let ar = ["webbrain", "academy"];

// let result = {}
// for(value of ar) {
//   for(index in value) {
//     console.log(value[index].length)
//   }
// }


// res = {
//   w: 1,
//   e: 2,
//   b: 2,
//   r: 1,
//   n: 1,
//   c: 1,
//   a: 3,
//   d: 1,
//   m: 1,
//   y: 1
// }


// Array ichida bir xil bo'lgan elementlarni chiqarib yuboring
let array = [5, 7, 1, 8, 5, 2, 2, 7, 5, 1, 0, 5, 2, 6]

// console.log(new Set(array))   // 1-usul

let result = array.filter((value, index, array) => array.indexOf(value) === index) //2-usul
console.log(result);

// 3-usul ❔ shu 3-usulni topish

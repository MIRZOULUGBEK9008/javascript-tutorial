// Arrayning ichida qaysi harf nechtadan qatnashganini aniqlab beruvchi kod yozish
let ar = ["webbrain", "academy"];

let result = {}
for(value of ar) {
  for(index in value) {
    console.log(value[index].length)
  }
}





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

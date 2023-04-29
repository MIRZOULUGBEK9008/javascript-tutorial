// Array basic
// Array ga acces qilish uchun to'rtburchak qavslardan [] foydalaniladi. Array index bo'yicha chaqiriladi va object dan farqi ham shunda.

// Istalgan array ning eng oxirgi elementini chaqirish uchun hozircha bizda 3 ta usul mavjud:
// 1 - usul: array ning length i aniqlanadi hamda oxirgi index yozilib chaqiriladi ❌ no recommend
// 2 - usul: arrayName[lenght - 1] ✅ easy
// 3 - usul: arrayName.at(-1) ✅ easiest

// Bo'sh array yasashning 2 xil usuli mavjud

// 1 - usul
// let ar = []
// console.log(ar)  //   []

// 2 - usul
// let arr = new Array()
// console.log(arr)  //   []

// Endi savol bo'lishi mumkin har ikkalasi ham bir xil narsa yasar ekan, ularning farqi nimada ?
// new Array() ga biz parametr sifatida raqam beradigan bo'lsak u raqam shu array ning lenght iga teng bo'ladi hamda shuncha bo'sh element yaratadi.


// Array ni  string ga o'girish uchun 2 usul mavjud
let ar1 = [2, 456, 789, 45]
let ar2 = [5, 85, 7, 12]
console.log(typeof ar1.toString()); // string
console.log(typeof ar2.join()); // string, toString() dan buni farqi bu parametr qabul qiladi masalan join("||") deb yozadigan bo'lsak har bir array ning orasiga shu belgini qo'yib beradi.


// Array larni qo'shish uchun concat() metotidan foydalanib qo'shadigan bo'lsak biz kutgan natijani beradi, agar biz shunchaki ar1 + ar2 qilib qo'shadigan bo'lsak string ko'rinishida qo'shib qo'yadi.
console.log(ar1 + ar2); // 2,456,789,455,85,7,12
console.log(ar1.concat(ar2)); // [2, 456, 789, 45, 5,  85,   7, 12] ✅ biz kutgan natija

// Arrayn ni aniqlash uchun method bor
Array.isArray(arrayName) // true yoki flase qiymat qaytaradi

// Comparison
let ar = []

console.log(ar == 0) // true
console.log(ar == "0") // false typeof string bo'lgani uchun

// Mana shu yerda for in hamda for of ning farqini ko'rib ketadigan bo'lsak
for(index in ar) // index keladi
for(value of ar) // value keladi






// ==============================
// Array advanced 2/3
let num = [43, 84, 23, 12, 54, 12, 10, 8, 3, 5, 7, 11]
console.log(num.sort()) // [10, 11, 12, 12, 23, 3, 43,  5, 54,  7, 8, 84]

// Yuqoridagi kodni ko'radigan bo'lsak bizga to'g'ri tartiblab bermadi, sababi bu birinchi raqamiga qaradi va taqqosladi, keyingisini ignore qilib yubordi.

// sort() to'g'ri ishlashi uchun callback kerak
console.log(num.sort((a, b)=> a - b)); // ascending way
// ana endi to'g'ri ishlaydi bunda JavaScript o'zining sorting algoritimidan foydalanadi ya'ni birinchida kelgan raqamni olib o'zidan boshqa hamma raqamga solishtiradi.

console.log(num.sort((a, b)=> b - a)); // descending way, undan tashqari istalgan nom qo'yish mumkin


// Rest(yig'amiz) and spread(sochamiz) operator
// function sum(a, b, ...args) {
//   console.log(args)
// }

// sum(2, 6, 8, 7, 5, 2, 1)

// ... tipa {}dan va []dan chiqaradi
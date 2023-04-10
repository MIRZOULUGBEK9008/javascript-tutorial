// if else
// if else da () ning ichida 2 ta qiymat bor true yoki false. Kod true bo'lganda ishlaydi.
// if else da
// 0, null, undefined = false

// ES6 dan boshlab shunaqa bo'ladi ya'ni if else da agar kodimiz bir qatorga sig'sa biz {} curly braces ni qo'ymasa ham bo'ladi bu faqat kodni soddalashtirish uchungina holos.

// Conditional operator || question mark operator || Ternary operator || ? - if, : - else
// Bu faqat true yoki false ni tekshirishda ishlatilish tavsiya qilinadi(recommend). Va bunda else yozilishi majburiy agar else qolib ketadigan bo'lsa error beradi

// temp > 0 ? === if (temp > 0)
temp > 0 ? console.log("Hello world") : console.log("Bye world");

// Nullish operator
// ?? - null, undefined
// Nullish operator OR || bilan bir xil, faqat bu null va undefined tekshiradi ya'ni null va undefined ni false deb hisobga oladi qolgan barchasini true deb qabul qiladi.

// OR || -> undefined, null, 0, NaN, false
console.log(false || true); //true
console.log(false ?? true); // false
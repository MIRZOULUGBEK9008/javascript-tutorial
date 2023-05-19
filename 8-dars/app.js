// Numbers

// toFixed( parameter qabul qiladi ) qiymatlarni kasr qismida nechta son qolishini belgilab beradigan metod. toFixed() raqamni avtomatik ravishda stringga convert qilib yuboradi.
//  _ underscore sonlarni oson o'qishga yordam beradi va bu biz uchun. Agar underscore string ichida bo'ladigan bo'lsa uji noto'g'ri ishlaydi

// eval() bu string ichida arifmetik amal bajarishda yordam beradigan metod. eval() ni Number() metodi ichida ishlatsak ham bo'ladi, ishlatmasak ham bo'ladi ya'ni bir xil natija qaytaradi.

// 1e6 === 1 000 000

// toString() metodi raqamni stringa o'zgartirishda ishlatiladi va u parameter qabul qiladi ya'ni raqamni 2 lik sanoq sistemasiga o'tkazib ham beradi

let num = 5
console.log(num.toString(2)); // 101 // to binary
console.log(parseInt("101", 2)); // 5 // to decimal

// Object.is 2 ta string ni taqqoslaydi
Object.is("web", "webb") // false

// 9_999_999_999_999_999 -> shows 1e15



// =================================
// Math  JavaScriptning o'zida mavjud bo'lgan kutubxona [o'rnatish kerak emas ))]

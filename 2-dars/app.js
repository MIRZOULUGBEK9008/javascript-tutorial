// Type conversion
// Type conversion bu bir ma'lumot turidan boshqasiga o'tkazishga aytiladi
// Stringni Numberga o'zgartirish uchun string oldidan + arifmetik belgisi qo'yiladi. Va yana bir usuli Number() metodi orqali.

parseInt // parse integer butun sonlar uchun
parseFloat // parse float  kasr(butun bo'lmagan) sonlar uchun

Number() // qanday bo'lsa shunday transfer qiladi.
Number.parseInt() // agar son butun bo'lmasa uni yaxlitlab transfer qiladi.
Number.parseFloat() // kasr son bo'lsagina, shundayligicha transfer qiladi.



// =============================
// Operators
// Addition (+): Adds two numbers together or concatenates two strings.
// Subtraction (-): Subtracts one number from another.
// Multiplication (*): Multiplies two numbers together.
// Division (/): Divides one number by another.
// Remainder (%): Returns the remainder after division.
// Exponentiation (**): Raises one number to the power of another.

// Braces  ()
// Equality =, ==, ===
// Abrivations +=. -=, *=, /=
// Increment ++
// Decrement --

// Abrivations
let a = 10;
a = a + 10; // 20
a -= 10; // 10
console.log(a); // 10

// Logical Operators
// || or - bittasi qaoatlantirsa ham true qaytaradi
// && and - ikkalasi qanoatlantirsa true qaytaradi

// Equality
// = - o'zgaruvchiga quiymay biriktiishda
// == - tekshirishda, taqqoslashda //qiymatni o'zini taqqoslaydi
// === - qat'iy taqqoslashda ya'ni Data type ni ham taqqoslaydi

// JavaScript dasturlash tilida string larni taqqoslashda ASCII tabledan foydalanadi
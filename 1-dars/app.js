// JavaScript
// JavaScript 1995-yilda Brandan Each tomonidan ishlab chiqarilgan. Birinchi nomi LiveScript bo'lgan. JavaScript single thread language hisoblanadi ya'ni bir vaqtning o'zida faqat bitta amal bajara oladi holos.
// Assignment bu qiymat biriktirish..

// JavaScript bir necha xil usullarda HTMLga ulanadi:
// 1. "Internal" ya'ni head tagining yopilish qismidan oldin va body tagining yopilish qismidan oldin.
// 2. "External" Alohida js fayl ochiladi hamda body tagining tugash qismidan oldin src attributi orqali ulanadi



// ============================
//  Variables
// let, const, var
// const va let ning farqi let ning qiymatini o'zgartirsa bo'ladi const esa o'zgarmas.
// var va let ning farqi shuki let yangi var eski hamda var dan foydalanilganda ba'zi joylarda muammo chiqishi mumkin shuning uchun let dan foydalanish ma'qulroq hamda let xotiradan kamroq joy eggalaydi. let scope, var global

// Agar hech qanday kalit so'z(let const var) yozmasdan qiymat biriktirsa, u avtomatik ravishda var bo'ladi..
// O'zgaruvchilarga nom berayotganda raqam bilan boshlab bo'lmaydi, lekin tugashi mumkin va o'rtasiga ham chiziqcha qo'yib bo'lmaydi faqatgini pastki chiziq bilan yozishimiz kerak. Boshida ham o'rta chiziqcha qo'yib bo'lmaydi, lekin pastki chiziqcha va dollar($) bilan boshlasa bo'ladi bo'ladi. Shuningdek JavaScriptdagi mavjud (const, let, if, var) (reserved keyword) kabi kalit so'zlar bilan ham nomlab bo'lmaydi.



// ============================
//  Data types - Ma'lumot turlari
// Ma'lumotlar 2 ga bo'linadi primitieve va non-primitieve

// Primitieve
// Bigint - 9007199254740992n "n" is bigint
// Number - sonlar va raqamlar har qanday. in range of +9007199254740992
// String - "", '', `` ichiga yozladigan har qanday text string turiga mansub bo'ladi.
// Boolean - mantiqiy ifoda true/false qiymat qaytaradi
// Null- Umuman hech qanday ma'lumot qaytarmaydi va matematik jihatdan 0 ga teng.
// Symbol - objectlar bilan birga ishlatilinadi.
// Underfined - o'zgaruvchi bor, lekin qiymat yo'q

// Non primitieve
// Object - array, function, object

// type of - ma'lumot turini aniqlaydi

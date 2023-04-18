// Object tipa Advanced
// JavaScriptda kod yuqoridan pastga qarab yurganda, barcha kodlar call satck joylashadi.
// Stackka barcha promitieve data type dagi ma'lumotlar joylashadi
// Qachonki non-primitieve data type keladigan bo'lsa, stack ga linnk beradi o'zi esa heap ga joylashadi, qayerda istalgan bir manzilda

// Garbage collection degani bu agar biz object ning value siga acces bo'lmaganida(yetib bo'lmaganida) garbage collectorlar u narsani memorydan o'chirib yuborishiga aytiladi. Jumladan qachonki link o'zgaradigan bo'lsa ya'ni object ning joylashuvi o'zgaradigan bo'lsa garbage(musor) bo'lib qoladi. Uni remove qilish kerak va buni avtomatik ravishda garbage collectorlar amalga oshiradi va bu hodisa garbage collection deb ataladi.

// JavaScriptda hamma narsa object

// This
// this parent object ni trigger qiladi ya'ni nazarda tutadi
// arrow function da this yo'q
// Local variable ni tashqariga olib chiqmoqchi bo'lsak mana shu this dan foydalanamiz. This accesable bo'lishi uchun esa new metodidan foydalanamiz

// new.target constructer bilan function chaqirilgan yoki chaqirilmaganini aniqlab beradi

let user = {
  name: "Webbrain Academy",
  sayHi() {
    // console.log(`Hi, ${user.name}`)
    console.log(`Hi, ${this.name}`);
  }
}

let usr = user;
user = null;
usr.sayHi();

// ["id2"] === id2 === "id2" ✅

// Qachonki [] ning ichida key kelsa dynamic bo'ladi , dynamic istalgancha o'zgartirishimz mumkun bo'lgan key

// Distructure
let name = "Unknown"
let obj = {
  name: "Webbrain Academy",
  id: 458,
  title: "IT Center",
  child: {
    childname: "Poppi"
  }
}
const {name: newName, id, title, child:{childname}} = obj
console.log(id); // 458
console.log(newName); // Webbrain Academy

// Agar distructure bo'layotgan ma'lumotni yana biz distructure qiladigan bo'lsak {} dan foydalanamiz.

// Spread operator ...
// spread operator prantdan ma'lumotlarni tashqariga olib chiqishda ishlatiladi 
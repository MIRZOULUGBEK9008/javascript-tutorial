// While, do while

// While
while(true) { // () 2 qavs orasida condition qabul qiladi, u true bo'lsa ishlaydi false bo'lsa yo'q.
  console.log("Mirzo Ulug'bek");
}

// Do while
//  Do whileda oldin ish bajariladi keyin shart tekshiriladi. Whileda esa oldin shart tekshiriladi, keyin ish bajariladi.
let b = 25;
do {
  console.log(b);
  b--;
} while(b > 20)

// Function
// function bilan method ning farqi, function ni biz o'zimiz yozamiz. method esa JavaScript dasturlash tilida o'zi default yozilgan.
// Function   JS engine orqali yuradi

// dynamic deb bitta function yozib hamma holatlarga mos tushib ketishiga aytiladi

// Housting deb barcha variable va function expression larni eng yuqorida declare qilishga aytiladi

// Variable shadow bu bir xil nom bilan ikki xil variable biriktirishga aytiladi. Dastlab function ichidan qidiradi keyin tashqaridan

// function o'zini o'zi chaqirsa loop ga tushib qoladi va bu holat recursive function deb ataladi..

// default parameter, agar biz qiymat bersek o'sha qiymatni oladi, agar bermasak default ni oladi.
// ES6
const nameSurname = function (name, surname = ""){
  surname ? console.log(name, surname) : console.log(name);
}

nameSurname("Mirzo Ulug'bek", "Xudoyberdiyev");

// Function ga value biriktirish uchun unga return yozish kerak

// =======================
// Function declaration

// Bitta funksiya yaratish orqali uni istalgan joyda chaqirish mumkin ya'ni declare qilish mumkin.
logMe(); // mana bu  yerda

function logMe() {
  console.log("Hello, JavaScript is best programming  language");
}

logMe(); // mana bu yerda ham



// =======================
// Function expression
// Variable ga biriktiriladigan function lar function expression deb ataladi. Va buni xuddi variable ga o'xshab istalgan joyda declare qila olmaymiz.
const sayHi = function () {
  console.log("Hi");
}

sayHi();



// =======================
// Arrow function
const saySomething = () => {
  console.log("Hello my mom !");
}
// Object

// Key va value dan tashkil topgan casega biz obyekt deb ataymiz

// {key: value}

// Bo'sh obyektni generate qilishni 2 xil usuli bor, har ikkalasi ham bizga bo'sh obyekt hosil qiladi
// 1
// let objectOne = {};
// 2
// let objectTwo = new Object();

// JavaScript 99.99% holatda bir xil amal bajarish uchun 2 xil yo'l ko'rsatmaydi.

// Object larni chaqirishning 2 xil usuli mavjud. Acces qilishning..
// 1
const object = {
  key: "hello world",
  id: 745896,
  number: 251,
  "full name": "Mirzo Ulug'bek",
  255: 000,
  numberTwo : 222
};

let smth = "numberTwo";

console.log(object.key);
console.log(object[smth]);

// 2   dynamic way [proyekt yurib turgan vaqtda ham biz nima nom kiritsak shuni avtomatik belgilaydi  ]
console.log(object["full name"]);

// Bu 2 xil usulning bir-biridan farqi nimada deydigan bo'lsak, object ga key berayotganimizda, agar key nomi 2 bo'g'indan ortiq ya'ni o'rtasida space[probel] bo'ladigan bo'lsa, biz uni hohlasak ham 1-usul bilan chaqira olmaymiz. Mana shu yerda 2-usul qulayligini his qilamiz. Odatda keng qo'llaniladigan usul bu birinchi usul hisoblanadi. Yana bir farqi, agar bizda key ning nomi raqam bilan nomlagan bo'lsak ham biz uni 1-usul bilan chaqira olmaymiz, jumladan key nomi raqam bo'ladigan bo'lsa biz uni chaqirayotganda string ichida bersak ham bo'ladi, bermasak ham bo'ladi.

// console.log(object[255]); ✔
// console.log(object["255"]); ✔
// console.log(object.255); ❌


// Undan tashqari objectlarda ma'lumotlarni o'zgartirish, qo'shish va o'chirib tashlash ham mavjud
const account = {
  name: "1-maktab",
  major: "Umumiy o'rta ta'lim maktabi",
  numberStudent: 1589
};

//  Object freeze
Object.freeze(account) // ma'lumot qo'shishni ham, o'zgartirishni ham, o'chirib tashlashni ham "ignor" qiladi. Biz object freeze qildikmi tamom uni orqaga qaytara olmaymiz..

// Object seal
Object.seal(account) // ma'lumot qo'shib ham, o'chirib ham bo'lmaydi, lekin bor ma'lumotni update qilish mumkin. Object freeze dan farqi shu..

account.id = 55; // bu yangi ma'lumot qo'shadi
delete account.major // bu bor ma'lumotni o'chiradi

// shu yerda savol tug'uladi const ni o'zgartirib bo'lmaydi degan edik, lekin o'zgartira olyapmiz nega ?
// chunki biz object nomini o'zgartirganimiz yo'q..
account.numberStudent = 1300; // bu bor ma'lumotni o'zgartiradi

// Agar bizga ma'lumotlari bir xil, lekin joylashuvi har xil bo'ladigan object kerak bo'lsa bizga structedClone() yordamga keladi..
const ac1 = {
  id: 456,
  name: "school"
}
const ac2 = structuredClone(ac1)


// Qoida: agar value variable dan qiymat oladigan bo'lsa, va uning nomi key bilan bir xil bo'ladigan bo'lsa buz quyidagi holatda yozishimiz ham mumkin..
// Chunki dasturchilar juda ham dangasa..
let name = "Mirzo Ulug'bek";
let id = 0202;

const dataMirzo = {
  name: name,
  id: id
}  // ✔

const dataMirzo = {
  name,
  id
} // ✔

const dataMirzo = {
  name,
  id: id
} // ✔

const dataMirzo = {name, id } // ✔


// Object da "in" degan key ham bor bo'lib, uning vazifasi object ichida falon nomli key bormi yoki yo'q shuni tekshiradi. Agar bor bo'lsa true, yo'q bo'lsa false qiymat qaytaradi. Faqat key ni tekshiradi, variable ni emas

console.log("name" in dataMirzo); // bu yerda name nomli key dataMirzo object ning ichida mavjudmi degani


//  Object.assign(objectName, objectName) - bu xuddi variable bilan ikkita object ni tenglab qo'yish bilan bir xil




// ======================
// for in, objectName deganda obyektning nomini nazarda tutyapman..

// for(i in objectName) {console.log(i) } - Falon obyektining ichidagi key larni aylanib chiqadi hamda ularni konsolda ko'rsatadi, agar bizga key larni value si kerak bo'ladigan bo'lsa Object.values(objectName), agar ham value, ham key kerak bo'lsa Object.entries(objectName)
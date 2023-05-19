// Array, CRUD

// Callback function oladigan barcha elementlar xuddi for loopga o'xshab aylanib chiqadi.

// C - Create
// R - Reader
// U - Update
// D - Delete


// const students = [
//   {sex: "male",id: 1, name: "Abdurashid", age: 2004, major: "student"},
//   {sex: "male",id: 7, name: "Ubaydullo", age: 2007, major: "student"},
//   {sex: "male",id: 2, name: "Asilbek", age: 2002, major: "student"},
//   {sex: "female",id: 8, name: "Gavharoy", age: 2003, major: "teacher"},
//   {sex: "female",id: 14, name: "Qovunoy", age: 2003, major: "teacher"},
//   {sex: "female",id: 12, name: "Mohlaroy", age: 2007, major: "teacher"},
//   {sex: "female",id: 3, name: "Beginur", age: 2004, major: "teacher"},
//   {sex: "female",id: 10, name: "Shaxzoda", age: 2000, major: "teacher"},
//   {sex: "male",id: 4, name: "Muhammadyusuf", age: 2006, major: "student"},
//   {sex: "female",id: 5, name: "Muslima", age: 2006, major: "student"},
//   {sex: "female",id: 9, name: "Umida", age: 2005, major: "student"},
//   {sex: "male",id: 6, name: "Mirzo Ulug'bek", age: 2000, major: "teacher"},
//   {sex: "female",id: 13, name: "Shaxzoda", age: 2004, major: "student"},
//   {sex: "female",id: 11, name: "Nafratxon", age: 2002, major: "student"},
// ]



// let sortedStudents = students.sort((a, b) => a.age - b.age)

// console.log(sortedStudents);






// ===============================================================================
// ===============================================================================
// ===============================================================================


// new Date()


// let date = new Date()
// date.getTime() === Date.now()

// console.log(date.getDay()); // Haftaning nechanchi kunida ekanligmizni chiqarib beradi
// console.log(date.getDate()); // bugungi sannani chiqarib beradi
// console.log(date.getMonth() + 1); // hozirgi oy nomerini chiqaradi, 0 dan boshlanadi
// console.log(date.getFullYear()); // hozirgi yilni chiqaradi


// const getToday = () => {
//   let date = new Date()
//   return `Today: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
// };

// console.log(getToday());

// getFullYear() yozamiz, chunki getYear() depracated bo'lib ketgan ya'ni ba'zi brauzerlarda ishlamaydi


// let weeks = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
// let date = new Date()
// let fullDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;






// ===============================================================================
// ===============================================================================
// ===============================================================================


// JSON
// JSON - JavaScript Object Notation

// JSON nima, JSON hajmi juda kichik objectga o'xshaydi, lekin object emas ❌

// JSON asosan konfiguratsiya fayllari hamda, Backend bilan oldi berdi qilingan vaqtda ishlatamiz

// Nega aynan JSON, chunki barcha dasturlash tillari tushanadigan fayl kengaytmasi bu biz front ma'lumot jo'natganimizda backend PHPda yozilgan bo'lsa ham Pyhtonda yozilgan bo'lsa ham biz o'natgan ma'lumotni tushunishi kerak. Bu ma'lumot turi esa JSON dir..

// JSONda ma'lumot yozayotganimizda har doim qo'shtirnoqdan foydalnamiz sababi bizda xattoki '' birtirnoq ham xatolik beradi.

// Backenddan ma'lumot bizga JSON ko'rinishida keladi

// let obj = {
//   name: "Mirzo Ulug'bek",
//   id: 4567,
//   major: "hacker",
//   data: {
//    fullnName: "XUdoyberdiyev Mirzo Ulug'bek",
//    birthDate: 02022004
//   }
// }

// console.log(JSON.stringify(obj, ["name", "id", "data", "fullName", "birthDate"], 2));  // obj to JSON  (o'zgartirib string ko'rinishiga olib kelib qo'yadi, chunki object ko'rinishida oqiy olmaydi

// JSON.stringify(value, replacer[], indentation) => JSON.stringify() parametrlari
// 2-parametrini replacer(dependencer ) dedik, ya'ni biz backendga jo'natadigan ma'lumotlarni ["name", "major"] tarzidagi beradigan bo'lsak faqat shu ma'lumotlarni jo'natadi, biz uni filterlashimizga hojat qolmaydi

// 3-parametr indentation bu number qabul qiladi, nima qiladi deydigan bo'lsak objectlar nested bo'lganda ko'rishimizga oson qilib bergan number imiz qiymaticha bo'sh joy(space) qo'yib beradi. Bu umuman olganda formatting ya'ni readableity ni oshirishga hizmat qiladi, o'qishimiz uchun qulay ko'rinishga olib keladi


let obj = {
  name: "Mirzo Ulug'bek",
  id: 4567,
  major: "hacker",
  data: {
    fullnName: "Xudoyberdiyev Mirzo Ulug'bek",
    birthDate: 02022004
  }
}


let toJSON = JSON.stringify(obj)
let toObject = JSON.parse(toJSON)

// JSON.parse(value) ==> JSONni objectga o'giradi parametr sifatida value ya'ni JSONni qabul qiladi...
// Array, CRUD

// Callback function oladigan barcha elementlar xuddi for loopga o'xshab aylanib chiqadi.

// C - Create
// use spread ( ... ), distructure

// R - Reader
// filter, sort, includes, find

// U - Update
// filter, find

// D - Delete
// filter, splice


let students = [
  {sex: "male",id: 1, name: "Urinbayev Abdurashid", age: 2004, major: "student"},
  {sex: "male",id: 7, name: "Qosimov Ubaydullo", age: 2007, major: "student"},
  {sex: "male",id: 2, name: "Solijonov Asilbek", age: 2002, major: "student"},
  {sex: "female",id: 8, name: "Yulchiyeva Gavharoy", age: 2003, major: "teacher"},
  {sex: "female",id: 14, name: "Torvuzova Qovunoy", age: 2003, major: "teacher"},
  {sex: "female",id: 12, name: "Egamberidiyeva Mohlaroy", age: 2007, major: "teacher"},
  {sex: "female",id: 3, name: "Begijonova Beginur", age: 2004, major: "teacher"},
  {sex: "female",id: 10, name: "Ulkanboyeva Shaxzoda", age: 2005, major: "teacher"},
  {sex: "male",id: 4, name: "Mirzayev Muhammadyusuf", age: 2006, major: "student"},
  {sex: "female",id: 5, name: "Mirzayeva Muslima", age: 2006, major: "student"},
  {sex: "female",id: 9, name: "Xomidova Umida", age: 2005, major: "student"},
  {sex: "male",id: 6, name: "Xudoyberdiyev Mirzo Ulug'bek", age: 2000, major: "teacher"},
  {sex: "female",id: 13, name: "Tomchiyeva Shaxzoda", age: 2004, major: "student"},
  {sex: "female",id: 11, name: "Nafrataliyeva Nafratxon", age: 2002, major: "student"},
]

let map = new Map([["name", "Mirzo Ulug'bek"], ["id", 456], ["major", "futureTeacher"]])
// console.log(map.entries()); // key and value
// console.log(map.values()); // only values
// console.log(map.keys()); // only keys

// let gen = map.entries();      ***********
// gen.next();                             *
// gen.next();                             ****** ==> "ruchnoy loop 😉"
// gen.next();                   ***********
// console.log(gen.next()); ******



// const updateUserName = (obj) => {
//   let result = students.map(student => student.id === obj.id ? {...student, [obj.type]: obj.value} : student);
//   students = result;
// };

// updateUserName({id: 11, type: "major", value: "teacher"})
// console.log(students);

// const sortByAlphabet = students.sort((a, b) => a.name.localeCompare(b.name))

// const sortByYear = students.sort((a, b) => a.age - b.age);

// const deleteUserById = (id) => {
//   let res = students.filter(value => value.id !== id)
//   students = res
//   console.log(students);
// };

// deleteUserById(3)

// let mapStudents = students.map(value => value.id === 3 ? value : null)

// console.log(mapStudents);





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


// let obj = {
//   name: "Mirzo Ulug'bek",
//   id: 4567,
//   major: "hacker",
//   data: {
//     fullnName: "Xudoyberdiyev Mirzo Ulug'bek",
//     birthDate: 02022004
//   }
// }


// let toJSON = JSON.stringify(obj)
// let toObject = JSON.parse(toJSON)

// JSON.parse(value) ==> JSONni objectga o'giradi parametr sifatida value ya'ni JSONni qabul qiladi...
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


let weeks = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
let date = new Date()
let fullDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

console.log();

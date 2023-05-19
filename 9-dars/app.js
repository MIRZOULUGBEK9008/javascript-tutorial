// String
// ( \ )   backslash o'zidan keyingi character ni ignore qiladi

// String 2 xil  usulda yasaladi, jumladan variable orqali hamda string constructor orqali

let strOne = "Mirzo Ulug'bek" // string qaytaradi
let strTwo = new String("Mirzo Ulug'bek"); // object qaytaradi

// Stringlarni taqqoslash
// localCompare()
let str1 = "Webbrain"
let str2 = "Webrain"

console.log(str1.localeCompare(str2)) // -1[qiymat yo'q], 0[exactly bir-biriga mos], 1[qiymat qisman bor]


// Mutable and inmutable
// string inmutable hisoblanadi ya'ni ichidagi qiymatni indexi bo'yicha o'zgartira olmaymiz
// Qoida: index manfiy qiymat qabul qilmaydi

let name = "Beginur"
name[0] = "D" // ❌ inmutable
console.log(name); // Beginur

// by index .[index] = by .at(index) = by charAt(index)

// Accesing characters
// by index[] - only positive numbers
// by .at(index) - can get minus value  (-1 orqadan boshlab hisoblaydi)
// by .charAt(index) - not minus value

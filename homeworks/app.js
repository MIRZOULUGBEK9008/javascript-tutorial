// Object
// 1 ✅
let user = {}; // create object

user.name = "John", // add
user.surname = "Smith" // add
user.name = "Pete"; // change
delete user.name; // remove
console.log(user); // log

// 2 ✅
let schedule = {};

function isEmpty() {
  if (schedule.length === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

alert(isEmpty(schedule)); //true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

// 3
// Istalgan sonni 2 link sanoq sitemasiga o'tkazib, nechta 0 va nechta 1 qatnashganini aniqlang.
let decimalNumber = +prompt();
let value = decimalNumber.toString(2);
let numOfZeros = 0;
let numOfOnes = 0;
for (let i = 0; i < value.length; i++) {
  if (value[i] === "0") {
    numOfZeros++;
  } else if (value[i] === "1") {
    numOfOnes++;
  }
}

console.log(`${decimalNumber} soni 2 lik sanoq sistemasida yozilsa`)
console.log(`${numOfZeros}ta 0 qatnashadi`);
console.log(`${numOfOnes}ta 1 qatnashadi`);

console.log(`Asl holatida esa: ${value}`)


// Berilgan sonlar ichida eng katta va eng kichik sonlar ayirmasini toping. Musbat son chiqmasin



// 1-50 gacha bo'lgan sonlardan random aniqlab oladigan function yozish

// Find randomNumbers


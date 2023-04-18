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


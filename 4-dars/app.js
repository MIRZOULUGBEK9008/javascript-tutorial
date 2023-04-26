// Switch | For loop
// Switch ham xuddi if elsega o'xshash bo'lib faqat qat'iy tenglik(===) bo'lsagina ishlaydi. Jumladan if else condition qabul qilsa switch value qabul qiladi.

// if - =, ==, ===, >, <, <=, >=
// switch - ===

let age = 25;
switch (25) {
  case 25: // shart qo'yadi
  // console.log("Ishladi");
  break; //kodni to'xtatadi, agar break bo'lmasa keyingi shartga o'tib ketadi.

  default: // hech bir shart bajarilmaganda ishlaydi, xuddi else kabi..
  console.log("Ma'lumot mavjud emas");
} 

// For loop
// for(boshlanishi; manzil(condition | true | false); step)

// Undan tashqari for loopda ichma-ich yozsa ham bo'ladi [Nested]

// for() {
//   for() {

//   }
// }

for(;;) // without limits

for(i = 1; i <= 100; i++) {
  console.log(i); // 99
  if( i === 56) break; // break kodni mutloq to'xtatadi, continue ham to'xtatadi faqat shart bajarilgandan keyin davom etadi
}

// Savol: Quyida berilgan kodda konsolda nima chiqadi ?
for(i = 1; i <= 17; i++) {
  console.log(i);
  i += i; // =  i=i*2
}

// Javob: 1, 3, 7, 15  [agar isbot kerak bo'lsa => t.me/@ulugbekkhudoyberdiyev9008]

// 1 dan 100 gacha bo'lgan faqat toq sonlarning ro'yhatini chiqaradi
for(i = 1; i <= 100; i++) {
  console.log(i++);
}

// 1 dan 100 gacha bo'lgan faqat juft sonlarning ro'yhatini chiqaradi
for(i = 1; i <= 100; i++) {
  console.log(++i);
}

// Karra jadvalini konsolga chiqaradigan kod
for(i = 1; i <= 10; i++) {
  console.log(`${i} sonining karra jadvali\n`);
  for(j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}\n`);
  }
}

// Undan tashqari For loop ichma-ich yozilganda unga label bersa bo'ladi
// Bu nima uchun kerak ?
for(i = 1; i <= 10; i++) {
  for(j = 1; j <= 10; j++) {
    console.log(j); // <-- mana shu j ni biz
  }
  // <-- mana bu yerda ishlata olmaymiz
}
// yoki biz For loopni break orqali to'xtatadigan bo'lsak ham, faqat o'zini to'xtatamiz ya'ni ichkaridan turib tashqaridagi Foor loopni to'xtata olmaymiz, lekin biz unga label bersak buning imkoni BroadcastChannel. Ana tushundingizmi label nega kerak ? Label berish for() dan oldin labelning nomi yoziladi(: bilan) . Quyida label berilgan holatni ko'rishingiz mumkin...

outer: for(i = 1; i <= 10; i++) {
  inner: for(b = 1; b <= 10; b++) {
    if (b === 6) break outer;
    console.log(b, "b");
  }
}

// Homework:
let browser = "Edge";

switch (browser) {
  case "Edge":
  alert( "You have got the Edge !" );
  break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
  alert( "Okay, we support these browser too" );
  break;

  default:
  alert( "We hope that this page looks ok !" );
}

// 1 dan 100 gacha bo'lgan, hamda faqatgina 1 ga va o'zigagina bo'linidigan sonlarning ro'yhatini konsolga chiqaramiz

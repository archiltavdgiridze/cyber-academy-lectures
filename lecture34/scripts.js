// Syntax
// for(initialization, condition, iteration) {
//     // code goes here
// }

for (let i = 0; i <= 11; i++) {
  document.write(`<h2>ეს კოდი განმეორდა ${i}-ჯერ</h2>`);
}

let x = 5;

for (let y = 0; y < 3; y++) {
  for (let x = 1; x <= 10; x++) {
    console.log(`ეს არის ლუპი ${x}`);
  }
}

console.log(x);

// while loop
// syntax

// while (condition) {
//   // code block to execute
// }

let j = 0;
// console.log(j < 10);

// while (j < 10) {
//   document.write(`<h3>ეს კოდი განმეორდა ${j}-ჯერ</h3>`);
//   j++;
// }

// DO WHILE
// syntax

// do {
//   // code goes here
// } while (condition);

do {
  document.write(`<h1>ეს კოდი განმეორდა ${j}-ჯერ</h1>`);
  j++;
} while (j > 5);

// BREAK;
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }

  text += `The number is ${i} <br>`;
}

document.getElementById("demo").innerHTML = text;

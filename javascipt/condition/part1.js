//checking if a number greater than another

let num1 = 5;
let num2 = 6;

if (num1 > num2) {
  console.log("number one is greater than num2");
} else {
  console.log("num2 greater than num1");
}

// checking type
let score = 45;
if (typeof score === "number") {
  console.log("this is a number");
}
if (score == 45) {
  console.log("ok");
}

// array checking
let item = [];
console.log(item.length);
if (item.length == 0) {
  console.log("boom");
}

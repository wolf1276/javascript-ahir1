let balance = 130;
console.log(typeof balance);

let isactive = true;
let isreallyactive = new Boolean(true); //not recomened

//concept on undefined and null

let first = null;
let last = undefined;
console.log(typeof first);
console.log(typeof last);

//method to write string
let name = "ahir";
let class1 = 12;

let printing = `i am ${name} of ${class1}`;
console.log(printing);

//array

let hero = ["a", "b", 12, true];
console.log(hero);

//many values
let car = { type: "fiat", model: "500", color: "red", year: 2005 };
console.log(car);

//creating a object

let person = new Object();

person.name = "ahir";
person.age = 12;
person.lastname = "sarkar";
console.log(person);

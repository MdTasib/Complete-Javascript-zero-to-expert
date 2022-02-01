/*

////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Tasib");
console.log(23);

let firstName = "Rafi";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "tasib";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'tasib');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

*/

/*

////////////////////////////////////
// let, const and var

// let
let age = 19;
age = 21;

let country;

// // Uncaught SyntaxError: Identifier 'job' has already been declared
// let number = 2;
// let number = 4;

// const
// // Uncaught TypeError: Assignment to constant variable.
// const name = "Tasib";
// name = "Ohidul";

// // Uncaught SyntaxError: Missing initializer in const declaration
// const country;

// // Uncaught SyntaxError: Identifier 'job' has already been declared
// const job = "Developer";
// const job = "Programmer";

// var
var name1 = "Ohidul";
var name1 = "Tasib";

var nickName = "Tasib";
nickName = "Ohidul";

lastName = "Tasib";
console.log(lastName);


*/

/*

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageTasib = now - 1991;
const ageRafi = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageTasib + ageRafi) / 2;
console.log(ageTasib, ageRafi, averageAge);
*/

////////////////////////////////////
// Strings and Template Literals
/*
const firstName = 'tasib';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const tasib = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(tasib);

const tasibNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(tasibNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Tasib can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Tasib is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Tasib'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

/*
////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Tasib'));
console.log(Boolean({}));
console.log(Boolean(''));

// const money = 0; // 0 is falsey value
const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0; // 0 is falsey value
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
*/

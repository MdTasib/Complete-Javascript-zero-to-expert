/* "use strict";

///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;
 */

/* ///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Mohammad Tasib');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/* ///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
	return 2022 - birthYear;
}
const age1 = calcAge1(2002);

// Function expression
const calcAge2 = function (birthYear) {
	return 2022 - birthYear;
};
const age2 = calcAge2(2002);

console.log(age1, age2); */

/* ///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2022 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Tasib"));
console.log(yearsUntilRetirement(1980, "Rafi"));
 */

/* // 6. Functions Calling Other Functions

function cutFruitPieces(fruit) {
	return fruit * 2;
}

function juiceMaker(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	return `apples is ${applePieces} and oranges is ${orangePieces}`;
}

console.log(juiceMaker(2, 3));
 */

/* ///////////////////////////////////////
// Introduction to Arrays
const friend1 = "Rafi";
const friend2 = "Rakib";
const friend3 = "Walid";

const friends = ["Rafi", "Rakib", "Walid"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "akib";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "Tasib";
const jonas = [firstName, "Mohammad", 2037 - 1991, "web developer", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
	return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];
console.log(ages);
 */

//////////////////////////
// Basic Array Operations (Methods)
/* const friends = ["Rafi", "Rakib"];

// add elements
friends.push("Walid");
console.log(friends);

friends.unshift("Mohammad");
console.log(friends);

// remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

// indexOf, includes
const brothers = ["Rafi", "Rakib", "Tawrat", "Walid", "Mohammad"];

console.log(brothers.indexOf("Rakib"));
console.log(brothers.indexOf("Tanha"));

console.log(brothers.includes("Rafi"));
console.log(brothers.includes("Tasib"));

if (brothers.includes("Rafi")) {
	console.log("My brother rafi");
}else {
  console.log('He is not my brother')
}
 */

//////////////////////////////
//Introduction to Objects
/* const student = {
	name: "Tasib",
	age: 2022 - 2002,
	friends: ["Rafi", "Rakib"],
};

console.log(student); */

///////////////////////////////////////
// Dot vs. Bracket Notation
/* const student = {
	name: "Tasib",
	firstName: "Ohidul",
	age: 2022 - 2002, 
	friends: ["Rafi", "Rakib"],
};

console.log(student.name);
console.log(student["age"]);

const nameKey = "Name";
console.log(student["first" + nameKey]);

const interestedIn = prompt("Student propraty - ");
// console.log(student[interestedIn]);

if (student[interestedIn]) {
	console.log(student[interestedIn]);
} else {
	console.log("can't read propaty");
}
 */

/*
///////////////////////////////////////
// Object Methods

const tasib = {
  firstName: 'Ohidul',
  lastName: 'Alam',
  birthYeah: 1991,
  job: 'student',
  friends: ['Rafi', 'Rakib', 'Walid'],
  hasDriversLicense: false,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${tasib.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(tasib.calcAge());

console.log(tasib.age);
console.log(tasib.age);
console.log(tasib.age);

// Challenge
// "tasib is a 46-year old teacher, and he has a driver's license"
console.log(tasib.getSummary());
*/

/*
///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

*/

/* // 17. Looping Arrays, Breaking and Continuing
const tasib = [
	"tasib",
	19,
	["rafi", "rakib"],
	true,
	{ profession: "web developer", starting: 2019 },
	"web dev",
	33,
];

const types = [];

for (let i = 0; i < tasib.length; i++) {
	console.log(tasib[i], typeof tasib[i]);

	// filling types array
	// types[i] = typeof tasib[i];
	types.push = typeof tasib[i];
}

console.log(types);

// sub of array element
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	// console.log(numbers[i] + 10);
	sum += sum + numbers[i];
}

console.log("sum of array - ", sum);

// continue
for (let i = 0; i < tasib.length; i++) {
	// if (typeof tasib[i] !== "string") {
	// 	continue;
	// }

	if (typeof tasib[i] !== "string") continue;

	console.log("continue statement - ", tasib[i]);
}

// break
for (let i = 0; i < tasib.length; i++) {
	if (typeof tasib[i] === "number") break;

	console.log("breck - ", tasib[i]);
}
 */

/* // 18. Looping Backwards and Loops in Loops

const tasib = [
	"tasib",
	19,
	["rafi", "rakib"],
	true,
	{ profession: "web developer", starting: 2019 },
	"web dev",
	33,
];

for (let i = tasib.length - 1; i >= 0; i--) {
	console.log(i, tasib[i]);
}

// loops in loop
for (let i = 0; i < 3; i++) {
	console.log("Hello - ", i);

	for (let j = 0; j < 5; j++) {
		console.log(i, "Hi - ", j);
	}
}
 */

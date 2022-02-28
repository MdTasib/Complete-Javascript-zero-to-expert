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
const student = {
	name: "Tasib",
	age: 2022 - 2002,
	friends: ["Rafi", "Rakib"],
};

console.log(student);

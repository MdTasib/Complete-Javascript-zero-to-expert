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

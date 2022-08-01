/**
 * Regular Functions vs. Arrow Functions
 */

// Example One
/* const name = "Ohidul Alam";
const tasib = {
	name: "Tasib",
	year: 2002,
	calcAge: function () {
		console.log("Form normal function - ", this.year);
	},
	greet: function () {
		console.log(this);
		console.log("Form arrow function - ", this.name); // Tasib
	},
	// greet: () => {
	// 	console.log(this);
	// 	console.log("Form arrow function - ", this.name); // this refer global object
	// },
};

tasib.calcAge();
tasib.greet();
 */

// Example Two
const tasib = {
	name: "Tasib",
	year: 2002,
	calcAge: function () {
		console.log("Form normal function - ", this.year);

		// Solution 1
		/* const self = this;
		const checkThis = function () {
			console.log(self);
			console.log(self.year);
		};
		checkThis(); */

		// Solution 2
		const checkThis = () => {
			console.log(this);
			console.log(this.year);
		};
		checkThis();
	},

	// greet: () => {
	// 	console.log(this);
	// 	console.log("Form arrow function - ", this.name); // this refer global object
	// },
};

tasib.calcAge();

// Arguments
const normalFunc = function (a, b) {
	console.log(arguments); // there is an arguments
	return a + b;
};
normalFunc(5, 5);

const arrowFunc = (a, b) => {
	console.log(arguments); // There isn't an arguments
	return a + b;
};
arrowFunc(6, 6);

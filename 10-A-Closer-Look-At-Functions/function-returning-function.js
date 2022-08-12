const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

const greetHey = greet("Hey");
greetHey("Tasib");
greetHey("Rafi");

// ANOTHER WAY CALL THIS FUNCTION
greet("Hello")("Rakib");

// CONVERT ARROW FUNCTIONS
/* const greetArrow = greeting => {
	return name => {
		console.log(`${greeting} ${name}`);
	};
}; */
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow("Hello 👋")("Tasib");

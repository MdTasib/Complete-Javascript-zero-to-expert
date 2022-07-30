console.log(this); // window

function myFunc(birthYear) {
	console.log(2021 - birthYear);
	console.log(this);
}
myFunc(2002);

const myArrowFunc = birthYear => {
	console.log(2021 - birthYear);
	console.log(this);
};
myArrowFunc(2002);

// object
const tasib = {
	year: 2002,
	hello() {
		console.log("Hello this", this);
		console.log(2022 - this.year);
	},
};

tasib.hello();

const rafi = {
	year: 1998,
};

rafi.hello = tasib.hello;
rafi.hello();

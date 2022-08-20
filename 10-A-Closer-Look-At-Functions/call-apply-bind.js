const bangladesh = {
	airline: "BANGLADESH",
	iatacode: "BNG",
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
	},
};

bangladesh.book(120, "Mohammad Tasib");
bangladesh.book(150, "Sha Rakib");
// console.log(bangladesh);

const arab = {
	airline: "ARAB AMIRAT",
	iatacode: "AAR",
	bookings: [],
};

const book = bangladesh.book;

// DON'T WORK THIS
// book(100, "Rafi");

// CALL METHOD
book.call(arab, 100, "Rafi");
// console.log(arab);

book.call(bangladesh, 22, "Ohidul Alam");
// console.log(bangladesh);

// APPLY METHOD
const example = [11, "Ohidul Alam Tasib"];
// book.apply(arab, [11, "Ohidul Alam Tasib"]);
book.apply(arab, example);

// Another way call method use
book.call(bangladesh, ...example);
// console.log(bangladesh, arab);

// BIND METHOD
const bookBNG = book.bind(bangladesh);
bookBNG(33, "Tawrat");

const bookARB = book.bind(arab, 222);
bookARB("Tanha");

// WITH EVENTS LISTENERS
bangladesh.planes = 200;
bangladesh.buyPlane = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

document
	.querySelector(".buy")
	.addEventListener("click", bangladesh.buyPlane.bind(bangladesh));

// PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// const addVat = value => value + value * 0.23;

console.log(addVat(100));
console.log(addVat(23));

//
function addTaxRate(rate) {
	return function (value) {
		return value + value * rate;
	};
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

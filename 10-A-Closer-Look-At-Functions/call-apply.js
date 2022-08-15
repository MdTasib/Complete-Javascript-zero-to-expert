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

console.log(bangladesh, arab);

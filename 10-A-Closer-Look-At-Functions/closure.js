const secureBooking = function () {
	let passengerCount = 0;

	return function () {
		passengerCount++;
		console.log(
			`${passengerCount} ${passengerCount > 1 ? "passengers" : "passenger"}`
		);
	};
};

const booker = secureBooking();
// booker();
// booker();
// console.dir(booker);

// Example
let f;

const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	};
};

const h = function () {
	const b = 100;
	f = function () {
		console.log(b * 2);
	};
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

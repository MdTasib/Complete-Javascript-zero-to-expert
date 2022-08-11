const createBooking = (
	name,
	numPassengers = 1,
	price = 100 * numPassengers
) => {
	// ES5
	// numPassengers = numPassengers || 1;
	// price = price || 100;

	const booking = {
		name,
		numPassengers,
		price,
		// price: price * numPassengers,
	};
	console.log(booking);
};

createBooking("HBG123");
createBooking("HBG123", 100);
createBooking("HBG123", 10, 20);
createBooking("HBG123", undefined, 100); // skip numPassengers

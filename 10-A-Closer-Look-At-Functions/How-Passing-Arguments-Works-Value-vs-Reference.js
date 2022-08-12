const flight = "LM323";
const tasib = {
	name: "Mohammad Tasib",
	passport: 8477021,
};

const checkIn = (flightName, passenger) => {
	flightName = "LM999";
	passenger.name = "Mr. " + passenger.name;

	if (passenger.passport === 8477021) {
		alert("Check In");
	} else {
		alert("Wrong passport!");
	}
};

checkIn(flight, tasib);
console.log(flight);
console.log(tasib);

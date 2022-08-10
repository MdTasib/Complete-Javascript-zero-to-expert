const mySelf = "I Love Bangladesh";

console.log(mySelf.toLowerCase());
console.log(mySelf.toUpperCase());

// Fix capitalization in name
const tasib = "tAsIB";
const tasibLower = tasib.toLowerCase(); // tasib
const tasibCorrect = tasibLower[0].toUpperCase() + tasibLower.slice(1);
console.log(tasibCorrect); // Tasib

// Comparing emails
const email = "hello@gmail.com";
const loginEmail = "    Hello@Gmail.com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(lowerEmail, trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "224,423 GB";
const priceUS = priceGB.replace("GB", "USD").replace(",", ".");
console.log(priceUS);

const announcement =
	"All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replaceAll(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("bus"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("A320"));
console.log(plane.endsWith("neo"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
	console.log("Part of the NEW ARirbus family");
}
// Practice exercise
const checkBaggage = function (items) {
	const baggage = items.toLowerCase();
	if (baggage.includes("knife") || baggage.includes("gun")) {
		console.log("You are NOT allowed on board");
	} else {
		console.log("Welcome aboard!");
	}
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

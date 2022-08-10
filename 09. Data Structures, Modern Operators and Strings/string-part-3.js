// split and join
console.log("My+name+is+tasib".split("+"));
console.log("Mohammad Tasib".split(" "));

const [firstName, lastName] = "Mohammad Tasib".split(" ");
console.log(firstName, lastName);

const newName = ["MR.", firstName, lastName.toLowerCase()].join(" ");
console.log(newName);

function capitalizeName(name) {
	const names = name.split(" ");

	const fullName = [];
	for (const word of names) {
		// one way
		// fullName.push(word[0].toUpperCase() + word.slice(1));

		// two way
		fullName.push(word.replace(word[0], word[0].toUpperCase()));
	}
	console.log(fullName.join(" "));
}

capitalizeName("i am mohammad tasib");
capitalizeName("mohammad tasib");

// padding
const message = "Hello world!";
console.log(message.padStart(25, "=").padEnd(40, "="));
console.log("tasib".padStart(25, "=").padEnd(35, "="));

function maskCard(number) {
	const str = number + "";
	const lastFourNumber = str.slice(-4);
	// console.log(str.length, lastFourNumber);
	return lastFourNumber.padStart(str.length, "*");
}

console.log(maskCard("550333201133"));
console.log(maskCard(550333201133));
console.log(maskCard(550333));

const hello = "Hello world";
console.log(hello.repeat(5));

function planeInLine(n) {
	console.log(`There is ${n} plane ${"🛩".repeat(n)}`);
}
planeInLine(5);
planeInLine(2);

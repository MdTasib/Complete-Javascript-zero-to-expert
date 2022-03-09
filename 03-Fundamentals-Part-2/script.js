// 17. Looping Arrays, Breaking and Continuing
const tasib = [
	"tasib",
	19,
	["rafi", "rakib"],
	true,
	{ profession: "web developer", starting: 2019 },
	"web dev",
	33,
];

const types = [];

for (let i = 0; i < tasib.length; i++) {
	console.log(tasib[i], typeof tasib[i]);

	// filling types array
	// types[i] = typeof tasib[i];
	types.push = typeof tasib[i];
}

console.log(types);

// sub of array element
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	// console.log(numbers[i] + 10);
	sum += sum + numbers[i];
}

console.log("sum of array - ", sum);

// continue
for (let i = 0; i < tasib.length; i++) {
	// if (typeof tasib[i] !== "string") {
	// 	continue;
	// }

	if (typeof tasib[i] !== "string") continue;

	console.log("continue statement - ", tasib[i]);
}

// break
for (let i = 0; i < tasib.length; i++) {
	if (typeof tasib[i] === "number") break;

	console.log("breck - ", tasib[i]);
}

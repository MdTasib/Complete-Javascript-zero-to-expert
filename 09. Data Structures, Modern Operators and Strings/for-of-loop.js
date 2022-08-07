const menu = [
	"Focaccia",
	"Bruschetta",
	"Garlic Bread",
	"Caprese Salad",
	"Pizza",
	"Pasta",
	"Risotto",
];

for (const item of menu) {
	console.log(item);
}

// entries
console.log([...menu.entries()]);

for (const item of menu.entries()) {
	console.log(`${item[0] + 1}: ${item[1]}`);
}

// Destructuring
for (const [index, element] of menu.entries()) {
	console.log(`${index + 1}: ${element}`);
}

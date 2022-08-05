/**
 * ||
 * &&
 */

console.log(3 || "rafi");
console.log("" || "rafi");
console.log(true || 0);
console.log(undefined || null);
console.log(null || undefined);
console.log(null || undefined || 0);

const obj = {
	name: "Tasib",
	age: 20,
};

obj.num = 111;

const example1 = obj.num ? obj.num : 10;
console.log(example1);

const example2 = obj.num || 10;
console.log(example2);

console.log(0 && "rafi");
console.log(10 && "rafi");
console.log("rafi" && 10 && null && "tasib");

if (obj.age && obj.roll) {
	console.log("Hello");
} else {
	console.log("Not found");
}

if (obj.age && obj.name) {
	console.log("Hello");
} else {
	console.log("Not found");
}

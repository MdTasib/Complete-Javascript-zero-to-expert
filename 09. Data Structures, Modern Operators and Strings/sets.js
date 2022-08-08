const ordersSet = new Set([
	"Pasta",
	"Pizza",
	"Pizza",
	"Risotto",
	"Pasta",
	"Pizza",
]);

console.log(new Set("Tasib"));
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Mango"));
ordersSet.add("Mango");
ordersSet.add("Mango");
// console.log(ordersSet);
ordersSet.delete("Risotto");
ordersSet.clear();
console.log(ordersSet);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
	new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
console.log(new Set("Tasibb"));

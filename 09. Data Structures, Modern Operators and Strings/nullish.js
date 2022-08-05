const obj = {
	age: 20,
	roll: 400,
	balance: 0,
};

console.log(obj.balance ?? 20);
console.log(obj.roll ?? 20);
console.log(null ?? "rafi");
console.log("" ?? "rafi");

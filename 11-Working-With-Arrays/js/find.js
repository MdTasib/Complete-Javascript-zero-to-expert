const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const firstMinusValue = movements.find(movement => movement < 0);
console.log(firstMinusValue);

const students = [
	{
		name: "tasib",
		age: 20,
	},
	{
		name: "rafi",
		age: 24,
	},
	{
		name: "rakib",
		age: 19,
	},
];

const rafi = students.find(student => student.name === "rafi");
console.log(rafi);

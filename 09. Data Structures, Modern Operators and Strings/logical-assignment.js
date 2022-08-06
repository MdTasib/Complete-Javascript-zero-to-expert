const person1 = {
	// age: 20, // using or operator
	age: 0, // using nullish operator
	name: "Rafi",
};

const person2 = {
	roll: 400,
	name: "tasib",
};

// Logical or operators
// person1.age = person1.age || 30;
// person2.age = person2.age || 30;
// person1.age ||= 30;
// person2.age ||= 30;

// Logical nullish operators
person1.age ??= 30;
person2.age ??= 30;

console.log(person1, person2);

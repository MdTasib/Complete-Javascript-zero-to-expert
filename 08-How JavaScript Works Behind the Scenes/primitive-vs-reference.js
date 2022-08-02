/**
 * 13. Primitives vs. Objects (Primitive vs. Reference Types)
 */

// Primitives
let age = 30;
let oldAge = age;
age = 20;
console.log(age, oldAge);

// Reference
const me = {
	name: "Tasib",
	age: 20,
};
const rafi = me;
rafi.age = 24;
console.log("Me - ", me, "Rafi - ", rafi);

// Example
const student = {
	name: "Rafi",
	roll: 101,
	subject: ["Bangla", "Math"],
};

// const tasib = student; // Change
// const tasib = { ...student };
const tasib = Object.assign({}, student);
tasib.name = "Tasib";
tasib.subject.push("English");
console.log(student, tasib);

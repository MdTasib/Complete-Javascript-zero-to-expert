"use strict";

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
};

// Example 1
const numbers = [1, 2, 3];

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

const [x, y, z] = numbers;
console.log(x, y, z);
console.log(numbers);
console.log([...numbers]);

// Example 2
// const [first, , secondary] = restaurant.categories;
// console.log(first, secondary);

let [first, secondary] = restaurant.categories;
console.log(first, secondary);

// Switching way 1
// let temp = secondary;
// secondary = first;
// first = temp;
// console.log(first, secondary);

// Switching way 2
[first, secondary] = [secondary, first];
console.log(first, secondary);

// Recive 2 return values from a function
const [starter, main] = restaurant.order(1, 0);
console.log(starter, main);

// Nested destructuring
const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j); / 1, [3, 4];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 1, 3, 4;

// Default value
const [p = 1, q = 1, r = 1] = [5, 6];
console.log(p, q, r);

function add(x, y = 0) {
	console.log(x + y);
}
add(5);

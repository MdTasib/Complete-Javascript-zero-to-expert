const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

// Array
const arr = [4, 5, 6];

const badArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(badArr);

const goodArr = [1, 2, 3, ...arr];
// console.log(goodArr);

const newMenu = [...restaurant.mainMenu, "chocolate"];
// console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

/**
 * Iterables ---
 * arrays
 * strings
 * maps
 * sets
 * NOT OBJECTS
 */

const str = "Shahjalal Rafi";
const letters = [...str];
// console.log(letters);
// console.log(...str);

// Object
const updateRes = { ...restaurant, name: "Tasib", founder: "Rafi" };
// console.log(updateRes);

const newRestaurant = { ...restaurant };
// console.log(newRestaurant);
newRestaurant.name = "Bangladeshi Food";
// console.log(newRestaurant.name, restaurant.name);

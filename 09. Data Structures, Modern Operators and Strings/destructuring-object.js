// Data needed for first part of the section
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

	order({ name, time = "1:00", starterIndex = 0, mainIndex = 0 }) {
		console.log(`
			${name}
			${time}
			${this.starterMenu[starterIndex]}
			${this.mainMenu[mainIndex]}
		`);
	},
};

restaurant.order({
	name: "Tasib",
	time: "12:00",
	starterIndex: 2,
	mainIndex: 2,
});

restaurant.order({
	name: "Rafi",
});

// Object destructuring
const { name, starterMenu, mainMenu } = restaurant;
// console.log(name, starterMenu, mainMenu);

// Change variable name
const { name: restaurantName, mainMenu: menu } = restaurant;
// console.log(restaurantName, menu);

// Default value
const { tags = [], categories = [] } = restaurant;
// console.log(tags, categories);

// Mutating variable
const obj = { a: 44, b: 55 };
({ a, b } = obj);
// console.log(a, b);

// Nested destructuring
const {
	fri: { open, close },
} = restaurant.openingHours;
// console.log(open, close);

const {
	fri: { open: o, close: c },
} = restaurant.openingHours;
// console.log(o, c);

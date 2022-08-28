const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// const balance = movements.reduce(function (acc, cur, i, arr) {
// 	console.log(`Iteration ${i}: ${acc}`);
// 	return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// MAXIMUM VALUE
const max = movements.reduce((acc, cur) => {
	if (acc > cur) {
		return acc;
	} else {
		return cur;
	}
}, movements[0]);
console.log(max);

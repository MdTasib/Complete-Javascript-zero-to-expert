const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// Using filter method
const deposits = movements.filter(movement => movement > 0);
console.log("Deposits", deposits);

const withdrew = movements.filter(movement => movement < 0);
console.log("Withdrew", withdrew);

// Using loop
const depositsWithLoop = [];
const withdrewsWithLoop = [];
for (const movement of movements) {
	if (movement > 0) {
		depositsWithLoop.push(movement);
	} else {
		withdrewsWithLoop.push(movement);
	}
}
console.log(
	"Deposit with loop",
	depositsWithLoop,
	"Withdrew with loop",
	withdrewsWithLoop
);

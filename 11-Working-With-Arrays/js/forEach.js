const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("-------- For Of Loop---------");
for (const [i, movement] of movements.entries()) {
	if (movement > 0) {
		console.log(`You ${i + 1} diposited ${movement}`);
	} else {
		console.log(`You ${i + 1} withdrew ${Math.abs(movement)}`);
	}
}

console.log("-------- ForEach---------");
movements.forEach(function (movement, index, arr) {
	if (movement > 0) {
		console.log(`You ${index + 1} diposited ${movement}`);
	} else {
		console.log(`You ${index + 1} withdrew ${Math.abs(movement)}`);
	}
});

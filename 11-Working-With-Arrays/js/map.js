const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (movement) {
	return movement * eurToUsd;
});

// const movementsUSD = movements.map(movement => movement * eurToUsd);

console.log(movements);
console.log(movementsUSD);

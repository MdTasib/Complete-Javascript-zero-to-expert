// DATA
const account1 = {
	owner: "Jonas Schmedtmann",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// FLAT
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, [9, [10]]];
console.log(arr.flat());

const deepArr = [[[1, 2], 3], [4, [5, 6]], 7, 8, [9, 10]];
// console.log(deepArr.flat().flat());
console.log(deepArr.flat(2));

// const accountsMovements = accounts.map(acc => acc.movements);
// const accountsMovementsFlat = accountsMovements.flat();
// const totalMovementsBalance = accountsMovementsFlat.reduce(
// 	(acc, cur) => acc + cur,
// 	0
// );
// console.log(totalMovementsBalance);

// USING FLAT
const totalMovementsBalance = accounts
	.map(acc => acc.movements)
	.flat()
	.reduce((acc, cur) => acc + cur, 0);
console.log(totalMovementsBalance);

const totalMovementsBalanceFlatMap = accounts
	.flatMap(acc => acc.movements)
	.reduce((acc, cur) => acc + cur, 0);
console.log(totalMovementsBalanceFlatMap);

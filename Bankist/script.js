"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// DISPLAY MOVEMENTS
const displayMovements = function (movements) {
	containerMovements.innerHTML = "";

	movements.forEach(function (movement, i) {
		const type = movement > 0 ? "deposit" : "withdrawal";

		const html = `
			<div class="movements__row">
				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
				<div class="movements__value">${movement}</div>
			</div>
		`;

		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

// DISPLAY TOTAL BALANCE
const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
	labelBalance.textContent = `${acc.balance}€`;
};

// DISPLAY SUMMARY
const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter(movement => movement > 0)
		.reduce((acc, cur) => acc + cur, 0);

	const out = acc.movements
		.filter(movement => movement < 0)
		.reduce((acc, cur) => acc + cur, 0);

	const interest = acc.movements
		.filter(movement => movement > 0)
		.map(deposit => (deposit * acc.interestRate) / 100)
		.filter(int => int >= 1)
		.reduce((acc, cur) => acc + cur, 0);

	labelSumIn.textContent = `${incomes}€`;
	labelSumOut.textContent = `${Math.abs(out)}€`;
	labelSumInterest.textContent = `${interest}€`;
};

// UPDATE UI
const updateUI = function (acc) {
	// DISPLAY MOVEMENTS
	displayMovements(acc.movements);

	// DISPLAY BALANCE
	calcDisplayBalance(acc);

	// DISPLAY SUMMARY
	calcDisplaySummary(acc);
};

// CREATE USER NAME FUNCTION. LIKE THIS FORMAT: Ohidul Alam Tasib -> (oat)
const createUsernames = function (accounts) {
	accounts.forEach(acc => {
		acc.username = acc.owner
			.toLowerCase()
			.split(" ")
			.map(name => name[0])
			.join("");
	});
};
createUsernames(accounts);

// Login Event Handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
	e.preventDefault();

	currentAccount = accounts.find(
		account => account.username === inputLoginUsername.value
	);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// DISPALY UI & MESSAGE
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;
		containerApp.style.opacity = 100;

		// Clear input fileds
		inputLoginUsername.value = inputLoginPin.value = "";
		inputLoginPin.blur();

		// UPDATE UI
		updateUI(currentAccount);
	}
});

// TRANSFER AMOUNT
btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();

	const amount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		acc => acc.username === inputTransferTo.value
	);

	inputTransferAmount.value = inputTransferTo.value = "";

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// DOING THE TRANSFER
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);
		// UPDATE UI
		updateUI(currentAccount);
	}
});

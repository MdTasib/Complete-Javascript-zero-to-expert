let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// score
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = "?";

function displayMessage(message) {
	document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	// guesses no input
	if (!guess) {
		displayMessage("⛔️ No number!");

		// guesses to win
	} else if (secretNumber === guess) {
		displayMessage("🎉 Correct Number!");
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(secretNumber < guess ? "📈 To High!" : "📉 To Low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "💥 You Loss";
		}
	}

	// guesses too high
	// else if (secretNumber < guess) {
	// 	if (score > 1) {
	// 		document.querySelector(".message").textContent = "📈 To High!";
	// 		score--;
	// 		document.querySelector(".score").textContent = score;
	// 	} else {
	// 		document.querySelector(".message").textContent = "💥 You Loss";
	// 	}

	// 	// guesses too low
	// } else if (secretNumber > guess) {
	// 	if (score > 1) {
	// 		document.querySelector(".message").textContent = "📉 To Low!";
	// 		score--;
	// 		document.querySelector(".score").textContent = score;
	// 	} else {
	// 		document.querySelector(".message").textContent = "💥 You Loss";
	// 	}
	// }
});

// restart game
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector(".guess").value = "";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".score").textContent = score;
	displayMessage("Start guessing...");

	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});

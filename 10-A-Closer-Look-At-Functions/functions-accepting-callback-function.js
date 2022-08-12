const oneWord = function (str) {
	return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
	const [first, ...others] = str.split(" ");
	return [first.toUpperCase(), ...others].join(" ");
};

// HIGHER ORDER FUNCTION
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transform by: ${fn.name}`);
};
// (transformer) FUNCTION IS HIGHER ORDER FUNCTION & (upperFirstWord), (oneWord) IS CALLBACK FUNCTION
transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// JS USES CALLBACK ALL THE TIMES
const hi = () => console.log("👋");
document.body.addEventListener("click", hi);

[1, 2, 3, 4].forEach(hi);

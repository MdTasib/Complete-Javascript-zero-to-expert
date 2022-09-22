const strArr = ["b", "d", "c", "a", "e"];
console.log(strArr.sort());

const numArr = [-10, -5, -15, 10, 5, 15, 25, 20];
// console.log(numArr.sort());

console.log(numArr);
numArr.sort((a, b) => {
	if (a > b) {
		return 1;
	} else {
		return -1;
	}
});
console.log(numArr);
console.log(numArr.sort((a, b) => a - b));
console.log(numArr.sort((a, b) => b - a));

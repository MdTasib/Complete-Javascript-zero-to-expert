const arr = ["a", "b", "c", "d", "e"];
// SLICE - DONT'T CHANGE ORIGINAL ARRAY
console.log(arr.slice(1)); // ["b", "c", "d", "e"]
console.log(arr.slice(1, 2)); // ["b"]
console.log(arr.slice(-1)); // ["e"]
console.log(arr.slice(-2)); // ["d", "e"]
console.log(arr.slice(1, -2)); // ["b", "c"]
console.log(arr.slice()); // ["a", "b", "c", "d", "e"] -> copy full array

// SPLICE - CHANGE ORIGINAL ARRAY
console.log(arr.splice(2)); // ["c", "d", "e"]
console.log(arr); // ["a", "b"]

arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

// REVERSE - CHANGE ORIGINAL ARRAY
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// ANOTHER WAY CONCAT ARRAY
console.log([...arr, ...arr2]);

// JOIN
console.log(arr.join("-"));

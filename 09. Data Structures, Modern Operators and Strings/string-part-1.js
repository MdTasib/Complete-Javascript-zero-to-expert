/**
 * Strings Part 1
 */

const mySelf = "I am a web developer";
const address = "Chittagong4350";

console.log(mySelf[0]);
console.log(mySelf[8]);
console.log("Hello"[0]);
console.log(address.length);
console.log("Hello".length);

console.log(mySelf.indexOf("a"));
console.log(mySelf.lastIndexOf("a"));
console.log(mySelf.indexOf("developer"));
console.log(mySelf.indexOf("Developer")); // - 1 -> because Developer is uppercase

// Method
console.log(mySelf.slice(2));
console.log(mySelf.slice(2, 4));
console.log(mySelf.slice(0, mySelf.indexOf(" ")));
// console.log(mySelf.slice(mySelf.lastIndexOf(" ")));
console.log(mySelf.slice(mySelf.lastIndexOf(" ") + 1));

console.log(new String("Tasib"));
console.log(typeof new String("Tasib"));

console.log(typeof new String("Tasib").slice(1));

/**
 * Maps: Fundamentals
 */
const rest = new Map();
rest.set("name", "Tasib");
rest.set(1, "Rafi");
rest.set("categories", ["Pizza", "Pasta", "Chiken"]);
rest.set("open", 10);
rest.set("close", 22);
rest.set(true, "we are open");
rest.set(false, "we are close");
console.log(rest);
console.log(rest.get("name"));
console.log(rest.get(1));

const time = 20;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has(1));
rest.delete(1);
console.log(rest.size);
// rest.clear();
console.log(rest);

// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4);
console.log("Hello, world" === "Hello, world");

let x = false; // x = false
let y = x; // x = false, y = false
console.log(x === y); // true
x = !x; // x = true, y = false
console.log(x === y); // false

console.log([1, 2, "c"] === [1, 2, "c"]); // false, memory don't match
console.log({} === {}); // false

y = { id: 1 };
x = y;
console.log(x === y); // true
y.id += 1; // y.id = 2
console.log(x.id === y.id); // true

let user1 = { name: "Matt", age: 21 }; //user1 = 98999, in 98999 = { name: "Matt", age: 21 }
let admin1 = user1; // user1 = 98999, admin1 = 98999
admin1.name = "Bob"; // user1 = 98999, admin1 = 98999, in 98999 = { name: "Bob", age: 21 }
// 98999.name = "Bob"

// use 'let' to assign values to 3 variables

let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};

console.log("before mutation x = " + x + ", y = " + y + " and z = " + z);

// reassign x, y, and z to FALSY values
x = null;
y = 0;
z = "";

// print x, y, and z
console.log("\n After mutation", x, y, z);

// use 'const' to assign values to 3 variables
const a = "name";
const b = [];
const c = {};

// print a, b, and c
console.log("\n Before mutation a, b, and c are ...", a, b, c);

// try to reassign a, b, and c to FALSY values
a = NaN;
b = false;
c = 0;

// using BRACKET NOTATION, assign a value to b
b[0] = 1;
console.log("\n b after mutation", b);

// using DOT NOTATION, assign a PROPERTY to c
c.good = "Time";
console.log("\n c after 1st mutation", c);

// using DOT NOTATION, assign a METHOD to c
c.greet = () => `Hello there!`;
console.log("\n c after 2nd mutation", c);

// using BRACKET NOTATION, call the method in c
console.log(c["greet"]());

// Bracket notation is horrible, this is simpler...
console.log("\n Simpler method call... ", c.greet());

// print a, b, and c again
console.log("\n a, b, and c after final mutations are ... ", a, b, c);

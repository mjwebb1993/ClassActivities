let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = null;
z = null;

// print x, y, and z
console.log(x, y, z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b
b[0] = "name";
// b = ["Matt"]; <- NOPE

// using DOT NOTATION, assign a PROPERTY to c
c.name = "Matt";

// using DOT NOTATION, assign a METHOD to c
c.speak = function() {
  console.log("Matt");
};

c.yell = function() {
  console.log("<b>MATT</b>");
};

// using BRACKET NOTATION, call the method in c
let key = "speak";
c[key]();
c["speak"]();
key = "yell";
c[key]();
c.speak();

// print a, b, and c
console.log(a);
console.log(b);
console.log(c);

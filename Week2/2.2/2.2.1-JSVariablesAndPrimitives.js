// create a constant variable called "name" that references a string
const name = `Michael`;
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "D.A.N.C.E.";
// create a reassignable variable called "wage" that references a number
let wage = 25;
// create a variable called "age" that references a number, should it be reassignable?
let age = 32; // Age should probably be re-assignable because it is a number that will change

// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = true;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof name); // String
console.log(typeof wage); // Number
console.log(typeof onlyChild); // Boolean
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "Cake";
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Genesis";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 42;
console.log(typeof favoriteThing); // Number
// Happy Birthday!
// Reassign "age" to a new value
age = 33;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 100;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("My name is " + name + ", and I am " + age + " years old.");

// Same but with template literal
console.log(`My name is ${name}, and I am ${age} years old.`);

// My name is Michael, and I am 33 years old.

let empty = null;

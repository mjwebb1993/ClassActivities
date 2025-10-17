// create a constant variable called "name" that references a string
const name = "Michael";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "Crazy Frog";
// create a reassignable variable called "wage" that references a number
let wage = 30;
// create a variable called "age" that references a number, should it be reassignable?
let age = 32;
console.log(age);
// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof favoriteSong);
console.log(typeof onlyChild);
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = "coding";
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "new song that I heard";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 25;
console.log(typeof favoriteThing);

// Happy Birthday!
// Reassign "age" to a new value
age = 33;
console.log(age);
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 100;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("Hello, my name is " + name + " and I am " + age + " years old.");
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

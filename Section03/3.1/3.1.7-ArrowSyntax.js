// refactor the functions below into arrow syntax
// function declaration
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}

// arrow syntax
// "concise body"
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

// "block body"
const myNumberFunction = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};

// function declaration
function greet(name) {
  return `Hello, ${name}`;
}

// arrow syntax
// "concise body"
const greet = name => `Hello, ${name}`;

// "block body"
const greet = name => {
  return `Hello, ${name}`;
};

// function expression
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

// arrow syntax
// "concise body"
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

// "block body"
const timeOfDayGreet = (name, timeOfDay) => {
  return `Hello, ${name}, good ${timeOfDay}`;
};

// function declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

// arrow syntax
// "concise body" - refactor the above to be single line

// "block body"
const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};

// function declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

// arrow syntax
// "block body"
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};

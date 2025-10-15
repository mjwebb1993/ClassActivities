// refactor the functions below into arrow syntax
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
// refactored as concise body arrow syntax
const myNumberFunctionConcise = () => ((2 ** 2 + 3) % 4) * 14;

// refactored as block body arrow syntax
const myNumberFunctionBlock = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};

// Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}
// Refactored as Arrow Syntax - Concise
const greetConcise = x => `Hello, ${x}`;

// Function Expression
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};
// Refactored as Arrow Syntax - Concise
const timeOfDayGreetConcise = (name, timeOfDay) =>
  `Hello, ${name}, good ${timeOfDay}`;
// Refactored as Arrow Syntax - Block
const timeOfDayGreetBlock = (name, timeOfDay) => {
  return `Hello, ${name}, good ${timeOfDay}`;
};

// Function Declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
// Refactored as Arrow Syntax - Block
const tripleAndHalfBlock = num => {
  let triple = num * 3;
  return triple / 2;
};
// Refactored as Arrow Syntax - Concise
const tripleAndHalfConcise = num => (num * 3) / 2;

// Function Declaration
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
// Refactored as Arrow Syntax - Block
const sumTwoNumbersBlock = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};

// refactor the functions below into arrow syntax
// function declaration
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
// arrow syntax function
const myNumberFunctionConcise = () => ((2 ** 2 + 3) % 4) * 14;
const myNumberFunctionBlock = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};

// function declaration
function greet(name) {
  return `Hello, ${name}`;
}
//arrow syntax
const greetConcise = name => `Hello, ${name}`;

// function expression
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};
// arrow syntax
const timeOfDayGreetConcise = (name, timeOfDay) =>
  `Hello, ${name}, good ${timeOfDay}`;

// function declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
// arrow syntax
const tripleAndHalfBlock = num => {
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
const sumTwoNumbersBlock = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};

// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

// function myfunction(x, y) {
//   console.log(x);
//   console.log(y);
//   return x + y;
// }

// //Create Function addNumbers that takes two numbers and returns their sum
// function addNumbers(a, b) {
//   return a + b;
// };

// console.log(addNumbers(9, 3));

// //Create Function multiplyNumbers that takes 2 numbers and returns their value
// function multiplyNumbers(a,b) {
//   return a * b;
// }

// console.log(multiplyNumbers(4,3));

// // Create a function greeting that takes a name and returns "Hello, name"
// function greeting(name) {
//   return `Hello ${name}`
// }

// console.log(greeting("Kyle"))

// // Create a function called sum which takes two numbers and returns the string "The sum of the numbers is {sum}"
// function sum(num1, num2) {
//   let sum = num1 + num2
//   return "The sum of the numbers is " + sum
// }

// console.log(sum(3,2))

// function checkCircusRides(height) {
//   if (height < 48) {
//     return "Take a ride on the carousel!";
//   }

//   if (height < 60) {
//     return "Try the bumper cars!";
//   }
//   return "Enjoy the roller coaster!";
// }

// console.log(checkCircusRides(40))
// console.log(checkCircusRides(50))
// console.log(checkCircusRides(70))

// invoke the function and pass in two numbers
function myfunction(x, y = 2) {
  console.log(x);
  console.log(y);
  return x + y;
}


// invoke the function and pass in more than two numbers
// console.log(myfunction(1,2,5, 5, 6));

// invoke the function and pass in only one number
// console.log(myfunction(1, 3));

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers

function numbers(...nums) {
  console.log(nums)
}

numbers(1,2, 3, 4)

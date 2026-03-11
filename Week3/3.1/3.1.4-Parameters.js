// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myFunction(x, y) {
  console.log("Value of x is", x);
  console.log("Value of y is", y);
  return x + y;
}
// invoke the function and pass in two numbers
console.log(myFunction(5, 10));
let sum = myFunction(7, 14);
console.log(sum);
// invoke the function and pass in more than two numbers
myFunction(3, 6, 9, 12);
// invoke the function and pass in only one number
console.log(myFunction(20));

// change the function to set default values for the parameters
function myFunctionWithDefaultParams(x = 0, y = 0) {
  console.log("Value of x is", x);
  console.log("Value of y is", y);
  return x + y;
}
// again, invoke the function and pass in only one number
console.log("Invocation of myFunctionWithDefaultParams");
console.log(myFunctionWithDefaultParams(20));

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function myFunctionWithRestParams(x = 0, y = 0, ...z) {
  console.log("Value of x is", x);
  console.log("Value of y is", y);
  console.log("Value of z is", z);
  return x + y;
}

// again, invoke the function and pass in more than two numbers
myFunctionWithRestParams(50, 75, 125, 150, 175);

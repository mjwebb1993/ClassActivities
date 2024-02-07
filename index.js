// declaration, invocation, and the return statement

// function declaration
function myFirstFunction(
  param = 25,
  param2,
  param3 = "Param3 no argument given"
) {
  console.log(param);
  console.log(param2);
  console.log(param3);
  return "I am what the myFirstFunction returns";
}

// function invocation
myFirstFunction("I am an argument", 55, true);
myFirstFunction(55, true);
myFirstFunction(true);

// This is my first function - printed
// I am what the myFirstFunction returns - returned

// Printing Out the Returned Value of myFirstFunction
// let anything = myFirstFunction();
// console.log(anything);

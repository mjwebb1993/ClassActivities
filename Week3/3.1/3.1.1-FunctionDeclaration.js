// TODO: using the function expressions below, refactor them into function declarations

// function expression
const greet = function() {
  console.log("Hello!");
};

// refactored as function declaration
function greet2() {
  console.log("Hello!");
}

// function expression
const threeModTwo = function() {
  console.log(3 % 2);
};
// refactored as function declaration
function threeModTwo2() {
  console.log(3 % 2);
}

let age = 18;
//function expression
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// refactored as function declaration
function checkDrivingAge2() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}

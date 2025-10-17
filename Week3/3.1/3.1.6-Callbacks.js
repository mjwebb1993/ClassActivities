// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

getNameAndShowMessage(greet);
getNameAndShowMessage(welcome);
getNameAndShowMessage(informAboutSale);

getNameAndShowMessage(name => `Hello ${name}`);
getNameAndShowMessage(name => `${name}, welcome!`);
getNameAndShowMessage(name => `${name}, we're having a sale!`);

// pass each "regular" function into getAndShowMessage as a callback function

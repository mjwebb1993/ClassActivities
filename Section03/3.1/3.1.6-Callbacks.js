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
  const input = prompt("Please Enter Your Name: ");
  const output = callback(input);
  alert(output);
}

// pass each "regular" function into getAndShowMessage as a callback function
getNameAndShowMessage(greet);
getNameAndShowMessage(welcome);
getNameAndShowMessage(informAboutSale);

const greet = (name, title = "") => {
  name = name.toUpperCase();
  return `Hello ${title} ${name}`;
}

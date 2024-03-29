function sendAlert(event) {
    console.log(event);
    alert("A message was alerted");
}

document.getElementById("alertButton").addEventListener("click", sendAlert);

// document.getElementById("logButton").addEventListener("click", event => {
//     console.log(event);
// });

document.getElementById("logButton").addEventListener("click", event => console.log(event));


// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["mushrooms", "pepperoni", "sausage", "hamburger"];

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
    // i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer(toppings) {
    let greeting = "Welcome to Pizza House, our toppings are: ";

    for(let topping of toppings) {
        greeting += `${topping}, `;
    }

    console.log(greeting);
}
greetCustomer(pizzaToppings);

// Create a getPizzaOrder function that
    // has the parameters size, crust, and an indefinite amount of toppings as inputs
    // prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
    // outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
    let list = "";
    
    for(let topping of toppings) {
        list += `${topping}, `;
    }

    let output = `One ${size} ${crust} crust pizza with ${list} ... coming up!`;

    console.log(output);

    return [size, crust, toppings];
}
// getPizzaOrder("small", "pan", "pepperoni", "ham");

// Create a preparePizza function that
    // has an array as its parameter with three items: a size, a crust, and a list of toppings
    // prints something like "...Cooking pizza..."
    // outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza(pizza) {
    console.log("...Cooking pizza...");

    return {
        size: pizza[0],
        crust: pizza[1],
        toppings: pizza[2]
    }
}
// preparePizza(["large", "cardboard", ["nasty cheese", "ravolli"]]); // Imo's

// Create a servePizza function that
    // has a parameter of a pizza Object
    // logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
    // outputs the same pizza Object that was passed in
function servePizza(pizza) {
    let list = "";
    
    for(let topping of pizza.toppings) {
        list += `${topping}, `;
    }

    let output = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${list} ... Enjoy!`;

    console.log(output);

    return pizza;
}

// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
servePizza(preparePizza(getPizzaOrder("small", "pan", "pepperoni", "ham")));
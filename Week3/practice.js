// // const name = "kyle";

// // // Create a function called greet() that accept one parameter (name) when called prints "Hello, {name}"

// // function greet(name) {
// //   console.log(`Hello, ${name}`);
// // }

// // greet(name);

// // function shoes(shoe1, shoe2) {
// //   console.log(`My favorite shoes are ${shoe1} and ${shoe2}`);
// // }

// // shoes("nike", "reebok");
// // shoes("addidas", "chacos");

// const numbers = [1, 2, 3, 4, 5];
// const toppings = ["cheese", "pepperoni", "sausage"];

// console.log(toppings[2]);
// console.log(`We have ${toppings.length} toppings`);

// for (let topping of toppings) {
//   console.log(topping);
// }

// let sum = 0;

// for (let number of numbers) {
//   sum += number;
// }

// function findSum(array) {
//   let sum = 0;

//   for (let number of array) {
//     sum += number;
//   }
//   console.log(sum);
// }

// findSum(numbers);

// const numbers2 = [5, 7, 15, 32, 55, 90, 101];
// findSum(numbers2);

// function addNumbers(...array) {
//   let sum = 0;

//   for (let number of array) {
//     sum += number;
//   }
//   console.log(sum);
// }

// addNumbers(1, 2, 3, 4, 5, 6);

// function printToppings(toppings) {
//   let message = "Our pizza toppings are ";
//   for (let topping of toppings) {
//     message += topping;
//     message += ", ";
//   }
//   console.log(message);
// }

// printToppings(["pepperoni", "pineapple", "mushroom"]);

// const pizza = {
//   name: "supreme",
//   cost: 5.99,
//   toppings: ["mushroom", "pepper", "sausage"],
// }

// console.log(pizza.name)
// console.log(pizza["cost"])

// printToppings(pizza.toppings)

function sum(x, y) {
  return x + y;
}

const result = sum(2, 2);
console.log(result);

function makePizza(name, cost, toppings) {
  const pizza = {
    name: name,
    cost: cost,
    toppings: toppings
  };
  return pizza;
}

console.log(makePizza("supreme", 5.99, ["sausage", "pepper", "onion"]));

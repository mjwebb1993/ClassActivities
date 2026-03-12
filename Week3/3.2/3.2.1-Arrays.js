// create an Array using an Array literal
const toppings = [
  "pepperoni",
  "sausage",
  "cheese",
  "mushroom",
  "onion",
  "pepper"
];
const planets = ["mars", "earth"];
const numbers = [1, 2, 3, 4, 5];

// access the 1st item in the Array
// console.log(toppings[0]);

// // access the last item in the Array
// console.log(toppings[4]);

// // print the length of the Array
// console.log(`The number of toppings is ${toppings.length}`);

// // use the length property to access the last item in the Array
// console.log(toppings[toppings.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
// for (let topping of toppings) {
//   console.log(topping);
// }

for (let number of numbers) {
  number += 1;
  console.log(number);
}

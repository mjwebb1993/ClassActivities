const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let indexA = arr.indexOf("a");
let indexB = arr.indexOf("b");
let indexC = arr.indexOf("c");
let indexD = arr.indexOf("d");
console.log(indexA, indexB, indexC, indexD);
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");
console.log(lastA, lastB, lastC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
while (arr.indexOf("a") != arr.lastIndexOf("a")) {
  arr.splice(arr.lastIndexOf("a"), 1);
}

console.log(arr);

const pizzaToppings = [
  "Pepperoni",
  "Sausage",
  "Mushrooms",
  "Onions",
  "Green Peppers",
  "Black Olives",
  "Extra Cheese",
  "Bacon",
  "Pineapple",
  "Spinach"
];

console.log(pizzaToppings.indexOf("Onions"));
console.log(pizzaToppings.indexOf("Pineapple"));
pizzaToppings.splice(pizzaToppings.indexOf("Bacon"), 1);
console.log(pizzaToppings);

// create an Array using an Array literal
let x = 5;
let y = "hello";

const something = [
  x,
  y,
  4,
  "green",
  true,
  false,
  null,
  [9, 0, 9, 8, 5],
  ["this", "that"],
  { name: "Fred" },
  900,
  [],
  [true]
];

// access the 1st item in the Array
console.log("somethin[0] = ", something[0]);

// access the last item in the Array
console.log("something[12] = ", something[12]);

// print the length of the Array
console.log("Something length = ", something.length);

// use the length property to access the last item in the Array
console.log("Element @ length-1 = ", something[something.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
let z; // empty variable
let q = []; // empty array

for (let element of something) {
  let newElement = element + 1;

  //console.log(newElement);

  z += " " + newElement;
  // z assigned itself + newElement

  q[element] = newElement;
  //  q filled with key-value pairs...
  //  key is element : value is newElement
}

console.log("\n This is string z ----> ", z);

console.log("\n This is array q ====>> ", q);

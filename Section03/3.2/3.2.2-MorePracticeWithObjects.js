// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1"
};

// what will the following lines print?
console.log(obj["key"]);
console.log(obj.key);
console.log(obj["key"]);

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const fourObj = {
  str: "I am a string",
  num: 30,
  boolean: true,
  collection: {
    cards: "Pokemon",
    movies: "Shrek",
    actionFigures: "amibos"
  }
};

// Access a value in the "collection" property
fourObj.collection; //   return entire collection object
fourObj.collection.movies; // Shrek
fourObj.collection["movies"]; // Shrek

// Practice with nested Arrays and Objects

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
obj.newProp = "I am a new value";
// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Airplane",
  number: 45,
  color: "blue"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
for (let key in obj) {
  console.log(`the current key is ${key} and the current value is ${obj[key]}`);
}
console.log(obj.favorites);
console.log(obj.list[5]);

// how many lines will the following statement print?
// what do you expect to see on each line?
const keys = ["key", "1", "method", "favorites", "list"];

for (let key of keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(
  `My favorite number is ${obj.favorites.number} and my favorite color is ${obj.favorites.color}. I really enjoy the movie ${obj.favorites.movie}`
);

// obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
// Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);

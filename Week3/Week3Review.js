let animals = ["dog", "cat", "pig", "mule"];
for (let critter of animals) {
  console.log(`I am petting a ${critter}`);
}

// for (let i = 0; i < animals.length; i++) {
//   console.log(`I am petting a ${animals[i]}`);
// }

let pet = {
  name: "Max",
  type: "Dog",
  age: 9,
  color: "black"
};

for (const key in pet) {
  console.log(`${key} equals ${pet[key]}`);
}

function speak() {
  console.log("bark");
}

// function speak() {
//   console.log("sssshhh")
// }

let speak2 = function() {
  console.log("bark bark");
};

speak2 = function() {
  console.log("bark barf");
};

function dog(vocalize) {
  vocalize();
}

dog(speak2);
dog(speak);

const sayRoof = () => console.log("roof"); // Stores function in memory
dog(sayRoof);

dog(() => console.log("roof roof"));

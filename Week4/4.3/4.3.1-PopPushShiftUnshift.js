const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let zero = nums.pop();
// [6, 5, 2, 3, 4, 1]
let one = nums.pop();
// [6, 5, 2, 3, 4]

console.log("nums after pop:", nums);
// remove each of the first two items with shift(), saving each item to a variable
let six = nums.shift();
// [5, 2, 3, 4]
let five = nums.shift();
// [2, 3, 4]

console.log("nums after shift:", nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(five, six);
console.log("nums after push:", nums);
// [2, 3, 4, 5, 6]

nums.unshift(zero, one);
// [0, 1, 2, 3, 4, 5, 6]
console.log("nums after unshift:", nums);

let oneThroughTen = [];
for (let i = 1; i <= 10; i++) {
  oneThroughTen.push(i);
}
console.log(oneThroughTen);

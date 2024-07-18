const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popZero = nums.pop(); // popZero = 0 / nums = [6, 5, 2, 3, 4, 1]
let popOne = nums.pop(); // popOne = 1 / nums = [6, 5, 2, 3, 4]

// remove each of the first two items with shift(), saving each item to a variable
// nums = [6, 5, 2, 3, 4]
let shiftSix = nums.shift(); // shiftSix = 6 / nums = [5, 2, 3, 4]
let shiftFive = nums.shift(); // shiftFive = 5 / nums = [2, 3, 4]

// use push and unshift to add the variables back to the array in numerical order, 0-6
// nums = [2, 3, 4]
nums.push(shiftFive, shiftSix);
// nums = [2, 3, 4, 5, 6]

nums.unshift(popZero, popOne);
// nums = [0, 1, 2, 3, 4, 5, 6];

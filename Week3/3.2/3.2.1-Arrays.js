// create an Array using an Array literal
const nums = [10, 30, 50, 70, 90];
// access the 1st item in the Array
nums[0];
// access the last item in the Array
nums[4];
// print the length of the Array
console.log(nums.length);
// use the length property to access the last item in the Array
nums[nums.length - 1];

// with for...of, loop over the Array, modify the value and add to a different Array

let newArray = [];
let currentIndex = 0;

for (let num of nums) {
  let newValue = num + 10;
  newArray[currentIndex] = newValue;
  currentIndex++;
}
console.log(newArray);

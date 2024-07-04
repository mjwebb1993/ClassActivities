// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "Noon";

// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `We will be eating lunch at ${timeOfDay}`;

// Print "greeting"
console.log(greeting);

// Create a new variable, but do not assign it a value
let blank;

// Print the new variable and its type
// What type should we expect?
console.log(blank, typeof blank);

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
let blankOnPurpose = null;

// Print the variable and its type again
// What type should we expect?
console.log(blankOnPurpose, typeof blankOnPurpose);

// Try to print a variable that does not exist
// What should we expect to print in the CLI?
console.log(foobar);

// Print "greeting" again
// Will this line run?
console.log(greeting);

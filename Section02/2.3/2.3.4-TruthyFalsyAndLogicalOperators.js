console.log(true && false);
console.log(false && false);
console.log(true && true);

console.log(true || false);

console.log(!(true && false));
console.log(!(false))
console.log(!false)

if (!isAuthenticated(user)) {
  console.log("Please log in");
}

console.log(undefined || null);
console.log(!``);
console.log(!(1 && "false"));
console.log(NaN || !"true");

console.log(true && "false");
console.log("false" && true);

let age = 12;
let menu = age > 10 ? "full menu" : "kid's menu";

let num = 0;
if (true && !num) {
  console.log("The number is zero");
}

num = 0;
if (false || !num) {
  console.log("The number is zero");
}


console.log(true && true && false && true);

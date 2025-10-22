// select all unordered list (ul) elements
let getUL = document.getElementsByTagName("ul");
let queryUL = document.querySelectorAll("ul");

console.log(getUL);
console.log(queryUL);
// select all elements with the class "class-week"
let getClassWeek = document.getElementsByClassName("class-week");
let queryClassWeek = document.querySelectorAll(".class-week");
console.log(getClassWeek);
console.log(queryClassWeek);
// select all elements with the class "nav-bar"
let queryNav = document.querySelectorAll(".nav-bar");

console.log(queryNav);

// select the element with the id "dog-picture" and save it to a variable
let dogPic = document.querySelector("#dog-picture");
console.log(dogPic);

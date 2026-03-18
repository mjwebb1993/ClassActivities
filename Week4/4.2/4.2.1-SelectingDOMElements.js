// select all unordered list (ul) elements
let getUL = document.getElementsByTagName("ul");
let queryUL = document.querySelectorAll("ul");

console.log("4.2.1 - getUL", getUL);
console.log("4.2.1 - queryUL", queryUL);

// select all elements with the class "class-week"
let classWeek = document.getElementsByClassName("class-week");
console.log("4.2.1 - classWeek", classWeek);

// select all elements with the class "nav-bar"
let navBar = document.querySelectorAll(".nav-bar");
console.log("4.2.1 - navBar", navBar);

// select the element with the id "dog-picture" and save it to a variable
let dogPic = document.querySelector("#dog-picture");
console.log("4.2.1 - dogPic", dogPic);

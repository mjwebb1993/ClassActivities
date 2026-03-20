// print the outer HTML of the navigation bar
let navbar = document.querySelector("nav").outerHTML;
console.log(navbar);

// print the inner HTML of the navigation bar
let innernavbar = document.querySelector("nav").innerHTML;
console.log(innernavbar);

// print the text content of the #class-schedule-list element
let scheduletext = document.querySelector("#class-schedule-list").textContent;
console.log(scheduletext);

let nav = document.querySelector("nav");
nav.textContent = "Hello World";

// select the classList for the first class-week, then add the class "week-1"

// select the img element and add a src attribute
document.querySelector("#dog-picture").src =
  "https://images.unsplash.com/photo-1636910826899-62937cebbbc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D";

// change the font color of the h1 element
document.querySelector("h1").style.color = "red";

document.querySelector("h1").textContent = "Savvy Coders";

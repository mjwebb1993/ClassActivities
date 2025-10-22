// create a new unordered list (ul) element
const newUL = document.createElement("ul");
// remove the paragraph element in the nav-bar
let pElement = document.querySelector(".nav-bar > p");
pElement.remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newUL);
// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");

listItem1.textContent = "1st List Item";
listItem2.textContent = "2nd List Item";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItem1);
document.querySelector(".nav-bar > ul").appendChild(listItem2);

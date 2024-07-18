// create a new unordered list (ul) element
const newUL = document.createElement("ul");

// remove the paragraph element in the nav-bar
const removeParagraph = document.querySelector(".nav-bar > p");
removeParagraph.remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newUL);

// create two new list item (li) elements, and add some text to them
const listItemOne = document.createElement("li");
const listItemTwo = document.createElement("li");

listItemOne.textContent = "This is the 1st Item";
listItemTwo.textContent = "This is the 2nd Item";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItemOne);
document.querySelector(".nav-bar > ul").appendChild(listItemTwo);

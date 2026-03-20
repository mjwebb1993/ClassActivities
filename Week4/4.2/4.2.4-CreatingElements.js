// create a new unordered list (ul) element
let list = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector("nav p").remove();

// add your new ul element to the nav-bar
let navbar = document.querySelector("nav");
navbar.appendChild(list);

// create two new list item (li) elements, and add some text to them
let item = document.createElement("li");
item.textContent = "Home";
list.appendChild(item);

let aboutMe = document.createElement("li");
aboutMe.textContent = "About Me";
list.appendChild(aboutMe);

let contact = document.createElement("li");
contact.textContent = "Contact Us";
list.appendChild(contact);

// add the li elements to the ul in the nav-bar
list.removeChild(contact);

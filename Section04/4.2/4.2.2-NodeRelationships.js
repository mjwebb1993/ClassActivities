// select the root node
const root = document.querySelector("html");
console.log("root", root);
// select the last child of the root node
console.log("root last child:", root.lastElementChild);

// because the root variable selected the root node, we can use that variable to chain property to it instead of having to retype all of the selector again like this: document.querySelector("html").lastElementChild;

// select all the children of the body element
const bodyChildren = document.querySelector("body").lastElementChild;
console.log("bodyChildren:", bodyChildren);
// select the next sibling of the h2 node
const h2Sibling = document.querySelector("h2").nextElementSibling;
console.log("h2Sibling", h2Sibling);
// select the parent element of the h1 node
const h1Parent = document.querySelector("h1").parentElement;
console.log("h1Parent", h1Parent);

// select the root node
const root = document.querySelector("html");

// select the last child of the root node
document.querySelector("html").lastElementChild;

root.lastElementChild;
// select all the children of the body element
const body = document.querySelector("body");
console.log("body", body);
console.log("body children", body.children);

document.querySelector("body").children;
// select the next sibling of the h2 node
console.log(document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node
document.querySelector("h1").parentElement;

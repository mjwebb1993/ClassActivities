const newParagraph = document.createElement("p");
newParagraph.textContent = "The Superbowl was about Swifty";
newParagraph.classList.add("title");
document.getElementById("main").appendChild(newParagraph);

let childToRemove = document.querySelector("#myList li:nth-child(2)");

// document.querySelector("main").removeChild(childToRemove);

childToRemove.remove();

document.querySelector("button").addEventListener("click", () => {
  console.log("You clicked me!");
});

document.querySelector("button").addEventListener("mouseover", event => {
  event.target.style.color = "red";
});

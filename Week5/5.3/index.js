document.querySelector(".fa-burger").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

document.querySelector("header").classList.add("newClass");

document.querySelector("content").addEventListener("click", () => {
  document.querySelector("content").classList.toggle("contentColor");
});

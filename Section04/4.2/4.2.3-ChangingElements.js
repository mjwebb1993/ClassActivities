// print the outer HTML of the navigation bar
const navBarOuter = document.querySelector(".nav-bar");
console.log(navBarOuter.outerHTML);
// print the inner HTML of the navigation bar
console.log(navBarOuter.innerHTML);
// print the text content of the #class-schedule-list element
const classScheduleList = document.querySelector("#class-schedule-list");
console.log(classScheduleList.textContent);
// select the classList for the first class-week, then add the class "week-1"
const classWeek = document.querySelector(".class-week");
classWeek.classList.add("week-1");
console.log(classWeek);
// select the img element and add a src attribute
document.querySelector("img").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";

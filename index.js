let str = "string";

if (typeof str == "string") {
  console.log("Inside scope of if conditional");
}

function myFunction() {
  console.log("Hello, world");
  let num = 5;
  if (num >= 5) {
    let numScoped = true;
    console.log("num is greater than 5");
    console.log("the value of num is", num);
    console.log(str);
  }
}

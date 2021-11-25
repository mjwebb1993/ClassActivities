// console.log("Hello World");

function davidInternet(check) {
  let davidInternetCheck;
  davidInternetCheck = check;

  if (davidInternetCheck === "Bad") {
    console.log(
      "David's internet is more back in the past than Rural Missouri :)"
    );
  } else if (davidInternetCheck !== "Bad") {
    console.log(
      `"A miracle has occurred this November eve, because instead of being bad, David's internet has been described as: ${davidInternetCheck}`
    );
  }
}

davidInternet(
  "This is a good example of a template literal interacting within a function btw :) "
);

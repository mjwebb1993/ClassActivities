document
  .querySelector("#clickMe")
  .addEventListener(
    "click",
    (event) => {
      event.preventDefault();

      const doggy = document.createElement('img');
      doggy.id = "dog-picture";
      doggy.src = "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";
      document.querySelector('.main-content').prepend(doggy);
    }
  );
document
  .querySelector("#clickMeToo")
  .addEventListener(
    "click",
    (event) => document.getElementById("dog-picture").remove()
  );

// Tab or entire DOM
document.addEventListener("keyup", event => console.log(event.key));


document.getElementById("dog-picture").addEventListener("click", event => {
  event.preventDefault();

  console.log(event.target);

  event.target.src = "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=1380&t=st=1707966512~exp=1707967112~hmac=032c0b67209b4aef202c1f760e7fff1a1c4c6683db8e620e8cdcd458c62077a2";
});

let counter = 0; // Don't declare variables in global scope unless necessary

document.getElementById("stopMe").addEventListener("click", event => {
  event.preventDefault();  //  STOP THE DEFAULT BEHAVIOR

  if (counter < 6) {
    counter++;

    console.error(`na na na Stopped you! ${counter} times`);
  } else {
    window.location.href = "http://www.duckduckgo.com"
  }
});

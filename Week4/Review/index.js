//Modifying an element
const h1 = document.querySelector('h1');
h1.textContent += " and foods"

//Adding and Element

const ol = document.querySelector('ol');
const li = document.createElement('li');
li.textContent = "bbq"
ol.appendChild(li)

h1.style.color= "red";


//Adding an Event listener
const oof = document.getElementById('oof');
oof.addEventListener('click', () => {
  oof.style.color = 'purple'
})


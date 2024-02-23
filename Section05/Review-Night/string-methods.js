let name = "John Doe";
const check = "john doe";

if (name.toUpperCase() === check.toUpperCase()) {
    console.log("these match");
} else {
    console.log("these DON'T match");
}

const upperName = name.toUpperCase();

name = name.toUpperCase();


const paragraph = "The quick Brown Fox jumps over the lazy dog. If the dog barked, was it really lazy?";

console.log(paragraph.toLowerCase().indexOf("dog"));
console.info(paragraph.toLowerCase().lastIndexOf("dog"));

const language = "JavaScript";
const countAs = language.includes('Java');
console.log(countAs);

const restrictedWords = ["password", "john", "chevy"];
let password = "paSSword";

function checkPasswordAgainstWord(word) {
    if (password.toLowerCase().includes(word)) {
        console.log("Your password is not allowed");
    } else {
        console.log("Good password");
    }
}
restrictedWords.forEach(checkPasswordAgainstWord);

// Same ^^^^ vvvvv

restrictedWords.forEach(word => {
    if (password.toLowerCase().includes(word)) {
        console.log("Your password is not allowed");
    } else {
        console.log("Good password");
    }
})

password = "    chevyrules     ";
if (password.trim() === "chevyrules") {
    console.info("Password Matches");
} else {
    console.error('Nope, try again');
}

let message = "Your pizza is ready";
message = message.replace("pizza", "tacos");
console.log(message);
console.log(message.replace("tacos", "sammich"));


let str1 = "Hello Partner!";
let str2 = "Welcome to the party!";
let str3 = "We are going to have serious fun!!!";
let space = " ";

let newString = str1.concat(space, str2, space, str3);
console.log(newString);

console.log(str1 + space + str2);
console.log(`${str1} ${str2} ${str3}`);

console.info(message.split("o"));

const csv = "name,birthday,age,salary";
const csv2 = "john,2023-01-01,,500";
console.log(csv.split(","));
console.log(csv2.split(","));

console.log(message.split("").reverse().join(""));

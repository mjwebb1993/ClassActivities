let months = ["Feb", "Apr", "Mar", "May", "Sept", "Oct", "Nov"];
console.log(months.length);
months.push("Dec");
months.unshift("Jan");
console.log(months);
console.log(months.length);

months.pop();
months.shift();
console.log(months);
console.log(months.length);

months.slice(0, 3).forEach(month => console.log(month))

let sublist = months.splice(0, 2);
console.log(sublist)
console.log(months)

months = sublist.concat(months);
console.info(months);

console.log(months.join(" & "));

const nums = [3, 7, 11];

nums.forEach(num => {
    console.log(num);
});

const nopeNums = nums.forEach(num => {
    return num + 2;
});
console.log(nopeNums);

const newNums = nums.map(num => {
    return num + 2;
});
console.log(newNums);

let heroes = [
    {name: "Batman", franchise: "DC"},
    {name: "Ironman", franchise: "Marvel"},
    {name: "Thor", franchise: "Marvel"},
    {name: "Superman", franchise: "DC"}
];

heroes = heroes.map(hero => {
    if (hero.franchise === 'DC') {
        hero.cape = true;
    } else {
        hero.cape = false;
    }
    
    return hero;
})
console.log(heroes);

heroes.forEach(hero => console.log(hero.name))


const marvelCharacters = heroes.filter(hero => {
    return hero.franchise === "Marvel";
});
console.log(marvelCharacters);

const marvelCharacters2 = heroes.filter(hero => hero.franchise === "Marvel");
console.log(marvelCharacters2);

const capedCharacters = heroes.filter(hero => hero.cape);
console.log(capedCharacters);
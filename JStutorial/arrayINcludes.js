let brojevi = [1,2,3];
if (brojevi.indexOf(2) !== -1){
    // process here
}

[1,2,3].includes(2); // true
[1,2,3].includes(4); // false
[1,2,3].includes(1,1); // false

let bmw = {name: 'BMW' }, 
    toyota = { name: 'Toyota'},
    ford = {name: 'Ford'}

let cars = [ford, toyota];

console.log(cars.includes(ford)); // true
console.log(cars.includes(bmw)); // false
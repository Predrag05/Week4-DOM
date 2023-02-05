let nizBrojeva = [1,5,7,9,7,6,2,8,6,5,4,8,6,2,4,8];

let broj5 = nizBrojeva.indexOf(5);
console.log(broj5);

let drugiNizBrojeva = [51,48,65,21,5,87,5,18,61,1,9,6,6,48,15,48,4,5];
let broj48 = drugiNizBrojeva.indexOf(48,14);
console.log(broj48);

let rezultati = [10, 20, 30, 40, 20];

console.log(rezultati.indexOf(10)); // 0
console.log(rezultati.indexOf(30)); // 2
console.log(rezultati.indexOf(50)); // -1
console.log(rezultati.indexOf(20)); // 1

console.log(rezultati.indexOf(20,-1)); // 4 (fromIndex = 6+ (-1) = 5)
console.log(rezultati.indexOf(20,-5)); // 1 (fromIndex = 6+ (-5) = 1)

let porodica = [
    {name: "Predrag Simonovic", age: 36},
    {name: "Jovana Simonovic", age: 23},
    {name: "Lazar Simonovic", age: 3}
];

console.log(porodica.indexOf({
    name: 'Predrag Simonovic',
    age: 36
}))
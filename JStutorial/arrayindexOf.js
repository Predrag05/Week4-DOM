let nizBrojeva = [1,5,7,9,7,6,2,8,6,5,4,8,6,2,4,8];

let broj5 = nizBrojeva.indexOf(5);
console.log(broj5);

let drugiNizBrojeva = [51,48,65,21,5,87,5,18,61,1,9,6,6,48,15,48,4,5];
let broj48 = drugiNizBrojeva.indexOf(48,14);
console.log(broj48);

let rezultati = [10, 20, 30, 10, 40, 20];

console.log(rezultati.indexOf(10)); // 0
console.log(rezultati.indexOf(30)); // 2
console.log(rezultati.indexOf(50)); // -1
console.log(rezultati.indexOf(20)); // 1

console.log(rezultati.indexOf(20,-1)); // 5 (fromIndex = 6+ (-1) = 5)
console.log(rezultati.indexOf(20,-5)); // 1 (fromIndex = 6+ (-5) = 1)

let porodica = [
    {name: "Predrag Simonovic", age: 36},
    {name: "Jovana Simonovic", age: 23},
    {name: "Lazar Simonovic", age: 3}
];

console.log(porodica.indexOf({
    name: 'Predrag Simonovic',
    age: 36
})) // Ово не ради зато што једноставно су различити објекти


let rezultati2 = [10,20,40,30,10,10,70]

function find(zadatBroj, niz) {
    let nizIndexa = [];
    let brojinx = niz.indexOf(zadatBroj);
    while (brojinx != -1) {
        nizIndexa.push(brojinx);
        brojinx = niz.indexOf(zadatBroj, brojinx + 1);
    }
    return nizIndexa;
}
console.log(find(10,rezultati2))

console.log(rezultati2.lastIndexOf(10))
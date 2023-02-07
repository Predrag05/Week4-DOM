let krugovi = [10, 30, 50];
let podrucja = []
let podrucje = 0;
for (let i = 0; i < krugovi.length; i++) {
    podrucje = Math.floor(Math.PI * krugovi[i]);
    podrucja.push(podrucje);
}
console.log(podrucja)

// Ово изнад је дугачак код и мап метод мења низ много лакше

let podrucjaMap = krugovi.map(function(radius){
    return Math.floor(Math.PI * radius * radius);
});

console.log(podrucjaMap); // Изнад и испод је иста функција са другацијим ресенјима

let podrucjaMapa = krugovi.map(radius => Math.floor(Math.PI * radius * radius));
console.log(podrucjaMapa);

let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);

console.log(results);
console.log(numbers);

let brojevi = [1,5,3,4,7,4,36,7,63,2,34]

let mapBrojevi = brojevi.map((biloSta) => {
    return biloSta * 2
})

console.log(mapBrojevi);


console.log("БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ!!!")
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

console.log(podrucjaMap);

let podrucjaMapa = krugovi.map(radius => Math.floor(Math.PI * radius * radius));
console.log(podrucjaMapa);

console.log("БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ!!!")
let numbers = [1, 2, 3];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

let numbers2 = [1, 2, 3];
let suma = numbers2.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
});

console.log(suma); // Слично је као Мап само што мап исписује сваки елемент и уради оно што ми желимо са њим  а reduce  своди на један елемент

let brojevi = [1, 2, 3, 4];

function getOrdinalSuffix(i) {
  let j = i % 10, k = i % 100;
  if (j == 1 && k != 11) 
  return i + 'st';
  if (j == 2 && k != 12) 
  return i + 'nd';  
  if (j == 3 && k != 13) 
  return i + 'rd';
  return i + 'th';
}

let call = 1;
let suma2 = brojevi.reduce((previousValue, currentValue, currentIndex, array) => {
    let result = previousValue + currentValue;

    // show the 1st call, 2nd call, etc.
    console.log(`${getOrdinalSuffix(call)} call`);
    call++;

    // show the immediate values
    console.table({ previousValue, currentValue, currentIndex, result });

    return result;
},100); // дакле brojevi.reduce(функција(,,,,), 100) је потпуна синтакса, функција има улогу да враћа један број - let result = previousValue + currentValue;  .....return result; па запета ако желимо да поставимо почетну вредност

console.log(`Result: ${suma2}`);

////////////////////////////////////////////////////////////
let h = 1 % 100
console.log(h)

console.table({ name: "asdas", asdasd: 123, yewegf: 'sodabsdo', jksakjda: 998 });

//////////////////////////////////////////////////////////////

let vezba1brojevi = [1,4,5,5,544,5,654,55,2,68,77,25,532,3];
let count = 1;

let vezba1Reduce = vezba1brojevi.reduce((prethodnaVrednost, vrednostTrenutnogElementa, trenutniIndexuNizu, array) => {
    let rezultat = prethodnaVrednost + vrednostTrenutnogElementa;

    console.log(`${getOrdinalSuffix(count)} count`);
    count++;

    console.log({prethodnaVrednost, vrednostTrenutnogElementa, trenutniIndexuNizu, rezultat});


    return rezultat;
}, 100);

console.log(`Резултат је: ${vezba1Reduce}`);

//////////////////////////////////////////////////////////////

let racunZaKupovinu = [
    {
        name: 'telefon',
        kolicina: 1,
        cena: 700
    },

    {
        name: 'maska za telefon',
        kolicina: 2,
        cena: 10
    },

    {
        name: 'punjac za telefon',
        kolicina: 1,
        cena: 50
    }
]

let ceoRacun = racunZaKupovinu.reduce((pocetnaVrednost, novaUzetaVrednost) => {
    return pocetnaVrednost + novaUzetaVrednost.kolicina * novaUzetaVrednost.cena
}, 0)

console.log(`Рачун износи: ${ceoRacun}`)

////////////////////////////////////////////////////

// .reduceRight је све исто само пролази кроз низ са десна на лево односоно од краја ка почетку
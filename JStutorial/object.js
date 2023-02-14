let mojObjekat = {
    ime: 'Predrag',
    prezime: 'Simonovic',
    ulica: 'Brace Kovac',
    broj: 39,
    datum_rodjenja: '25.04.1986.',
    omiljeni_brojevi: [5,8,3,2,7,9,1,4,6]
}
console.log(mojObjekat.ime)
console.log(mojObjekat.prezime)
console.log(mojObjekat.ulica)
console.log(mojObjekat.broj)
console.log(mojObjekat.datum_rodjenja)

//////////////////////////////////////////
// А може да се приступа и овако

console.log(mojObjekat['ime'])
console.log(mojObjekat['prezime'])
console.log(mojObjekat['ulica'])
console.log(mojObjekat['broj'])
console.log(mojObjekat['datum_rodjenja'])


console.log('Хвала ти Предраже за ово вежбање!!! Волим тее :DD')
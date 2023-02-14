let mojObjekat = {
    ime: 'Predrag',
    prezime: 'Simonovic',
    ulica: 'Brace Kovac',
    broj: 39,
    datum_rodjenja: '25.04.1986.',
    omiljeni_brojevi: [5,8,3,2,7,9,1,4,6],
    'nesto_neprakticno': 'Онда приступаш само преко []'
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


console.log(mojObjekat.omiljeni_brojevi[2])

mojObjekat.omiljeni_brojevi.push(14)
mojObjekat.omiljeni_brojevi.unshift(16)
mojObjekat.omiljeni_brojevi.splice(8,1,12,4)

mojObjekat.omiljeni_brojevi.sort((a,b) => {
    return a - b
})

console.log(mojObjekat)

////////////////////////

//  Када се у објекту наведе под наводнике неки properti његовом value може да се приступи само преко овог [] приступа

console.log(mojObjekat['nesto_neprakticno'])

mojObjekat.ulica = 'Cernisevskog'
mojObjekat.broj = 2
//  додајем испод нови
mojObjekat.grad = 'Beograd'
mojObjekat.drzava = 'Srbija'

// бришем испод ондај чудан
delete mojObjekat['nesto_neprakticno']


console.log(mojObjekat)

let noviNiz = mojObjekat.omiljeni_brojevi
console.log(noviNiz)

mojObjekat.id = 1
console.log('fid' in mojObjekat) // false
console.log('id' in mojObjekat) // true

console.log('Хвала ти Предраже за ово вежбање!!! Волим тее :DD')
let nizImena = ['Dusan', 'Predrag', 'Jovana', 'Lazar', 'Katerina', 'Dragan', 'Aleksandar', 'Jelena', 'Mihailo', 'Slobodan', 'Olivera', 'Marija', 'Ana', 'Olga', 'Vladimir', 'Dragana', 'Aleksandar', 'Jelena', 'Mihailo', 'Uros', 'Branislav', 'Luka', 'Veljko', 'Dobrila', 'Visnja', 'bebe'];

console.log(nizImena.find(e => e === 'bebe'));

let korisnici = [
    {
        ime: 'Predrag',
        kredit: 500
    },
    {
        ime: 'Jovana',
        kredit: 300
    },
    {
        ime: 'Lazar',
        kredit: 800
    }
];

console.log(korisnici.find(e => e.kredit > 100))




/*
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
*/
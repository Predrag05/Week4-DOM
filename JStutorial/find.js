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

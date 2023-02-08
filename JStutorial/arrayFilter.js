let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = cities.filter(function (e) {
    return e.population > 3000000;
});
console.log(bigCities);

let gradoviSrbija = [
    {ime:'Београд', populacija: 1659440},
    {ime:'Бор', populacija: 48615},
    {ime:'Ваљево', populacija: 90312},
    {ime:'Врање', populacija: 83524},
    {ime:'Вршац', populacija: 52026},
    {ime:'Зајечар', populacija: 59461},
    {ime:'Зрењанин', populacija: 123362},
    {ime:'Јагодина', populacija: 71852},
    {ime:'Кикинда', populacija: 59453},
    {ime:'Крагујевац', populacija: 179417},
    {ime:'Краљево', populacija: 125488},
    {ime:'Крушевац', populacija: 128752},
    {ime:'Лесковац', populacija: 144206},
    {ime:'Лозница', populacija: 79327},
    {ime:'Ниш', populacija: 260237},
    {ime:'Нови Пазар', populacija: 100410},
    {ime:'Нови Сад', populacija: 341625},
    {ime:'Панчево', populacija: 123414},
    {ime:'Пирот', populacija: 57928},
    {ime:'Пожаревац', populacija: 75334},
    {ime:'Приштина', populacija: 198897},
    {ime:'Прокупље', populacija: 44419},
    {ime:'Смедерево', populacija: 108209},
    {ime:'Сомбор', populacija: 85903},
    {ime:'Сремска Митровица', populacija: 79940},
    {ime:'Суботица', populacija: 141554},
    {ime:'Ужице', populacija: 78040	},
    {ime:'Чачак', populacija: 115337},
    {ime:'Шабац', populacija: 115884}
]

let gradoviSrbijePreko100hiljada = gradoviSrbija.filter((el) => {
    return el.populacija < 100000
})

console.log(gradoviSrbijePreko100hiljada)





function isInRange(value) {
    if (typeof value !== 'number') {
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

let range = {
    lower: 1,
    upper: 10
};

let numberInRange = data.filter(isInRange, range);

console.log(numberInRange); // [10, 1, 5]
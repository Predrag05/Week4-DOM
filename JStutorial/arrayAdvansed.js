let boje = ["smaragdna", "zlatna"];
console.log(boje.length);
boje.push("white", "black", "orange");
console.log(boje.length);
console.log(boje);
boje.length = 2;
console.log(boje.length);
console.log(boje);

let svetleBoje = ['svetlo plava', 'svetlo zuta', 'svetlo zelena'];

for ( const boja of svetleBoje) { ///// додавање низа на крају
    boje.push(boja);
}
console.log(boje);

let noveBoje = ['plava', 'crvena', 'zuta'];
boje.push(...noveBoje);
boje.push(...svetleBoje);
console.log(boje);

boje.unshift('ljubicasta', 'braon', 'tirkizna', 'roza', 'srebrna');
console.log(boje);
////////////////////////////////////////////////////////


let brojevi = [20, 30];

let duzina = brojevi.unshift(); // unshift ако нема ништа уписано не враћа нови низ већ враћа само број чланова низа, дакле -- duzina = 2 -- то ће бити исписано
console.log(duzina); // дакле -- duzina = 2 као да пише

let duzinaa = brojevi.unshift(10); // unshift ће додати уписани број али само низу -- brojevi -- а --duzinAa -- ће исписати оно што враћа unshift а то је број чланова низа -- brojevi -- а то је сада 3 члана и исписаће 3

console.log(duzinaa); // дакле -- duzinAa = 3 као да пише

// Ако желимо да направимо (празан) објекат са додатим једним пропертијем онда овако урадимо
console.log({duzina});  // постоји разлика { duzina: 2 }
console.log({duzinaa});// постоји разлика { 'duzina': 3 } у наводницима
console.log({brojevi});


let numbers = [30, 40];

const length = numbers.unshift(10, 20);

console.log({ length });
console.log({ numbers });

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

for (const weekend of weekends) { ///// додавање низа на почетак
    days.unshift(weekend);
}

console.log(days); // мало је конфузно јер низ изгледа недеља, субота, понедељак... али за неки други пример можда није битно


days.unshift(...weekends)
console.log(days);  // разлика између овог spread operator и for of-a је у томе што ће spread буквално прекопирати и редослед низа какав је био до ће for of као петља једног по једног убацивати са почетка што у .push() не мења ништа али у .unshift() замени им места па ће први у низу постати последњи.

/////////////////////////////////////////////////////////////

let greetingsFirst = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeFirst() {
        return [].shift.call(this);
    }
};

const greetingFirst = greetingsFirst.removeFirst();

console.log(greetingFirst);
console.log(greetingsFirst);

////////////////////////////////////////////////////////////

let greetingsLast = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeLast() {
        return [].pop.call(this);
    }
};

const greetingLast = greetingsLast.removeLast();


console.log(greetingLast);
console.log(greetingsLast);

///////////////////////////////////////////////////////////

let greetingsAddFirstProperty = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(message) {
      [].unshift.call(this, message);
      return this.length;
    },
  };
  
  greetingsAddFirstProperty.prepend('Good day');
  
  console.log(greetingsAddFirstProperty);



let greetingsMore = {
    0: 'Hi',
    1: 'How',
    2: 'Are',
    3: 'You',
    length: 4,
    prepend (...properti) {
        [].unshift.call(this, ...properti);
        return this.length
    }
  }

greetingsMore.prepend('Good day', 'Commander')

console.log(greetingsMore)

/////////////////////////////////////////////////////////////

let pozdraviOdPedje = {
    0: 'Zdravo',
    1: 'Da',
    2: 'li',
    3: 'si',
    4: 'za',
    5: 'ucenje',
    length: 6,
    append (pozdrav) {
        [].push.call(this, pozdrav)
        return this.length
    }
}
pozdraviOdPedje.append('DA DA DA')
console.log(pozdraviOdPedje)

let zivotinje = {
    0: 'jelen',
    1: 'vuk',
    2: 'lisica',
    3: 'medved',
    4: 'sova',
    length: 5,
    append (...zivotinja) {
        [].push.call(this, ...zivotinja)
        return this.length
    }
}

zivotinje.append('zec', 'veverica')
console.log(zivotinje)
// The universal selector is denoted by * that matches all elements of any type:

let element = document.querySelector('*'); // Ова ће дакле селектовати само први елемент у документу, од свих ових које звездица иначе све селектује * тј покупи.

let elements = document.querySelectorAll('*'); // Добијамо у NodeList све елементе

console.log(element);
console.log(elements);

let prviHeding = document.querySelector('h1');

let headings = document.querySelectorAll('h2');

console.log(prviHeding);
console.log(headings);

let note = document.querySelector('.menu-item'); // селектовање само прве класе
let notes = document.querySelectorAll('.menu-item'); // селектовање свих класа

console.log(note);
console.log(notes);

let logo = document.querySelector('#logo'); // id би требало да је само један тако да се не користи querySelectorAll() уопште за ово

//////////////////////////// KAKO SELEKTOVATI ATRIBUTE

// [attribute]
// [attribute=value]
// [attribute~=value]
// [attribute|=value]
// [attribute^=value]
// [attribute$=value]
// [attribute*$*=value]

let autoplay = document.querySelector('[autoplay]');
console.log(autoplay);
let autoplays = document.querySelectorAll('[autoplay]');
console.log(autoplays);

// The selector list will match any element with one of the selectors in the group.
// The following example finds all <div> and <p> elements:

let elementss = document.querySelectorAll('div, p');
console.log(elementss);

/////////// ПОКУПИТИ САМО ОНЕ <a> ТАГОВЕ СЕЛЕКТОВАТИ КОЈИ СУ УНУТАР <p> ТАГА

let links = document.querySelector('p a');
console.log(links);

///////////// ПОКУПИТИ САМО ОНЕ <a> ТАГОВЕ КОЈИ СУ УНУТАР <p> ТАГА ИСКЉУЧИВО ДИРЕКТАН CHILD

let listItems = DOCUMENT.querySelectorAll('ul > li');
console.log(listItems);


// To select all li elements that are directly inside a <ul> element with the class nav:

let listItemss = document.querySelectorAll('ul.nav > li');
console.log(listItemss);

// For example, p ~ a will match all <a> elements that follow the p element, immediately or not:

let linkovi = document.querySelectorAll('p ~ a');

// 4) Adjacent sibling combinator
// The + adjacent sibling combinator selects adjacent siblings:

// selector + selector
// For example, h1 + a matches all elements that directly follow an h1:

let liinks = document.querySelectorAll('h1 + a');

// And select the first <a> that directly follows an h1:

let linnks = document.querySelector('h1 + a');

// Pseudo
// 1) Pseudo-classes
// The : pseudo matches elements based on their states:

// element:state

// For example, the li:nth-child(2) selects the second <li> element in a list:

let listItemm = document.querySelectorAll('li:nth-child(2)');

// 2) Pseudo-elements
// The :: represent entities that are not included in the document.

// For example, p::first-line matches the first line of all p elements:

let linkks = document.querySelector('p::first-line');
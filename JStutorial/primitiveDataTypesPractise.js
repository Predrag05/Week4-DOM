let mesagge, oneMore, getOneMore;

console.log(mesagge);
console.log(oneMore);
console.log(getOneMore);

mesagge = 5;
getOneMore = oneMore
oneMore = 6;

console.log(mesagge);
console.log(oneMore);
console.log(getOneMore);

/* Data types Primitive/Complex

null
undefined
boolean
number
string
symbol – available from ES2015
bigint – available from ES2020 */

let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string

counter = 120;
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"

let counteryyy;
console.log(counteryyy);        // undefined
console.log(typeof counteryyy); // undefined


let message = 'I\'m \nalso a valid string';
console.log(message)

let someEmptyString = ""                //  TOP :D
console.log(typeof(someEmptyString))

if(someEmptyString == false){
    console.log("da")                //  TOP :D
}

let bigintNumber = 326546345874565n
console.log(bigintNumber)

console.log(typeof(bigintNumber))

// Boolean check

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false
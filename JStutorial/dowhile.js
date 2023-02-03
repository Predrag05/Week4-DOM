//  Не ради у node-у већ само у browser-у

let count = 0
do{
    console.log(`Ovo je ponavljanje broj ${count + 1}`)
    count++
}
while(count < 5)


console.log("Браво Предраже за ово вежбање!!!")


const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0;
let hint = '';
let number = 0;
do{
    // get input from user
    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);

    // get the integer
    number = parseInt(input);


    // increase the number of guesses
    guesses++

    // check input number with the secret number provide hint if needed
    if (number > secretNumber) {
        hint = ', and less than ' + number;
    }   else if (number < secretNumber) {
        hint = ', and greather than ' + number;
    }   else if (number == secretNumber) {
        alert(`Bravo! You're correct after ${guesses} guess(es).`);
    }
} while (number != secretNumber);


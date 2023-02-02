let agee = 36
if (agee >= 18){
    console.log("Можеш ући")

}
else{
    console.log("Не можеш ући")
}


let onename = "Предраг"
let onesurname = "Симоновић"
let contact = {
    age: 36,
    name: onename,
    surname: onesurname,
}
console.log(contact)

/* Nested if statement (доле испод)
It’s possible to use an if statement inside another if statement. */

if (contact.age >= 18){
    if(contact.name == "Предраг" && contact.surname == "Симоновић"){
        console.log(`Можете ући господине ${contact.name} ${contact.surname}`)
    }
    else{
        console.log(`Ви јесте Предраг али са другим презименом`)
    }
}
else{
    console.log("Хајде, хајде, још мало мораш да порастеш.")
}
////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

if (contact.surname == "Симоновић"){
}
    else if(contact.name == "Предраг"){
        
    }
    else if (contact.age >= 18){
        console.log(`Можете ући господине ${contact.name} ${contact.surname}`)
    }
// else{
//         console.log("Хајде сад") // Није ми јасно зашто ово не ради када променим на мене да имам 12 година...
//     }


let month = 5
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);



let jovanaObj = {
    ime: "Jovana",
    prezime: "Simonovic",
    godiste: 1999,
    bracnoStanje: 1,
    deca: 2
}
////////// ТЕРНАРНИ ОПЕРАТОР
jovanaObj.ime == "Jovana" && jovanaObj.prezime == "Simonovic" && jovanaObj.godiste == 1999 && jovanaObj.bracnoStanje == 1 && jovanaObj.deca >= 2 ? console.log("То је моја драга Јована.") : console.log("Треба ми само моја Јована.")

console.log(`Браво ${contact.name} ${contact.surname} за ово вежбање`)
let brojevi = [1, 3, 'gnnb']
let rezultat = brojevi.every((el) => {
    return el >= 0;
});

console.log(rezultat);

// every метод проверава и враћа true или false

// Има у calback funkciji 3 parametra

//function callback(currentElement, index, array){
//    //...
//}

// Ми смо ставили само један, само први


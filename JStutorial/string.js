// let string = "554";
// console.log(string);

// string = parseFloat(string); // Одлична додела - без доделе не ради
// console.log(string); // пребацио је у број

// let ime = "Predrag";
// ime = parseFloat(ime)
// console.log(ime) //  Даје NaN


let rec = 'hladnjaca'
let indexRec = rec[5]
// console.log(indexRec)

for(let i = 0; i < rec.length; i++){
	    console.log('ovo je slovo broj',i + 1, rec[i], 'ovo mi uspeva zaista')
}

let recenica = 'Ovo mi uspeva, ali svakako mora da se vežba'

let index = recenica.indexOf('da')
console.log(index)

let recenicaSlice = recenica.slice(19, 32)
console.log(recenicaSlice)

let ime = 'Predrag'
let prezime = 'Simonović'
console.log(ime, prezime)

let imena = ["Predrag", "Nikola", "Đurađ", "Filip", "Aleksa", "Anđelina", "Milica"]

console.log(imena[1])

for(let i = 0; i < imena.length; i++){
	if (i !== 5)
	   console.log("Ovo je ime pod brojem", i + 1, imena[i])
	   
}

let imenaDjaka = imena.slice(1,6)
console.log(imenaDjaka)


imena[5] = {
	name: "Jovana",
	son: "Lazar",
 husbend: "Predrag",
 surname: "Simonovic"
}
///////////////////////////////////////////////////////////////////////


let stringSentence = "Milica je morala da ide kući, i stigla je na vreme na ručak."
let searchSentence = stringSentence.search("Milica")
console.log(searchSentence)

let stringLetter = stringSentence.search(/morala/i)

console.log(stringLetter)

console.log(imena)


imena[5].mama = "Dragana"
imena[5].tata = "Aleksandar"
imena[5].brat = "Uroš"


imena[5].hd = "dhhdhdhd"

console.log(imena[5])

delete imena[5].hd

console.log(imena[5])

console.log(imena)
////////////////////////////////////////////////////////////////////
let dugacakString = "Hajde da probamo jos po neki metod da vidimo kako radi."


let noviSlice = dugacakString.slice(10, 20) // од 10ог знака до двадесетог знака
let noviSubString = dugacakString.substring(10) // од 10ог знака па до краја
let noviStr = dugacakString.substr(10, 20) // од 10ог знака па наредних двадесет знакова


console.log(noviSlice)
console.log(noviSubString)
console.log(noviStr)
/////////////////////////////////////////////////////////////
let methodReplace = dugacakString.replace("Hajde", "Mozda")

console.log(methodReplace)
///////////////////////////////////////////////////////////
let spaceDugacakString = `        ${dugacakString}     `
let methodTrim = dugacakString.trim()

console.log(methodTrim)
////////////////////////////////////////////////////////
let stringer = "BiG LeTeRs i funkcija toUpperCase()"
let STRINGER = stringer.toUpperCase()
/////////////////////////////////////////////////////
console.log(STRINGER)

let littleStringer = stringer.toLocaleLowerCase()

console.log(littleStringer)

let easyConcat = "Bog"
let newString = easyConcat.concat(" ","je", " pravo dobro odlucio kada me je stvorio","!!!")

console.log(newString)

console.log("Браво Предраже за ово вежбање!!!")
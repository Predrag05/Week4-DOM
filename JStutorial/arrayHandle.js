let cenaTuneDin = 150
let gramaTunePoKonzervi = 116
let cenaTunePoGramu = cenaTuneDin / gramaTunePoKonzervi

console.log(cenaTunePoGramu)

let cenaTuneKilo = cenaTunePoGramu * 1000
console.log(cenaTuneKilo)


let ribe = ["Šaran","Som","Tuna","Losos","Girice","Bela"]
let zezStr = ' \"Mabey I am better fish\", '
let ribeJoin = ribe.join(zezStr)

console.log(ribeJoin, zezStr)

let nekeReci = "Giselle was so excited to learn the piano and began her lessons almost immediately. She was a quick learner, and her teacher was amazed at her progress."
let nanizi = nekeReci.split(' ')

console.log(nanizi)

nanizi.pop()
nanizi.shift()
let noviSliceNiz = nanizi.slice(1, 10)


console.log(noviSliceNiz)

console.log(nanizi.length)

let novinovi = nanizi.concat(noviSliceNiz)

console.log(novinovi.length)

console.log("novi concat niz je ispod")
console.log(novinovi)


console.log(nanizi.length)

let stringsy = nanizi.join('888')

console.log(stringsy)


let voceSrb = ["jabuka", "kruške", "šljive", "kajsije", "breskve"]
let voceWorld = ["kivi", "mango", "japanska-jabuka"]
let voceAfrica = ["Banana", "Ananas"]

let voce = voceSrb.concat(voceWorld, voceAfrica)
console.log(voce)

let i = voce.indexOf('kivi') // Vraca broj
console.log(i)

let trufolse = voce.includes("kivi")
console.log(trufolse)

let months = ["Januar", "Februar", "Mart", "Jul","Avgust", "Septembar"]
months.splice(3,0,"April", "Maj", "Jun")
console.log(months)

nanizi.splice(0,20) //prvi broj pokazuje lokaciju, drugi broj briše narednih onoliko koliko je napisano, a posle toga može se dodati sve ono što na ono mesto koje pokazuje prvi parametar dodati članove niza

nanizi.sort()
console.log(nanizi)
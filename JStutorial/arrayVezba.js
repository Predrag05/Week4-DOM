let brojevi = [1,5,4,2,6,8,7,9,3,2,1,5,4,8,9,5,5,4,1,2,3,8]

console.log(brojevi.find((el) => {
    return el === 8
}))
//////////////////////////

let brojeviSort = brojevi.sort((a,b) => {
    return a - b
})
console.log(brojeviSort)

let brojeviSort2 = brojevi.sort((a,b) => {
    return b - a
})
console.log(brojeviSort2)

////////////////////////////////////////////////////

let brojeviReduce = brojevi.reduce((a,b,i,arr) => {
    return a + b
},50)
console.log(brojeviReduce)

////////////////////////////////////

let brojeviFilter = brojevi.filter((el) => {
    return el <= 5
})
console.log(brojeviFilter)

console.log(brojevi.length)

brojevi.push(5,3,5)

console.log(brojevi.length)
console.log(brojevi)

let noviBrojevi = [32,23,14,43,23,14,25,68]

for ( const element of noviBrojevi) {
    brojevi.push(element)
}
console.log(brojevi)

brojevi.unshift(...noviBrojevi)
console.log(brojevi)


brojevi.pop()
console.log(brojevi)

brojevi.shift()
console.log(brojevi)

console.log(brojevi.indexOf(5))

let zivina = ['pile', 'pace', 'kokoska']
let zivotinje = ['macka', 'mis', 'pas', 'krava', 'konj']
let zivotinja = zivotinje.concat(zivina)
console.log(zivotinja)

let str = zivotinja.join(' ')
console.log(str)
console.log(typeof(str))

let napravljenNiz = str.split(' ')
console.log(napravljenNiz)

console.log(napravljenNiz[1])

let noviSlice = napravljenNiz.slice(0,5)
console.log(noviSlice)

zivotinja.splice(2,1,'nosorog') // splice не даје нови низ већ мења исти и не може да се уради овај тип let noviSlice = napravljenNiz.slice(0,5) console.log(noviSlice) јер не ради већ само овако
console.log(zivotinja)


function toArray() {
    return Array.prototype.slice.call(arguments)
}
nekiNiz = toArray('a','b','c')
console.log(nekiNiz)

nekiNiz.push(toArray(11,1,2))
console.log(nekiNiz)

console.log(nekiNiz[3][0])
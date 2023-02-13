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
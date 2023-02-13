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


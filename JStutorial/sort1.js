let brojevi = [1,5,3,7,2,9,8,10,6]
let sređeno = brojevi.sort()
console.log(brojevi)
console.log(sređeno)

let sortBrojAB = brojevi.sort(function(a,b){
  return a - b
})
console.log(sortBrojAB)


brojevi.sort(compareFunction)
function compareFunction (a,b) {
  return a - b
}

console.log(brojevi)


brojevi.sort(compareOtherFunction);
function compareOtherFunction(a,b) {
  return b - a
};
console.log(brojevi);

let brojevi2 = [7,43,77,957,6447,498]

brojevi2.sort(OdNajvecegDoNajmanjeg)
function OdNajvecegDoNajmanjeg(a,b){
  return b - a
}

let najveciBroj = brojevi2[0]
console.log(najveciBroj)

let studenti = [
    {name: 'Jovana', age: 23},
    {name: 'Olga', age: 28},
    {name: 'Uros', age: 20}
]
studenti.sort(function(a,b){
    return a.age - b.age
})
console.log(studenti)

console.log(brojevi2)

brojevi2.reverse()

console.log(brojevi2)
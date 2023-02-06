let brojevi = [1,5,4,2,6,8,7,9,3,2,1,5,4,8,9,5,5,4,1,2,3,8]

let index = brojevi.findIndex(broj => broj === 5)
console.log(index)


/*
function find(zadatBroj, niz) {
    let nizIndexa = [];
    let brojinx = niz.indexOf(zadatBroj);
    while (brojinx != -1) {
        nizIndexa.push(brojinx);
        brojinx = niz.indexOf(zadatBroj, brojinx + 1);
    }
    return nizIndexa;
}
console.log(find(10,rezultati2))

console.log(rezultati2.lastIndexOf(10))
*/
const products = [
    { name: 'Phone', price: 999 },
    { name: 'Computer', price: 1999 },
    { name: 'Tablet', price: 995 },
  ];
  
  const inx = products.findIndex(product => product.price > 1000);
  
  console.log(inx); // 1
let p = document.getElementById('pre');


// let h1 = document.getElementsByTagName('h1');
// console.log(h1); HTML COLLECTION
// h1[0].innerText = 'hello'; ENTERING h1
// p.before(h1[0]) REALLY PUT THIS h1 BEFORE PARAGRAPH

// LETS DO IT ANOTER WAY

let h1 = document.querySelector('h1')
console.log(h1);

p.before(h1)

h1.innerHTML = 'Yea, I go first now :D'

console.log(h1);


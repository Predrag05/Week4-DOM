let p = document.getElementById('pre');


// let h1 = document.getElementsByTagName('h1');
// console.log(h1); HTML COLLECTION
// h1[0].innerText = 'hello'; ENTERING h1
// p.before(h1[0]); REALLY PUT THIS h1 BEFORE PARAGRAPH

// LETS DO IT ANOTER WAY

let h1 = document.querySelector('h1');
console.log(h1);

p.before(h1);

h1.innerHTML = 'Yea, I go first now :D';

console.log(h1);

let h2 = document.createElement('h2');
h2.innerText = 'Something 1';
document.body.appendChild(h2);

let h2a = document.createElement('h2');
h2a.innerText = 'Something 2';
document.body.appendChild(h2a);

let h2b = document.createElement('h2');
h2b.innerText = 'Something 3';
document.body.appendChild(h2b);

p.before(h2, h2a, h2b);

const list = document.querySelector('ul');

const libs = ['React', 'Meteor', 'Polymer'];
const items = libs.map((lib) => {
    const item = document.createElement('li');
    item.innerText = lib;
    
    return item;
});


list.firstChild.before(...items);

console.log(items)


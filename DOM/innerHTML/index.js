const meni = document.getElementById('meni');



let li = document.createElement('li');
li.textContent = 'O nama'

meni.appendChild(li);

console.log(meni.innerHTML);

// document.body.innerHTML = '' // брише све на страници
let div1 = document.getElementById('container')

// compose DOM nodes
let fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
   let p = document.createElement('p');
   p.textContent = `Paragraph ${i}`;
   fragment.appendChild(p);
}

// append the fragment to the DOM tree
div1.appendChild(fragment);

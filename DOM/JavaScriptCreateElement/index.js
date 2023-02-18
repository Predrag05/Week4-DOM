let div = document.createElement('div');

div.innerHTML = '<p>CreateElement example</p>';
div.id = 'content';
div.className = 'note';

document.body.appendChild(div);


let div2 = document.createElement('div');
div2.id = 'content2';
div.className = 'note2';
// create a new text node and add it to the div
let text = document.createTextNode('CreateElement second example');

let h2 = document.createElement('h2')
h2.textContent = 'Add h2 element to the div';

div2.appendChild(text);
div2.appendChild(h2);

document.body.appendChild(div2)

let div3 = document.createElement('div');

let ul = document.createElement('ul');
ul.textContent = 'LISTA PRAVLJENA RUCNO PREKO createElement()';

let li1 = document.createElement('li');
li1.textContent = 'prva'

let li2 = document.createElement('li');
li2.textContent = 'druga'

let li3 = document.createElement('li');
li3.textContent = 'treca'

let li4 = document.createElement('li');
li4.textContent = 'cetvrta'

let li5 = document.createElement('li');
li5.textContent = 'peta'

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
div3.appendChild(ul);
document.body.appendChild(div3);






console.log('ПРЕДРАЖЕ ХВАЛА ТИ ЗА ОВО ВЕЖБАЊЕ!!!');
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




console.log('ПРЕДРАЖЕ ХВАЛА ТИ ЗА ОВО ВЕЖБАЊЕ!!!');
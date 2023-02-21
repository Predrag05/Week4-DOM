const meni = document.getElementById('menu');

function dodajMeni(tekst) {
    let li = document.createElement('li');
    li.textContent = tekst;

    return li;
}

meni.appendChild(dodajMeni('Prvo'));
meni.appendChild(dodajMeni('Drugo'));
meni.appendChild(dodajMeni('Trece'));
meni.appendChild(dodajMeni('Cetvrto'));
meni.appendChild(dodajMeni('Peto'));

///////////////////////////////// .textContent

const prvaLista = document.getElementById('first-list');

const everest = prvaLista.firstElementChild;

const drugaLista = document.getElementById('second-list');


drugaLista.appendChild(everest)

let note = document.getElementById('note');

// note.textContent = 'Obrisao je sve i dodao ovaj tekst'

console.log(note.textContent);
console.log(note.innerText);
console.log(note.innerHTML);

console.log('ХВАЛА ТИ ПРЕДРАЖЕ ЗА БУДУЋЕ ВЕЖБАЊЕ!!!');
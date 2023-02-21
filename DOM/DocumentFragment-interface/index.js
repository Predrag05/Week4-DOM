let jezici = ['Ruski', 'Engleski', 'Nemacki', 'Francuski', 'Spanski'];

const listaJezika = document.querySelector('#jezik');

let fragment = new DocumentFragment();

jezici.forEach((jezik) => {
    let li = document.createElement('li');
    li.innerHTML = jezik;

    fragment.appendChild(li);
})

listaJezika.appendChild(fragment);
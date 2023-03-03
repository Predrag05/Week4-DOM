const div = document.getElementById('div');
const t = document.getElementById('nekitext');
let niz = []
const p2 = document.createElement('p');



const div2 = document.createElement('div');
const label = document.createElement('label');
label.for = 'neki-novi-input'
label.innerText = 'Pogodi input za ispis niza';
div2.appendChild(label)

const put = document.createElement('input');
put.type = 'textbox';
put.id = 'text-niz';
put.placeholder = 'Input must be - valid'
label.appendChild(put);

document.body.appendChild(div2);


put.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && put.value === 'valid') {
        let str = ''
        niz.forEach((el) => {
            const pi = document.createElement('p')
            pi.innerText = el
            div2.appendChild(pi)
            str += el + ' '
            
        })
        const par = document.createElement('p');
        par.innerText = str
        div2.appendChild(par)
    }
})

t.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && t.value.trim() !== '') {
    const p = document.createElement('p');
    p.innerText = t.value.trim();
    div.appendChild(p);

    niz.push(t.value.trim());
    t.value = '';
    console.log(niz)
    }
})

////////////////////// before METHOD just for try
p2.innerText = 'password is \'valid\''
document.body.appendChild(p2);
put.before(p2)
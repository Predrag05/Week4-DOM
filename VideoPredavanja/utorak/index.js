const div = document.getElementById('div');
const t = document.getElementById('nekitext');
const p2 = document.createElement('p');


const div2 = document.createElement('div');
const label = document.createElement('label');
label.for = 'neki-novi-input'
label.innerText = 'Pogodi input za ispis niza';


const put = document.createElement('input');
put.type = 'textbox';
put.id = 'text-niz';
put.placeholder = 'Input must be - valid'


const button = document.createElement('button');
button.innerText = 'Write Array Copy'



let niz = []



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




button.addEventListener('click', () => {

    let stri = ''
        niz.forEach((el) => {
            const pi = document.createElement('p')
            pi.innerText = el
            document.body.appendChild(pi)
            stri += el + ' '
            
        })
    const par = document.createElement('p');
        par.innerText = stri
        document.body.appendChild(par)
})




document.body.appendChild(div2);
div2.appendChild(label)
label.appendChild(put);

document.body.appendChild(button)







////////////////////// before METHOD just for try
p2.innerText = 'password is \'valid\''
document.body.appendChild(p2);
put.before(p2)


///////////////////////////////



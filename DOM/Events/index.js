const click = document.getElementById('click');
const change = document.getElementById('change');
const mouseover = document.getElementById('mouseover');
const keypress = document.getElementById('keypress');
const focus = document.getElementById('focus');
const blur = document.getElementById('blur');
const focusBox = document.getElementById('focusBox');
const windowWidth = document.getElementById('windowWidth');
const windowHeight = document.getElementById('windowHeight');
let counter = 0;
// let nizKlik = []; komplikovanija varijanta sa ubacivanjem u niz



click.addEventListener('click', () => {
    let p = document.createElement('p');
    p.textContent = `Овде је бројач: ${counter +1}`
    counter++;
    document.body.appendChild(p);
})

let select = document.getElementById('grad');

select.addEventListener('change', () => {
    let val = document.getElementById('grad').value;
    document.getElementById('demo').innerHTML = val;
})


mouseover.addEventListener('mouseover', () => {
    mouseover.innerHTML = 'Tako je Pedja';
})

keypress.addEventListener('keypress', () => {
    let p = document.createElement('p');
    p.innerHTML = keypress.value;
    document.body.appendChild(p);
})

focus.addEventListener('focus', () => {
    focus.style.backgroundColor = 'yellow';
    focusBox.style.backgroundColor = 'gold';
})

focusBox.addEventListener('keypress', () => {
    let p = document.createElement('p');
    p.innerHTML = focusBox.value;
    document.body.appendChild(p);
})
///////////////////////////////////////////
blur.addEventListener('focus', () => {
    blur.style.backgroundColor = 'gold';

})
blur.addEventListener('blur', () => {
    blur.style.backgroundColor = 'white';

})

window.addEventListener('resize', () => {
    windowWidth.innerHTML = window.innerWidth;
    windowHeight.innerHTML = window.innerHeight;
})
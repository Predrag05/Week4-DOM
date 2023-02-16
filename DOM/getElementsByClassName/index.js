let listaCela = document.getElementById('menu');
let listaTacke = document.getElementsByClassName('item')

let data = [].map.call(listaTacke, (tacka) => {
    return tacka.textContent;
})
console.log(data);


let drugaLista = document.getElementsByClassName('secondary');
let data2 = [].map.call(drugaLista, (tacka) => tacka.textContent)

console.log(data2);
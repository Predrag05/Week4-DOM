let listaCela = document.getElementById('menu');
let listaTacke = document.getElementsByClassName('item')

let data = [].map.call(listaTacke, (tacka) => {
    return tacka.textContent;
})

console.log(data);
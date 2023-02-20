let zbirDepozita = 0

const div1 = document.getElementById('jedan')
const div2 = document.getElementById('dva')
const status1 = document.getElementById('status1')
const greska = document.getElementById('greska')

const dugmeDepozit = document.getElementById('dugmeDodajStanje')
const dugmePodizi = document.getElementById('dugmeOduzmiOdStanja')

const trenutnoStanje = document.getElementById('trenutnoStanje')

const prviInput = document.getElementById('ulaz')
const drugiInput = document.getElementById('izlaz')

let brojUnosaUlaz = prviInput.value
let brojUnosIzlaza = drugiInput.value

const podignutoPara = document.getElementById('podignutoPara')

function daLiJeValidanUnos(unos){
    isNaN(unos.value.trim())
    unos.value >= 10
}


dugmeDepozit.addEventListener('click', () => {

    greska.innerText = ''
    podignutoPara.innerText = ''
    

    if(isNaN(prviInput.value.trim())){
        greska.innerText = 'Vas unos mora da bude broj'
        prviInput.value = ''
    }
    
    if(zbirDepozita > 0 && zbirDepozita < 1000){
        status1.innerText = 'Aktiv'
    }
    if(zbirDepozita > 1000 && zbirDepozita < 1000000){
        status1.innerText = 'Gold'
    }
    if(zbirDepozita >= 1000000){
        status1.innerText = 'Platinum'
        
    }
    if(prviInput.value >= 10){
        zbirDepozita = zbirDepozita + +prviInput.value
        trenutnoStanje.innerText = zbirDepozita
        prviInput.value = ''
    }

    else{
        greska.innerText = 'Vas unos mora da bude broj 10 ili veci'
        // zbirDepozita = zbirDepozita + +prviInput.value
        // trenutnoStanje.innerText = zbirDepozita
        // prviInput.value = ''

    }

})

dugmePodizi.addEventListener('click', () => {

    greska.innerText = ''
    podignutoPara.innerText = ''

    if(isNaN(drugiInput.value.trim())){
        greska.innerText = 'Vas unos mora da bude broj 10 ili veci'
        drugiInput.value = ''
    }
    
    if(zbirDepozita < -999){
        greska.innerText = 'Ne mozete vise podizati pare zbog prevelikog minusa'
    }
    if(zbirDepozita > 0 && zbirDepozita < 1000){
        status1.innerText = 'Aktiv'
    }
    if(zbirDepozita > 1000 && zbirDepozita < 1000000){
        status1.innerText = 'Gold'
    }
    if(zbirDepozita >= 1000000){
        status1.innerText = 'Platinum'
        zbirDepozita = zbirDepozita - prviInput.value / 100
    }
    if(drugiInput.value >= 10 && zbirDepozita > -1001 && drugiInput.value < 1000){
        zbirDepozita = zbirDepozita - +drugiInput.value
        trenutnoStanje.innerText = zbirDepozita
        podignutoPara.innerText =`Podignuto je upravo: ${drugiInput.value}`
        drugiInput.value = ''
    }
    if(drugiInput.value >= 10 && zbirDepozita > -1001 && status1.innerText === 'Platinum'){
        zbirDepozita = zbirDepozita - +drugiInput.value
        trenutnoStanje.innerText = zbirDepozita
        podignutoPara.innerText =`Podignuto je upravo: ${drugiInput.value}`
        drugiInput.value = ''
    }
    
    else{
        greska.innerText = 'Vas unos mora da bude broj 10 ili veci'
        // zbirDepozita = zbirDepozita - +drugiInput.value
        // trenutnoStanje.innerText = zbirDepozita
        // podignutoPara.innerText = `Podignuto je upravo: ${drugiInput.value}`
        // drugiInput.value = ''

    }
})







console.log('ПРЕДРАЖЕ ХВАЛА ТИ ЗА ОВО ВЕЖБАЊЕ!!!')
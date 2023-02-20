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

// let brojUnosaUlaz = prviInput.value -- не региструје
// let brojUnosIzlaza = drugiInput.value -- не региструје

const podignutoPara = document.getElementById('podignutoPara')



function daLiJeUnosPreko10(unos) {
    unos >= 10
}
function daLiJeDozvoljenoPodizati(depozit) {
    if(depozit <= -1001){
        greska.innerText = 'Nije dozvoljeno podizati novac zbog velikog minusa'
    }
}
function daLiJeDozvoljeniMinus(depozit) {
    if(depozit >= -1000 && depozit < 0){
        status1.innerText == 'Red'
    }
}
function daLiJeStatusActiv(depozit) {
    if(depozit >= 0 && depozit <= 999){
    status1.innerText == 'Active'
}
}
function daLiJeStatusGold() {
    if(depozit >= 1000 && depozit <= 999999){
    status1.innerText == 'Gold'
    }
}
function daLiJeStatusPlatinum() {
    if(depozit >= 1000000){
    status1.innerText == 'Platinum'
    }
}



dugmeDepozit.addEventListener('click', () =>{
        
    
    
})
console.log('Браво Предраже')
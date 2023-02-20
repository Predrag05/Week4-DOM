let zbirDepozita = 0

const div1 = document.getElementById('jedan')
const div2 = document.getElementById('dva')
let status1 = document.getElementById('status1')
let greska = document.getElementById('greska')

const dugmeDepozit = document.getElementById('dugmeDodajStanje')
const dugmePodizi = document.getElementById('dugmeOduzmiOdStanja')

let trenutnoStanje = document.getElementById('trenutnoStanje')

const prviInput = document.getElementById('ulaz')
const drugiInput = document.getElementById('izlaz')

// let brojUnosaUlaz = prviInput.value -- не региструје
// let brojUnosIzlaza = drugiInput.value -- не региструје

const podignutoPara = document.getElementById('podignutoPara')

let donjeOgranicenje = -1001
let hiljadu = 1000
let milion = 1000000
let min = 10
let preostalo = hiljadu + +drugiInput.value 

function ispisiKartice(){
    if(zbirDepozita > donjeOgranicenje && zbirDepozita < 0){
        status1.innerText = 'Red'
    } 
    if(zbirDepozita > 0 && zbirDepozita < hiljadu){
        status1.innerText = 'Active'
    }
    if(zbirDepozita > hiljadu && milion < 0){
        status1.innerText = 'Gold'
    }   
    if(zbirDepozita > milion){
        status1.innerText = 'Platinum'
    } 
    if(zbirDepozita < donjeOgranicenje){
        status1.innerText = 'prekoracenje'
    }
     
}

function daLiJeUnosPreko10(unos) {
    +unos.value >= min
}

function minus(depozit) {
    if(zbirDepozita >= ++donjeOgranicenje && zbirDepozita < 0){
        status1.innerText = 'Red'
        zbirDepozita += +depozit.value
        trenutnoStanje.innerText = zbirDepozita
        ispisiKartice()
    }
}
function activ(depozit) {
    if(zbirDepozita >= 0 && zbirDepozita <= --hiljadu && +depozit.value >= min){
    status1.innerText = 'Active'
    zbirDepozita += +depozit.value
    trenutnoStanje.innerText = zbirDepozita
    ispisiKartice()


}
}
function gold(depozit) {
    if(zbirDepozita > hiljadu && zbirDepozita <= --milion && +depozit.value >= min){
    status1.innerText = 'Gold'
    zbirDepozita += +depozit.value
    trenutnoStanje.innerText = zbirDepozita
    ispisiKartice()
    }
}
function platinum(depozit) {
    if(zbirDepozita >= milion && +depozit.value >= min){
    status1.innerText = 'Platinum'
    zbirDepozita += +depozit.value
    trenutnoStanje.innerText = zbirDepozita
    ispisiKartice()
    }
}

//////////////////////////////////////////////////////////


function podPlatinum(izlaz) {
    if(status1.innerText === 'Platinum' && +izlaz.value > min){
        zbirDepozita -= +izlaz.value / 100
        zbirDepozita -= +izlaz.value
        trenutnoStanje.innerText = zbirDepozita
        ispisiKartice()
    }
}
function podGold(izlaz) {
    if(status1.innerText === 'Gold' && +izlaz.value < hiljadu && +izlaz.value > min){
        
            zbirDepozita -= +izlaz.value
            trenutnoStanje.innerText = zbirDepozita
            // if(zbirDepozita > donjeOgranicenje && zbirDepozita < 0){
            //     status1.innerText = 'Red'
            // } 
            // if(zbirDepozita > 0 && zbirDepozita < hiljadu){
            //     status1.innerText = 'Active'
            // }
            // if(zbirDepozita > donjeOgranicenje && zbirDepozita < 0){
            //     status1.innerText = 'Red'
            // }   
            ispisiKartice()
           
             
            
        }
    }

function podActive(izlaz) {
    if(status1.innerText === 'Active' && +izlaz.value < hiljadu && +izlaz.value > min){
        
            zbirDepozita -= +izlaz.value
            trenutnoStanje.innerText = zbirDepozita
            // if(zbirDepozita > 0){
            //     status1.innerText = 'Active'
            // }
            // if(zbirDepozita > donjeOgranicenje && zbirDepozita < 0){
            //     status1.innerText = 'Red'
            // }   
            ispisiKartice()
    }
    
}
function neMozePod() {
    if(zbirDepozita <= donjeOgranicenje){

        greska.innerText = 'Nije dozvoljeno podizati novac zbog velikog minusa'
        

    }
}

function podMinus(izlaz) {
    if((status1.innerText === 'Red' || status1.innerText === 'Status') && +izlaz.value < hiljadu && +izlaz.value > min && zbirDepozita > donjeOgranicenje && preostalo > izlaz.value){
        
            zbirDepozita -= +izlaz.value
            trenutnoStanje.innerText = zbirDepozita
            status1.innerText = 'Red'
            ispisiKartice()
            
        }
}

function dodajUvek(uvek) {
    if(zbirDepozita < donjeOgranicenje && status1.innerText === 'prekoracenje')
    zbirDepozita += +uvek.value
}




dugmeDepozit.addEventListener('click', () =>{

    dodajUvek(prviInput)
    platinum(prviInput)
    gold(prviInput)
    activ(prviInput)
    minus(prviInput)


        
})

dugmePodizi.addEventListener('click', () =>{
    
    neMozePod(drugiInput)
    podMinus(drugiInput)
    podActive(drugiInput)
    podGold(drugiInput)
    podPlatinum(drugiInput)
    
})

console.log('Браво Предраже')
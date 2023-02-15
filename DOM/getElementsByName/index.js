let btn = document.getElementById('btnRate');
        let output = document.getElementById('output');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });

        });

let dugme = document.getElementById('novoDugme');
let ispis = document.getElementById('ispis');

dugme.addEventListener('click', () => {
    let ocene = document.getElementsByName('oceni');
    ocene.forEach((el) => {
        if (el.checked) {
            ispis.innerText = `Izabrao si \'${el.value}\', hvala ti.`;
        }
    });
});
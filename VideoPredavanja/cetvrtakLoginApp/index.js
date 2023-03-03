let users = [
    {
        ime: 'Predrag',
        password: '55555',
        isAdmin: true,
        novac: 500
    },
    {
        ime: 'Jovana',
        password: '99995',
        isAdmin: false,
        novac: 530
    },
    {
        ime: 'Lazar',
        password: '55999',
        isAdmin: false,
        novac: 510
    },
    {
        ime: 'Beba',
        password: '59999',
        isAdmin: false,
        novac: 520
    }
];

const divLogin = document.getElementById('divLogin');
const divUsers = document.getElementById('divUsers');
divUsers.style.display = 'none';
const inputText = document.getElementById('text');
const inputPassword = document.getElementById('password');
const forma = document.getElementById('login');

users.forEach(user => {
    if(user.isAdmin) return; // return је за функцију као brake за петљу а у овом случају continue
    const p = document.createElement('p');
    p.textContent = user.ime + ' ' + user.novac;

    divUsers.appendChild(p);
});

forma.addEventListener('submit', e => {
    e.preventDefault()
    // Ни један инпут не сме бити празан
    if(inputText.value.trim() === '' || inputPassword.value.trim() === '') {
        alert('ne sme da bude prazno')
        return
    }
    console.log('sme ovako')

    // Да ли корисник већ постоји

    // OVO ISPOD NIJE BILO NAJBOLJE MORA OPET PETLJA VRTI U KRUG KONSTANTNO
    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].ime === inputText.value) {
    //         if(users[i].password === inputPassword.value){
    //             divUsers.style.display = 'block'
    //         }
    //         else {
    //             const p = document.createElement('p');
    //             p.textContent = 'Password is incorrect';
    //             divLogin.appendChild(p);
    //             divUsers.style.display = 'none';
                
    //         }
    //     }
    //     else {
            
    //         let novi = {};
    //         novi.ime = inputText;
    //         novi.isAdmin = false;
    //         novi.novac = 500;
    //         users.push(novi)
    //         divUsers.style.display = 'block'
    //         console.log(users)

    //     }
    // }

        // OVO IZNAD NIJE BILO NAJBOLJE MORA OPET PETLJA VRTI U KRUG KONSTANTNO


    // Ако постоји, да ли је шифра добра, ако је шифра добра улоговати, ако не исписати

    // Ако не постоји, направити новог корисника и улоговати
})
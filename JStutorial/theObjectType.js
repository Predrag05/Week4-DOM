let emptyObject = {};
console.log(typeof emptyObject); // object
console.log(Boolean(emptyObject)); // true

let person = {
    firstName: "Predrag",
    lastName: "Simonovic"
};
console.log(person);

let contact = {
    firstName: "Predrag",
    lastName: "Simonovic",
    email: "sim.pedja@gmail.com",
    phone: "0653595953",
    adress: {
        building: "2",
        street: "Cernisevskog",
        city: "Belgrade",
        state: "Srbija"
    },
    sport: "Basketball",
    profession: "pianist"
};

console.log(contact);
console.log(contact.age); // undefined
console.log(contact.adress.street); // Cernisevskog
console.log(contact["adress"]["city"]) // може и овако али је боље са тачком, лакше


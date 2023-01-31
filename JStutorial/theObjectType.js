let emptyObject = {};
console.log(typeof emptyObject); // object
console.log(Boolean(emptyObject)); // true

let person = {
    firstName: "Predrag",
    lastName: "Simonovic"
};
console.log(person);

person.age = 36; // Додавање пропертија у објекат
console.log(person);

person.jkdkjs = "ldhfgdflgd"; // Додавање пропертија у објекат
console.log(person);

delete person.jkdkjs; // Брисање пропертија у објекат
console.log(person);

console.log("persona" in person)
console.log("age" in person)

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

contact["married status"] = "Yes"; // Додавање пропертија КОЈИ ИМА РАЗМАК у објекат
console.log(contact);

contact["married status"] = "Yes Yes"; // Приступање и Измена - пропертија КОЈИ ИМА РАЗМАК
console.log(contact);

let person1 = {
    name: 'John',
    age: 25,
  };
  
  let member = person1;
  
  member.age = 26;
  
  console.log(person1);
  console.log(member);

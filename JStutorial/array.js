let friends = ["Dusan","Milan","Andrej","Zoran","Milutin","Stefan","Goran","StefanJ","Zarko","Danilo","Stevan","Ivan","Mila","JelenaR","Dragana"];

friends.push("Tatjana");
friends.push("Dragana");
friends.push("Antonina");
friends.push("Milena");
friends.push("Jelena");


friends.unshift("MihailoV");
friends.unshift("Luiza");
friends.unshift("Tomas");
friends.unshift("Teodor");
friends.unshift("Ognjen");
friends.unshift("Teodor");
friends.unshift("Divna");
friends.unshift("Aleksandar");
friends.unshift("Filip");
friends.unshift("Sofija");
friends.unshift("Emilija");
friends.unshift("MihailoS");
friends.unshift("LazarS");
friends.unshift("Jovana");

friends.push("Aleksandar");
friends.push("Olga");
friends.push("Jelena");
friends.push("Dragan");
friends.push("Katerina");
friends.push("Slobodan");
friends.push("Marija");
friends.push("Ana");
friends.push("Bojan");
friends.push("Ivana");
friends.push("Bogdan");
friends.push("Stefan");
friends.push("Marija");
friends.push("Sava");
friends.push("Anastasija");
friends.push("kjgsdjkfsjd"); // овај је избрисан као последнји

friends.unshift("Gospod Isus Hristos"); // unshift додаје на прво место


console.log(friends);

friends.pop(); // брише последњег

console.log(friends);

friends.push("Predrag");
let indexPredrag = friends.indexOf("Predrag");
console.log(indexPredrag);

indexJovana = friends.indexOf("Jovana");
console.log(indexJovana);

indexLazar = friends.indexOf("LazarS");
console.log(indexLazar);

friends.push("DraganaDj");
friends.push("Uros");
friends.push("Aleksandar");
friends.push("Branislav");
friends.push("Veljko");
friends.push("Luka");
friends.push("Bozica");
friends.push("JovanaT");
friends.push("Sladjana");
friends.push("Igor");
friends.push("Biljana");
friends.push("HristinaV");
friends.push("Nikola");
friends.push("Mila");
friends.push("Petar");
friends.push("JovanaNesic");
friends.push("MilicaR");
friends.push("IvanT");
friends.push("IvanPet");
friends.push("NatasaPet");
friends.push("RadeTomic");
friends.push("SladjanaTomic");
friends.push("NenadTomic");
friends.push("AleksandarTomic");
friends.push("IvanaSretenovic");
friends.push("Stojanka");
friends.push("Vedrana");
friends.push("Valentina");
friends.push("Ana");
friends.push("jklsdfaskjfhasdkjl");


console.log(friends.length)
console.log(friends)
console.log(Array.isArray(friends))

let friendsA= "Није низ :)";

if(Array.isArray(friends) === true){
    console.log("Јесте низ, браво браво Предраже")
}
else{
    console.log("пронађи грешку")
};
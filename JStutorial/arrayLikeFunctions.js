let jsObject = {
    name: "John Doe",
    age: 30,
    profession: "Software Developer",
    location: "New York City",
    hobbies: ["Travelling", "Playing Chess", "Reading"],
    languages: ["English", "Spanish", "French"],
    favoriteFood: "Pizza",
    favoriteColor: "Blue",
    familyMembers: ["Mom", "Dad", "Sister"],
    favoriteMovie: "The Godfather",

    length: 11,

    append (...prope) {
        [].push.call(this, ...prope)
        return this.length
    }
    
  };
  jsObject.append("wife","child")
  console.log(jsObject)

//////////////////////////////////////////////////
  
let jsObject2 = {
    name: "Jane Doe",
    age: 28,
    profession: "Accountant",
    location: "Los Angeles",
    hobbies: ["Yoga", "Hiking", "Gardening"],
    languages: ["English", "German", "Italian"],
    favoriteFood: "Sushi",
    favoriteColor: "Green",
    familyMembers: ["Mom", "Dad", "Brother"],
    favoriteMovie: "The Sound of Music",

    length: 10,

    prepend (prop) {
        [].unshift.call(this, prop)
        return this.length
    }
  };
  jsObject2.prepend('udata')
  console.log(jsObject2)
/////////////////////////////////////////
let jsObject3 = {
  name: "Jack Smith",
  age: 32,
  profession: "Teacher",
  location: "Boston",
  hobbies: ["Painting", "Golfing", "Cooking"],
  languages: ["English", "Japanese", "Mandarin"],
  favoriteFood: "Pasta",
  favoriteColor: "Yellow",
  familyMembers: ["Mom", "Dad", "Daughter"],
  favoriteMovie: "Casablanca",
  length: 10,
  removeLast() {
    return [].pop.call(this)
  }
};

const jsObjectPop = jsObject3.removeLast()

console.log(jsObjectPop)
console.log(jsObject3)

let jsObject4 = {
    name: "Sarah Brown",
    age: 24,
    profession: "Physician",
    location: "Chicago",
    hobbies: ["Swimming", "Skydiving", "Photography"],
    languages: ["English", "Arabic", "Portuguese"],
    favoriteFood: "Seafood",
    favoriteColor: "Purple",
    familyMembers: ["Mom", "Dad", "Son"],
    favoriteMovie: "Forrest Gump",
    length: 10,
    removeFirst() {
        return [].shift.call(this)

    }
  };

  const object4 = jsObject4.removeFirst()

  console.log(object4)
  console.log(jsObject4)
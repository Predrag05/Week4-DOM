/*

let colors = ["red", "green", "blue"];
let rgb = [...colors];

// console.log(rgb)

let cmyk = ["cyan", "magenta", "yellow", "black"]
let merge = [...rgb, ...cmyk];

// console.log(merge)

const circle = {
    radius: 10
};
const coloredCircle = {
    ...circle,
    color: "black"
};

// console.log(coloredCircle);

const clonedCircle = {...circle};

// console.log(clonedCircle)

const circle2 = {
    radius: 10,
    style: {
        color: "blue"
    }
};

const clonedCircle2 = {
    ...circle2
};

clonedCircle2.style = "red";

// console.log(clonedCircle2);

const circle3 = {
    radius: 10
};

const style = {
    backgroundColor: "red"
};

const solidCircle = {
    ...circle3,
    ...style
};

// console.log(solidCircle)

*/


/*
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log("SET", value)
    }
    get diameter() {
        return this.radius * 2;
    }
}

let circle = new Circle(100);

let cloneCircle1 = Object.assign(circle, {
    diameter: 200
});

let cloneCircle2 = {
    ...circle
};

*/



const blueSquere = {
    length: 100,
    color: "blue"
};

Object.defineProperty(blueSquere, "color", {
    value: "blue",
    enumerable: true,
    writable: false
});

// console.log(blueSquere)

const style = {
    color: "green"
};

const greenSquere = {
    ...blueSquere,
    ...style
};

// console.log(greenSquere)


const redSquere = {
    ...blueSquere,
    color: "red"
};

console.log(redSquere)
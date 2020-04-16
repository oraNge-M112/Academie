class Animals {
    constructor(name) {
        this.name = name;
    }
    speak() { }
}

class Cat extends Animals {
    speak() {
        console.log("Meow!");
    }
}

class Dog extends Animals {
    speak() {
        console.log("Woof!");
    }
}

class Duck extends Animals {
    speak() {
        console.log("Mack!");
    }
}

let laia = new Cat("Laia");
let maya = new Dog("Maya");
let boyo = new Duck("Boyo");

laia.speak();
maya.speak();
boyo.speak();
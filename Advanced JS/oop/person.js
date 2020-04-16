class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, height, course){
        // apelam constructorul parintelui
        super(name, age, height);
        // adaugam proprietatile in plus
        this.course = course;
    }
    // suprascrierea metodelor
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I like ${this.course}.`);
    }
}

class teacher extends Person {
    constructor(name, age, height, speciality) {
        super(name, age, height);
        this.speciality = speciality;
    }
    sayHello() {
        super.sayHello();
        console.log(`I'm a teacher and I teach ${this.speciality}`);
    }
}

var marius = new Person("Marius", 22, 173);
var alexandra = new Student("Alexandra", 23, 167, "HTML");
var grigore = new teacher("Chuck", 40, 188, "Putere");

marius.sayHello();
alexandra.sayHello();
grigore.sayHello();
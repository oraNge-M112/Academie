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

var marius = new Person("Marius", 22, 173);
var alexandra = new Student("Alexandra", 23, 167, "HTML");

marius.sayHello();
alexandra.sayHello();
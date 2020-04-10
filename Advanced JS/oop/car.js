class Car {
    constructor(make, model, year, color, milleage) {
        this.make = ;
    }
}

var myFord = new Car("Ford", "Mondeo", 2016, "black", 210);
var myNationalCar = new Car("Dacia", "Logan", 2020, "white", 170);

myNationalCar.drive(100);
myFord.drive(120);
myFord.drive(100);

console.log(myFord.milleage);

var fordCopy = Object.assign({}, myFord);

c
var car = {
  make: "Ford",
  model: "Focus",
  year: 2019,
  color: "orange",
  passengers: 2,
  sport: true,
  mileage: 0,
  engineIsOn: false,
  fuel: 50,
  maxFuel: 50,
  mediumConsumption: 7.5,
  stop: function() {
    if (this.engineIsOn) {
      this.engineIsOn = false;
      console.log("The car has stopped");
    } else {
      console.log("The car is already stopped");
    }
  },
  start: function() {
    if (!this.engineIsOn) {
      this.engineIsOn = true;
      console.log("The car has started");
    } else {
      console.log("Car is already started");
    }
  },
  refill: function(num) {
    if (this.fuel + num > this.maxFuel) {
      this.fuel = this.maxFuel;
      console.log("Too much");
    } else {
      this.fuel += num;
    }
  },
  drive: function(distance) {
    if (this.distanceToEmpty() < distance) {
      console.log("Too far");
      distance = this.distanceToEmpty();
    }
    consumption = Math.round((distance * this.mediumConsumption) / 100);
    this.fuel -= consumption;
    this.mileage += distance;
  },
  distanceToEmpty: function() {
    return Math.round((this.fuel / this.mediumConsumption) * 100);
  }
};
document.writeln("The year of the " + car.make + " is " + car.year);

car.mileage = 20;

document.writeln("<br />" + car.mileage);

car.start();
car.start();
car.stop();
car.stop();

// for (prop in car) {
//   console.log(prop + " = " + car[prop]);
// }

var a = car.distanceToEmpty();
console.log(a);

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);

class BaseStation {
    fillCar() {

    }
}

class ShellStation extends BaseStation {
    fillCar() {
        console.log('Filling car with Shell diesel.');
    }
}

class FakeStation extends BaseStation {
    fillCar() {
        console.log('Filling car with water.');
    }
}

class driver {
    /**
    * @param {BaseStation} gasStation
    */
    goToClosestStation(gasStation) {
        gasStation.fillCar();
    }
}

var myStation = new ShellStation();
var fakeStation = new FakeStation();

var Marius = new driver();
Marius.goToClosestStation(fakeStation);

myStation.fillCar();
fakeStation.fillCar();
class Vehicle {
    getType() {
        throw new Error('getType method must be overridden');
    }
}

class Car extends Vehicle {
    getType() {
        return 'Car';
    }
}

class Bike extends Vehicle {
    getType() {
        return 'Bike';
    }
}

class Truck extends Vehicle {
    getType() {
        return 'Truck';
    }
}

class VehicleFactory {
    createVehicle() {
        throw new Error('createVehicle method must be overridden');
    }
}

class CarFactory extends VehicleFactory {
    createVehicle() {
        return new Car ();
    }
    // Write your code here
}

class BikeFactory extends VehicleFactory {
    createVehicle() {
        return new Bike();
    }
    // Write your code here
}

class TruckFactory extends VehicleFactory {
    createVehicle(){
        return new Truck();
    }
    // Write your code here
}

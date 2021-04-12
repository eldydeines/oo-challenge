//Objects Oriented Programming
//Eldy Deines


//Part One Construct Vehicle Class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

//Part TWo Construct Car Class and Extend Vehicle
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part Three Construct Motorcycle Class and Extend Vehicle
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

//Part Four Construct Garage Class
class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(...myVehicle) {
        if ((myVehicle instanceof Vehicle) && (this.vehicles.length <= capacity)) {
            this.vehicles.push(myVehicle);
            return "Vehicle added!";
        }
        else if (this.vehicles.length > capacity) {
            return "Sorry, we're full."
        }
        else {
            return "Only vehicles are allowed in here!"
        }
    };

}



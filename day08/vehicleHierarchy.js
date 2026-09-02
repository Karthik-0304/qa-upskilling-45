class Vehical{
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }

    drive(){
        console.log(`Driving ${this.brand} at ${this.speed} km/h`);
    }
}

class Car extends Vehical{
    constructor(brand,speed){
        super(brand,speed);
    }

    drive(){
        console.log(`Driving ${this.brand} at ${this.speed} km/h in a car`);
    }
}

class Bike extends Vehical{
    constructor(brand,speed){
        super(brand,speed);
    }

    drive(){
        super.drive();
        console.log(`Driving ${this.brand} at ${this.speed} km/h in a bike`);
    }
}

class Truck extends Vehical{
    constructor(brand,speed){
        super(brand,speed);
    }   

    drive(){
        console.log(`Driving ${this.brand} at ${this.speed} km/h in a truck`);
    }
}

const myCar = new Car("Toyota", 120);
myCar.drive();  

const myBike = new Bike("Yamaha", 80);
myBike.drive();

const myTruck = new Truck("Volvo", 100);
myTruck.drive();

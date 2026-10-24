//Inheritance
//A class can reuse the properties and methods of another class using inheritance. 
// In TypeScript, we can use the 'extends' keyword to create a subclass that inherits from a superclass.
//Inheritance allows us to create a new class based on an existing class, 
// which helps in code reusability and establishing a hierarchical relationship between classes.

//Method Overriding
//Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. 
// When a method in a subclass has the same name, return type, and parameters as a method in its superclass, 
// the method in the subclass overrides the method in the superclass. 
// This allows the subclass to provide its own behavior while still maintaining the same interface as the superclass.

//Added export to the Car class so it can be imported by other files.

export class Car{
    name: string;
    model: string;
    color: string;

    constructor(name: string, model: string, color: string) {
        this.name = name;
        this.model = model;
        this.color = color;
    }

    displayDetails(): string {
        return `Car Name: ${this.name}, Model: ${this.model}, Color: ${this.color}`;
    }   

    startEngine(): string {
        return `${this.name} engine started.`;
    }

    stopEngine(): string {
        return `${this.name} engine stopped.`;
    }
}

class ElectricCar extends Car {
    batteryCapacity: number;    

    constructor(name: string, model: string, color: string, batteryCapacity: number) {
        super(name, model, color); // Call the constructor of the superclass (Car)
        this.batteryCapacity = batteryCapacity;
    }

    startElectricEngine(): string {
        return `${this.name} electric engine started.`;
    }

    // Overriding the displayDetails method
    displayDetails(): string {
        return `Electric Car Name: ${this.name}, Model: ${this.model}, Color: ${this.color}, Battery Capacity: ${this.batteryCapacity} kWh`;
    }   

}

class SportsCar extends Car {
    topSpeed: number;   

    constructor(name: string, model: string, color: string, topSpeed: number) {
        super(name, model, color);

        this.topSpeed = topSpeed;
    }   

    startSportsEngine(): string {
        return `${this.name} sports engine started.`;
    }

    // Overriding the displayDetails method
    displayDetails(): string {
        return `Sports Car Name: ${this.name}, Model: ${this.model}, Color: ${this.color}, Top Speed: ${this.topSpeed} km/h`;
    }   

}

let electricCar = new ElectricCar("Tesla", "Model S", "Red", 100);
console.log(electricCar.displayDetails());  

let sportsCar = new SportsCar("Ferrari", "488 GTB", "Yellow", 330);
console.log(sportsCar.displayDetails());

//Parent class reference can hold child class object

/*
1.What's happening: The variable car is declared as type Car (parent), but it stores an ElectricCar object (child). 
This is valid because every ElectricCar is a Car.

2.Think of it like a label: You're putting a general "Car" label on something that's actually a more specific "ElectricCar." 
The object inside is still fully an ElectricCar, but you're choosing to look at it through the lens of a Car.

3.Overridden methods still work: On line 84, calling car.displayDetails() runs ElectricCar's version, not Car's. 
The actual object decides which method runs, not the variable type.

4.Parent methods work too: On line 85, car.startEngine() works fine because startEngine() is defined on Car, 
and ElectricCar inherits it.

5.Child-only methods are blocked: On line 86, car.startElectricEngine() gives an error. 
Since the variable type is Car, TypeScript only lets you access things Car knows about — even though the actual object has that method.
*/

let car: Car = new ElectricCar("Nissan", "Leaf", "Blue", 40);
console.log(car.displayDetails()); //printing the overridden method of child class ElectricCar
console.log(car.startEngine()); //calling the method of parent class Car
//console.log(car.startElectricEngine()); //Error: Property 'startElectricEngine' does not exist on type 'Car'. 

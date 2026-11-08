import { Car } from './Inheritance';

//Added import { Car } from './Inheritance' to bring the Car class into scope.

//super keyword is used to access and call functions/methods of parent class
//super() is used to call the constructor of the parent class.
// It must be called before accessing 'this' in the constructor of a subclass.
//super() should be in the first line of the constructor of a subclass, otherwise it will throw an error.

class LuxuryCar extends Car {
    interiorMaterial: string;

    constructor(name: string, model: string, color: string, interiorMaterial: string) {
        super(name, model, color); // Call the constructor of the superclass (Car)
        this.interiorMaterial = interiorMaterial;
    }

    startLuxuryEngine(): string {
        super.startEngine(); // Call the startEngine method of the superclass (Car)
        //super.name; // throws an error because 'name' is not a method, but a property. 
        // Property/variables cannot be accessed using super keyword.
        
        return `${this.name} luxury engine started.`;
    }

    // Overriding the displayDetails method
    displayDetails(): string {
        return `Luxury Car Name: ${this.name}, Model: ${this.model}, Color: ${this.color}, Interior Material: ${this.interiorMaterial}`;
    }

}

let luxuryCar = new LuxuryCar("Mercedes-Benz S-Class", "S 580", "Black", "Leather");
console.log(luxuryCar.startLuxuryEngine()); // Output: Mercedes-Benz S-Class engine started. Mercedes-Benz S-Class luxury engine started.


//***As both Inheritance.ts and Super.ts are connected we are getting the output of all the classes in Inheritance.ts and Super.ts.
//The issue is line 1: import { Car } from './Inheritance' When you run Super.ts, TypeScript executes the entire Inheritance.ts file as a side effect of importing from it. That means all the console.log statements in Inheritance.ts (lines 83, 86, 108, 109) run too — not just the LuxuryCar code in Super.ts.
//Why? In TypeScript/JavaScript, import runs the entire imported file. It doesn't just grab the Car class — it runs every line of code at the top level, including all the console.log calls.


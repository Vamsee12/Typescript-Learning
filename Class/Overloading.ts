
class Calculator {

    //constructor overloading
    constructor(); //default constructor
    constructor(a: number, b: number); //parameterized constructor

    constructor(a?: number, b?: number) 
    {
        if (a !== undefined && b !== undefined) 
        {
            console.log(`Sum: ${a + b}`);
        } 
        
        else 
        {
            console.log("No parameters provided.");
        }
    }

    //Method overloading
    add(a: number, b: number): number; //Method signature for two numbers
    add(a: number, b: number, c: number): number; //Method signature for three numbers

    add(a: number, b: number, c?: number): number 
    {
        if (c !== undefined) 
        {
            return a + b + c;
        }
        return a + b;
    }
}

let calc1 = new Calculator(); // Calls default constructor
let calc2 = new Calculator(5, 10); // Calls parameterized constructor

console.log(calc1.add(2, 3)); // Calls add method for two numbers
console.log(calc2.add(2, 3, 4)); // Calls add method for three numbers

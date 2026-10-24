//Object contains properties and behaviour
//Object is a collection of key-value pairs
//object contains methods and properties(variables)

/*example of object
employee -- name, designation, salary (properties)
            getDetails() (method) */

//Different ways to create an object in TypeScript

//1. using 'Object' type - directly define values for variables(JS/TS). 
//2 . Inline type Object - we also define the data type of the keys(TS).
//3. Using aliases(TS).
//4. Using Class-based object creation(JSES16/TS).

let employee1 = {
    name: "John",
    designation: "Software Engineer",
    salary: 50000,
    getDetails: function () {
        return `${this.name} is a ${this.designation} earning ${this.salary}`;
    }
};

console.log(typeof employee1); // Output: object

//Approach 1.Accessing the properties and methods of the object using dot notation
console.log(employee1.name); // Output: John
console.log(employee1.getDetails()); // Output: John is a Software Engineer earning 50000

console.log("================================");

//Approach 2.Accessing the properties and methods of the object using bracket notation
console.log(employee1["designation"]); // Output: Software Engineer
console.log(employee1["getDetails"]()); // Output: John is a Software Engineer earning 50000
//This is same as employee1.getDetails() but we are using bracket notation to access the method.

console.log("================================");

//Modifying the properties of the object
employee1.salary = 60000;
console.log(employee1.getDetails()); // Output: John is a Software Engineer earning 60000

console.log("================================");

//======================================================================================================

//2. Inline type Object - we also define the data type of the keys(TS).

let student: { 
    name: string; 
    age: number; 
    grade: string; 
    getDetails: () => string 
} = 

{
    name: "Alice",
    age: 20,
    grade: "A",
    getDetails: function() {
    return `${this.name} is ${this.age} years old and has a grade of ${this.grade}`;
}
};

console.log(student["getDetails"]()); // Output: Alice is 20 years old and has a grade of A

/*(IMP) Arrow functions (=>) don't know what object they belong to. They don't understand this.

Think of it like this:

A regular function inside an object knows "I belong to this object," so this.name means "my object's name."
An arrow function doesn't care about the object it's inside. It looks outside the object for this — which at the top level of your file is basically nothing (undefined).
So when you write:


getDetails: () => {
    return `${this.name}`;  // "this" is NOT the student object!
} */

/*Limitations of Inline type Object
No Reusability
You write the type shape directly on the variable. If you need another variable with the same shape, you have to repeat the entire type definition again.
 Have to repeat the full type every time
let student1: { name: string; age: number; grade: string } = { ... };
let student2: { name: string; age: number; grade: string } = { ... };*/

console.log("================================");

//======================================================================================================

//3. Using aliases(TS).

/*Advantages of Type Alias over Inline Type:
1. Reusability — define the shape once, use it for many variables (no repetition).
2. Readability — the variable declaration stays clean; the shape has a meaningful name.
3. Single source of truth — change the type in one place and every variable using it picks up the change.
4. Union & Intersection support — aliases compose easily:
       type DiscountedProduct = Product & { discount: number };
*/

type Product = {
    name: string;
    price: number;
    category: string;
    getDetails: () => string;
};

let book1: Product = {
    name: "The Great Gatsby",
    price: 10.99,
    category: "Fiction",
    getDetails: function() {
        return `${this.name} is a ${this.category} book priced at ${this.price.toFixed(2)}`;
    }
};

console.log(book1.getDetails()); // Output: The Great Gatsby is a Fiction book priced at $10.99
console.log("================================");

let book2: Product = {
    name: "1984",
    price: 8.99,
    category: "Dystopian",
    getDetails: function() {
        return `${this.name} is a ${this.category} book priced at ${this.price.toFixed(2)}`;
    }
};

console.log(book2.getDetails()); // Output: 1984 is a Dystopian book priced at $8.99
console.log("================================");

/*Limitations of Using aliases
1. No encapsulation
An alias just describes the shape of data — it doesn't bundle data and behavior together. 
Anyone can reach in and change any property directly. A class can hide its internals.

2. No inheritance
A class can extend another class (class ElectricCar extends Car). 
An alias can't truly "inherit" — you can combine two aliases with &, but it's just merging shapes, 
not a real parent-child relationship.

3. No real methods (no logic)
Your Product alias declares that a getDetails method exists, but the alias itself contains no logic. 
Every object that uses Product has to rewrite the function body from scratch 
(see book1 and book2 at lines 113–116 and 125–128 — they repeat the same function). 
A class defines the method once and all instances share it.

4. No access modifiers
You can't mark a property as private or readonly in a meaningful enforcement way with just an alias. 
Classes let you say private salary so outside code can't touch it directly.  */

//===================================================================================================================

//4.class-based object creation(JSES16/TS).


class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getDetails(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }   

}

let car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.getDetails());

let car2 = new Car("Honda", "Civic", 2021);
console.log(car2.getDetails());

//class-based object creation is the most preferred way to create objects in TypeScript
//Because it provides encapsulation, inheritance, methods, and access modifiers.
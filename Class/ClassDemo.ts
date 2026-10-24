/*
1.Class
2.Readonly properties
3.Optional properties
4.Static properties and methods
*/

/* Static Properties and Methods
Regular properties/methods belong to each instance (each object you create).
Static properties/methods belong to the class itself — not to any individual object.

Think of it this way:
Imagine a Student class. Every student has their own name and studentId — those are instance properties. But the school name is the same for every student — that's a perfect fit for static. 
You cannot use this to access static members
Static members are inherited by subclasses

*/

class Student {
    //Readonly properties
    readonly studentId: number; //Readonly property (Can only be assigned once, either during declaration or in the constructor)
    name: string;
    email?: string; //Optional property
    static school: string = "Siddhartha High School"; //Static property, connected to the class itself, not to instances of the class

    constructor(studentId: number, name: string, email?: string) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
    }

    displayDetails(): string 
    {
        return `Student ID: ${this.studentId}, Name: ${this.name}, Email: ${this.email}, School: ${Student.school}`;
    }

    //Changing static property
    static changeSchoolName(newSchool: string) 
    {
    Student.school = newSchool;
    }
}

let student1 = new Student(1, "Alice");
console.log(student1.displayDetails()); // Output: Student ID: 1, Name: Alice, Email: undefined, School: Siddhartha High School

// Attempting to modify readonly property will result in an error
// student1.studentId = 2; // Error: Cannot assign to 'studentId' because it is a read-only property.

console.log("=======================================================================================");

Student.changeSchoolName("Greenwood High School");
console.log(student1.displayDetails()); // Output: Student ID: 1, Name: Alice, Email: undefined, School: Greenwood High School
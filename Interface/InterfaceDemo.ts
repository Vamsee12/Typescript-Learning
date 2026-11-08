export {}; // Makes this file a module to avoid global scope conflicts

/*
An interface in typescript is a way to define the structure of an object
It tells the compiler what types of properties and types an object should have
its like a blueprint for objects

Abstract method - only signature of method(No implementation)

interface InterfaceName
{
properties
abstract methods
}

1.Regular properties
2.optional properties
3.readonly properties & function types
4.extending interfaces
5.class implementing interfaces

*/

//example1:

interface Person
{
    name:string;
    age:number
}

let student : Person =
{
    name:"Max",
    age:23
}

console.log(student.name);
console.log(student.age);

//============================================================================

//example2: Optional Parameters

interface Employee
{
    e_id:number;
    e_name:string;
    e_department?:string
}

let emp1:Employee=
{
    e_id:101,
    e_name:"Henry"
}

let emp2:Employee=
{
    e_id:102,
    e_name:"Bob",
    e_department:"QA"
}

console.log(emp1);
console.log(emp2);

//===================================================================================================

//example3: readonly properties  (readonly - can assign once and to avoid modification) and function

interface book
{
    b_name:string;
    readonly b_language:string

    display():void;
}

let book1:book=
{
    b_name:"learn typescript",
    b_language:"english",

    display()
    {
        console.log(book1.b_name);
        console.log(book1.b_language);
    }
}

book1.display();

book1.b_name = "learn javascript"; // ✅ allowed - regular property can be changed
console.log(book1.b_name);
//book1.b_language = "spanish"; // ❌ Error: Cannot assign to 'b_language' because it is a read-only property

//====================================================================================================================

//example4: Extending Interfaces (Inheritance applicable)

//Parent interface
/* interface Animal
{
    name:string
}

interface Dog extends Animal
{
    colour:string
}

let myDog:Dog =
{
    name:"Krypton",
    colour:"Golden"
}

console.log(myDog.name, myDog.colour) */

//===============================================================================

//example5: class implements interface

interface Animal
{
     name:string;
     sound():void;
}

class Dog implements Animal
{
    name:string
    colour:string

    constructor(name:string, colour:string)
    {
        this.name = name;
        this.colour = colour;
    }

    sound()
    {
        console.log("Dog barks")
    }
}

let dog = new Dog("Krypton", "Golden");
console.log(dog.name);
dog.sound();

/*
Why do we re-declare properties and methods in a class that implements an interface?

Interface — only defines the shape (what should exist). It has no actual code or memory at runtime — it's completely erased after compilation.
Class — provides the actual implementation (how it works). It needs real properties and real method bodies.

Interface (blueprint)          Class (actual building)
 name: string          →       name: string            ← needs real storage
 sound(): void         →       sound() { ... }         ← needs real code
 "what to build"               "the actual building"

The interface is a contract — it says "any class that implements me must have name and sound()".
But it doesn't give you those for free. You still have to write them.

This is different from inheritance (extends), where the parent class has real code that the child gets automatically.
An interface has nothing to give — it's just a promise.
*/

//abstract class can have both concrete and abstract methods.
//In Interface all the methods are by default abstract.

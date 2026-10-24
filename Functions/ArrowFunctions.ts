/*
Syntax

let value = (Parameters =>
{
    //Block of code
}

value(Parameters)
*/

//Example 1: Arrow function with no parameters

let welcome = ():void =>
{
    console.log("Hello, welcome to TypeScript!");
}   

welcome(); // Calling the arrow function welcome

console.log("===============================");

//Example 2: Arrow function with parameters and return type

let add = (a: number, b: number): number =>
{
    return a + b;
}

console.log("Sum: " + add(5, 10)); // Calling the arrow function add with parameters

console.log("===============================");

//implicit return type - if the function body has only one statement, we can omit the return keyword and the curly braces. The value of that statement will be returned automatically.

let multiply = (a: number, b: number): number => a * b;
console.log("Product: " + multiply(5, 10)); // Calling the arrow function multiply with parameters

console.log("===============================");

//Example 3: Arrow function with rest parameters and return type

let values = (...numbers: (number | string)[]): void =>
{ 
    for(let i = 0; i < numbers.length; i++)
    {
        console.log(numbers[i]);
    }
    
}

values(1, 2, 3, "Hello", "World"); // Calling the arrow function values with rest parameters

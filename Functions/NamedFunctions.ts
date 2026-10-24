//Named Function - A function that is declared with a name.

/* syntax

function functionName(parameters): returnType 
{
    // Function body
} 

functionName(parameters) //Calling a named function with parameters

*/


//Example 1 - Named Function with no parameters and no return type

function greet(): void
{
    console.log("Hello, welcome to TypeScript!");
}

greet(); // Calling the named function greet

console.log("===============================");

//Example 2 - Named Function with parameters and return type

function addNumbers(a: number, b: number): number
{
    return a + b;
}   

let sum: number = addNumbers(5, 10); // Calling the named function addNumbers with parameters
console.log("Sum: " + sum);

console.log("===============================");

//Example 3 - Named function with rest parameters and return type
//Here we can pass any number of arguments to the function multiplyNumbers using rest parameters.
//There is no fixed number of parameters in this function. The rest parameter is represented by three dots (...) followed by the parameter name.

function multiplyNumbers(...numbers: number[]): number
{
    let product: number = 1;    
    for(let i = 0; i < numbers.length; i++)
    {
        product *= numbers[i]; // product = product * numbers[i]
    }
    return product;
}

let product: number = multiplyNumbers(2, 3, 4); // Calling the named function multiplyNumbers with rest parameters
console.log("Product: " + product);

console.log("===============================");

//Example 4 - Named function with rest parameters - multiple data types

function displayInfo(...info: (string | number)[]): void
{
    for(let i = 0; i < info.length; i++)
    {
        console.log(info[i]);
    }
}

displayInfo("John", 25, "Engineer", 50000); // Calling the named function displayInfo with rest parameters of multiple data types

console.log("===============================");

//Example5 - Named function with optional parameters

//In TypeScript, we can define optional parameters in a function by adding a question mark (?) after the parameter name. 
// Optional parameters can be omitted when calling the function.
//If we make second parameter optional then all the parameters after it must also be optional. 
// Optional parameters must come after required parameters.Else we'll get complile time Error

function greetPerson(name: string, age?: number): void
{
    if(age !== undefined)
    {
        console.log(`Hello ${name}, you are ${age} years old.`);
    }

    console.log(`Hello ${name}, welcome to TypeScript!`);
}

greetPerson("Alice", 30); // Calling the named function greetPerson with both parameters
greetPerson("Bob"); // Calling the named function greetPerson with only the required parameter

console.log("===============================");

//Example 6 - Named function with default parameters

function greetDefault(name: string, age: number = 25): void
{
    console.log(`Hello ${name}, you are ${age} years old.`);
}

greetDefault("Charlie"); // Calling the named function greetDefault with the default value for age
greetDefault("David", 35); // Calling the named function greetDefault with a custom value for age, it will override the default value

console.log("================================");
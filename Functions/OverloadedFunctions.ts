//Step1: Write Signatures of function
//Step2: Implement the function
//Step3: Call the function with different parameters

//Signature of function is declaring the function with parameters, return type but without implementation.

//Example1: Different parameter types(data types)

function getinfo(age:number): string; //Signature of function with number parameter and string return type
function getinfo(name:string): string; //Signature of function with string parameter and string return type

function getinfo(param: number | string): string { //Implementation of function with any parameter and string return type
    if (typeof param === "number") {
        return `Age is: ${param}`;
    } else if (typeof param === "string") {
        return `Name is: ${param}`;
    } else {
        return "Invalid parameter";
    }
}

//Calling the function with different parameters
console.log(getinfo(25)); // Calling with number parameter
console.log(getinfo("John")); // Calling with string parameter

console.log("===============================");

//Example2: Different number of parameters
function calculate(a: number, b: number): number; //Signature of function with two parameters and number return type
function calculate(a: number, b: number, c: number): number; //Signature of function with three parameters and number return type

function calculate(a: number, b: number, c?: number): number { //Implementation of function with optional parameter and number return type
    if (c !== undefined) {
        return a + b + c;
    } else {
        return a + b;
    }
}

//Calling the function with different number of parameters
console.log(calculate(5, 10)); // Calling with two parameters
console.log(calculate(5, 10, 15)); // Calling with three parameters

console.log("===============================");

//Example3: Different return types
function processValue(value: number): number; //Signature of function with number parameter and number return type
function processValue(value: string): string; //Signature of function with string parameter and string return type

function processValue(value: number | string): number | string { //Implementation of function with any parameter and any return type
    if (typeof value === "number") {
        return value * 2; // If the parameter is a number, return double the value
    } else if (typeof value === "string") {
        return value.toUpperCase(); // If the parameter is a string, return the uppercase version
    } else {
        return "Invalid parameter";
    }
}

//Calling the function with different return types
console.log(processValue(10)); // Calling with number parameter
console.log(processValue("hello")); // Calling with string parameter
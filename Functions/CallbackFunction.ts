//Callback function - A callback function is a function that is passed as an argument to another function.
//To solve the asynchronous problem of typescript they implement callback functions


function greet(name: string, callback: (message: string) => void): void {
    console.log(name);
    callback("Hello");
}

//callback function implementation

function displayMessage(message: string): void {
    console.log(message);
}

//calling the greet function with a callback function
greet("John", displayMessage); // Passing function name as an argument to another function.

console.log("===============================");

//Example2

function addition(a:number, b:number, callback: (result: number) => void): void {
 let result = a + b;
    callback(result);
}

//callback function implementation
function displayResult(result: number): void {
    console.log("The result is: " + result);
}

//calling the add function with a callback function
addition(5, 10, displayResult); // Passing function name as an argument to another function.

console.log("===============================");
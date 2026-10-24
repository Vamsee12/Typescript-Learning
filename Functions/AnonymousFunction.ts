//An Anonymous function is a function that does not have a name.
//Instead it is assigned to a variable which acts as the function name.

/* 
syntax:

let functionName = function(parameters)
{
    // Function body
}

functionName(parameters) //Calling an anonymous function with parameters 
*/

//Example1 - Anonymous function with no parameters and return type

let msg = function(): string
{
    return "Hello, welcome to TypeScript!";
}

let output: string = msg(); // Calling the anonymous function msg
console.log(output);


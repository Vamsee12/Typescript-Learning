//A tuple is a fixed length array where each element has a specific type.
//It helps in storing multiple values of different types in a single variable.

//Example1: Declaring a tuple with two elements: a string and a number
let person: [string, number] = ["John", 30]; //Declaring and initializing a tuple with a string and a number
console.log("Person tuple: ", person); //Printing the tuple

console.log("================================");

//Example2: Tuple with multiple elements of different types
let employee: [number, string, boolean, number, string] = [101, "Jane", true, 50000, "Developer"]; //Declaring and initializing a tuple with multiple elements of different types
console.log("Employee tuple: ", employee); //Printing the tuple

console.log("================================");

//using "for...in" loop to print each element of the tuple
for(let i in employee) //Iterating through the tuple using for...in loop
{ 
    console.log(employee[i]); //Printing each element of the tuple
}

console.log("================================");

//using "for...of" loop to print each element of the tuple
for(let value of employee) //Iterating through the tuple using for...of loop
{ 
    console.log(value); //Printing each element of the tuple
}

console.log("================================");

//Array of tuples
let employees: [number, string][] = [[101, "John"], [102, "Jane"], [103, "Doe"]]; //Declaring and initializing an array of tuples
console.log("Employees array of tuples: ", employees); //Printing the array of tuples
console.log(employees[0][1]); //Accessing the second element of the first tuple in the array
console.log(employees[1]); //Accessing the second tuple in the array
console.log("================================");
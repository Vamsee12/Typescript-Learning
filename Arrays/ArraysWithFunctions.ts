//Example1: Passing an Array as a parameter to a function

//Search an el;ement in an array using a function and return true if the element is found, otherwise return false

function searchElement(arr: number[], element: number): boolean { //Function that takes an array of numbers and a number as parameters and returns a boolean
    for (let i = 0; i < arr.length; i++)   //Iterating through the array using for loop
    { 
        if (arr[i] === element) //Checking if the current element is equal to the element we are searching for
        { 
            return true; //If found, return true
        }
    }
    return false; //If not found, return false
}

let arr: number[] = [1, 2, 3, 4, 5]; //Declaring and initializing an array of numbers
let elementToSearch: number = 3; //Declaring a number to search in the array
console.log(searchElement(arr, elementToSearch)); //Calling the function and printing the result
console.log(searchElement(arr, 6)); //Calling the function with an element not in the array and printing the result

console.log("================================");

//Example2: A function takes an array and returns a array

function capitalizeNames(namesArray: string[]): string[]  //Function that takes an array of strings and returns an array of strings
{ 
    let capitalizedNames: string[] = [];
    for(let i in namesArray) //Iterating through the array using for...in loop
    {
        capitalizedNames[i] = namesArray[i].toUpperCase(); //Capitalizing each name and adding it to the new array at the same index
    }
    return capitalizedNames; //Returning the new array with capitalized names
}

let namesArray: string[] = ["john", "jane", "Doe"]; //Declaring and initializing an array of strings
//console.log(capitalizeNames(namesArray));
let capitalizedNamesArray: string[] = capitalizeNames(namesArray); //Calling the function and storing the result in a new array
console.log(capitalizedNamesArray); //Printing the new array with capitalized names
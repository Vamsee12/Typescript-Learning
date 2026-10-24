/* An Array is a special type of variable that stores multiple values.
The values can be of same data type or different data types. 
In TypeScript, arrays can be defined in two ways: using square brackets [] or using the Array<T> generic type.
Index starts with 0 and the last index is always length-1.
Arrays are ordered collection of elements(In which ever order you put the elements in the array, they will be stored in that order).
 */

//Approach 1: Using square brackets []

let names:string[] = []; //Declaring an empty array of strings
names[0] = "John"; //Adding elements to the array
names[1] = "Jane";
names[2] = "Doe";
names[3] = "Smith";

console.log("Names array: ", names); //Printing the array

console.log("================================");

let names1:string[] = ["John", "Jane", "Doe", "Smith"]; //Declaring and initializing an array of strings
console.log("Names1 array: ", names1); //Printing the array

console.log("================================");

//Approach 2: Using Array<T> generic type

let numbers:Array<number> = [7, 12, 18, 24]; //Declaring and initializing an array of numbers
console.log("Numbers array: ", numbers); //Printing the array

console.log("================================");

let data:Array<number|string> = [7, "John", 12, "Jane"]; //Declaring and initializing an array of numbers and strings
console.log("Data array: ", data); //Printing the array

console.log("================================");

let  mixed:Array<any> = [7, "John", true, 12.5]; //Declaring and initializing an array of mixed data types
console.log("Mixed array: ", mixed); //Printing the array

console.log("================================");

let multidimensional:Array<Array<number>> = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //Declaring and initializing a multidimensional array of numbers
console.log("Multidimensional array: ", multidimensional); //Printing the array

console.log("================================");

console.log(mixed.length); //Prints number of elements in the array

for(let i=0; i<mixed.length; i++){ //Iterating through the array using for loop
    console.log(mixed[i]); //Printing each element of the array
}

console.log("================================");

//Iterating using "for...in" loop
//index is the index of the array starting from 0, 'in' is the operator, mixed is the array we are iterating through
for(let index in mixed){ //Iterating through the array using for...in loop
    console.log(mixed[index]); //Printing each element of the array
}
console.log("================================");

//Iterating using "for...of" loop
//element is the element of the array, 'of' is the operator, mixed is the array we are iterating through
for(let element of mixed){ //Iterating through the array using for...of loop
    console.log(element); //Printing each element of the array
}
console.log("================================");
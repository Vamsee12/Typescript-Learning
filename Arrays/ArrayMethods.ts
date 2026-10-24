let num: number[] = [7, 2, 9, 4, 6]; //Declaring and initializing an array of numbers
let fruits: string[] = ["Apple", "Banana", "Cherry", "Date"]; //Declaring and initializing an array of strings

//Example1: Using "push" method to add an element to the end of the array
//we can add single or multiple elements to the end of the array using push method
num.push(10);
fruits.push("grape");
num.push(11, 12, 13);
console.log("Numbers array after push: ", num);
fruits.push("kiwi", "mango");
console.log("Fruits array after push: ", fruits);

console.log("================================");

//Example2: Using "pop" method to remove the last element from the array
//pop method removes the last element from the array and returns it
let removedNum = num.pop();
console.log("Removed number: ", removedNum);
console.log("Numbers array after pop: ", num);

console.log("================================");

//Example3: Using "shift" method to remove the first element from the array
//shift method removes the first element from the array and returns it
let removedFruit = fruits.shift();
console.log("Removed fruit: ", removedFruit);
console.log("Fruits array after shift: ", fruits);

console.log("================================");
//Example4: Using "unshift" method to add an element to the beginning of the array
//unshift method adds one or more elements to the beginning of the array and returns the new length of the array
let newLength = num.unshift(1,3,5);
//let newLengthFruits = fruits.unshift("Papaya", "Guava");
//console.log("New length of fruits array after unshift: ", newLengthFruits);
console.log("New length of numbers array after unshift: ", newLength);
console.log("Numbers array after unshift: ", num);

console.log("================================");

//Example5: Using "concat" method to concatenate two or more arrays
//concat method is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns a new array.
//So we need to store the result in a new variable
let combinedArray = num.concat([20,30], [40,50]);
console.log("Combined array: ", combinedArray);

console.log("================================");
//Example6: Using "slice" method to extract a portion of the array
//Ending index will be excluded. Example array.slice(1, 3) will extract elements from index 1 to 2 (3 is not included). 
//The original array will not be modified.
let slicedArray = fruits.slice(1, 3); //Extracting elements from index 1 to 2 (3 is not included)
console.log("Sliced array: ", slicedArray);

console.log("================================");

//Example7: Using "splice" method to add/remove elements from the array
//Example: array.splice(start, deleteCount, item1, item2, ...)
//start: The index at which to start changing the array. 
//deleteCount: count of the elements in the array to remove from start index. 
//this will impact the original array also.

let splicedArray = fruits.splice(1,3); //Removing 3 elements from index 1 (Banana, Cherry, Date) and returning them in a new array
console.log("Spliced array: ", splicedArray);
console.log("Fruits array after splice: ", fruits); //Original array is modified

let splicedArray2 = fruits.splice(1, 0, "kiwi", "mango"); //Adding 2 elements at index 1 (kiwi, mango) 
//here deleteCount is 0, so no elements will be removed from the original array.
//but the original array will be modified to include the new elements at index 1.
console.log("Spliced array2: ", splicedArray2);
console.log("Fruits array after splice2: ", fruits); //Original array is modified

console.log("================================");

//Example8: Using "indexOf" method to find the index of an element in the array
//indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//Syntax: array.indexOf(searchElement, fromIndex) or array.indexOf(searchElement) where fromIndex is optional and defaults to 0.
let index = fruits.indexOf("kiwi");
console.log("Index of kiwi: ", index);
index = fruits.indexOf("Guava"); //Searching for an element that is not present in the array will return -1
console.log("Index of Guava: ", index);
index = fruits.indexOf("papaya", 2); //Starting the search from index 2
console.log("Index of Papaya (starting from index 2): ", index);

console.log("================================");
//Example9: Using "includes" method to check if an element is present in the array
//includes method returns true if the array contains a certain element, and false otherwise.
//Syntax: array.includes(searchElement, fromIndex) or array.includes(searchElement) where fromIndex is optional and defaults to 0.
let isPresent = fruits.includes("kiwi");
console.log("Is kiwi present in the array? ", isPresent);
isPresent = fruits.includes("Guava"); //Checking for an element that is not present in the array will return false
console.log("Is Guava present in the array? ", isPresent);
isPresent = fruits.includes("Papaya", 2); //Starting the search from index 2
console.log("Is Papaya present in the array (starting from index 2)? ", isPresent);

console.log("================================");

//Example10: toString method to convert an array to a string
//toString method returns a string representing the specified array and its elements. 
//The elements are converted to strings and are separated by commas.
let fruitsString = fruits.toString();
console.log("Fruits array as string: ", fruitsString);
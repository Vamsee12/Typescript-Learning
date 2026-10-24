//===================1.foreach(), 2.map(), 3.filter(), 4.reduce(), 5.some(), 6.every()===================

//1.foreach() method executes a provided function once for each array element. It does not return a new array.
//It takes function as parameter and executes that function for each element of the array.

/*Syntax: 
======================
For Anonymous Function
======================
array.forEach(
function(currentValue, index, array)
{
  // body
}
);

==================
For arrow function
==================
array.forEach(
(element, index, array) => 
{
  // body
}
); */

//currentValue: The current element being processed in the array.
//index(Optional): The index of the current element being processed in the array.
//array(Optional): The array that forEach() is being applied to.

let fruits: string[] = ["apple", "banana", "cherry", "date"];

// Using forEach() to log each fruit in the array along with its index

fruits.forEach( 
(element, index) => 
{
    console.log(`Fruit at index ${index}: ${element}`);
}
);

console.log("====================================");

// 2.map() creates a new array by calling a function on every element of the original array. 
// Unlike forEach(), it returns a new array with the transformed values.

// Syntax:

/* Arrow function
const newArray = array.map(
(element, index, array) => 
{
  return // transformed value ;
}
); */


//element — the current element being processed
//index (optional) — the index of the current element
//array (optional) — the array map() was called on

let numbers: number[] = [1, 2, 3, 4, 5];

// Using map() to create a new array with each number squared
const squaredNumbers: number[] = numbers.map(
  (element) => element * element   //No need to use return keyword in arrow function if there is only one statement and curly braces are optional.
);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

console.log("====================================");

//3.filter() creates a new array with all elements that pass the condition implemented by the provided function.
//It takes a function as parameter and returns a new array with elements that satisfy the condition.

//Syntax:

/* Arrow function
const newArray = array.filter(
(element, index, array) => 
{
  return // condition ;
}
); */

const ages: number[] = [12, 17, 20, 25, 30];

// Using filter() to create a new array with ages greater than or equal to 18 
const adults: number[] = ages.filter(
  (element) => element >= 18
);
console.log(adults); // Output: [20, 25, 30]

console.log("====================================");

//4.A reduce() method executes a reducer function on each element of the array, resulting in a single output value.
//It takes a function as parameter and returns a single value based on the operation performed on the array elements.

//Syntax:

/* Arrow function
const result = array.reduce(
(accumulator, currentValue, index, array) => 
{
  return // operation ;
}, initialValue);
*/

//accumulator — the accumulated value from previous Iteration
//Can provide an initial value for the accumulator as the second argument(After curly braces) to reduce(). 
//currentValue — the current element being processed
//index (optional) — the index of the current element
//array (optional) — the array reduce() was called upon
//initialValue (optional) — a value to use as the first argument to the first call of the callback

const numbersToSum: number[] = [1, 2, 3, 4, 5];

// Using reduce() to calculate the sum of all numbers in the array  
const sum: number = numbersToSum.reduce(
  (accumulator, currentValue) => { return accumulator + currentValue; }, 0   // Initial value of accumulator is 0(It is optional), 
  // if not provided, the first element of the array will be used as the initial value of accumulator and the iteration will start from the second element of the array.
);
console.log(sum); // Output: 15

console.log("===============================");

//5.some() - checks if any element satisfies the condition
//Returns true if atleast one element satisfies the condition else returns false
//some() returns boolean value.

/* Syntax array.some(function(element, index, array){});*/

const values = [1, 2, 3, 4, 5]

let someOutput = values.some(element => element<0 || element>4);
console.log(someOutput);


console.log("===============================");

//6.every() - Checks if all elements satisfies the condition
//Returns true if all elements satisfies the condition else false

let everyOutput = values.every(element => element>1)
console.log(everyOutput);

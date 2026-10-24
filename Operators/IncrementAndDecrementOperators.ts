
//x++ - postfix increment operator
//++x - prefix increment operator
//x-- - postfix decrement operator
//--x - prefix decrement operator   

let i:number = 10;

let result1 = i++; // Postfix increment - returns the value before incrementing, 
// this only happens when we are assigning value to other variable, 
// but when we directly print current variable it prints after incrementing.
console.log(result1); // 10
console.log(i); // 11

let result2 = ++i; // Prefix increment - increments the value first, then returns it
console.log(result2); // 12
console.log(i); // 12       

let j:number = 20;

let result3 = j--; // Postfix decrement - returns the value before decrementing
console.log(result3);   // 20
console.log(j); // 19

let result4 = --j; // Prefix decrement - decrements the value first, then returns it
console.log(result4); // 18
console.log(j); // 18


/* Premitive Data Types in TypeScript
1.Number
2.String
3.Boolean
4.Null
5.Undefined
6.Any
7.Union Type
8.Void

Non-Premitive Data Types in TypeScript
1.Array
2.Class
3.Interface
4.Function
5.Tuple etc.. */

//===============================================================

//1.Number Type

/* let age = 26;
let salary = 50000.50;

console.log("Age: ", age);
console.log("Salary: ", salary);

console.log(typeof(age));
console.log(typeof(salary)); */

//===============================================================

//2.String Type
/* let firstName = "Vamsee";
let lastName = "Vinjavarapu";

let msg = `My name is ${firstName} ${lastName}`;

console.log(msg); */

//===============================================================

//3.Boolean Type

    /* let isMarried: boolean = false;
    console.log("Is Married: ", isMarried);

    const isEmployed: boolean = true;
    console.log("Is Employed: ", isEmployed); */

//===============================================================

//4.Null Type
/* let nullValue: null = null;
console.log("Null Value: ", nullValue); */

//===============================================================

//5.Undefined Type
 /* let undefinedValue: undefined = undefined;
console.log("Undefined Value: ", undefinedValue); 

let value: number;
console.log("Value: ", value); */ // Output: undefined

//*When we don't assign any value to a variable, it is automatically assigned the value undefined. This is because in TypeScript, variables that are declared but not initialized are given the value undefined by default. This allows us to check if a variable has been assigned a value or not by comparing it to undefined.

//===============================================================

//6.Any Type
/* let anyValue: any = "Hello, TypeScript!";
anyValue = 42; // Reassigning to a number, no compile-time error
console.log("Any Value: ", anyValue); */
//any is like super type which can hold any type of value. 

//===============================================================

//7.Union Type
//It is combination of two or more data types. For Example in some cases id can be either number or string then we can use union type
/* let id: string | number = "Vmc";
console.log("Id Value: ", id);

id=12;
console.log("Id Value: ", id); */


//===============================================================

//8.Void Type
/* function voidFunction(): void {
    console.log("This function returns nothing.");
}
voidFunction(); */
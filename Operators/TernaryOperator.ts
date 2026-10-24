
let r:number = 100;
let s:number = 200;
let t:number = (r > s) ? r : s; // Ternary operator - returns r if r > s, otherwise returns s
console.log(t); // 200

let personAge:number = 25;
let isAdult:boolean = (personAge >= 18) ? true : false;
console.log("Is Adult:", isAdult); // true
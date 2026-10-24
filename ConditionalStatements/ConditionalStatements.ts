//Single if block
let age: number = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

//if-else block
let num: number = 75;

if(num % 2 === 0) {
    console.log(`${num} is an even number.`);
} else {
    console.log(`${num} is an odd number.`);
}

//Nested if-else block
let marks: number = 59;

if (marks >= 90 && marks <= 100 ) {
    console.log("You have an A grade.");
}

else if (marks >= 80 && marks < 90 ) {
    console.log("You have a B grade.");
} 

else {
    console.log("You have a C grade.");
}

//Switch statement
let day: number = 3;

switch(day) {   

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;  

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;  

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}
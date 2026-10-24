for(let i:number=1; i<=10; i++)
{
    if(i === 5)
    {
        break; // Exits the loop when i equals 5
    }
    console.log(i);
}

console.log("================================");

for(let i:number=1; i<=10; i++)
{
    if(i === 5)
    {
        continue; // when i equals 5 it skips the current iteration, increments i and continues execution
        //Exept 5 It will print all numbers from 1 to 10
    }   
    console.log(i);
}

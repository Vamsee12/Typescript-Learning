// var vs let vs const
/* 1.Scope
2. Value Assignment at Declaration
3. Re-declaration
4. Re-assignment
5. Hoisting (Variable Access Before Declaration) */

//=======================================================================================

function exampleVar()
{
    if(true)
    {
        var message = "Hello";
        console.log(message)
    }

    console.log(message)
    
}

exampleVar()

//=======================================================================================

function exampleLetAndConst()
{
    if(true)
    {
        let name= "vamsee"
        const age=26

        console.log(name)
        console.log(age)
    }

        //console.log(name) --> cannot access here as the scope of let is block
        //console.log(age)  --> cannot access here as the scope of let is block
}

 exampleLetAndConst()

//=====================================================================================

function exampleLetAndConstEdgeCase()
{
    if(true)
    {

    }

    let country="India"
    const state = "Telangana"
    console.log(country)
    console.log(state)
}

exampleLetAndConstEdgeCase()

//========================================================================================
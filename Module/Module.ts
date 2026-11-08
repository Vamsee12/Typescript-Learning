//This is like a utility file.

export let appname = "Calculator"

export function add(a:number, b:number):number
{
    return a+b;
}

export class Formatter
{
    static toUpper(str:string):string
    {
        return str.toUpperCase();
    }
}

/*
Modules in simple terms: Breaking your code into separate files and sharing things between them.

Think of it like a library:
Library (Module.ts)                 Your Home (another file)
appname                             I need a lamp!
add() function          export→     import appname
Formatter class                     import add()

Two keywords:

1. export — "Here, take this from my file"
   export let appname = "Calculator"  // Others can use this
   export function add() { ... }      // Others can use this

2. import — "I want this from another file"
   import { appname, add } from './Module';

Why use modules?
- Keep code organized (not everything in one giant file)
- Reuse code in multiple files
- Hide private stuff (only export what you need)
*/
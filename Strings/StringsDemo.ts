//string - Text value or combinations of characters.

/* 1.single quotes: 'Hello World'
2.double quotes: "Hello World"
3.backticks: `Hello World` - When we try to use string variable inside another string value,
 we can use backticks and ${} to access the variable value inside the string. */

 //index in a string starts from 0. For example, in the string "Hello", 'H' is at index 0, 'e' is at index 1, and so on.

 //Declaration of strings
 let singleQuoteString: string = 'Hello World';
 let doubleQuoteString: string = "Hello World";
 let backtickString: string = `Hello World`;

 console.log(singleQuoteString);
 console.log(doubleQuoteString);
 console.log(backtickString);

 //string using backticks and ${} to access variable value inside the string
 let man: string = "John";
 console.log(`Hello, ${man}! Welcome to TypeScript.`);

 //String methods
 let text: string = "Hello, TypeScript!";

 //1. length - Returns the number of characters in a string.
 console.log(text.length); // Output: 18

 //2. toUpperCase() - Converts all characters in a string to uppercase.
 console.log(text.toUpperCase()); // Output: "HELLO, TYPESCRIPT!"

 //3. toLowerCase() - Converts all characters in a string to lowercase.
 console.log(text.toLowerCase()); // Output: "hello, typescript!"

 //4. indexOf() - Returns the index of the first occurrence of a specified value in a string.
 console.log(text.indexOf("TypeScript")); // Output: 7

 //5.charAt() - Returns the character at a specified index in a string.
 console.log(text.charAt(7)); // Output: "T"

 //6. substring() - Returns a part of the string between two specified indices.
 //ending index is exclusive, meaning the character at that index is not included in the returned substring. 
 //last character which will be returned is ending index-1.
 console.log(text.substring(7, 17)); // Output: "TypeScript"

 //7.includes() - Checks if a string contains a specified value and returns true or false.
 console.log(text.includes("TypeScript")); // Output: true
 console.log(text.includes("JavaScript")); // Output: false

 //8.startsWith() and endsWith() - Checks if a string starts or ends with a specified value and returns true or false.
    console.log(text.startsWith("Hello")); // Output: true
    console.log(text.endsWith("TypeScript!")); // Output: true
    console.log(text.startsWith("TypeScript")); // Output: false
    console.log(text.endsWith("Hello")); // Output: false

 //9. replace() - Replaces a specified value with another value in a string.
 console.log(text.replace("TypeScript", "JavaScript")); // Output: "Hello, JavaScript!"
 console.log(text); //does not change the original string, it returns a new string with the replacement.

 //10. split() - Splits a string into an array of substrings based on a specified separator.
 console.log(text.split(", ")); // Output: ["Hello", "TypeScript!"]
 /*text.split(", ") — This splits the string text (which is "Hello, TypeScript!") at every occurrence of ", " 
  (comma followed by a space). It chops the string into pieces wherever it finds that separator,
  giving you the array ["Hello", "TypeScript!"].console.log(text.split(" ")); // Output: ["Hello,", "TypeScript!"]*/

  console.log(text.split(" ")); // Output: ["Hello,", "TypeScript!"]
  /*text.split(" ") — This splits the same string but at every space character instead. 
  Since the only space comes after the comma, the comma stays attached to "Hello,", giving you ["Hello,", "TypeScript!"]*/

 let credentials: string = "username:password";
 //Splitting the string into an array of substrings based on the colon separator
 let credentialsArray: string[] = credentials.split(":");
 console.log(credentialsArray); // Output: ["username", "password"]
 console.log(credentialsArray[0]); // Output: "username"
 console.log(credentialsArray[1]); // Output: "password"

 //11. trim(), trimStart(), trimEnd() 
 // trim() - Removes whitespace from both ends of a string.
 // trimStart() - Removes whitespace from the beginning of a string.
 // trimEnd() - Removes whitespace from the end of a string.
 let stringWithWhitespace: string = "   Hello, TypeScript!   ";
 console.log(stringWithWhitespace.trim()); // Output: "Hello, TypeScript!"
 console.log(stringWithWhitespace.trimStart()); // Output: "Hello, TypeScript!   "
 console.log(stringWithWhitespace.trimEnd()); // Output: "   Hello, TypeScript!"

 //12.concat() - Combines two or more strings into one string.
 //does not change the original strings, it returns a new string that is the concatenation of the provided strings.
 let string1: string = "Hello, ";
 let string2: string = "TypeScript!";
 let string3: string = " How are you?";
 let combinedString1: string = string1.concat(string2, string3);
 console.log(combinedString1); // Output: "Hello, TypeScript! How are you?"
 let combinedString: string = string1.concat(string2);
 console.log(combinedString); // Output: "Hello, TypeScript!"


 //Concept of immutability in strings  
 // Strings are immutable in TypeScript, meaning that once a string is created, it cannot be changed. 
 // Any operation that appears to modify a string actually creates a new string.

 let originalString: string = "Hello, TypeScript!";
 // Using replace() to create a new string with "JavaScript" instead of "TypeScript"
 let newString: string = originalString.replace("TypeScript", "JavaScript");
 console.log(originalString); // Output: "Hello, TypeScript!"
 console.log(newString); // Output: "Hello, JavaScript!"

 //Multiline strings using backticks
 let multilineString: string = `This is a 
multiline string 
using backticks.`;
 console.log(multilineString);
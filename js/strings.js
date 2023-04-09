let f_name = "Harsh";
let length = f_name.length;   
let sample = "  harsh    ";
/**
 * * All of the beow methods dont change te original string but return a new string as strigs are immutable in js
 */

console.log(sample.trim());  // removes the spaces from the start and end of the string
console.log(sample.trimStart()); // removes the spaces from the start of the string
console.log(sample.trimEnd()); // removes the spaces from the end of the string
console.log(f_name.toUpperCase()); // converts the string to uppercase
console.log(f_name.toLowerCase()); // converts the string to lowercase
console.log(f_name.charAt(0)); // returns the character at the given index or f_name[0] also works
console.log(f_name.slice(0,3)) // start,end,step and is exclusive of last index
console.log(typeof(f_name)) // returns the type of the variable 

// * Convert a number to string

let age = 20;
console.log(typeof(age))
age = age +""; // or age = String(age)
console.log(typeof(age))

// * Convert a string to number
myStr = "123";
console.log(typeof(myStr))
myStr = +myStr; // or myStr = Number(myStr) 
console.log(typeof(myStr))

// string formating

console.log(`My name is ${f_name} and my age is ${age}`)
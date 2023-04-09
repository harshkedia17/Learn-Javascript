// ! difference between == and ===
// ? == only checks the value and not the data type and is lossy
// * === checks the value and the data type and is strict
// ! example
let a = 1;
let b = "1";
console.log(a == b); //true
console.log(a === b); //false

// ! differnce between != and !==
// * same as above != checks only value and !== checks value and data type

/**
 * !Falsy values
 * * 0
 * * ""
 * * null
 * * undefined
 * * NaN
 * * false
 */

// ! ternary operator

let age = 20;
let drink = age >= 18 ? "beer" : "juice";

result = (a !== null && a !== undefined) ? a : b;
// * better one is this known as nullish coalescing operator
let user;
// ? For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:
alert(user ?? "Anonymous"); // Anonymous (user is undefined)
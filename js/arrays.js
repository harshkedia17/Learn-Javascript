// ! arrays are reference types and can store any type of data and mixed data types

var arr =[]
console.log(Array.isArray(arr)) // to check whether the variable is an array or not

let fruits = ["apple", "banana", "orange"];
fruits.push("mango"); // adds to the end of the array
fruits.unshift("kiwi"); // adds to the start of the array
fruits.pop() // removes the last element of the array
fruits.shift() // removes the first element of the array
// ? the remove methods return the removed element

// ! use const to create arrays! Now the array is immutable but the elements inside it are not so we can easily change them butnow the reference of the array as it is now const

// * js way of traversing array usinf for of 

for(let fruit of fruits){
    console.log(fruit) // prints the elements of the array
}
for(let idx in fruits){
    console.log(idx) // prints the indexes of the array
}

// * Array destructuring 

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a,b] = myArr;
console.log(a,b) // 1 2
let [c, ,d,...e] = myArr; // ...e is the rest operator and stores all the remaining elements in an array


// * Spread operator

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const newArr = [...arr1] // sprfeads the elements of arr1 into newArr
newArr = [...arr1, ...arr2,89,45] // spreads the elements of arr1 and arr2 into newArr

const arr = [..."abc"] // ["a", "b", "c"]
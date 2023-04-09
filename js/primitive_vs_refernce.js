let num1 = 6;
let num2 = num1;
console.log(num1, num2);
num1++;
console.log(num1, num2);
// ? there is no change in the output of num2 because it is a primitive type and it is copied by value

// ! now let's see how reference types are copied

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("array1", arr1);
console.log("array2", arr2);
arr1.push(4);
console.log("array1", arr1);
console.log("array2", arr2);
// ? the output of arr2 is also changed because it is a reference type and it is copied by reference and any change to one gets the change to another one too
arr2.unshift();
console.log("array1", arr1);
console.log("array2", arr2);

// ? so now how to clone an array without taking the bs of referncing!

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; //spread operator
arr4 = arr3.slice(); //slice method
arr4 = [].concat(arr3); //concat method
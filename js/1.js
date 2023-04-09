// alert(name)
console.log(a);
let name = "Harsh";
var a = 8;
/**
 *  * var is global scoped and let is block scoped
 *  * var are hoisted in nature that means that they are on the top i declartion and can be used without being declared whereas let is quite strict and doesnt allow the variable to b used without being declared.
 * * var Tolerates redeclartion(eg. let name = 'harsh' and then let name = 'harsh' will give error but var name = 'harsh' and then var name = 'harsh' will not give error)
 * ? maybe read about IIFE https://javascript.info/var
 * ! we can "use strict" function for better declartion and prevent ourselves from using variables withput declartion 
 */
/**
 * !Global Scoped
 * !But for same when used let it sshows refernce error
 */
if(true){
var b = 'hi'
}
console.log(b)
/**
 * declare const
 * *as the name suggests it is constant and cannot be changed
 *  * they are block scoped and not global scoped 
 */
const pie = 3.14;
pie = 8; //error




// data types
var data = 1; //int
let data = 1n; //big int
let data = Infinity;
let data = -Infinity;
let data = NaN;
let data = 'usah' // or "jascj"
let data = `hi my name is ${name}`
let data = true;
let data = undefined;
let data = null;
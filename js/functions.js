// ! Many ways of declaring functions and using them 

function add(a,b){
    return a+b
}

// Function Expression
const add2 = function(a,b){
    return a+b
}
// ? Both are same functions just different ways of declaring them
add2(5,2)
add(5,2)

// ! Arrow Functions

const add3 = (a,b) => {
    return a+b
}

// * can also write like this!
// ! if the number of parameters is one then we can ditch brackets
const isEven = num => num%2 === 0

// * can also write like this!
// ! if the number of parameters is zero then we have to use brackets
const sayHi = () => console.log("Hi")


// ! Function inside a function

const app = () => {
    const myFunc = () => {
        console.log("myFunc")
    }
    console.log("app")
    myFunc()
}
app()

// ? Lexical Scope

function outer(){
    const myVar = "value1"
    function myfunc(){
        // const myVar = "value2" // what happens if we remove this line?
        console.log("inside myfunc ",myVar)
    }
    console.log(myVar)
    myfunc()

}

outer() // ? value1 value2.   When I delete the line 46, it prints value1 value1. Why?
// * Because of lexical scope. The inner function has access to the outer function's variables.

// ! default parameters

const multiple2 = (a,b=2) =>{
    return a*b
}

// ! Rest Parameters
const addmulti = (a,b,...args) => {
    console.log(a,b,args)
    return a+b
}


// ! Param Destructuring 

const ob = {
    first_name : "John",
    age : 12
}

// ? now to destructuring this object in function we can:

function func_do({first_name,age}){
    console.log(first_name,age)

}
func_do(ob)

//! callback functions
// * A function that is passed as an argument to another function is called a callback function.

function myfunc(a){
    console.log(a)
    console.log("myfunc")
}

function call(func){
    console.log("inside call")
    func("Hello")
}

call(myfunc)

// ! function returning function

function outer(){
    function inner(){
        console.log("inner")
    }
    return inner
}

const inner = outer()
inner()
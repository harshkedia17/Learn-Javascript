// function outer(){
//     function inner(){
//         console.log("Hello from inner");
//     }
//     return inner;
// }

// var ans = outer();
// console.log(ans);
// ans()


function fullname(firstname,lastname){
    function printname(){
        console.log(firstname,lastname);
    }
    return printname;
}

var ans = fullname("harsh","kedia");
console.log(ans);
ans();
// ? Closure is a function which has access to the parent scope even after the parent function has closed. or when you return a function from a another function the place from where it is returned it will also be return ed along with the surrounding variables or like in local storage so that it can be used later on.


function hello(x){
    const a = "hi"
    const b = "wassup"
    return function(){
        console.log(a,b,x);
    }
}
var ans1 = hello("harsh");
// console.log(ans1);
ans1()


function myfunc(power){
    return function(num){
        console.log(num**power);
    }
}
const cube = myfunc(3);
cube(3);

function func(){
    var a = 1;
    return function(){
        if(a==1){
            console.log("Hello");
            a=0;
        }
        else{
            console.log("Bye");
        }
    }
}

var ans3 = func();
ans3();
ans3();
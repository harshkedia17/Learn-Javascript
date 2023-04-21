// console.log("script start");
// for (var i = 0; i < 10000; i++) {
//   console.log("for loop");
// }
// console.log("script end");

// ! above is synchronous code
// * Javascript is single threaded and synchronous programming language. 

// ? setTimeout | The time mentioned is not the time after which the function will be executed. It is the time after which the function will be added to the callback queue.
// console.log("script start");
// function hello(){
//     console.log("hello");
// }
// setTimeout((()=>console.log("INSIDE TIMEOUT")),1000)
// console.log("script end");

// * Both setTimeout and setInterval are asynchronous functions. and they work after the whole script is executed. 


//? setInterval | The time mentioned in this is the time after whihc it will reguarly execute the function after executing the whole script.

// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
// },1000)
// console.log("script end");


// ! Understanding Callbacks

function func1(callback){
    console.log("func1");
    callback();

}
// function fucn2(){
//     console.log("func2");
// }
// func1(fucn2);
// ! or we can use anonymous function
func1(()=>console.log("func2"));
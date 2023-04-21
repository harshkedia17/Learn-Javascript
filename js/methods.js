// ! Methods
// * When we add a function to an object, it is called a method of that object.

const person = {
    name: 'John',
    age:8,
    walk: function() {
        console.log(`the person name is ${this.name} walking and age is ${this.age}`); // now the problem is here it is using a hard coded value whereas we want to use the name property of the object so initially we use $ which doesnt work sso we use this keyword
    }
}

// console.log(person.walk); // outputs the entire function
person.walk(); // outputs 'walk'



// ! this keyword
console.log(this); // outputs the window object
console.log(window) // outputs the window object

// * you can also call a fucntion using "call" method]

function mysam(){
    console.log("hiiiii")
}
mysam.call(); // outputs hiiiii
/**
 * ! call method
 * ! apply method
 * ! bind method
 */

const user1 = {
    firstname:"harsh",
    age:8,
    about:function(){
        console.log(this.firstname,this.age)
    }
}
const user2 = {
    firstname:"mohit",
    age:10,
}

user1.about(); // outputs harsh 8
// ? how can I use the about method of user1 for user2

user1.about.call(user2); // outputs mohit 10 // we can also paas arguments in call method like call(user2,"hi","hello")

// ? apply method
user1.about.apply(user2); // outputs mohit 10 // we can also paas arguments in apply method like apply(user2,["hi","hello"])

// ? bind method
const user3 = user1.about.bind(user2); // outputs mohit 10 // we can also paas arguments in bind method like bind(user2,"hi","hello") and it return a fucntion which we can use in future

user3()

// ! Now comes a big twist in the story
// ? We now try using arrow function in the object

const person1 = {
    firstname:"harsh",
    age:8,
    about:()=>{
        console.log(this.firstname,this.age)
    }
}

// * in arrow function this keyword is not bound to the object but it is bound to the window object or the surrounding/one level up object
person1.about(); // outputs undefined undefined
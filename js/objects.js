const person = {
    f_name: "Harsh",
    l_name:"Kumar",
    age: 21

}
console.log(person);
console.log(typeof person);
// access the properties of the object using dot notation

console.log(person.f_name);
console.log(person['f_name']);
// to add a property to the object
person.gender  = 'Male';
console.log(person);


// ! Iterating over the object

for (let key in person){
    console.log(key);
    console.log(person[key]);
}

// *spread operator

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key3 : "value3",    
    key4 : "value4"
}
const newObj = {...obj1, ...obj2}
console.log(newObj);
 const spread = {..."abc"} // {"0":"a", "1":"b", "2":"c}


// * Object destructuring

const band = {
    bandname : "Linkin Park",
    genre : "Rock",
}

const {bandname, genre} = band;
console.log(bandname, genre);
// ! we can also change the name of the variables while destructuring
const {bandname: name, genre: type} = band;
// console.log(document.getElementById("main-heading"))
// const mainHeading = document.getElementById("main-heading")
const mainHeading = document.querySelector("#main-heading") // can select by id, class, tag name, etc.
const header = document.querySelector(".header") // but this only gives one element and mot eleemnt if of same category
const item = document.querySelectorAll(".nav-item")
console.log(item) // this gives all the elements of same category
console.log(header) 
console.log(mainHeading)

console.log(mainHeading.textContent) // gives the text inside the element 
console.log(mainHeading.innerText) // just gives the element which is actually visible
// mainHeading.textContent = "Hello World"
// console.log(mainHeading.textContent)
mainHeading.style.color = "red"
// and when there is - in a property name, we have to use camelCase
mainHeading.style.backgroundColor = "black"

// ! get set attribute
const link = document.querySelector("a")
console.log(link.getAttribute("href"))
const inp = document.querySelector(".form-todo input")
console.log(inp.getAttribute("type"))
// link.setAttribute("href", "https://www.google.com")


// ? if you want to get multiple elements 

const navItem = document.getElementsByClassName("nav-item") // html collection
// ! and querySelectorAll gives a node list
console.log(navItem)


// * Looping
/**
 * ? Simple for loop
 * ? for of loop
 * ? forEach
 * ! for of loop is used for arrays and node lists and not for html collections
 */

for (let i = 0; i < navItem.length; i++) {
    const element = navItem[i];
    // console.log(element.)
    element.children[0].style.color = "red"
    element.style.backgroundColor = "white"
    
}


// !innerHTML
const head = document.querySelector(".headline")
head.innerHTML += "<h1> Hello World </h1>" // this will add the h1 tag inside the headline class element
console.log(head.innerHTML)


// ! traversing the dom

const rootNode = document.getRootNode()
console.log(rootNode.childNodes)
const htmlNode = rootNode.childNodes[1]
console.log(htmlNode.childNodes)
const bodyNode = htmlNode.childNodes[2]
console.log(bodyNode)
// ? sibilings node

console.log(bodyNode.previousSibling)
console.log(bodyNode.previousSibling.previousSibling) // theissue with them is that they show the text nodes as well so to ignore that we use nextElementSibling and previousElementSibling
console.log(bodyNode.previousElementSibling)

// ! to prevent having text nodes in childnode we use children[x] as it only shows the element nodes
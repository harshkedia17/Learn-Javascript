const URL = "https://jsonplaceholder.typicode.com/posts";


fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));

async function getPosts(){
    const response = await fetch(URL)
    const data = await response.json()
    console.log(response)
    return data
} // returns a promise

getPosts().then(data=>console.log(data))
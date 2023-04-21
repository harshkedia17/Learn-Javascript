const URL = "https://jsonplaceholder.typicode.com/posts";

// get
fetch(URL)
  .then((response) => {
    // console.log(response); // didnt return me with a response
    // console.log(response.json());
    if(response.ok) return response.json();
    else throw new Error("Something went wrong")
    
  })
  .then((data) => {
    console.log(data);
  }) //? returns a promise
  .catch(error=>{
    console.log("inside catch")
    console.log(error)
  }) //! twist is this catch only runs when there is network error


// ! POST

fetch(URL, {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
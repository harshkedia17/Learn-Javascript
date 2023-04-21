const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr)
// console.log(xhr.readyState)
xhr.open("GET", URL);
// console.log(xhr.readyState)
// xhr.onreadystatechange = function(){
// console.log(xhr.readyState)
//     if(xhr.readyState===4){
//         const response = xhr.response; // ! it is still in string
//         const data =JSON.parse(response)
//         console.log(data)
//     }
// }

// xhr.onload = function(){
//     console.log(xhr.readyState)
//     const response = xhr.response
//     const data  = JSON.parse(response)
//     console.log(data)
// }
// console.log("hi")

// ! Another way to write it

// xhr.onload = ()=>{
//     if(xhr.status>=200 && xhr.status<300){
//         const data = JSON.parse(xhr.response)
//         console.log(data)
//         const id = data[3].id
//         const xhr2 = new XMLHttpRequest()
//         const URL2 = `${URL}/${id}`
//         xhr2.open('GET',URL2)
//         xhr2.onload = ()=>{
//             const data2 = JSON.parse(xhr2.response)
//             console.log(data2)
//         }
//         xhr2.send()
//     }else{
//         console.error("error occured")
//     }
// }
// xhr.onerror=()=>{
//     console.error("network error")
// }
// xhr.send()

// ! XHR USING PROMISES

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject("error");
      }
    };
    xhr.onerror = () => {
      console.error("network error");
    };
    xhr.send();
  });
}

sendRequest('GET',URL).then((value)=>{
    const data = JSON.parse(value)
    // console.log(data)
    return data
}).then(data=>{
    const id = data[3].id
    return id
}).then(id=>{
    const url  = `${URL}/${id}`
    return sendRequest('get',url)
}).then(data=>{
    console.log(data)
})

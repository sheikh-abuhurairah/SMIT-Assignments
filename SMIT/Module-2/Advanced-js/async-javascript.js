async function getdata() {
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    
    if(!res.ok){
        throw new Error("could not find the resource")
    }
    
    const data = await res.json()
    console.log(data);    
    }
    catch(error){
        console.log(Error);
    }
}


getdata()
// async function getdata() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await res.json()

//     const res2 = await fetch("https://jsonplaceholder.typicode.com/users/2")
//     const data2 = await res2.json()

//     console.log(data);
//     console.log(data2);
    
// }


// getdata()








// -------------------------------------------------------
// fetch("https://jsonplaceholder.typicode.com/userss")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error
//     } 
//     else {
//         return response.json()   
//     }
// })
// .then((data)=>{
//     console.log(data);
        
// })
// .catch((err)=>{
//     console.log(err);
// })


// function fetchData(url){
//     return new Promise((resolve,reject)=>{
//         const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange",()=>{
//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText)
//         resolve(data)
//     }
//     else if(request.readyState === 4){
//         reject("Could not found the resoruce!")
//     }
//     });

//     request.open("GET",url)
//     request.send()
//     })
// };

// fetchData("https://jsonplaceholder.typicode.com/users/1")
// .then((data)=> {
//     console.log(data)
//     return fetchData("https://jsonplaceholder.typicode.com/users/2")
//     .then((data)=>{
//         console.log(data);
//         return fetchData("https://jsonplaceholder.typicode.com/users/3")
//     .then((data)=>{
//         console.log(data);
        
//     })
//     })
// })
// .catch((err)=>{console.log(err)})

// -------------------------------------------------------------------

// const getSomething = ()=>{
//     return new Promise((resolve,reject)=>{
//     // resolve("Fullfilled")
//     reject("Not Fullfilled")
// });
// }

// getSomething()
// .then((done,)=>{
//     console.log(done);
// })
// .catch((notDone)=>{
//     console.log(notDone);
// })
// .finally(()=>{
//     console.log("Completed");
    
// });


// --------------------------------------------------------------------------
// Callback Hell or pyramid of doom
// fetchData("https://jsonplaceholder.typicode.com/users/1", (data, err) => {
//   console.log(data);
//   fetchData("https://jsonplaceholder.typicode.com/users/2", (data, err) => {
//     console.log(data);
//     fetchData("https://jsonplaceholder.typicode.com/users/3", (data, err) => {
//       console.log(data);
//       fetchData("https://jsonplaceholder.typicode.com/users/4", (data, err) => {
//         console.log(data);
//         fetchData(
//           "https://jsonplaceholder.typicode.com/users/5",
//           (data, err) => {
//             console.log(data);
//           },
//         );
//       });
//     });
//   });
// });
// -----------------------------------------------------------------------
// fetchData("https://jsonplaceholder.typicode.com/users/1",(data){
//         console.log(data);    
//     }
//     else{

//         console.log(err);
        
//     }
// });
// fetchData("https://jsonplaceholder.typicode.com/users/2",(data,err)=>{
//     if(data){
//         console.log(data);    
//     }
//     else{
//         console.log(err);
        
//     }
// });



// --------------------------------------------------------------------
// fetchData("https://jsonplaceholder.typicode.com/users/1")
// fetchData("https://jsonplaceholder.typicode.com/users/2")
// fetchData("https://jsonplaceholder.typicode.com/users/3")
// fetchData("https://jsonplaceholder.typicode.com/users/4")


// ------------------------------------------------------------
// const request = new XMLHttpRequest();
// const ul = document.querySelector("ul")

// request.addEventListener("readystatechange", ()=>{
//     if(request.readyState ===  4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         data.forEach(user => {
//             const li = document.createElement("li")
//             li.innerHTML = user.name;
//             ul.appendChild(li)
//             li.addEventListener("click",()=>{
//                 li.innerHTML = (`ID: ${user.id}<br>
//                 Username: ${user.username}<br>
//                 Email: ${user.email}<br>
//                 Phone: ${user.phone}`)
//             });
//         });
//         console.log(data);
//     }
//     else if(request.readyState === 4){
//         console.log("Could not found the resoruce!");
        
//     }
// })

// request.open("Get","https://jsonplaceholder.typicode.com/users")
// request.send()

// --------------------------------------------------------------------
// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", ()=>{
//     if(request.readyState ===  4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         console.log(data);
//     }
//     else if(request.readyState === 4){
//         console.log("Could not found the resoruce!");
        
//     }
// })

// request.open("Get","https://jsonplaceholder.typicode.com/users")
// request.send()




/* ==================================================
   DOM STRUCTURE
================================================== */

// Root -> document
// Nodes -> Every element in HTML

// Types of Nodes:
// 1. Element Node
// 2. Text Node

// Relationships:
// - Parent
// - Child
// - Sibling




/* ==================================================
   SELECTING ELEMENTS
================================================== */

// 1. Using querySelector()
// const button = document.querySelector("button");
// const para = document.querySelector("p");

// 2. Using querySelectorAll()
// const paragraphs = document.querySelectorAll("p");

// 3. By Tag Name
// const paragraphs = document.getElementsByTagName("p");

// 4. By Class Name
// const subHeadings = document.getElementsByClassName("sub-heading");

// 5. By ID
// const heading = document.getElementById("heading");






console.log("Start");

function delayedGreeting() {
  console.log("Hello, world!");
  alert("Hello");
}

setTimeout(delayedGreeting, 2000);

console.log("End");



// queryselector mai humesha first jo ho g wohi print ho ga puri collection nhi
// let aa = document.querySelector("h2")
// console.log(aa);



//  queryslectorall mai sub a jaye ge array ban ke
// let aa = document.querySelectorAll("h2")
// console.log(aa);


/* ==================================================
   WORKING WITH CLASSES
================================================== */



// const para = document.querySelector("p");
// para.setAttribute("class", "error");
// para.classList.add("dummy")
// console.log(para);


// const paragraphs = document.querySelectorAll("p")

// for (let i = 0; i < paragraphs.length; i++) {
//     if (paragraphs[i].innerText.includes("error")) {
//         paragraphs[i].classList.add("error");
//     }
//     else if(paragraphs[i].innerText.includes("success")){
//         paragraphs[i].classList.add("success")
//     }
// }





/* ==================================================
   WORKING WITH ATTRIBUTES
================================================== */


// let heading = document.querySelector("a")
// console.log(heading.getAttribute("href"));
// console.log(heading.getAttribute("id"));

// heading.setAttribute("class" ,"tag")
// heading.setAttribute("style" ,"color:green")


// console.log(heading.getAttributeNames());



// const bytag = document.getElementsByTagName("a")
// console.log(bytag);

// const byid = document.getElementById("heading")
// console.log(byid);

// const  byclass = document.getElementsByClassName("heading")
// console.log(byclass);

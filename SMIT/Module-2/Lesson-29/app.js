

const ul = document.querySelector("ul")
const li = document.querySelector("li")
const button = document.querySelector("button")



// ================================
// EVENT DELEGATION
// ================================


ul.addEventListener("click", function (e) {
    console.log(e.target);

    // e.target.style.textDecoration = "line-through";

    li.remove



})



button.addEventListener("click", function () {
    const li = document.createElement("li")
    li.textContent = "item 4"

    console.log(li);

    ul.append(li)

})










// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");






// // ================================
// // CAPTURING PHASE (true)
// // ================================

// grandparent.addEventListener("click", function () {
//   console.log("Capture Grandparent");
// }, true);

// parent.addEventListener("click", function () {
//   console.log("Capture Parent");
// }, true);

// child.addEventListener("click", function () {
//   console.log("Capture Child");
// }, true);

// document.body.addEventListener("click", function () {
//   console.log("Capture Body");
// }, true);







// ================================
// BUBBLING PHASE (default)
// ================================


// grandparent.addEventListener("click", function () {
//   console.log("Grandparent click!");
// });

// parent.addEventListener("click", function () {
//   console.log("Parent click!");
// });

// child.addEventListener("click", function () {
//   console.log("Child click!");
// });

// document.body.addEventListener("click", function () {
//   console.log("Body click!");
// });
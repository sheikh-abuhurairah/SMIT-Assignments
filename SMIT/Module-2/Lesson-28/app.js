const todos =document.querySelector("ul")

const items = document.querySelectorAll("li");

const button = document.querySelector("button")


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        items[i].style.textDecoration = "line-through";
    }
    )
}


button.addEventListener("click",function() {
    todos.innerHTML += "  <li>Item 4</li>" ;
} )







// const item = document.querySelector("li")

// items.addEventListener("click", function(){
//     items.style.textDecoration = "line-through";
// })




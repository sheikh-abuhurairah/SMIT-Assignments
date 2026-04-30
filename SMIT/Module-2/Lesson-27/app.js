

const el = document.querySelector("div")
console.log(el.nextElementSibling.nextElementSibling);









const button = document.querySelector("button")

function changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    let bgcolor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = bgcolor;

    let para = document.querySelector("p")
    para.innerText = bgcolor

}


button.addEventListener("mousemove", changeColor)


let passwordinput = document.getElementById("password");
let btn = document.getElementById("togglebtn")

function changetype(){
    if(passwordinput.type === "password"){
        passwordinput.type  = "text";
        btn.innerText = "Hide"
        btn.classList.add("toggle")
    }
    else{
        passwordinput.type = "password"
        btn.innerText = "Show"
    }
}


btn.addEventListener("click", changetype)
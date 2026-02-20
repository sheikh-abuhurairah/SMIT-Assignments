const button = document.querySelector("button");
const para = document.querySelector("p");

function changeBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const bgChange = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.backgroundColor = bgChange;
    para.textContent = bgChange;
}

button.addEventListener("click", changeBg);
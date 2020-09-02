const body = document.querySelector("body");
const button = document.getElementById("colorSW");
const colors = ["red","violet","black","blue"];
button.addEventListener("click", changeBg);

function changeBg() {
    const colorId = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorId];
}
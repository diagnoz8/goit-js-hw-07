let btn = document.querySelector(".change-color");
let elToColor = document.querySelector(".color"); 
let body = document.querySelector("body") 

btn.addEventListener("click", setRandomHexColor); 

function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function setRandomHexColor() {
 let colour = getRandomHexColor();
  elToColor.textContent = colour;
  body.style.backgroundColor =colour; 
}

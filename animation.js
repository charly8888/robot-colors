
// Botones del ROBOT

const buttonLeft = document.getElementById("arm-left-button")
const buttonRight = document.getElementById("arm-right-button")

// Partes del ROBOT
const armLeft = document.querySelector(".container-arm-left")
const armRight = document.querySelector(".container-arm-right")

buttonLeft.addEventListener("click",()=>{
    armLeft.classList.toggle("animation-left")
})
buttonRight.addEventListener("click",()=>{
    armRight.classList.toggle("animation-right")
})
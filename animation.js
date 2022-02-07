
// Botones del ROBOT

const buttonLeft = document.getElementById("arm-left-button")
const buttonRight = document.getElementById("arm-right-button")
const buttonAll = document.getElementById("button-all")

// Partes del ROBOT
const armLeft = document.querySelector(".container-arm-left")
const armRight = document.querySelector(".container-arm-right")
const head = document.getElementById("container-head")
const down =document.getElementById("down")
const footLeft =document.getElementById("foot-left")
const footRight =document.getElementById("foot-right")

const estanGuardados = ()=>armRight.classList.contains("animation-right-hidden") 

buttonLeft.addEventListener("click",()=>{
    if(!estanGuardados()){
        armLeft.classList.toggle("animation-left")
    }
})



buttonRight.addEventListener("click",()=>{
    if(!estanGuardados()){
        armRight.classList.toggle("animation-right")
    }
 })

const estanAbiertos = ()=>armRight.classList.contains("animation-right") || armLeft.classList.contains("animation-left")

buttonAll.addEventListener("click",()=>{
    if(!estanAbiertos()){
        armRight.classList.toggle("animation-right-hidden")
        armLeft.classList.toggle("animation-left-hidden")
        head.classList.toggle("container-head-hidden")
        down.classList.toggle("down-hidden")
        footRight.classList.toggle("foot-hidden-right")
        footLeft.classList.toggle("foot-hidden-legt")
    }

})


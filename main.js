// Abstraemos los botones de los colores el DOM
const buttonYellow = document.getElementById("button-yellow")
const buttonOrange = document.getElementById("button-orange")
const buttonRed = document.getElementById("button-red")
const buttonFuchsia = document.getElementById("button-fuchsia")
const buttonHotpink = document.getElementById("button-hotpink")
const buttonBlueviolet = document.getElementById("button-blueviolet")
const buttonBlue = document.getElementById("button-blue")
const buttonCornflowerblue = document.getElementById("button-cornflowerblue")
const buttonLightblue = document.getElementById("button-lightblue")
const buttonAquamarine = document.getElementById("button-aquamarine")
const buttonGreen = document.getElementById("button-green")
const buttonOlive = document.getElementById("button-olive")

// Abstraemos los botones de las partes del robot el DOM

const buttonHair = document.getElementById("hair")
const buttonHead = document.getElementById("button-head")
const buttonEars = document.getElementById("button-ears")
const buttonMouth= document.getElementById("mouth")
const buttonChest = document.getElementById("chest")
const buttonArms = document.getElementById("arms")
const buttonHands = document.getElementById("hands")
const buttonContentButtons= document.getElementById("content-buttons")
const buttonHips = document.getElementById("hips")
const buttonLegs = document.getElementById("legs")
const buttonFoot = document.getElementById("foot")


// Abstraemos las partes del robot el DOM

const hair = document.querySelector(".hair")
const head = document.getElementById("head")
const ears = document.querySelectorAll('.ear')
const mouth = document.querySelectorAll('.mouth')

const chest = document.querySelectorAll('.chest')
const arms = document.querySelectorAll('.arms')
const hands = document.querySelectorAll('.hands')
const contentButtons = document.querySelectorAll(".content-buttons")
const hips = document.querySelectorAll(".hips")
const legs = document.querySelectorAll(".legs")
const foot = document.querySelectorAll(".foot")

let currentSelection = ""

// escuchamos los clicks en los botones y le pasamos el elemento al currentSelection

buttonHair.addEventListener("click", () =>{
  currentSelection = hair
})
buttonEars.addEventListener("click", () =>{
  currentSelection = ears
})
buttonMouth.addEventListener("click", () =>{
  currentSelection = mouth
})
buttonHead.addEventListener("click", () =>{
  currentSelection = head
})
buttonChest.addEventListener("click", () =>{
  currentSelection = chest
})
buttonArms.addEventListener("click", () =>{
  currentSelection = arms
})
buttonHands.addEventListener("click", () =>{
  currentSelection = hands
})
buttonContentButtons.addEventListener("click", () =>{
  currentSelection = contentButtons
})
buttonHips.addEventListener("click", () =>{
  currentSelection = hips
})
buttonLegs.addEventListener("click", () =>{
  currentSelection = legs
})
buttonFoot.addEventListener("click", () =>{
  currentSelection = foot
})

// Funcion de cambiar el color de fondo
let cambiarColor = function (currentSelection, color){

  if(currentSelection.length >= 1){
currentSelection.forEach(e => cambiarColor(e, color))

  } else if (currentSelection.classList.value === ""){
    currentSelection.classList.add(color)
  }else{
    currentSelection.classList.remove("yellow","orange","red","fuchsia","hotpink","blueviolet","blue","cornflowerblue","lightblue",
    "aquamarine","green","olive")
    currentSelection.classList.add(color)
  }
}


buttonYellow.addEventListener("click",() => cambiarColor(currentSelection, "yellow"))
buttonOrange.addEventListener("click",() => cambiarColor(currentSelection, "orange"))
buttonRed.addEventListener("click",() => cambiarColor(currentSelection, "red"))
buttonFuchsia.addEventListener("click",() => cambiarColor(currentSelection, "fuchsia"))
buttonHotpink.addEventListener("click",() => cambiarColor(currentSelection, "hotpink"))
buttonBlueviolet.addEventListener("click",() => cambiarColor(currentSelection, "blueviolet"))
buttonBlue.addEventListener("click",() => cambiarColor(currentSelection, "blue"))
buttonCornflowerblue.addEventListener("click",() => cambiarColor(currentSelection, "cornflowerblue"))
buttonLightblue.addEventListener("click",() => cambiarColor(currentSelection, "lightblue"))
buttonAquamarine.addEventListener("click",() => cambiarColor(currentSelection, "aquamarine"))
buttonGreen.addEventListener("click",() => cambiarColor(currentSelection, "green"))
buttonOlive.addEventListener("click",() => cambiarColor(currentSelection, "olive"))



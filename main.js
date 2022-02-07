
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
const buttonMouth = document.getElementById("mouth")
const buttonChest = document.getElementById("chest")
const buttonArms = document.getElementById("arms")
const buttonHands = document.getElementById("hands")
const buttonContentButtons = document.getElementById("content-buttons")
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
const foot = document.querySelectorAll(".foot-color")

// Abstraemos otros elementos que rodean a los botones
// head
const div_hair = document.getElementById("div-hair")
const div_bar_hair = document.getElementById("div-bar-hair")
const span_hair = document.getElementById("span-hair")
const div_head = document.getElementById("div-head")
const div_bar_head = document.getElementById("div-bar-head")
const span_head = document.getElementById("span-head")
const div_ears = document.getElementById("div-ears")
const div_bar_ears = document.getElementById("div-bar-ears")
const span_ears = document.getElementById("span-ears")
const div_mouth = document.getElementById("div-mouth")
const div_bar_mouth = document.getElementById("div-bar-mouth")
const span_mouth = document.getElementById("span-mouth")
const div_chest = document.getElementById("div-chest")
const div_bar_chest = document.getElementById("div-bar-chest")
const span_chest = document.getElementById("span-chest")
const div_arms = document.getElementById("div-arms")
const div_bar_arms = document.getElementById("div-bar-arms")
const span_arms = document.getElementById("span-arms")
const div_hands = document.getElementById("div-hands")
const div_bar_hands = document.getElementById("div-bar-hands")
const span_hands = document.getElementById("span-hands")
const div_content_buttons = document.getElementById("div-content-buttons")
const div_bar_content_buttons = document.getElementById("div-bar-content-buttons")
const span_content_buttons = document.getElementById("span-content-buttons")
const div_hips = document.getElementById("div-hips")
const div_bar_hips = document.getElementById("div-bar-hips")
const span_hips = document.getElementById("span-hips")
const div_legs = document.getElementById("div-legs")
const div_bar_legs = document.getElementById("div-bar-legs")
const span_legs = document.getElementById("span-legs")
const div_foot = document.getElementById("div-foot")
const div_bar_foot = document.getElementById("div-bar-foot")
const span_foot = document.getElementById("span-foot")



let currentSelection = ""

// escuchamos los clicks en los botones y le pasamos el elemento al currentSelection
function limpiarYagregar(a, b, c, d = 'lala', e = 'lala-bar', f = 'lala-btm-span') {
  let arrayDeElemIdALimpiar = [div_hair, div_bar_hair, span_hair, div_head, div_bar_head, span_head, div_ears, div_bar_ears, span_ears, div_mouth, div_bar_mouth, span_mouth,div_chest, div_bar_chest, span_chest,div_arms, div_bar_arms, span_arms,div_hands, div_bar_hands, span_hands,div_content_buttons, div_bar_content_buttons, span_content_buttons,div_hips, div_bar_hips, span_hips,div_legs, div_bar_legs, span_legs,div_foot, div_bar_foot, span_foot]
  arrayDeElemIdALimpiar.forEach(e => {
    e.classList.remove("lala", "lala-bar", "lala-btm-span", "nothing")
  })
  a.classList.add(d)
  b.classList.add(e)
  c.classList.add(f)
  
}

// console.log(currentSelection)

buttonHair.addEventListener("click", () => {
  if (currentSelection === hair) {
    limpiarYagregar(div_hair, div_bar_hair, span_hair, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
    currentSelection = hair
    limpiarYagregar(div_hair, div_bar_hair, span_hair)
  }
})
buttonHead.addEventListener("click", () => {
  if (currentSelection === head) {
    limpiarYagregar(div_head, div_bar_head, span_head, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection = head
  limpiarYagregar(div_head, div_bar_head, span_head)
}
})

buttonEars.addEventListener("click", () => {
  if (currentSelection === ears) {
    limpiarYagregar(div_ears, div_bar_ears, span_ears, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection = ears
  limpiarYagregar(div_ears, div_bar_ears, span_ears)}
})
buttonMouth.addEventListener("click", () => {
  if (currentSelection === mouth) {
    limpiarYagregar(div_mouth, div_bar_mouth, span_mouth, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection = mouth
  limpiarYagregar(div_mouth, div_bar_mouth, span_mouth)}
})
buttonChest.addEventListener("click", () => {
  if (currentSelection === chest) {
    limpiarYagregar(div_chest, div_bar_chest, span_chest, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection = chest
  limpiarYagregar(div_chest, div_bar_chest, span_chest)}
})
buttonArms.addEventListener("click", () => {
  if (currentSelection === arms) {
    limpiarYagregar(div_arms, div_bar_arms, span_arms, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection = arms
  limpiarYagregar(div_arms, div_bar_arms, span_arms)}
})
buttonHands.addEventListener("click", () => {
  if (currentSelection === hands) {
    limpiarYagregar(div_hands, div_bar_hands, span_hands, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection = hands
  limpiarYagregar(div_hands, div_bar_hands, span_hands)}
})
buttonContentButtons.addEventListener("click", () => {
  if (currentSelection === contentButtons) {
    limpiarYagregar(div_content_buttons, div_bar_content_buttons, span_content_buttons, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection = contentButtons
  limpiarYagregar(div_content_buttons, div_bar_content_buttons, span_content_buttons)}
})

buttonHips.addEventListener("click", () => {
  if (currentSelection === hips) {
    limpiarYagregar(div_hips, div_bar_hips, span_hips, "nothing", "nothing", "nothing")
    console.log(currentSelection)
    currentSelection = ""
  } else {
    currentSelection = hips
    limpiarYagregar(div_hips, div_bar_hips, span_hips)}
  })

  buttonLegs.addEventListener("click", () => {
    if (currentSelection === legs) {
      limpiarYagregar(div_legs, div_bar_legs, span_legs, "nothing", "nothing", "nothing")
      
      console.log(currentSelection) 
      currentSelection = ""
  } else {
  currentSelection =legs
  limpiarYagregar(div_legs, div_bar_legs, span_legs)}
})

buttonFoot.addEventListener("click", () => {
  if (currentSelection === foot) {
    limpiarYagregar(div_foot, div_bar_foot, span_foot, "nothing", "nothing", "nothing")

    currentSelection = ""
  } else {
  currentSelection =foot
  limpiarYagregar(div_foot, div_bar_foot, span_foot)}
})

// Funcion de cambiar el color de fondo
let cambiarColor = function (currentSelection, color) {

  if (currentSelection.length >= 1) {
    currentSelection.forEach(e => cambiarColor(e, color))
  } else if (currentSelection.classList.value === "") {
    currentSelection.classList.add(color)
  } else {
    currentSelection.classList.remove("yellow", "orange", "red", "fuchsia", "hotpink", "blueviolet", "blue", "cornflowerblue", "lightblue",
      "aquamarine", "green", "olive")
    currentSelection.classList.add(color)
  }
}


buttonYellow.addEventListener("click", () => cambiarColor(currentSelection, "yellow"))
buttonOrange.addEventListener("click", () => cambiarColor(currentSelection, "orange"))
buttonRed.addEventListener("click", () => cambiarColor(currentSelection, "red"))
buttonFuchsia.addEventListener("click", () => cambiarColor(currentSelection, "fuchsia"))
buttonHotpink.addEventListener("click", () => cambiarColor(currentSelection, "hotpink"))
buttonBlueviolet.addEventListener("click", () => cambiarColor(currentSelection, "blueviolet"))
buttonBlue.addEventListener("click", () => cambiarColor(currentSelection, "blue"))
buttonCornflowerblue.addEventListener("click", () => cambiarColor(currentSelection, "cornflowerblue"))
buttonLightblue.addEventListener("click", () => cambiarColor(currentSelection, "lightblue"))
buttonAquamarine.addEventListener("click", () => cambiarColor(currentSelection, "aquamarine"))
buttonGreen.addEventListener("click", () => cambiarColor(currentSelection, "green"))
buttonOlive.addEventListener("click", () => cambiarColor(currentSelection, "olive"))

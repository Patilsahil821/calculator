let first = document.getElementById("first-radio")
let second = document.getElementById("second-radio")
let third = document.getElementById("third-radio")
let body = document.getElementById("body")
let logo = document.getElementById("logo")
let radiocontainer = document.getElementById("radio-container")
let buttoncontainer = document.getElementById("button-container")
let screen = document.getElementById("screen")
let del = document.getElementById("del")
let reset = document.getElementById("reset")
let equal = document.getElementById("equal")
let buttons = document.getElementsByTagName("button")
const numbers = document.getElementsByTagName("p")
const radioes = document.getElementsByClassName("radio")

first.addEventListener("click", (e) => {
  doOpacityZero("first")
  body.style.backgroundColor = "hsl(224, 28%, 35%)"
  logo.style.color = "white"
  radiocontainer.style.backgroundColor = "black"
  buttoncontainer.style.backgroundColor = "rgb(0, 0, 0, 0.4)"

  screen.style.backgroundColor = "rgb(0, 0, 0, 0.4)"
  screen.style.color = "white"
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.boxShadow = "0px 1px white"
    buttons[i].style.backgroundColor = "white"
    buttons[i].style.color = "black"
  }
  del.style.backgroundColor = "hsl(225, 21%, 49%)"
  reset.style.backgroundColor = "hsl(225, 21%, 49%)"
  equal.style.backgroundColor = "hsl(6, 63%, 50%)"
  equal.style.color = "white"
  equal.style.boxShadow = "0px 3px 1px hsl(176, 100%, 44%)"
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.color = "hsl(52, 100%, 62%)"
  }
  third.style.backgroundColor = "hsl(177, 92%, 70%)"
})
second.addEventListener("click", (e) => {
  doOpacityZero("second")
  body.style.backgroundColor = "hsl(0, 0%, 90%)"
  logo.style.color = "black"
  radiocontainer.style.backgroundColor = "hsl(0, 5%, 81%)"
  buttoncontainer.style.backgroundColor = "hsl(0, 5%, 81%)"
  del.style.backgroundColor = "hsl(185, 42%, 37%)"
  reset.style.backgroundColor = "hsl(185, 42%, 37%)"
  screen.style.backgroundColor = "white"
  screen.style.color = "black"
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.boxShadow = "0px 1px 2px black"
  }
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.color = "black"
  }
})
third.addEventListener("click", (e) => {
  doOpacityZero("third")
  body.style.backgroundColor = "hsl(268, 47%, 21%)"
  logo.style.color = "hsl(52,100%,62%)"
  radiocontainer.style.backgroundColor = "hsl(268, 71%, 12%)"
  buttoncontainer.style.backgroundColor = "hsl(268, 71%, 12%)"

  screen.style.backgroundColor = "hsl(268, 71%, 12%)"
  screen.style.color = "hsl(52,100%,62%)"
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.boxShadow = "0px 2px 1px violet"
    buttons[i].style.backgroundColor = "hsl(268, 47%, 21%)"
    buttons[i].style.color = "hsl(52,100%,62%)"
  }
  del.style.backgroundColor = "hsl(290, 70%, 36%)"
  reset.style.backgroundColor = "hsl(290, 70%, 36%)"
  equal.style.backgroundColor = "hsl(177, 92%, 70%)"
  equal.style.color = "black"
  equal.style.boxShadow = "0px 3px 1px hsl(176, 100%, 44%)"
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.color = "hsl(52, 100%, 62%)"
  }
  third.style.backgroundColor = "hsl(177, 92%, 70%)"
})
function doOpacityZero(item) {
  first.style.opacity = "0"
  second.style.opacity = "0"
  third.style.opacity = "0"
  if (item === "first") first.style.opacity = "1"
  else if (item === "second") second.style.opacity = "1"
  else if ((item = "third")) third.style.opacity = "1"
}

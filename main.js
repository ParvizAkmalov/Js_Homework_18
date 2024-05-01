const left1 = document.querySelector(".leftelement1")
const left2 = document.querySelector(".leftelement2")
const left3 = document.querySelector(".leftelement3")
const left4 = document.querySelector(".leftelement4")
const left5 = document.querySelector(".leftelement5")
const left6 = document.querySelector(".leftelement6")
const left7 = document.querySelector(".leftelement7")
const left8 = document.querySelector(".leftelement8")
const left9 = document.querySelector(".leftelement9")
const left10 = document.querySelector(".leftelement10")


const right1Div = document.querySelector(".right1Div")
const right2Div = document.querySelector(".right2Div")
const right3Div = document.querySelector(".right3Div")
const right4Div = document.querySelector(".right4Div")


left1.addEventListener("click", () => {
    let left1btn = document.createElement("button")
    left1btn.innerHTML = "Клонируемый Элемент 1"

    right1Div.append(left1btn)


})
left2.addEventListener("click", () => {
    let left2btn = document.createElement("button")
    left2btn.innerHTML = "Клонируемый Элемент 2"

    right1Div.append(left2btn)

    
})
left3.addEventListener("click", () => {
    let left3btn = document.createElement("button")
    left3btn.innerHTML = "Клонируемый Элемент 3"

    right1Div.append(left3btn)

    
})
left4.addEventListener("click", () => {
    let left4btn = document.createElement("button")
    left4btn.innerHTML = "Клонируемый Элемент 4"

    right2Div.append(left4btn)

    
})
left5.addEventListener("click", () => {
    let left5btn = document.createElement("button")
    left5btn.innerHTML = "Клонируемый Элемент 5"

    right2Div.append(left5btn)

    
})
left6.addEventListener("click", () => {
    let left6btn = document.createElement("button")
    left6btn.innerHTML = "Клонируемый Элемент 6"

    right2Div.append(left6btn)

    
})
left7.addEventListener("click", () => {
    let left7btn = document.createElement("button")
    left7btn.innerHTML = "Клонируемый Элемент 7"

    right3Div.append(left7btn)

    
})
left8.addEventListener("click", () => {
    let left8btn = document.createElement("button")
    left8btn.innerHTML = "Клонируемый Элемент 8"

    right3Div.append(left8btn)

    
})
left9.addEventListener("click", () => {
    let left9btn = document.createElement("button")
    left9btn.innerHTML = "Клонируемый Элемент 9"

    right3Div.append(left9btn)

    
})
left10.addEventListener("click", () => {
    let left10btn = document.createElement("button")
    left10btn.innerHTML = "Клонируемый Элемент 10"

    right4Div.append(left10btn)

    
})
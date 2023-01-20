//Business Logic 
window.onload = initialize

function initialize() {
    let form = document.querySelector("form")
    form.onsubmit = takeForm
}

function takeForm(event) {
    event.preventDefault()
    let orignalNumber = parseInt(document.getElementById("userNumber").value)
    let numberArray = makeNumberArray(orignalNumber)
    displayArray(numberArray)
}

function makeNumberArray(orignalNumber) {
    let array = []
    for(let i = 0; i < orignalNumber i++) {
        array.push(i)
    }
}



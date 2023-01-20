//Utility Logic 
window.onload = initialize

function initialize() {
    let form = document.querySelector("form")
    form.onsubmit = takeForm
}

//Business Logic

function takeForm(event) {
    event.preventDefault()
    let userNumber = (document.getElementById('userNumber').value)
 
    //let newUserNumber = makeNumberArray(userNumber)
    displayArray(userNumberstring)
}

function makeNumberArray(userNumber) {
    const array = [1,2,3];
    const array = userNumber.split("")
    for(let i = 0; i <userNumber.length; i++) {
    if(array.includes(array[i])){
        array[i] = []
    }  
    }
return array
}

//User Interface Locic 

function displayNumberArray(array) {
    let outputSpot = document.getElementById("outputSpot")
    outputSpot.innerText = ""
    outputSpot.append(numberArray)
}

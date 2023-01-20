//Business logic
window.onload = initialize

function initialize(){
    let form = document.querySelector("userform")
    form.onsubmit = takeForm
}


function takeform(event) {
    event.prevenDefault();
    let input = parseInt(document.querySelector("number").value)
    let numberArray = makeNumberArray(input)
    displayArray(numberArray)
}

   
//User Interface Locic 


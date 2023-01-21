//business Logic
function robsTranslator(event) {
    event.preventDefault();
    let input = parseInt(document.querySelector("input#number").value)
    let numbers = []

    for (let i = 0; i <= input; i += 1) {
        let iString = i.toString();
        if (iString.includes(3)){
            numbers.push(" 'Won't you be my neighbor?'");}
        else if (iString.includes(2)) {
        numbers.push(" 'Boop!'");
        } 
        else if (iString.includes(1)) {
        numbers.push(" 'Beep!'");
        } 
        else {
        numbers.push(" " + i);
        }
        document.getElementById("answer").innerText = numbers;
}
  //User Interface Logic
}
window.addEventListener("load", function() {
const form = document.getElementById("question");
form.addEventListener("submit", robsTranslator);
}); 

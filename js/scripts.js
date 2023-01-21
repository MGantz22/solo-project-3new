//business Logic
function robsTranslator(event) {
    event.preventDefault();
    let input = parseInt(document.querySelector("input#number").value)
    let numbers = []

    for (let integer = 0; integer <= input; integer += 1) {
        let integerString = integer.toString();

        if (integerString.includes(3)) {
            numbers.push(" 'Won't you be my neighbor?'");
        }
        else if (integerString.includes(2)) {
            numbers.push(" 'Boop!'");
        } 
        else if (integerString.includes(1)) {
            numbers.push(" 'Beep!'");
        } 
        else {
            numbers.push(" " + integer);
        }
        document.getElementById("answer").innerText = numbers;
}
  //User Interface Logic
}
window.addEventListener("load", function() {
    const form = document.getElementById("question");
    form.addEventListener("submit", robsTranslator);
}); 

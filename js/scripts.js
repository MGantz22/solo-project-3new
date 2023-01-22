//business Logic
function robsReplace (event) {
    event.preventDefault();
    let userinput = parseInt(document.querySelector("input#number").value)
    let numbers = []

    for (let integer = 0; integer <= userinput; integer ++) {
        let integerString = integer.toString();

        if (integerString.includes(3)) {
            numbers.push(" Won't you be my neighbor? ");
        }
        else if (integerString.includes(2)) {
            numbers.push(" Boop! ");
        }
        else if (integerString.includes(1)) {
            numbers.push(" Beep! ");
        }
        else {
        numbers.push(" " + integer);
    }
        document.getElementById("outputspot").innerText = numbers;
    }
}

//User Interface Logic
window.addEventListener("load",function() {
    const form = document.getElementById("form-one");
    form.addEventListener("submit", robsReplace);
});
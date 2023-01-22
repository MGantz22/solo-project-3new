//business Logic
function robsReplace (event) {
    event.preventDefault();
    let userinput = parseInt(document.querySelector("input#number").value)
    document.getElementById("outputspot").innerText = userinput;
}



//User Interface Logic

window.addEventListener("load",function(){
    const form = document.getElementById("form-one");
    form.addEventListener("submit", robsReplace);
});









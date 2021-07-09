let min = 1;
let max = 100;
let randomNumber = Math.round((Math.random() * (max - min)) + min);
let inputField = document.getElementById("input-field");

document.getElementById("button-field").addEventListener("click", test);

function test(){
    if(inputField.value == randomNumber){
        document.getElementById("output").innerHTML = "Correct!";
    } else if(inputField.value < randomNumber){
        document.getElementById("output").innerHTML = "Too small!";
    } else if(inputField.value > randomNumber){
        document.getElementById("output").innerHTML = "Too big!";
    }
}
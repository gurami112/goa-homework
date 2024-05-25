const display = document.getElementById("display")

function appendDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}


function calculate(){
    display.value = eval(display.value)
}
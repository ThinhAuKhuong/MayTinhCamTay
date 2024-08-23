const display = document.getElementById("screen");

function JustDisplay(input){
    display.value += input;
}

function Resetbutton(){
    display.value = "";
}

function Caculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Loi~"
    }
}


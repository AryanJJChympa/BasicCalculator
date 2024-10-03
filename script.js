
const display=document.getElementById("display")

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    //to handle error we use the try block
    try{
        display.value= eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}
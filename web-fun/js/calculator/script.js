var temp = 0;
var op = "";
var reset = false;

var display = document.querySelector("#display")

function press(num){
    if(display.innerText == 0 || reset){
        display.innerText = "";
        reset = false;
    }
    display.innerText += num;
}

function clr(){
    display.innerText = 0;
}

function setOP(operation){
    op = operation;
    temp = display.innerText;
    reset = true;
}

function calculate(){
    console.log(op);
    if(op == '/'){
        result = parseInt(temp) / parseInt(display.innerText);
    }else if(op == '*'){
        result = parseInt(temp) * parseInt(display.innerText);
    }else if(op == '-'){
        result = parseInt(temp) - parseInt(display.innerText);
    }else if(op == '+'){
        result = parseInt(temp) + parseInt(display.innerText);
    }else{
        console.log("broken")
    }
    
    display.innerText = +result.toFixed(6);
    reset = true;
}
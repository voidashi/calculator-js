// calculator 

var num1 = 0;
var num2 = 0;
var op = "";
var result = 0;
var isDecimal = false;
var decimalPlace = 1;

function getNumbers() {
    if (op == "") {
        if (isDecimal) {
            num1 = num1 + parseInt(this.innerHTML) / 10 ** decimalPlace;
            decimalPlace++;
            document.getElementById("display").innerHTML = num1;
            console.log("number 1: ", num1);
        } else {
            num1 = num1 * 10 + parseInt(this.innerHTML);
            document.getElementById("display").innerHTML = num1;
            console.log("number 1: ", num1);
        }
    } else {
        if (isDecimal) {
            num2 = num2 + parseInt(this.innerHTML) / 10 ** decimalPlace;
            decimalPlace++;
            document.getElementById("display").innerHTML = num2;
            console.log("number 2: ", num2);
        } else {
            num2 = num2 * 10 + parseInt(this.innerHTML);
            document.getElementById("display").innerHTML = num2;
            console.log("number 2: ", num2);
        }
    }
}

function getOperator() {
    isDecimal = false;
    decimalPlace = 1;
    //op = this.innerHTML; // using chars
    op = this.id; // using icons 
    console.log("operator: ", op);
}

function getResults() {
    switch (op) {
        //case "+":
        case "add":
            result = num1 + num2;
            break;
        //case "-":
        case "subtract":
            result = num1 - num2;
            break;
        //case "*":
        case "multiply":
            result = num1 * num2;
            break;
        //case "/":
        case "divide":
            result = num1 / num2;
            break;
    }
    num1 = result; // for chaining
    num2 = 0; // for chaining
    
    document.getElementById("display").innerHTML = result;
    console.log("result: ", result);
}
     
function clearDisplay() {
    num1 = 0;
    num2 = 0;
    op = "";
    result = 0;
    isDecimal = false;
    decimalPlace = 1;
    document.getElementById("display").innerHTML = result;
    console.log("cleared");
}

function clearEntry() {
    if (op == "") {
        num1 = 0;
    } else {
        num2 = 0;
    }
    isDecimal = false;
    decimalPlace = 1;
    document.getElementById("display").innerHTML = result;
    console.log("cleared entry");
}

function getDecimal() {
    if(isDecimal == false){
        if (op == "") {
            //num1 = num1 + ".";
            document.getElementById("display").innerHTML = num1 + ".";
            console.log("number 1: ", num1);
        } else {
            //num2 = num2 + ".";
            document.getElementById("display").innerHTML = num2 + ".";
            console.log("number 2: ", num2);
        }
        isDecimal = true;
    }
}


// get the number buttons and add event listeners
var numButtons = document.getElementsByClassName("number");
for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", getNumbers);
}

// get the operator buttons and add event listeners
var opButtons = document.getElementsByClassName("operator");
for (var i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener("click", getOperator);
}

// get the equal button and add event listener
document.getElementById("equals").addEventListener("click", getResults);

// get the clear button and add event listener
document.getElementById("clear").addEventListener("click", clearDisplay);

// get the clear entry button and add event listener
document.getElementById("clear_entry").addEventListener("click", clearEntry);

// get the decimal button and add event listener
document.getElementById("decimal").addEventListener("click", getDecimal);

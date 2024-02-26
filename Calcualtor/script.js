const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelector(".number");
const operands =document.querySelector(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn =document.querySelector(".equal")

var cl = document.getElementById("C");

function colorChange()
{
    cl.style.backgroundColor="red"
}







function appendNumber(number)
{
    if(number ==="." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText+= numbers;
}
function chooseOperation(operand)
{
    if(currDisplay.innerText === " ") return;
    compute(operand);
    operation =operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}
function clearDisplay()
{
    currDisplay.innerText ="";
    prevDisplay.innerText ="";
}
function compute(operand)
{
    let result;
    const previousvalue = parseFloat(prevDisplay.innerText);
    const currentvalue = parseFloat(currDisplay.innerText);
    if(isNaN(previousvalue) || isNaN(currentvalue)) return;

    switch (operation) {
        case "+":
            result = previousvalue + currentvalue;
            break;
        case "-":
            result = previousvalue - currentvalue;
            break;    
        case "*":
            result = previousvalue * currentvalue;
            break; 
        case "/":
            result = previousvalue / currentvalue;
            break; 
        default:
            return;
    }
    currDisplay.innerText=result;
}

numbers.forEach((number) => {
    number.addEventListener("click",()=> {
        appendNumber(number.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click",()=> {
        appendNumber(operand.innerText);
    });
});


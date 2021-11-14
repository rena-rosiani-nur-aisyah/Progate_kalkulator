let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// --- number ---//
const inputNumber = (number) => {
    if(currentNumber === "0"){
            currentNumber = number;
    } else {
            currentNumber += number;
    }
};

const calculatorScreen = document.querySelector(".kalkulator-screen");

const updateScreen = (number) =>{
    calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// --- operator --- //
const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
   if(calculationOperator === ""){
       prevNumber = currentNumber;
   }

   calculationOperator = operator;
   currentNumber = "";
}

// -- fungsi calculate -- //
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", ()=>{
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = "";
    switch (calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
        break;
    }
    currentNumber = result;
    calculationOperator = "";
}

// AC //
const clearAll = ()=>{
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
};
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener('click', ()=>{
    clearAll();
    updateScreen(currentNumber);
});

// desimal //
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes(".")){
        return;
    }
    currentNumber += dot;
};

// persen//
const persen = document.querySelector(".precentage");

persen.addEventListener('click', (event) =>{
    inputPersen(event.target.value);
    updateScreen(currentNumber);
});

inputPersen = (precentage) =>{
    if(currentNumber.includes("%")){
        return;
    }
    currentNumber = currentNumber/100;
}
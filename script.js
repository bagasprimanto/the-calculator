const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const pointButton = document.querySelector("#point");
const delButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function initializeEventListeners() {
    numButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let num = e.target.textContent;
            updateNum(num);
            updateDisplay(e);
        })
    });

    operatorButtons.forEach((button) => button.addEventListener("click", (e) => {
        let opString = e.target.textContent;
        updateOperator(opString);
    }));

    equalsButton.addEventListener("click", (e) => {
        updateResult();
        updateDisplay(e);
    })

    clearButton.addEventListener("click", (e) => {
        clearCalc();
    })
}

function add(a, b) {
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);

    return a + b;
}

function subtract(a, b) {
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);

    return a - b;
}

function multiply(a, b) {
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);

    return a * b;
}

function divide(a, b) {
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);

    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "X":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
    }
}

function updateNum(val) {
    if (!operator) {
        num1 += val;
    } else {
        num2 += val;
    }
}

function updateOperator(opStr) {
    operator = opStr;

    // If the user directly presses another operator
    // reset calculation as if we're beginning a new calculation
    if (result) {
        num1 = result;
        num2 = "";
        result = "";
    }
}

function updateResult() {
    result = operate(operator, num1, num2);
}

function updateDisplay(event) {
    if (!operator) {
        display.textContent = num1;
    } else {
        console.log(event.target);
        let classes = Array.from(event.target.classList);
        console.log(classes);
        if (classes.includes("number")) {
            display.textContent = num2;
        } else {
            display.textContent = result;
        }
    }

    console.log(`Num1: ${num1}`);
    console.log(`Num2: ${num2}`);
    console.log(`Operator: ${operator}`);
    console.log(`Result: ${result}`);
}

function clearCalc() {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";

    display.textContent = "0";
}

initializeEventListeners();
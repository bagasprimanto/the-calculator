const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const pointButton = document.querySelector("#point");
const delButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

let num1 = undefined;
let num2 = undefined;
let operator = "";
let result = undefined;

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
    a = Number.parseInt(a);
    b = Number.parseInt(b);

    return a + b;
}

function subtract(a, b) {
    a = Number.parseInt(a);
    b = Number.parseInt(b);

    return a - b;
}

function multiply(a, b) {
    a = Number.parseInt(a);
    b = Number.parseInt(b);

    return a * b;
}

function divide(a, b) {
    a = Number.parseInt(a);
    b = Number.parseInt(b);

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
        num1 = val;
    } else {
        num2 = val;
    }
}

function updateOperator(opStr) {
    operator = opStr;

    // If the user directly presses another operator
    // reset calculation as if we're beginning a new calculation
    if (result) {
        num1 = result;
        num2 = undefined;
        result = undefined;
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
}

function clearCalc() {
    num1 = undefined;
    num2 = undefined;
    operator = "";
    result = undefined;

    display.textContent = "0";
}

initializeEventListeners();
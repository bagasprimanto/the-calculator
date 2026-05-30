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

function initializeEventListeners() {
    numButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let num = e.target.textContent;
            updateNum(num);
            updateDisplay();
        })
    });
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
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
    }
}

function updateNum(val) {
    num1 = val;
}

function updateDisplay() {
    display.textContent = num1;
}

initializeEventListeners();
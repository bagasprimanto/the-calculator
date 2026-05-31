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
let error = false;

function initializeEventListeners() {
    numButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (!error) {
                let num = e.target.textContent;
                updateNum(num);
                updateDisplay(e);
            }
        })
    });

    operatorButtons.forEach((button) => button.addEventListener("click", (e) => {
        if (!error) {
            let opString = e.target.textContent;
            updateOperator(opString);
            updateDisplay(e);
        }
    }));

    equalsButton.addEventListener("click", (e) => {
        if (!error) {
            updateResult();
            updateDisplay(e);
        }
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

function operate(opr, a, b) {
    if (opr === "/" && b === "0") {
        handleDivideByZero();
        return "Cannot divide by 0";
    }

    switch (opr) {
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

function handleDivideByZero() {
    console.log("Cannot divide by 0.");
    num1 = "";
    num2 = "";
    operator = "";
    error = true;
}

function updateNum(val) {
    // If the user directly presses another number after calculating a result
    // reset calculation as if we're beginning a new calculation)
    if (result) {
        num1 = "";
        num2 = "";
        operator = "";
        result = "";
    }

    if (!operator) {
        num1 += val;
    } else {
        num2 += val;
    }
}

function updateOperator(opStr) {
    // If the user directly passes another operator,
    // reset the calculation
    if (num2) {
        updateResult();
        num1 = result;
        num2 = "";
        result = "";
    }

    operator = opStr;

    // If the user directly presses another operator
    // reset calculation as if we're beginning a new calculation)
    if (result) {
        num1 = result;
        num2 = "";
        result = "";
    }

    /*
        1 + 2 + 2
        3 + 
        num1 = 3
        num2 = ""
        result = ""

        1 + 1 = 2
        2 + 
        num1 = 2
        num2 = ""
        result = ""
    */
}

function updateResult() {
    if (operator, num1, num2) {
        result = operate(operator, num1, num2);
    }
}

function roundNumber(num) {
    return Math.round(num * Math.pow(10, 6)) / Math.pow(10, 6);
}

function updateDisplay(event) {
    if (error) {
        display.textContent = result;
    } else {
        if (!num2) {
            display.textContent = roundNumber(num1);
        } else {
            console.log(event.target);
            let classes = Array.from(event.target.classList);
            console.log(classes);
            if (classes.includes("number")) {
                display.textContent = roundNumber(num2);
            } else {
                display.textContent = roundNumber(result);
            }
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
    error = false;

    display.textContent = "0";
}

initializeEventListeners();
class Calculator {
    constructor(currentOperand, previousOperand, operation) {
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
        this.operation = operation;
        this.clear();
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    addToDisplay() {
        display.textContent = this.currentOperand;
    }

    signChanger() {
        if (this.currentOperand > 0) {
            // Convert negative current operand to negative
            this.currentOperand = this.currentOperand * -1;
        } else {
            // Convert negative current operand to positive
            this.currentOperand = Math.abs(this.currentOperand);
        }
    }

    changeToDecimal() {
        this.currentOperand = this.currentOperand / 100;
        calculator.addToDisplay();
    }

    operator(operatorValue) {
        this.operation = operatorValue;
        this.previousOperand = this.currentOperand;
        this.previousOperand = parseFloat(this.previousOperand);
        this.currentOperand = '';
    }

    compute() {
        let computation;
        let prev = this.previousOperand;
        let current = this.currentOperand;

        current = parseFloat(current);

        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case "/":
                computation = prev / current;
                break;
            case "x":
                computation = prev * current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "+":
                computation = prev - current;
                break;
            default:
                break;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
    }
}

const display = document.querySelector(".display");
const ac = document.querySelector("#allClear");
const signChanger = document.querySelector("#signChanger");
const quotient = document.querySelector("#quotient");
const operators = document.querySelectorAll("#operator");
const numbers = document.querySelectorAll("#number");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#compute");

const calculator = new Calculator();

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.value);
        calculator.addToDisplay();
    })
})

ac.addEventListener("click", () => {
    calculator.clear();
    calculator.addToDisplay();
})

signChanger.addEventListener("click", () => {
    calculator.signChanger();
    calculator.addToDisplay();
})

quotient.addEventListener("click", () => {
    calculator.changeToDecimal();
    calculator.addToDisplay();
})

operators.forEach((operate) => {
    operate.addEventListener("click", () => {
        calculator.operator(operate.value);
        calculator.addToDisplay();
    })
})

equal.addEventListener("click", () => {
    calculator.compute();
    calculator.addToDisplay();
})
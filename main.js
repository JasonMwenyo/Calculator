class Calculator {
    constructor(currentOperand, previousOperand, operation) {
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
        this.operation = operation;
        this.clear();
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes("."))
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
const diving = document.querySelectorAll("#number");

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





// operators.forEach((operate) => {
//     operate.addEventListener("click", () => {
//         calculator.chooseOperator(operate.textContent)
//         // operate.chooseOperator(operate);
//     })
// })






// Add ability to change number to decimal
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
        if (Math.sign(this.currentOperand >= 1)) {
            this.currentOperand = this.currentOperand * -1;
            // display.textContent = this.currentOperand;
            calculator.addToDisplay();
        } else {
            if (Math.sign(this.currentOperand <= -1)) {
                this.currentOperand = Math.abs(this.currentOperand);
                // console.log(this.currentOperand);
                calculator.addToDisplay();
            }
        }
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
        display.textContent = '';

    }
}

let display = document.querySelector(".display");
const ac = document.querySelector("#allClear");
let signChanger = document.querySelector("#signChanger");
let quotient = document.querySelector("#quotient");
const operators = document.querySelectorAll("#operator");
const numbers = document.querySelectorAll("#number");

const calculator = new Calculator();

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.value);
        calculator.addToDisplay();
    })
})

ac.addEventListener("click", () => {
    calculator.clear();
})

signChanger.addEventListener("click", () => {
    calculator.signChanger();
})

// operators.forEach((operate) => {
//     operate.addEventListener("click", () => {
//         calculator.chooseOperator(operate.textContent)
//         // operate.chooseOperator(operate);
//     })
// })
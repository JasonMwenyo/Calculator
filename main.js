class Calculator {
    constructor(currentOperand, previousOperand, operation) {
        this.currentOperand = currentOperand;
        this.previousOperand = previousOperand;
        this.operation = operation;
        this.clear();
    }

    chooseOperator(operation) {
        // if (this.operation === '') {
        //     this.operation = operation;
        //     this.previousOperand = this.currentOperand;
        //     // this.currentOperand = '';
        //     console.log(this.previousOperand)
        //     // console.log(this.operation)
        // } else {
        //     this.currentOperand = '';
        //     display.textContent = '';
        // }
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes("."))
            return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    addToDisplay() {
        display.textContent = this.currentOperand;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
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
        // console.log("Hi");
        calculator.appendNumber(button.value);
        calculator.addToDisplay();
    })
})

// operators.forEach((operate) => {
//     operate.addEventListener("click", () => {
//         calculator.chooseOperator(operate.textContent)
//         // operate.chooseOperator(operate);
//     })
// })
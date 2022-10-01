let display = document.querySelector(".display");
const ac = document.querySelector("#allClear");
let signChanger = document.querySelector("#signChanger");
let quotient = document.querySelector("#quotient");
let addToDisplay = 0;
let numbers = [];
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operator = null;

let division = document.querySelector("#division");
const number0 = document.querySelector("#number0");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");
const number4 = document.querySelector("#number4");
const number5 = document.querySelector("#number5");
const number6 = document.querySelector("#number6");
const number7 = document.querySelector("#number7");
const number8 = document.querySelector("#number8");
const number9 = document.querySelector("#number9");


// clear display and other areas
ac.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    numbers = [];
    console.clear();
});

// On number click, show number and append to display
number0.addEventListener('click', (e) => {
    if (firstNumber.length >= 8) {
        e.preventDefault();
    } else {
        addToDisplay = number0.value;
        display.textContent = display.textContent.concat(addToDisplay);
        firstNumber = display.textContent;
        console.log(firstNumber.length);
        return firstNumber;
    }

});

number1.addEventListener('click', (e) => {
    if (firstNumber.length >= 8) {
        e.preventDefault();
    } else {
        addToDisplay = number1.value;
        display.textContent = display.textContent.concat(addToDisplay);
        firstNumber = display.textContent;
        console.log(firstNumber.length);
        return firstNumber;
    }
});

number2.addEventListener('click', (e) => {
    if (firstNumber.length >= 8) {
        e.preventDefault();
    } else {
        addToDisplay = number2.value;
        display.textContent = display.textContent.concat(addToDisplay);
        firstNumber = display.textContent;
        console.log(firstNumber.length);
        return firstNumber;
    }
});

number3.addEventListener('click', (e) => {
    if (firstNumber.length >= 8) {
        e.preventDefault();
    } else {
        addToDisplay = number3.value;
        display.textContent = display.textContent.concat(addToDisplay);
        firstNumber = display.textContent;
        console.log(firstNumber.length);
        return firstNumber;
    };

    number4.addEventListener('click', (e) => {
        if (firstNumber.length >= 8) {
            e.preventDefault();
        } else {
            addToDisplay = number4.value;
            display.textContent = display.textContent.concat(addToDisplay);
            firstNumber = display.textContent;
            console.log(firstNumber.length);
            return firstNumber;
        }
    });

    number5.addEventListener('click', (e) => {
        if (firstNumber.length >= 8) {
            e.preventDefault();
        } else {
            addToDisplay = number5.value;
            display.textContent = display.textContent.concat(addToDisplay);
            firstNumber = display.textContent;
            console.log(firstNumber.length);
            return firstNumber;
        }
    });

    number6.addEventListener('click', (e) => {
        if (firstNumber.length >= 8) {
            e.preventDefault();
        } else {
            addToDisplay = number6.value;
            display.textContent = display.textContent.concat(addToDisplay);
            firstNumber = display.textContent;
            console.log(firstNumber.length);
            return firstNumber;
        }

    });

    number7.addEventListener('click', (e) => {
        if (firstNumber.length >= 8) {
            e.preventDefault();
        } else {
            addToDisplay = number7.value;
            display.textContent = display.textContent.concat(addToDisplay);
            firstNumber = display.textContent;
            console.log(firstNumber.length);
            return firstNumber;
        }
    });

    number8.addEventListener('click', (e) => {
        if (firstNumber.length >= 8) {
            e.preventDefault();
        } else {
            addToDisplay = number8.value;
            display.textContent = display.textContent.concat(addToDisplay);
            firstNumber = display.textContent;
            console.log(firstNumber.length);
            return firstNumber;
        }
    });

    number9.addEventListener('click', (e) => {
        if (firstNumber.length >= 8) {
            e.preventDefault();
        } else {
            addToDisplay = number9.value;
            display.textContent = display.textContent.concat(addToDisplay);
            firstNumber = display.textContent;
            console.log(firstNumber.length);
            return firstNumber;
        }
    });


    // On -/+ click, add or remove sign infront
    signChanger.addEventListener('click', () => {
        firstNumber = parseInt(firstNumber);

        if (firstNumber > 0) {
            firstNumber = firstNumber * -1;
            display.textContent = firstNumber;
            return display.textContent;

        } else {

            if (firstNumber < 0) {
                firstNumber = Math.abs(firstNumber);
                display.textContent = firstNumber;
                return display.textContent;
            }
        }
    });

    // Convert display to percentage
    quotient.addEventListener("click", () => {
        display.textContent = display.textContent / 100;
    });

    // Division
    division.addEventListener("click", () => {
        // numbers.push(firstNumber);
        // numbers.push("/");
        // firstNumber = 0;
        // console.log(numbers);

        display.textContent = firstNumber.concat("/");
        // numbers.push(firstNumber);
        // console.log(numbers);
        // return firstNumber;
    });




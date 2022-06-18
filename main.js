let display = document.querySelector(".display");
const ac = document.querySelector("#allClear");
const signChanger = document.querySelector("#signChanger");
let addToDisplay = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";


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
    display.textContent = "";
    firstNumber = '';
    secondNumber = '';
});

// On number click, show number and append to display
number1.addEventListener('click', () => {
    addToDisplay = number1.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number2.addEventListener('click', () => {
    addToDisplay = number2.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number3.addEventListener('click', () => {
    addToDisplay = number3.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number4.addEventListener('click', () => {
    addToDisplay = number4.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number5.addEventListener('click', () => {
    addToDisplay = number5.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number6.addEventListener('click', () => {
    addToDisplay = number6.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number7.addEventListener('click', () => {
    addToDisplay = number7.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number8.addEventListener('click', () => {
    addToDisplay = number8.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});

number9.addEventListener('click', () => {
    addToDisplay = number9.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
    console.log(firstNumber);
});





let display = document.querySelector(".display");
const ac = document.querySelector("#allClear");
let signChanger = document.querySelector("#signChanger");
let addToDisplay = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
signChanger = '-';


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
});

// On number click, show number and append to display
number0.addEventListener('click', () => {
    addToDisplay = number0.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});



number1.addEventListener('click', () => {
    addToDisplay = number1.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number2.addEventListener('click', () => {
    addToDisplay = number2.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number3.addEventListener('click', () => {
    addToDisplay = number3.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number4.addEventListener('click', () => {
    addToDisplay = number4.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number5.addEventListener('click', () => {
    addToDisplay = number5.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number6.addEventListener('click', () => {
    addToDisplay = number6.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number7.addEventListener('click', () => {
    addToDisplay = number7.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number8.addEventListener('click', () => {
    addToDisplay = number8.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});

number9.addEventListener('click', () => {
    addToDisplay = number9.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});


number9.addEventListener('click', () => {
    addToDisplay = number9.value;
    display.textContent = display.textContent.concat(addToDisplay);
    firstNumber = display.textContent;
});


// On -/+ click, add or remove sign infront
signChanger.addEventListener('click', (firstNumber) => {
    firstNumber = parseInt(firstNumber);
    console.log(firstNumber);

    // firstNumber = -Math.abs(firstNumber);
    // console.log(firstNumber);
});

// function pos_to_neg(num) {
//     return -Math.abs(num);
// }

// console.log(pos_to_neg(15));
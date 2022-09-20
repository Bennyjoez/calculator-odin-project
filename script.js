// Button 
const allClear = document.getElementById('clear');
const deleteBtn = document.querySelector('#delete');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const numberButtons = document.querySelectorAll('.numbers');
const equalsBtn = document.querySelector('#equals')
// displays
const previousDisplay = document.querySelector('#previous');
const currentDisplay = document.querySelector('#current');
let currentDisplayValues = [];

// event listeners
allClear.addEventListener('click', clearOutput);
deleteBtn.addEventListener('click', deleteEntry);
addBtn.addEventListener('click', setOperator);
subtractBtn.addEventListener('click', setOperator);
divideBtn.addEventListener('click', setOperator);
multiplyBtn.addEventListener('click', setOperator);
equalsBtn.addEventListener('click', output);
numberButtons.forEach(button => button.addEventListener('click', updateDisplay));

let operator;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
} 
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if(b != '' && a != '' || b === 0) {
        console.log(typeof a, typeof b); // check here
        if(operator === 'add') {
            return add(a, b);
        } else if (operator === 'subtract') {
            return subtract(a, b);
        } else if (operator === 'multiply') {
            return multiply(a, b);
        } else if (operator === 'divide') {
            return divide(a, b);
        }
    } else {
        alert(`Please enter a value to ${operator}`)
    }
}; 

function setOperator(e) {
    if(this.textContent === '-') {
        operator = 'subtract';
        updateDisplay(e);
    } else if(this.textContent === '+') {
        operator = 'add';
        updateDisplay(e);
    } else if (this.textContent === 'x') {
        operator = 'multiply';
        updateDisplay(e);
    } else if(this.textContent === '÷'){
        operator = 'divide';
        updateDisplay(e);
    } else {
        console.log('Error');
    }
}
function updateDisplay(e) {
    if(e.target.className === 'numbers button') {
        if(currentDisplay.value === '') {
            currentDisplay.value = e.target.textContent;
        } else {
            currentDisplay.value += e.target.textContent;
        }
    } else {
        if(currentDisplay.value != '') {
            previousDisplay.value = currentDisplay.value 
            currentDisplay.value = ''
        }
    }
}

// equals
function output() {
    let a = parseFloat(previousDisplay.value);
    let b = parseFloat(currentDisplay.value);
    let operationResult = operate(operator, a, b);
    currentDisplay.value = operationResult;
}
// all clear
function clearOutput() {
    previousDisplay.value = ''
    currentDisplay.value = ''
}
// delete
function deleteEntry() {
    let currentDisplayArr = currentDisplay.value.split('')
    currentDisplay.value = currentDisplayArr.slice(0, -1).join('');
}




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
    if(b != '') {
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
        if(currentDisplay.textContent === '0' || currentDisplay.textContent === '00' || currentDisplay.textContent === '') {
            currentDisplay.textContent = e.target.textContent;
        } else {
            currentDisplay.textContent += e.target.textContent;
        }
    } else {
        previousDisplay.textContent = currentDisplay.textContent 
        currentDisplay.textContent = ''

    }
}

// equals
function output() {
    let a = Number(previousDisplay.textContent);
    let b = Number(currentDisplay.textContent);
    let operationResult = operate(operator, a, b);
    currentDisplay.textContent = operationResult;
}
// all clear
function clearOutput() {
    previousDisplay.textContent = ''
    currentDisplay.textContent = ''
}
// delete
function deleteEntry() {
    let currentDisplayArr = currentDisplay.textContent.split('')
    currentDisplay.textContent = currentDisplayArr.slice(0, -1).join('');
}




function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mutiply(a, b) {
    return a * b;
} 

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if(operator === 'add') {
        return add(a, b);
    } else if (operator === 'subtract') {
        return subtract(a, b);
    } else if (operator === 'multiply') {
        return mutiply(a, b);
    } else if (operator === 'divide') {
        return divide(a, b);
    }
}; 

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
equalsBtn.addEventListener('click', output)

let operator;
let a = Number(previousDisplay.value);
let b = Number(currentDisplay.value);

function output() {
    let operationResult = operate(operator, a, b);
    console.log(operationResult);
    currentDisplay.value = operationResult;
}
function setOperator() {
    if(this.textContent === '-') {
        operator = 'subtract';
        updateDisplay();
    } else if(this.textContent === '+') {
        operator = 'add';
        updateDisplay();
    } else if (this.textContent === 'x') {
        operator = 'multiply';
        updateDisplay();
    } else if(this.textContent === '÷'){
        operator = 'divide';
        updateDisplay();
    } else {
        console.log('Error');
    }
}
function updateDisplay() {
    if(currentDisplay.value != '') {
        previousDisplay.value = currentDisplay.value
        currentDisplay.value = ''
        console.log(previousDisplay.value);
    }
}

function clearOutput() {
    previousDisplay.value = ''
    currentDisplay.value = ''
    console.log(previousDisplay, currentDisplay);
}

function deleteEntry() {
    let currentDisplayArr = currentDisplay.value.split('')
    currentDisplay.value = currentDisplayArr.slice(0, -1).join('');
}

numberButtons.forEach(button => button.addEventListener('click', updateCurrentDisplay));

function updateCurrentDisplay(e) {
    if(currentDisplay.value === '0' || currentDisplay.value === '00') {
        currentDisplay.value = e.target.textContent;
    } else {
        currentDisplay.value += e.target.textContent;
    }
}



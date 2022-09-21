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
        let sign = e.target.textContent

        if(currentDisplay.value != '' && previousDisplay.value === '') {
            previousDisplay.value = `${currentDisplay.value} ${sign} ` 
            currentDisplay.value = ''
        } else if(previousDisplay.value != '' && currentDisplay.value != '' && e.target.className === 'button operator') {
            console.log(e.target.className);
            let a = parseFloat(previousDisplay.value.split(' ')[0]);
            let b = parseFloat(currentDisplay.value);
            let previousOperator = previousDisplay.value.split(' ')[1];
            
            if(previousOperator === '+') {
                operator = 'add';
                previousDisplay.value = `${operate(operator, a, b)} ${sign} `
                currentDisplay.value = ''
                a = ''
                b = ''
            } else if(previousOperator === '-') {
                operator = 'subtract'
                previousDisplay.value = `${operate(operator, a, b)} ${sign} `
                currentDisplay.value = ''
                a = ''
                b = ''
            } else if(previousOperator === 'x') {
                operator = 'multiply'
                previousDisplay.value = `${operate(operator, a, b)} ${sign} `
                currentDisplay.value = ''
                a = ''
                b = ''
            } else {
                operator = 'divide'
                previousDisplay.value = `${operate(operator, a, b)} ${sign} `
                currentDisplay.value = ''
                a = ''
                b = ''
            }
            
        }
    }
}

// equals
function output() {
    // change the previous display
    if(operator === 'add') {
        previousDisplay.value += currentDisplay.value;
    } else if (operator === 'subtract') {
        previousDisplay.value += currentDisplay.value;
    } else if (operator === 'multiply') {
        previousDisplay.value += currentDisplay.value;
    } else {
        previousDisplay.value += currentDisplay.value;
    }

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

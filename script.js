// Button 
const allClear = document.getElementById('clear');
const deleteBtn = document.querySelector('#delete');
const equalsBtn = document.querySelector('#equals')
const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operator');
// displays
const previousDisplay = document.querySelector('#previous');
const currentDisplay = document.querySelector('#current');
let currentDisplayValues = [];

// event listeners
allClear.addEventListener('click', clearOutput);
deleteBtn.addEventListener('click', deleteEntry);
equalsBtn.addEventListener('click', output);
operationButtons.forEach(button => button.addEventListener('click', updateDisplay));
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
            if(b === 0) {
                alert('Cannot divide a number by zero!!')
            } else {
                return divide(a, b);
            }
        }
    } else {
        alert(`Please enter a value to ${operator}`)
    }
}; 

function updateDisplay(e) {
    // set a and b
    let a = parseFloat(previousDisplay.value.split(' ')[0]);
    let b = parseFloat(currentDisplay.value);
    let previousDisplayEntriesArr = previousDisplay.value.split(' ').filter(each => /\S/.test(each));
    let sign = e.target.textContent

    if(e.target.className === 'numbers button') {
        currentDisplay.value += e.target.textContent;
    } else {
        if(currentDisplay.value != '' && previousDisplay.value === '') {
            previousDisplay.value = `${currentDisplay.value} ${sign} ` 
            currentDisplay.value = ''
        } else if(previousDisplayEntriesArr.length === 3 && e.target.className === 'button operator') {
            previousDisplay.value = `${currentDisplay.value} ${sign} `
            currentDisplay.value = ''
        } else if(previousDisplay.value != '' && currentDisplay.value != '' && e.target.className === 'button operator') {
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
};

// equals
function output() {
    // change the previous display

    let previousDisplayOperator = previousDisplay.value.split(' ')[1];
    if(previousDisplayOperator === '+') {
        operator = 'add';
        previousDisplay.value += currentDisplay.value;
    } else if (previousDisplayOperator === '-') {
        operator = 'subtract';
        previousDisplay.value += currentDisplay.value;
    } else if (previousDisplayOperator === 'x') {
        operator = 'multiply';
        previousDisplay.value += currentDisplay.value;
    } else {
        operator = 'divide'
        previousDisplay.value += currentDisplay.value;
    }

    let a = parseFloat(previousDisplay.value);
    let b = parseFloat(currentDisplay.value);
    let operationResult = operate(operator, a, b);
    currentDisplay.value = operationResult;

    operationButtons.forEach(button => button.addEventListener('click', updateDisplay))
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

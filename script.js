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


function setOperator() {
    let operator;
    let a = Number(previousDisplay.value);
    let b = Number(currentDisplay.value);
    if(this.textContent === '-') {
        operator = 'subtract';
        operate(operator, a, b);
    } else if(this.textContent === '+') {
        operator = 'add';
        operate(operator, a, b);
    } else if (this.textContent === 'x') {
        operator = 'multiply';
        operate(operator, a, b);
    } else if(this.textContent === '÷'){
        operator = 'divide';
        operate(operator, a, b);
    } else {
        console.log('Error');
    }
}
function clearOutput() {
    previousDisplay.value = '0'
    currentDisplay.value = '0'
}

function deleteEntry() {
    let currentDisplayArr = currentDisplay.value.split('')
    currentDisplay.value = currentDisplayArr.slice(0, -1).join('');
    if(currentDisplay.value === '') {
        currentDisplay.value = '0'
    }
}

numberButtons.forEach(button => button.addEventListener('click', postInput));

function postInput(e) {
    if(currentDisplay.value === '0' || currentDisplay.value === '00') {
        currentDisplay.value = e.target.textContent;
    } else {
        currentDisplay.value += e.target.textContent;
    }
}



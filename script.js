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
        add(a, b);
    } else if (operator === 'subtract') {
        subtract(a, b);
    } else if (operator === 'multiply') {
        mutiply(a, b);
    } else if (operator === 'divide') {
        divide(a, b);
    }
}; 

// All clear button 
let allClear = document.getElementById('clear')
const previousDisplay = document.querySelector('#previous')
const currentDisplay = document.querySelector('#current')
const numberButtons = document.querySelectorAll('.numbers')
allClear.addEventListener('click', clearOutput)

function clearOutput() {
    previousDisplay.value = '0'
    currentDisplay.value = '0'
}

numberButtons.forEach(button => button.addEventListener('click', postInput));

function postInput(e) {
    if(currentDisplay.value === '0') {
        currentDisplay.value = e.target.textContent;
    } else {
        currentDisplay.value += e.target.textContent;
    }
}
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
console.log(currentDisplay, previousDisplay);
allClear.addEventListener('click', clearOutput)

function clearOutput() {
    previousDisplay.value = '0'
    currentDisplay.value = '0'
}
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
        add(a, b)
    } else if (operator === 'subtract') {
        subtract(a, b)
    } else if (operator === 'multiply') {
        mutiply(a, b) 
    } else if (operator === 'divide') {
        divide(a, b)
    }
};
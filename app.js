function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        return 'Division with 0 not possible'
    } else {
        return a / b
    }
}

function operate(operator, operandOne, operandTwo) {
    switch (operator) {
        case '+':
            return add(operandOne, operandTwo)
        case '-':
            return subtract(operandOne, operandTwo)
        case '*':
            return multiply(operandOne, operandTwo)
        case '/':
            return divide(operandOne, operandTwo)
    }
}
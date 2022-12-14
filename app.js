const display = document.getElementById('display')
const btnNumber = document.querySelectorAll('.number')
const btnOperator = document.querySelectorAll('.operator')
const btnEquals = document.getElementById('equals')

let numberStorage = ''
let operatorSymbol = ''
let operandOne = 0
let operandTwo = 0
let result = 0

btnNumber.forEach((button) => {
    button.addEventListener('click', () => {
        numberStorage += button.innerText
        displayOutput(numberStorage)
    })
})

btnOperator.forEach((operator) => {
    operator.addEventListener('click', () => {
        operatorSymbol = operator.innerText
        operandOne = parseInt(numberStorage)
        numberStorage = ''
    })
})

btnEquals.addEventListener('click', () => {
    operandTwo = parseInt(numberStorage);
    result = operate(operatorSymbol, operandOne, operandTwo)
    displayOutput(result)
})

function displayOutput(string) {
    display.innerText = string
}

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
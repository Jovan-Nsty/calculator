const display = document.getElementById('display')
const btnNumber = document.querySelectorAll('.number')
const btnOperator = document.querySelectorAll('.operator')
const btnEquals = document.getElementById('equals')
const btnClear = document.getElementById('clear')

let numberStorage = ''
let operatorSymbol = ''
let operatorCount = 0
let operandOne = 0
let operandTwo = 0
let result = 0

// track pressed numbers
btnNumber.forEach((button) => {
    button.addEventListener('click', () => {
        numberStorage += button.innerText
        displayOutput(numberStorage)
    })
})

// define operator and set first operand
btnOperator.forEach((operator) => {
    operator.addEventListener('click', () => {
        operatorCount++
        if (operatorCount > 1) {
            pairEvaluation(operator)
        } else {
            setOperator(operator.innerText)
            setOperandOne(numberStorage)
            numberStorage = ''
        }
    })
})

// define second operand and do the calculation
btnEquals.addEventListener('click', () => {
    setOperandTwo(numberStorage)
    result = operate(operatorSymbol, operandOne, operandTwo)
    checkUndefined(result)
})

function checkUndefined(value) {
    if (value === undefined) {
        return 0
    } else {
        displayOutput(value)
    }
}

// clear display
btnClear.addEventListener('click', () => {
    clear()
})

// string together several operations
function pairEvaluation(operation) {
    let temp = parseInt(numberStorage)
    let result = operate(operatorSymbol, operandOne, temp)
    setOperator(operation.innerText)
    setOperandOne(result)
    displayOutput(result)
    numberStorage = ''
}

function clear() {
    setOperandOne(0)
    setOperandTwo(0)
    setOperator('')
    displayOutput(0)
    operatorCount = 0
    numberStorage = ''
}

// set values
function setOperandOne(value) {
    operandOne = parseInt(value)
}

function setOperandTwo(value) {
    operandTwo = parseInt(value)
}

function setOperator(value) {
    operatorSymbol = value
}

// display content
function displayOutput(string) {
    display.innerText = string
}

// basic math functions
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

// main operate function
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